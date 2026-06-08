import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoMeta } from '../../../core/models/seo-meta.model';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-page-shell',
  imports: [RouterLink],
  templateUrl: './page-shell.component.html',
  styleUrl: './page-shell.component.scss',
})
export class PageShellComponent implements OnInit {
  private readonly seo = inject(SeoService);

  @Input({ required: true }) seoMeta!: SeoMeta;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) intro!: string;
  @Input() bullets: string[] = [];

  ngOnInit(): void {
    this.seo.update(this.seoMeta);
  }
}
