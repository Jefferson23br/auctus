import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SeoMeta } from '../../core/models/seo-meta.model';
import { PageShellComponent } from '../shared/page-shell/page-shell.component';

interface SimplePageConfig {
  title: string;
  intro: string;
  bullets?: string[];
  seo: SeoMeta;
}

@Component({
  selector: 'app-simple-page',
  imports: [PageShellComponent],
  template: `
    @if (config) {
      <app-page-shell
        [seoMeta]="config.seo"
        [title]="config.title"
        [intro]="config.intro"
        [bullets]="config.bullets ?? []"
      />
    }
  `,
})
export class SimplePageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  protected config?: SimplePageConfig;

  ngOnInit(): void {
    this.config = this.route.snapshot.data['page'] as SimplePageConfig | undefined;
  }
}
