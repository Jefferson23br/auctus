import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-servicos-hub',
  imports: [RouterLink],
  templateUrl: './servicos-hub.component.html',
  styleUrl: './servicos-hub.component.scss',
})
export class ServicosHubComponent implements OnInit {
  private readonly seo = inject(SeoService);

  protected readonly services = [
    {
      title: 'SaaS sob medida',
      path: '/servicos/saas-sob-medida',
      keywords: 'desenvolvimento de saas sob medida',
    },
    {
      title: 'Aplicativos mobile',
      path: '/servicos/aplicativos-mobile',
      keywords: 'desenvolvimento de aplicativos mobile corporativos',
    },
    {
      title: 'APIs, automação e CRM',
      path: '/servicos/apis-automacao-crm',
      keywords: 'criação de crm personalizado com automação',
    },
    {
      title: 'Landing pages',
      path: '/servicos/landing-pages',
      keywords: 'criação de landing pages de alta conversão',
    },
    {
      title: 'Sites institucionais',
      path: '/servicos/sites-institucionais',
      keywords: 'desenvolvimento de site institucional responsivo',
    },
    {
      title: 'Manutenção de sites',
      path: '/servicos/manutencao-de-sites',
      keywords: 'serviço de atualização e manutenção de sites',
    },
    {
      title: 'Google Ads e tráfego pago',
      path: '/servicos/google-ads-trafego-pago',
      keywords: 'gestão de tráfego pago b2b',
    },
  ];

  ngOnInit(): void {
    this.seo.update({
      title: 'Serviços de tecnologia e marketing digital',
      description:
        'SaaS, aplicativos, APIs, landing pages, sites institucionais, manutenção e Google Ads. Soluções completas da Auctus Consultoria em Ribeirão Preto.',
      canonicalPath: '/servicos',
    });
  }
}
