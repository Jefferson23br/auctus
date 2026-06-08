import { SeoMeta } from '../../core/models/seo-meta.model';

export interface ServicePageData {
  slug: string;
  title: string;
  intro: string;
  bullets: string[];
  seo: SeoMeta;
}

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: 'saas-sob-medida',
    title: 'Desenvolvimento de SaaS sob medida',
    intro: 'Plataformas web personalizadas com arquitetura escalável para empresas e startups.',
    bullets: [
      'desenvolvimento de saas sob medida',
      'empresa de desenvolvimento de sistemas web',
      'fábrica de software especializada em saas',
      'desenvolvimento de plataformas web personalizadas',
    ],
    seo: {
      title: 'SaaS sob medida',
      description:
        'Desenvolvemos plataformas SaaS personalizadas com arquitetura escalável. Fale com a Auctus e receba uma proposta sob medida.',
      canonicalPath: '/servicos/saas-sob-medida',
    },
  },
  {
    slug: 'aplicativos-mobile',
    title: 'Desenvolvimento de aplicativos mobile corporativos',
    intro: 'Apps iOS e Android para empresas, do MVP à publicação nas lojas.',
    bullets: [
      'desenvolvimento de aplicativos mobile corporativos',
      'empresa para criar aplicativo ios e android',
      'criar aplicativo personalizado para empresas',
    ],
    seo: {
      title: 'Apps mobile corporativos',
      description:
        'Criamos aplicativos personalizados para empresas — do MVP à publicação na App Store e Google Play. Solicite orçamento.',
      canonicalPath: '/servicos/aplicativos-mobile',
    },
  },
  {
    slug: 'apis-automacao-crm',
    title: 'APIs, automações e CRM personalizado',
    intro: 'Integrações, automação de processos e CRMs sob medida para operações mais eficientes.',
    bullets: [
      'criação de crm personalizado com automação',
      'desenvolvimento de api para integração multiplataforma',
      'consultoria em automação de processos empresariais',
    ],
    seo: {
      title: 'APIs e automação',
      description:
        'Integramos sistemas, automatizamos processos e criamos CRMs sob medida. Eficiência operacional com desenvolvimento profissional.',
      canonicalPath: '/servicos/apis-automacao-crm',
    },
  },
  {
    slug: 'landing-pages',
    title: 'Criação de landing pages de alta conversão',
    intro: 'Páginas focadas em conversão para campanhas, lançamentos e captação de leads.',
    bullets: [
      'criação de landing pages de alta conversão',
      'o que uma landing page precisa ter para vender',
      'agência de criação de sites profissionais',
    ],
    seo: {
      title: 'Landing pages de conversão',
      description: 'Landing pages rápidas, responsivas e otimizadas para campanhas e geração de leads B2B.',
      canonicalPath: '/servicos/landing-pages',
    },
  },
  {
    slug: 'sites-institucionais',
    title: 'Desenvolvimento de sites institucionais responsivos',
    intro: 'Sites profissionais com foco em credibilidade, SEO e performance.',
    bullets: [
      'desenvolvimento de site institucional responsivo',
      'diferença entre site institucional e landing page',
      'por que meu site não aparece no google',
    ],
    seo: {
      title: 'Sites institucionais',
      description: 'Sites institucionais rápidos, responsivos e otimizados para SEO. Presença digital profissional.',
      canonicalPath: '/servicos/sites-institucionais',
    },
  },
  {
    slug: 'manutencao-de-sites',
    title: 'Manutenção e atualização de sites',
    intro: 'Suporte contínuo, melhorias de performance e evolução do seu site.',
    bullets: [
      'serviço de atualização e manutenção de sites',
      'como melhorar a velocidade de carregamento do site',
    ],
    seo: {
      title: 'Manutenção de sites',
      description: 'Manutenção, atualização e melhoria contínua de sites com foco em performance e segurança.',
      canonicalPath: '/servicos/manutencao-de-sites',
    },
  },
  {
    slug: 'google-ads-trafego-pago',
    title: 'Google Ads e gestão de tráfego pago B2B e B2C',
    intro: 'Campanhas de mídia paga para gerar leads qualificados com landing pages otimizadas.',
    bullets: [
      'gestão de tráfego pago b2b',
      'consultoria de google ads para captação de leads',
      'agência de tráfego pago especializada em tecnologia',
    ],
    seo: {
      title: 'Google Ads B2B e B2C',
      description:
        'Campanhas de Google Ads focadas em leads qualificados para empresas de tecnologia e serviços.',
      canonicalPath: '/servicos/google-ads-trafego-pago',
    },
  },
];
