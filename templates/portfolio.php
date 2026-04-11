<?php
$pageTitle = 'Portfólio de Sites, Lojas Virtuais e Sistemas Web | Auctus Consultoria';
$pageDescription = 'Veja exemplos de sites, e-commerces e sistemas web desenvolvidos pela Auctus Consultoria para empresas que precisam de presença digital profissional e focada em resultados.';
$pageKeywords = 'portfólio de sites, portfólio de e-commerce, cases de SaaS, sistemas web personalizados, projetos digitais, Auctus Consultoria';
$pageUrl = 'https://www.auctusconsultoria.com.br/portfolio.php';
include 'templates/header.php';
?>
<main class="page page-portfolio">
    <section class="page-hero-image">
        <div class="page-hero-overlay"></div>
        <div class="page-hero-content container">
            <h1>Portfólio</h1>
            <p>Cases reais com imagem, stack e link para o projeto ao vivo.</p>
        </div>
    </section>
    <section class="section portfolio-section">
        <div class="container">
            <div class="portfolio-grid">
                <?php
                require_once __DIR__ . '/../data/portfolio-items.php';
                include __DIR__ . '/partials/portfolio-cards.php';
                ?>
            </div>
        </div>
    </section>
</main>
<?php include 'templates/footer.php'; ?>