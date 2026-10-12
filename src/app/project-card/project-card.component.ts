import { Component, input } from '@angular/core';

import { Project } from '../models/portfolio.model';

@Component({
  selector: 'a[appProjectCard]',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  host: {
    '[class.negative]': 'negative()',
    '[href]': 'project().url',
    '[attr.tabindex]': 'tabbable() ? null : -1',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly negative = input(true);
  readonly tabbable = input(true);
}
