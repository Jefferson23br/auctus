import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();

  protected readonly serviceLinks = [
    { label: 'SaaS sob medida', path: '/servicos/saas-sob-medida' },
    { label: 'Aplicativos mobile', path: '/servicos/aplicativos-mobile' },
    { label: 'APIs e automação', path: '/servicos/apis-automacao-crm' },
    { label: 'Landing pages', path: '/servicos/landing-pages' },
    { label: 'Sites institucionais', path: '/servicos/sites-institucionais' },
    { label: 'Google Ads', path: '/servicos/google-ads-trafego-pago' },
  ];
}
