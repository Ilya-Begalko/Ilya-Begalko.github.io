import { Component, ElementRef, computed, signal, viewChild, viewChildren } from '@angular/core';
import { afterNextRender, DestroyRef, inject } from '@angular/core';

import { projects } from './data/portfolio.data';
import { NegativeMode } from './negative-mode.service';
import { ProjectCard } from './project-card/project-card.component';
import { SiteFooter } from './site-footer/site-footer.component';
import { SiteIntro } from './site-intro/site-intro.component';

@Component({
  selector: 'app-root',
  imports: [SiteIntro, ProjectCard, SiteFooter],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  private readonly negativeMode = inject(NegativeMode);
  private readonly destroyRef = inject(DestroyRef);
  private readonly viewport = viewChild<ElementRef<HTMLElement>>('viewport');
  private readonly loops = viewChildren<ElementRef<HTMLElement>>('loop');

  protected readonly profileName = 'ИЛЬЯ БЕГАЛКО';
  protected readonly projects = projects;
  protected readonly copies = [0, 1, 2];
  protected readonly negative = this.negativeMode.enabled;
  protected readonly dragging = signal(false);

  private readonly loopHeight = signal(0);
  private readonly offset = signal(0);
  private velocity = 0;
  private frame = 0;
  private pointer: { id: number; lastY: number; moved: number; queued: number } | null = null;
  private suppressClick = false;
  private reducedMotion = false;

  protected readonly trackTransform = computed(
    () => `translate3d(0, ${-this.offset()}px, 0)`,
  );

  constructor() {
    afterNextRender(() => this.mountScroll());
  }

  protected onPointerDown(event: PointerEvent): void {
    if (event.pointerType === 'mouse' || event.button !== 0) return;

    cancelAnimationFrame(this.frame);
    this.velocity = 0;
    this.pointer = { id: event.pointerId, lastY: event.clientY, moved: 0, queued: 0 };
    window.addEventListener('pointermove', this.onPointerMove);
    window.addEventListener('pointerup', this.onPointerUp);
    window.addEventListener('pointercancel', this.onPointerUp);
  }

  private mountScroll(): void {
    const viewport = this.viewport()?.nativeElement;
    const loop = this.loops()[0]?.nativeElement;
    if (!viewport || !loop) return;

    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const measure = (): void => {
      const next = loop.offsetHeight;
      const previous = this.loopHeight();
      if (next <= 0) return;

      if (previous <= 0) {
        this.loopHeight.set(next);
        this.offset.set(next);
        return;
      }

      if (next === previous) return;

      const progress = (this.offset() - previous) / previous;
      this.loopHeight.set(next);
      this.offset.set(next + progress * next);
    };

    const observer = new ResizeObserver(() => measure());
    observer.observe(loop);
    measure();

    viewport.addEventListener('wheel', this.onWheel, { passive: false });
    viewport.addEventListener('touchmove', this.onTouchMove, { passive: false });
    viewport.addEventListener('click', this.onClickCapture, true);
    viewport.addEventListener('focusin', this.onFocusIn);
    window.addEventListener('keydown', this.onKeyDown);

    this.destroyRef.onDestroy(() => {
      cancelAnimationFrame(this.frame);
      observer.disconnect();
      viewport.removeEventListener('wheel', this.onWheel);
      viewport.removeEventListener('touchmove', this.onTouchMove);
      viewport.removeEventListener('click', this.onClickCapture, true);
      viewport.removeEventListener('focusin', this.onFocusIn);
      window.removeEventListener('keydown', this.onKeyDown);
      this.detachPointerListeners();
    });
  }

  private readonly onPointerMove = (event: PointerEvent): void => {
    const pointer = this.pointer;
    if (!pointer || event.pointerId !== pointer.id) return;

    const delta = pointer.lastY - event.clientY;
    pointer.lastY = event.clientY;
    pointer.moved += Math.abs(delta);
    pointer.queued += delta;

    if (pointer.moved < 6) return;

    if (!this.dragging()) this.dragging.set(true);
    this.shift(pointer.queued);
    pointer.queued = 0;
    this.velocity = delta;
  };

  private readonly onPointerUp = (event: PointerEvent): void => {
    const pointer = this.pointer;
    if (!pointer || event.pointerId !== pointer.id) return;

    const dragged = this.dragging();
    this.pointer = null;
    this.dragging.set(false);
    this.detachPointerListeners();

    if (!dragged) return;

    this.suppressClick = true;
    if (!this.reducedMotion && event.pointerType !== 'mouse') this.kickInertia();
  };

  private readonly onWheel = (event: WheelEvent): void => {
    if (event.ctrlKey) return;

    event.preventDefault();
    cancelAnimationFrame(this.frame);
    this.velocity = 0;

    let delta = event.deltaY;
    if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) delta *= 16;
    if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
      delta *= this.viewport()?.nativeElement.clientHeight ?? window.innerHeight;
    }

    this.shift(delta);
  };

  private readonly onTouchMove = (event: TouchEvent): void => {
    event.preventDefault();
  };

  private readonly onClickCapture = (event: MouseEvent): void => {
    if (!this.suppressClick) return;

    this.suppressClick = false;
    event.preventDefault();
    event.stopPropagation();
  };

  private readonly onKeyDown = (event: KeyboardEvent): void => {
    const target = event.target;
    if (target instanceof Element && target.closest('a, button, input, textarea, select')) return;

    const page = this.viewport()?.nativeElement.clientHeight ?? window.innerHeight;
    let delta = 0;

    switch (event.key) {
      case 'ArrowDown':
        delta = 72;
        break;
      case 'ArrowUp':
        delta = -72;
        break;
      case 'PageDown':
        delta = page * 0.85;
        break;
      case 'PageUp':
        delta = page * -0.85;
        break;
      case ' ':
        delta = (event.shiftKey ? -1 : 1) * page * 0.85;
        break;
      default:
        return;
    }

    event.preventDefault();
    cancelAnimationFrame(this.frame);
    this.shift(delta);
  };

  private readonly onFocusIn = (event: FocusEvent): void => {
    const target = event.target;
    const viewport = this.viewport()?.nativeElement;
    if (!(target instanceof HTMLElement) || !viewport || !target.closest('.loop')) return;

    if (!target.matches(':focus-visible')) return;

    const top = target.getBoundingClientRect().top;
    const viewTop = viewport.getBoundingClientRect().top;
    const viewBottom = viewport.getBoundingClientRect().bottom;
    const bottom = target.getBoundingClientRect().bottom;
    if (top >= viewTop && bottom <= viewBottom) return;

    this.shift(top - viewTop - 24);
  };

  private shift(delta: number): void {
    const height = this.loopHeight();
    if (height <= 0 || delta === 0) return;

    const next = this.offset() + delta;
    const wrapped = ((((next - height) % height) + height) % height) + height;
    this.offset.set(wrapped);
  }

  private kickInertia(): void {
    const step = (): void => {
      if (Math.abs(this.velocity) < 0.15) {
        this.velocity = 0;
        return;
      }

      this.shift(this.velocity);
      this.velocity *= 0.92;
      this.frame = requestAnimationFrame(step);
    };

    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(step);
  }

  private detachPointerListeners(): void {
    window.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('pointerup', this.onPointerUp);
    window.removeEventListener('pointercancel', this.onPointerUp);
  }
}
