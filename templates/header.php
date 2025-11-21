<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <?php include 'google-tag.php'; ?>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">

    <?php
    $defaultTitle = 'Auctus Consultoria | Criação de Sites, E-commerce, SaaS e Landing Pages';
    $defaultDescription = 'Auctus Consultoria cria sites, e-commerce, SaaS e landing pages de alta performance em Ribeirão Preto e em todo o Brasil, com foco em SEO, geração de leads e resultados reais.';
    $defaultKeywords = 'Auctus Consultoria, criação de sites, agência de sites Ribeirão Preto, e-commerce, loja virtual, SaaS, landing page, desenvolvimento web, SEO, marketing digital, consultoria em TI';
    $defaultUrl = 'https://www.auctusconsultoria.com.br/';
    $seoTitle = isset($pageTitle) && $pageTitle !== '' ? $pageTitle : $defaultTitle;
    $seoDescription = isset($pageDescription) && $pageDescription !== '' ? $pageDescription : $defaultDescription;
    $seoKeywords = isset($pageKeywords) && $pageKeywords !== '' ? $pageKeywords : $defaultKeywords;
    if (isset($pageUrl) && $pageUrl !== '') {
        $canonicalUrl = $pageUrl;
    } else {
        $requestUri = $_SERVER['REQUEST_URI'] ?? '/';
        $canonicalUrl = rtrim($defaultUrl, '/') . $requestUri;
    }
    $ogImage = isset($pageOgImage) && $pageOgImage !== ''
        ? $pageOgImage
        : 'https://www.auctusconsultoria.com.br/assets/images/og-image.jpg';
    ?>
    <title><?php echo htmlspecialchars($seoTitle, ENT_QUOTES, 'UTF-8'); ?></title>
    <meta name="description" content="<?php echo htmlspecialchars($seoDescription, ENT_QUOTES, 'UTF-8'); ?>">
    <meta name="keywords" content="<?php echo htmlspecialchars($seoKeywords, ENT_QUOTES, 'UTF-8'); ?>">
    <meta name="author" content="Auctus Consultoria">
    <link rel="canonical" href="<?php echo htmlspecialchars($canonicalUrl, ENT_QUOTES, 'UTF-8'); ?>">
    <meta property="og:title" content="<?php echo htmlspecialchars($seoTitle, ENT_QUOTES, 'UTF-8'); ?>">
    <meta property="og:description" content="<?php echo htmlspecialchars($seoDescription, ENT_QUOTES, 'UTF-8'); ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo htmlspecialchars($canonicalUrl, ENT_QUOTES, 'UTF-8'); ?>">
    <meta property="og:image" content="<?php echo htmlspecialchars($ogImage, ENT_QUOTES, 'UTF-8'); ?>">
    <meta property="og:site_name" content="Auctus Consultoria">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo htmlspecialchars($seoTitle, ENT_QUOTES, 'UTF-8'); ?>">
    <meta name="twitter:description" content="<?php echo htmlspecialchars($seoDescription, ENT_QUOTES, 'UTF-8'); ?>">
    <meta name="twitter:image" content="<?php echo htmlspecialchars($ogImage, ENT_QUOTES, 'UTF-8'); ?>">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Auctus Consultoria",
      "url": "https://www.auctusconsultoria.com.br/",
      "image": "https://www.auctusconsultoria.com.br/assets/images/logo-auctus.webp",
      "logo": "https://www.auctusconsultoria.com.br/assets/images/logo-auctus.webp",
      "description": "Consultoria em tecnologia especializada em criação de sites, e-commerce, SaaS e landing pages com foco em performance, SEO e geração de leads em Ribeirão Preto e em todo o Brasil.",
      "areaServed": [
        "Ribeirão Preto, São Paulo, Brasil",
        "Brasil"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ribeirão Preto",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-35-99918-7047",
        "contactType": "customer service",
        "areaServed": "BR",
        "availableLanguage": ["Portuguese"]
      }
    }
    </script>
    <link rel="icon" type="image/webp" href="assets/images/favicon-96x96.webp" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg" />
    <link rel="shortcut icon" href="assets/images/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="assets/images/apple-touch-icon.webp" />
    <meta name="apple-mobile-web-app-title" content="Auctus" />
    <link rel="manifest" href="site.webmanifest" />
    <link rel="stylesheet" href="assets/css/style.css">
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-EV9D7P5QNJ"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-EV9D7P5QNJ');
    </script>
</head>
<body>
    <a href="index.php" class="fixed-logo">
        <img src="assets/images/logo-auctus.webp" alt="Logo Auctus Consultoria em Tecnologia">
    </a>

    <nav class="top-text-menu">
        <ul class="top-menu-main">
            <li><a href="quem-somos">Quem Somos</a></li>
            <li><a href="como-podemos-te-ajudar">Como Podemos te Ajudar</a></li>
            <li><a href="contato">Contato</a></li>
        </ul>
        <button id="hamburger-icon" class="hamburger-icon" aria-label="Abrir menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>

    <aside id="side-menu" class="side-menu">
        <button id="side-menu-close" class="side-menu-close" aria-label="Fechar menu">×</button>
        <ul>
            <li><a href="servicos">Serviços</a></li>
            <li><a href="portfolio">Portfólio</a></li>
            <li><a href="blog">Blog / Insights</a></li>
            <li><a href="Reembolso-Km/frontend/Reembolso" target="_blank">Reembolso KM</a></li>
            <li><a href="https://www.dracamilacapeli.com.br" target="_blank">Dra. Camila Capeli</a></li>
        </ul>
        <div class="logo-menu">
            <img src="assets/images/logo-auctus.webp" alt="Logo Auctus Consultoria">
        </div>
    </aside>