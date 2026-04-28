<!DOCTYPE html>
<html lang="en">
<head>
    <?php include __DIR__ . '/google-tag.php'; ?>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">

    <?php
    $defaultTitle = 'Auctus Consulting | High-Performance Websites, E-commerce, SaaS and Landing Pages';
    $defaultDescription = 'Auctus Consulting builds high-performance websites, e-commerce, SaaS platforms and landing pages focused on SEO, lead generation and real business results.';
    $defaultKeywords = 'Auctus Consulting, website development, e-commerce, SaaS, landing pages, web development, SEO, digital strategy, technology consulting';
    $defaultUrl = 'https://www.auctusconsultoria.com.br/en/';

    $seoTitle       = isset($pageTitle) && $pageTitle !== '' ? $pageTitle : $defaultTitle;
    $seoDescription = isset($pageDescription) && $pageDescription !== '' ? $pageDescription : $defaultDescription;
    $seoKeywords    = isset($pageKeywords) && $pageKeywords !== '' ? $pageKeywords : $defaultKeywords;

    if (isset($pageUrl) && $pageUrl !== '') {
        $canonicalUrl = $pageUrl;
    } else {
        $requestUri  = $_SERVER['REQUEST_URI'] ?? '/';
        $canonicalUrl = rtrim($defaultUrl, '/') . $requestUri;
    }

    $ogImage = isset($pageOgImage) && $pageOgImage !== ''
        ? $pageOgImage
        : 'https://www.auctusconsultoria.com.br/assets/images/og-image.jpg';
    ?>
    <title><?php echo htmlspecialchars($seoTitle, ENT_QUOTES, 'UTF-8'); ?></title>
    <meta name="description" content="<?php echo htmlspecialchars($seoDescription, ENT_QUOTES, 'UTF-8'); ?>">
    <meta name="keywords" content="<?php echo htmlspecialchars($seoKeywords, ENT_QUOTES, 'UTF-8'); ?>">
    <meta name="author" content="Auctus Consulting">

    <link rel="canonical" href="<?php echo htmlspecialchars($canonicalUrl, ENT_QUOTES, 'UTF-8'); ?>">

    <meta property="og:title" content="<?php echo htmlspecialchars($seoTitle, ENT_QUOTES, 'UTF-8'); ?>">
    <meta property="og:description" content="<?php echo htmlspecialchars($seoDescription, ENT_QUOTES, 'UTF-8'); ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo htmlspecialchars($canonicalUrl, ENT_QUOTES, 'UTF-8'); ?>">
    <meta property="og:image" content="<?php echo htmlspecialchars($ogImage, ENT_QUOTES, 'UTF-8'); ?>">
    <meta property="og:site_name" content="Auctus Consulting">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo htmlspecialchars($seoTitle, ENT_QUOTES, 'UTF-8'); ?>">
    <meta name="twitter:description" content="<?php echo htmlspecialchars($seoDescription, ENT_QUOTES, 'UTF-8'); ?>">
    <meta name="twitter:image" content="<?php echo htmlspecialchars($ogImage, ENT_QUOTES, 'UTF-8'); ?>">

    <link rel="icon" type="image/webp" href="assets/images/favicon-96x96.webp" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg" />
    <link rel="shortcut icon" href="assets/images/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="assets/images/apple-touch-icon.webp" />
    <meta name="apple-mobile-web-app-title" content="Auctus" />
    <link rel="manifest" href="site.webmanifest" />

    <link rel="stylesheet" href="assets/css/style.css">

</head>
<body>
    <div class="header-logo-container">
        <a href="index-en.php" class="header-logo">
            <img src="assets/images/logo-auctus.webp" alt="Auctus Consulting logo">
        </a>

        <div class="language-selector">
            <button id="lang-toggle" class="lang-toggle" aria-label="Select language">
                <img
                    src="assets/images/flags/us.svg"
                    alt="English"
                    class="flag-icon"
                >
            </button>
            <div id="lang-dropdown" class="lang-dropdown">
                <a href="index.php" class="lang-option">
                    <img src="assets/images/flags/br.svg" alt="Português" class="flag-icon">
                    <span>Português</span>
                </a>
                <a href="index-en.php" class="lang-option active">
                    <img src="assets/images/flags/us.svg" alt="English" class="flag-icon">
                    <span>English</span>
                </a>
            </div>
        </div>
    </div>

    <nav class="top-text-menu">
        <ul class="top-menu-main">
            <li><a href="about-en.php">About Us</a></li>
            <li><a href="how-we-help-en.php">How We Help</a></li>
            <li><a href="contact-en.php">Contact</a></li>
        </ul>
        <button id="hamburger-icon" class="hamburger-icon" aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>

    <aside id="side-menu" class="side-menu">
        <button id="side-menu-close" class="side-menu-close" aria-label="Close menu">×</button>
        <ul>
            <li><a href="services-en.php">Services</a></li>
            <li><a href="portfolio-en.php">Portfolio</a></li>
            <li><a href="blog-en">Blog / Insights</a></li>
        </ul>
        <div class="logo-menu">
            <img src="assets/images/logo-auctus.webp" alt="Auctus Consulting">
        </div>
    </aside>