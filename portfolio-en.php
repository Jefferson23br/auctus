<?php
$pageTitle = 'Portfolio — Websites, Online Stores & Web Systems | Auctus Consulting';
$pageDescription = 'Explore websites, e-commerce, and web systems built by Auctus Consulting for companies that need a professional, results-driven digital presence.';
$pageKeywords = 'web portfolio, e-commerce portfolio, SaaS case studies, custom web systems, digital projects, Auctus Consulting';
$pageUrl = 'https://www.auctusconsultoria.com.br/en/portfolio-en.php';
include 'header-en.php';
?>
<main class="page page-portfolio">
    <section class="page-hero-image">
        <div class="page-hero-overlay"></div>
        <div class="page-hero-content container">
            <h1>Portfolio</h1>
            <p>Real projects with preview image, stack, and link to the live work when available.</p>
        </div>
    </section>
    <section class="section portfolio-section">
        <div class="container">
            <div class="portfolio-grid">
                <?php
                require_once __DIR__ . '/data/portfolio-items-en.php';
                include __DIR__ . '/templates/partials/portfolio-cards-en.php';
                ?>
            </div>
        </div>
    </section>
</main>
<?php include 'footer-en.php'; ?>
