<?php
session_start();
include_once 'language-config.php';
?>
<!DOCTYPE html>
<html lang="<?php echo $languages[$currentLang]['code']; ?>">
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
    
    // URLs alternativas para hreflang
    if (isset($pageBaseName)) {
        $alternateUrls = getAlternateUrls($pageBaseName);
    }
    ?>
    <title><?php echo htmlspecialchars($seoTitle, ENT_QUOTES, 'UTF-8'); ?></title>
    <meta name="description" content="<?php echo htmlspecialchars($seoDescription, ENT_QUOTES, 'UTF-8'); ?>">
    <meta name="keywords" content="<?php echo htmlspecialchars($seoKeywords, ENT_QUOTES, 'UTF-8'); ?>">
    <meta name="author" content="Auctus Consultoria">
    <link rel="canonical" href="<?php echo htmlspecialchars($canonicalUrl, ENT_QUOTES, 'UTF-8'); ?>">
    
    <?php if (isset($alternateUrls)): ?>
    <link rel="alternate" hreflang="pt-BR" href="<?php echo $alternateUrls['pt']; ?>" />
    <link rel="alternate" hreflang="en-US" href="<?php echo $alternateUrls['en']; ?>" />
    <link rel="alternate" hreflang="es-ES" href="<?php echo $alternateUrls['es']; ?>" />
    <link rel="alternate" hreflang="x-default" href="<?php echo $alternateUrls['pt']; ?>" />
    <?php endif; ?>
    
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
        "availableLanguage": ["Portuguese", "English", "Spanish"]
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
    <style>
        .language-selector {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            display: flex;
            gap: 10px;
            background: rgba(255, 255, 255, 0.95);
            padding: 8px 12px;
            border-radius: 25px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .language-selector a {
            text-decoration: none;
            font-size: 24px;
            transition: transform 0.2s;
            display: block;
        }
        .language-selector a:hover {
            transform: scale(1.2);
        }
        .language-selector a.active {
            opacity: 1;
        }
        .language-selector a:not(.active) {
            opacity: 0.5;
        }
        @media (max-width: 768px) {
            .language-selector {
                top: 10px;
                right: 10px;
                padding: 6px 10px;
            }
            .language-selector a {
                font-size: 20px;
            }
        }
    </style>
</head>
<body>
    <!-- Seletor de Idiomas -->
    <div class="language-selector">
        <a href="<?php echo ($currentLang == 'pt') ? 'index.php' : 'index.php'; ?>" 
           class="<?php echo ($currentLang == 'pt') ? 'active' : ''; ?>" 
           title="Português">🇧🇷</a>
        <a href="<?php echo ($currentLang == 'en') ? 'index-en.php' : 'index-en.php'; ?>" 
           class="<?php echo ($currentLang == 'en') ? 'active' : ''; ?>" 
           title="English">🇺🇸</a>
        <a href="<?php echo ($currentLang == 'es') ? 'index-es.php' : 'index-es.php'; ?>" 
           class="<?php echo ($currentLang == 'es') ? 'active' : ''; ?>" 
           title="Español">🇪🇸</a>
    </div>

    <a href="<?php echo ($currentLang == 'en') ? 'index-en.php' : (($currentLang == 'es') ? 'index-es.php' : 'index.php'); ?>" class="fixed-logo">
        <img src="assets/images/logo-auctus.webp" alt="Logo Auctus Consultoria em Tecnologia">
    </a>

    <?php
    // Menu em diferentes idiomas
    $menuItems = [
        'pt' => [
            'about' => ['url' => 'quem-somos', 'text' => 'Quem Somos'],
            'help' => ['url' => 'como-podemos-te-ajudar', 'text' => 'Como Podemos te Ajudar'],
            'contact' => ['url' => 'contato', 'text' => 'Contato'],
            'services' => ['url' => 'servicos', 'text' => 'Serviços'],
            'portfolio' => ['url' => 'portfolio', 'text' => 'Portfólio'],
            'blog' => ['url' => 'blog', 'text' => 'Blog / Insights']
        ],
        'en' => [
            'about' => ['url' => 'about-us-en', 'text' => 'About Us'],
            'help' => ['url' => 'how-we-can-help-en', 'text' => 'How We Can Help'],
            'contact' => ['url' => 'contact-en', 'text' => 'Contact'],
            'services' => ['url' => 'services-en', 'text' => 'Services'],
            'portfolio' => ['url' => 'portfolio-en', 'text' => 'Portfolio'],
            'blog' => ['url' => 'blog-en', 'text' => 'Blog / Insights']
        ],
        'es' => [
            'about' => ['url' => 'quienes-somos-es', 'text' => 'Quiénes Somos'],
            'help' => ['url' => 'como-podemos-ayudarte-es', 'text' => 'Cómo Podemos Ayudarte'],
            'contact' => ['url' => 'contacto-es', 'text' => 'Contacto'],
            'services' => ['url' => 'servicios-es', 'text' => 'Servicios'],
            'portfolio' => ['url' => 'portafolio-es', 'text' => 'Portafolio'],
            'blog' => ['url' => 'blog-es', 'text' => 'Blog / Insights']
        ]
    ];
    
    $menu = $menuItems[$currentLang];
    ?>

    <nav class="top-text-menu">
        <ul class="top-menu-main">
            <li><a href="<?php echo $menu['about']['url']; ?>"><?php echo $menu['about']['text']; ?></a></li>
            <li><a href="<?php echo $menu['help']['url']; ?>"><?php echo $menu['help']['text']; ?></a></li>
            <li><a href="<?php echo $menu['contact']['url']; ?>"><?php echo $menu['contact']['text']; ?></a></li>
        </ul>
        <button id="hamburger-icon" class="hamburger-icon" aria-label="<?php echo ($currentLang == 'en') ? 'Open menu' : (($currentLang == 'es') ? 'Abrir menú' : 'Abrir menu'); ?>">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>

    <aside id="side-menu" class="side-menu">
        <button id="side-menu-close" class="side-menu-close" aria-label="<?php echo ($currentLang == 'en') ? 'Close menu' : (($currentLang == 'es') ? 'Cerrar menú' : 'Fechar menu'); ?>">×</button>
        <ul>
            <li><a href="<?php echo $menu['services']['url']; ?>"><?php echo $menu['services']['text']; ?></a></li>
            <li><a href="<?php echo $menu['portfolio']['url']; ?>"><?php echo $menu['portfolio']['text']; ?></a></li>
            <li><a href="<?php echo $menu['blog']['url']; ?>"><?php echo $menu['blog']['text']; ?></a></li>
        </ul>
        <div class="logo-menu">
            <img src="assets/images/logo-auctus.webp" alt="Logo Auctus Consultoria">
        </div>
    </aside>