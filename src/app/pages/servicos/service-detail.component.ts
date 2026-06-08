import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { PageShellComponent } from '../shared/page-shell/page-shell.component';
import { SERVICE_PAGES, ServicePageData } from './services.data';

@Component({
  selector: 'app-service-detail',
  imports: [PageShellComponent, RouterLink],
  template: `
    @if (page) {
      <app-page-shell
        [seoMeta]="page.seo"
        [title]="page.title"
        [intro]="page.intro"
        [bullets]="page.bullets"
      />
    } @else {
      <section class="section">
        <div class="container">
          <h1>Serviço não encontrado</h1>
          <a routerLink="/servicos" class="btn btn-primary">Voltar aos serviços</a>
        </div>
      </section>
    }
  `,
})
export class ServiceDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  protected page?: ServicePageData;

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.page = SERVICE_PAGES.find((item) => item.slug === slug);
  }
}
