# Auctus Consultoria — Site Institucional

![Status](https://img.shields.io/badge/status-concluído-success)
![PHP](https://img.shields.io/badge/PHP-777BB4?logo=php&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Repositório do **site institucional** da [Auctus Consultoria](https://www.auctusconsultoria.com.br) — presença digital da empresa, com apresentação de serviços, portfólio de cases, blog, formulários de contato e versão em inglês.

## Sobre o projeto

Landing page e site multipáginas voltado a **geração de leads**, **SEO** e **conversão**, com identidade visual moderna (vídeo em hero, animações de digitação, menu lateral responsivo) e conteúdo orientado a consultoria em desenvolvimento web, e-commerce, SaaS e landing pages.

O projeto está **concluído e em produção**, com páginas em português e inglês, política de privacidade alinhada à LGPD e integração de medição (Google Analytics 4, Google Ads, Microsoft Clarity).

## Principais entregas

- Home com hero em vídeo, serviços, portfólio em destaque, blog e depoimentos
- Páginas institucionais: Quem Somos, Serviços, Como podemos te ajudar, Portfólio, Contato
- Blog com artigos de negócios e tecnologia
- Formulários de contato e briefing de projeto
- Versão **EN** (`index-en.php`, `portfolio-en.php`, `contact-en.php`, entre outras)
- URLs amigáveis via `.htaccess` (sem extensão `.php` na barra de endereço)
- Layout responsivo (desktop, tablet e mobile)

## Stack utilizada

| Camada | Tecnologias |
|--------|-------------|
| **Backend** | PHP (includes modulares, formulários por e-mail, ano dinâmico no rodapé) |
| **Frontend** | HTML5, CSS3 (Flexbox, media queries), JavaScript (menu, carrosséis, animações) |
| **Servidor** | Apache com `mod_rewrite` (regras em `.htaccess`) |
| **Medição** | Google Tag (GA4 + Ads), Microsoft Clarity |
| **Assets** | WebP, SVG, vídeo MP4, favicons e manifest |

Cases exibidos no portfólio referenciam outras stacks dos projetos entregues (Node.js, React, PostgreSQL, etc.), descritas nos arquivos `data/portfolio-items.php` e `data/portfolio-items-en.php`.

## Estrutura do repositório

```
auctus/
├── index.php, index-en.php      # Páginas iniciais (PT / EN)
├── templates/                   # Header, footer, hero e páginas reutilizáveis
├── assets/                      # CSS, JS, imagens, vídeo, ícones de stack
├── data/                        # Dados do portfólio (cases PT e EN)
├── *.php                        # Páginas públicas e handlers de formulário
├── google-tag.php               # Configuração unificada de tags Google
└── .htaccess                    # Reescrita de URLs
```

## Site ao vivo

**https://www.auctusconsultoria.com.br**

## Licença

Este repositório é **proprietário e de código fechado**. Todos os direitos reservados — não é permitida cópia, modificação, distribuição ou reutilização do código sem autorização prévia por escrito da Auctus Consultoria.

Consulte o arquivo [LICENSE](LICENSE) para os termos completos.

---

© 2026 Auctus Consultoria — código-fonte do site institucional.
