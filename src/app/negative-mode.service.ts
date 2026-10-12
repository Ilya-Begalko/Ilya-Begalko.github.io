import { Injectable, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NegativeMode {
  readonly enabled = signal(true);

  readonly label = computed(() =>
    this.enabled() ? 'Negative images on' : 'Negative images off',
  );

  toggle(): void {
    this.enabled.update((enabled) => !enabled);
  }
}
