import { Routes } from '@angular/router';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'servicos',
        loadComponent: () =>
          import('./pages/servicos/servicos-hub.component').then((m) => m.ServicosHubComponent),
      },
      {
        path: 'servicos/:slug',
        loadComponent: () =>
          import('./pages/servicos/service-detail.component').then((m) => m.ServiceDetailComponent),
      },
      {
        path: 'tecnologias',
        loadComponent: () =>
          import('./pages/simple-page/simple-page.component').then((m) => m.SimplePageComponent),
        data: {
          page: {
            title: 'Tecnologias',
            intro: 'Stacks e tecnologias utilizadas pela Auctus Tecnologia em projetos de software, apps e integrações.',
            bullets: [
              'Angular, React, Node.js, PostgreSQL',
              'Aplicativos mobile iOS e Android',
              'APIs, automações e integrações',
            ],
            seo: {
              title: 'Tecnologias',
              description:
                'Conheça as tecnologias e stacks usadas pela Auctus Tecnologia em desenvolvimento de software e aplicativos.',
              canonicalPath: '/tecnologias',
            },
          },
        },
      },
      {
        path: 'parcerias',
        loadComponent: () =>
          import('./pages/simple-page/simple-page.component').then((m) => m.SimplePageComponent),
        data: {
          page: {
            title: 'Parcerias',
            intro: 'Parcerias estratégicas para ampliar entregas em tecnologia, marketing e operações digitais.',
            seo: {
              title: 'Parcerias',
              description:
                'Conheça as parcerias da Auctus Tecnologia e oportunidades de colaboração em projetos digitais.',
              canonicalPath: '/parcerias',
            },
          },
        },
      },
      {
        path: 'portfolio',
        loadComponent: () =>
          import('./pages/simple-page/simple-page.component').then((m) => m.SimplePageComponent),
        data: {
          page: {
            title: 'Portfólio',
            intro: 'Cases de SaaS, aplicativos, APIs, sites e projetos entregues pela Auctus Consultoria.',
            seo: {
              title: 'Portfólio',
              description: 'Conheça projetos desenvolvidos pela Auctus Consultoria em software, apps e presença digital.',
              canonicalPath: '/portfolio',
            },
          },
        },
      },
      {
        path: 'blog',
        loadComponent: () =>
          import('./pages/simple-page/simple-page.component').then((m) => m.SimplePageComponent),
        data: {
          page: {
            title: 'Blog',
            intro: 'Conteúdos de meio de funil para educar, ranquear e converter visitantes em leads.',
            bullets: [
              'quanto custa criar um software saas',
              'como funciona o desenvolvimento de um saas',
              'por que meu site não aparece no google',
            ],
            seo: {
              title: 'Blog',
              description: 'Artigos sobre desenvolvimento de software, apps, SEO, automação e Google Ads.',
              canonicalPath: '/blog',
            },
          },
        },
      },
      {
        path: 'contato',
        loadComponent: () =>
          import('./pages/simple-page/simple-page.component').then((m) => m.SimplePageComponent),
        data: {
          page: {
            title: 'Contato',
            intro: 'Fale com a Auctus Consultoria em Ribeirão Preto e solicite uma proposta para o seu projeto.',
            bullets: [
              'empresa de desenvolvimento de software em ribeirão preto',
              'criação de sites ribeirão preto',
              'agência de marketing e google ads ribeirão preto',
            ],
            seo: {
              title: 'Contato',
              description:
                'Entre em contato com a Auctus Consultoria. Desenvolvimento de software, sites e Google Ads em Ribeirão Preto.',
              canonicalPath: '/contato',
            },
          },
        },
      },
      {
        path: 'politica-de-privacidade',
        loadComponent: () =>
          import('./pages/simple-page/simple-page.component').then((m) => m.SimplePageComponent),
        data: {
          page: {
            title: 'Política de privacidade',
            intro: 'Transparência no tratamento de dados pessoais conforme a LGPD.',
            seo: {
              title: 'Política de privacidade',
              description: 'Política de privacidade e tratamento de dados da Auctus Consultoria.',
              canonicalPath: '/politica-de-privacidade',
            },
          },
        },
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
