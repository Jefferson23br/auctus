import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { SeoMeta } from '../models/seo-meta.model';

const SITE_URL = 'https://www.auctusconsultoria.com.br';
const SITE_NAME = 'Auctus Tecnologia';
const DEFAULT_DESCRIPTION =
  'Desenvolvimento de SaaS, aplicativos mobile, APIs, landing pages e Google Ads em Ribeirão Preto. Tecnologia B2B com foco em resultados.';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  update(meta: SeoMeta): void {
    const pageTitle = meta.title.includes(SITE_NAME)
      ? meta.title
      : `${meta.title} | ${SITE_NAME}`;

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: meta.description });

    if (meta.keywords) {
      this.meta.updateTag({ name: 'keywords', content: meta.keywords });
    }

    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: meta.description });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this.meta.updateTag({ property: 'og:type', content: meta.ogType ?? 'website' });
    this.meta.updateTag({ property: 'og:locale', content: 'pt_BR' });

    const canonicalPath = meta.canonicalPath ?? '/';
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.setCanonical(canonicalUrl);
  }

  setDefault(): void {
    this.update({
      title: `${SITE_NAME} | Software, Apps e Sites em Ribeirão Preto`,
      description: DEFAULT_DESCRIPTION,
      canonicalPath: '/',
    });
  }

  private setCanonical(url: string): void {
    const head = this.document.head;
    let link = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }

    link.setAttribute('href', url);
  }
}
