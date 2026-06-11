import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../../core/services/seo.service';
import { HeroTechBackgroundComponent } from './hero-tech-background.component';

type ServiceIcon = 'saas' | 'mobile' | 'api' | 'web' | 'ads';

interface ServicePillar {
  number: string;
  title: string;
  description: string;
  path: string;
  icon: ServiceIcon;
  tags: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, HeroTechBackgroundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly seo = inject(SeoService);

  protected readonly techTags = ['SaaS', 'Apps mobile', 'APIs & CRM', 'Automações', 'Google Ads'];

  protected readonly partnershipTags = [
    'Metodologia Ágil',
    'UX/UI Design',
    'Squads Dedicados',
    'Suporte Contínuo',
  ];

  protected readonly specialties = [
    { label: 'SaaS e sistemas web sob medida', path: '/servicos/saas-sob-medida' },
    { label: 'Aplicativos iOS e Android', path: '/servicos/aplicativos-mobile' },
    { label: 'APIs, CRM e automações', path: '/servicos/apis-automacao-crm' },
    { label: 'Landing pages e sites institucionais', path: '/servicos/sites-institucionais' },
    { label: 'Google Ads e tráfego pago B2B e B2C', path: '/servicos/google-ads-trafego-pago' },
  ];

  protected readonly pillars: ServicePillar[] = [
    {
      number: '01',
      title: 'SaaS e software sob medida',
      description: 'Plataformas web personalizadas com arquitetura escalável para empresas e startups.',
      path: '/servicos/saas-sob-medida',
      icon: 'saas',
      tags: ['Angular', 'Node.js', 'PostgreSQL', 'AWS'],
      featured: true,
    },
    {
      number: '02',
      title: 'Aplicativos mobile',
      description: 'Apps corporativos para iOS e Android, do MVP à publicação nas lojas.',
      path: '/servicos/aplicativos-mobile',
      icon: 'mobile',
      tags: ['React Native', 'Flutter', 'Firebase', 'App Store'],
    },
    {
      number: '03',
      title: 'APIs, automação e CRM',
      description: 'Integrações, fluxos automatizados e CRMs próprios para ganho de eficiência.',
      path: '/servicos/apis-automacao-crm',
      icon: 'api',
      tags: ['REST API', 'Webhooks', 'CRM', 'Automação'],
    },
    {
      number: '04',
      title: 'Sites e landing pages',
      description: 'Presença digital responsiva, rápida e orientada à conversão.',
      path: '/servicos/sites-institucionais',
      icon: 'web',
      tags: ['SEO', 'Core Web Vitals', 'Conversão', 'Responsivo'],
    },
    {
      number: '05',
      title: 'Google Ads e tráfego pago B2B e B2C',
      description: 'Campanhas B2B para gerar leads qualificados com landing pages otimizadas.',
      path: '/servicos/google-ads-trafego-pago',
      icon: 'ads',
      tags: ['Google Ads', 'Analytics', 'Landing Pages', 'B2B & B2C'],
    },
  ];

  ngOnInit(): void {
    this.seo.update({
      title: 'Auctus Tecnologia | Software, Apps e Sites em Ribeirão Preto',
      description:
        'Desenvolvimento de SaaS, aplicativos mobile, APIs, landing pages e Google Ads. Auctus Tecnologia em Ribeirão Preto com foco em resultados B2B.',
      keywords:
        'desenvolvimento de software ribeirão preto, criação de sites, aplicativos mobile, saas sob medida, google ads b2b',
      canonicalPath: '/',
    });
  }
}
