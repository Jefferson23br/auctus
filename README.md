# Auctus Consultoria — Site Institucional

![Status](https://img.shields.io/badge/status-em%20reconstrução-orange)
![Angular](https://img.shields.io/badge/Angular-22-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=white)

Repositório do site institucional da [Auctus Consultoria](https://www.auctusconsultoria.com.br), reconstruído em **Angular 22** com foco em SEO, conversão B2B e expansão futura para outros idiomas.

## Stack

| Camada | Tecnologia |
|--------|------------|
| Framework | Angular 22 (standalone components) |
| Linguagem | TypeScript 6 |
| Estilos | SCSS |
| Roteamento | Angular Router com lazy loading |
| SEO | `SeoService` (title, meta, canonical, Open Graph) |
| Idioma inicial | Português (Brasil) |

## Estrutura

```
src/app/
├── core/           # SEO e modelos compartilhados
├── layout/         # Header, footer e shell principal
├── pages/          # Home, serviços, páginas institucionais
└── app.routes.ts   # Rotas alinhadas à base SEO
docs/
└── base-seo.md     # Estratégia de palavras-chave e arquitetura
```

## Rotas iniciais

- `/` — Home
- `/servicos` — Hub de serviços
- `/servicos/:slug` — Páginas de serviço (SEO por slug)
- `/portfolio`, `/blog`, `/contato`, `/politica-de-privacidade`

## Desenvolvimento local

```bash
npm install
npm start
```

Acesse `http://localhost:4200`.

## Build de produção

```bash
npm run build
```

Saída em `dist/auctus-site/browser`.

## Documentação SEO

[`docs/base-seo.md`](docs/base-seo.md)

## Licença

Todos os direitos reservados. Consulte o arquivo [LICENSE](LICENSE).
