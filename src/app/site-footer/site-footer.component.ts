import { Component, inject } from '@angular/core';
import { Toolbar, ToolbarWidget } from '@angular/aria/toolbar';

import { socials } from '../data/portfolio.data';
import { NegativeMode } from '../negative-mode.service';

@Component({
  selector: 'app-site-footer',
  imports: [Toolbar, ToolbarWidget],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
})
export class SiteFooter {
  private readonly negativeMode = inject(NegativeMode);

  protected readonly enabled = this.negativeMode.enabled;
  protected readonly label = this.negativeMode.label;
  protected readonly socials = socials;

  protected toggle(): void {
    this.negativeMode.toggle();
  }
}
