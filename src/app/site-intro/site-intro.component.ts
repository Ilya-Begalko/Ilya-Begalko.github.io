import { Component } from '@angular/core';

import { experience, profile, stack } from '../data/portfolio.data';

@Component({
  selector: 'app-site-intro',
  templateUrl: './site-intro.component.html',
  styleUrl: './site-intro.component.scss',
})
export class SiteIntro {
  protected readonly profile = profile;
  protected readonly experience = experience;
  protected readonly stack = stack;
}
