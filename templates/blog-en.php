<?php
$pageTitle = 'Blog & Insights | Auctus Consulting';
$pageDescription = 'Articles, insights and content about website creation, e-commerce, SaaS, web systems and digital strategy for companies that want to grow with technology.';
$pageKeywords = 'blog website creation, e-commerce blog, SaaS blog, digital insights, Auctus Consulting, digital marketing, business technology';
$pageUrl = 'https://www.auctusconsultoria.com.br/blog';
include 'templates/header-en.php';
?>

<main>
    <!-- Blog Hero -->
    <section class="page-hero-image">
        <div class="page-hero-overlay"></div>
        <div class="page-hero-content">
            <h1>Blog & Insights</h1>
            <p>Practical content about websites, e-commerce, web systems and digital strategy to support your company's growth.</p>
        </div>
    </section>

    <!-- Posts Listing Grid (2x4) -->
    <section class="section insights-section">
        <div class="container">
            <div class="insights-header insights-header-center">
                <h2 class="insights-title">
                    <span class="insights-word">Latest</span><span class="insights-dot"> Insights</span>
                </h2>
                <p class="section-subtitle insights-subtitle">
                    Browse the articles to better understand how to use digital to your business advantage.
                </p>
            </div>

            <div class="insights-grid insights-grid-blog">
                <!-- Post 1 -->
                <article class="insight-card">
                    <a href="o-sucesso-da-zara" class="insight-card-image-link">
                        <img src="assets/images/posts/O-Grande-sucesso-da-Zara.webp"
                            alt="The success of Zara: Strategies, innovation and impact on fashion retail"
                            class="insight-card-image">
                    </a>
                    <div class="insight-card-content">
                        <span class="insight-tag">E-Commerce</span>
                        <h3>
                            <a href="o-sucesso-da-zara">
                                The success of Zara: Strategies, innovation and impact on fashion retail
                            </a>
                        </h3>
                        <p>
                            The success of Zara is a remarkable phenomenon in the world of fashion and retail, attributed to various strategies and innovations.
                        </p>
                        <div class="insight-meta">
                            <span>By Auctus Consulting</span>
                            <span>20/11/2025</span>
                        </div>
                    </div>
                </article>
                <!-- Post 2 -->
                <article class="insight-card">
                    <a href="a-ciencia-dos-precos" class="insight-card-image-link">
                        <img src="assets/images/posts/A-Ciencia-dos-precos-Como-a-Psicologia-influencia-suas-vendas-e-lucros.webp"
                            alt="The Science of Pricing: How Psychology influences your sales and profits"
                            class="insight-card-image">
                    </a>
                    <div class="insight-card-content">
                        <span class="insight-tag">Insight</span>
                        <h3>
                            <a href="a-ciencia-dos-precos">
                                The Science of Pricing: How Psychology influences your sales and profits
                            </a>
                        </h3>
                        <p>
                            Understanding the importance of pricing psychology is essential for any business that wants to effectively attract and retain customers.
                        </p>
                        <div class="insight-meta">
                            <span>By Auctus Consulting</span>
                            <span>19/11/2025</span>
                        </div>
                    </div>
                </article>
                <!-- Post 3 -->
                <article class="insight-card">
                    <a href="caito-maia-historia-licoes-e-legado" class="insight-card-image-link">
                        <img src="assets/images/posts/Quem-e-Caito-Maia.webp"
                            alt="Caito Maia: History, lessons, companies and the legacy of a visionary entrepreneur"
                            class="insight-card-image">
                    </a>
                    <div class="insight-card-content">
                        <span class="insight-tag">Personalities</span>
                        <h3>
                            <a href="caito-maia-historia-licoes-e-legado">
                                Caito Maia: History, lessons and legacy
                            </a>
                        </h3>
                        <p>
                            Caito Maia is a renowned Brazilian entrepreneur, mainly known as the founder of Chilli Beans, the largest eyewear and accessories brand in Latin America. ...
                        </p>
                        <div class="insight-meta">
                            <span>By Auctus Consulting</span>
                            <span>18/11/2025</span>
                        </div>
                    </div>
                </article>
                <!-- Post 4 -->
                <article class="insight-card">
                    <a href="jensen-huang-historia-licoes-empresas-e-o-legado-de-um-visionario-da-tecnologia" class="insight-card-image-link">
                        <img src="assets/images/posts/quem-e-Jensen-Huang.webp"
                            alt="Jensen Huang: History, lessons and legacy"
                            class="insight-card-image">
                    </a>
                    <div class="insight-card-content">
                        <span class="insight-tag">Personalities</span>
                        <h3>
                            <a href="jensen-huang-historia-licoes-empresas-e-o-legado-de-um-visionario-da-tecnologia">
                                Jensen Huang: History, lessons and legacy
                            </a>
                        </h3>
                        <p>
                            Jensen Huang, officially Jen-Hsun Huang, is a Taiwanese-American businessman and electrical engineer, known as the co-founder, president and CEO of NVIDIA,...
                        </p>
                        <div class="insight-meta">
                            <span>By Auctus Consulting</span>
                            <span>17/11/2025</span>
                        </div>
                    </div>
                </article>

                <!-- Pagination 
                <div class="blog-pagination">
                    <a href="#" class="page-link disabled">Previous</a>
                    <a href="#" class="page-link active">1</a>
                    <a href="#" class="page-link">2</a>
                    <a href="#" class="page-link">3</a>
                    <a href="#" class="page-link">Next</a>
                </div>-->
            </div>
        </section>
    </main>

<?php include 'templates/footer-en.php'; ?>