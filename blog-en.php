<?php
$pageTitle = 'Blog & Insights | Auctus Consultoria';
$pageDescription = 'Articles, insights, and content about website creation, e-commerce, SaaS, web systems, and digital strategy for companies that want to grow with technology.';
$pageKeywords = 'blog website development, blog e-commerce, blog SaaS, digital insights, Auctus Consultoria, digital marketing, technology for business';
$pageUrl = 'https://www.auctusconsultoria.com.br/blog-en';
$pageBaseName = 'blog';
include 'templates/header.php';
?>

<main>
    <!-- Blog Hero -->
    <section class="page-hero-image">
        <div class="page-hero-overlay"></div>
        <div class="page-hero-content">
            <h1>Blog & Insights</h1>
            <p>Practical content about websites, e-commerce, web systems, and digital strategy to support your company’s growth.</p>
        </div>
    </section>

    <!-- Posts Grid -->
    <section class="section insights-section">
        <div class="container">
            <div class="insights-header insights-header-center">
                <h2 class="insights-title">
                    <span class="insights-word">Latest</span><span class="insights-dot"> Insights</span>
                </h2>
                <p class="section-subtitle insights-subtitle">
                    Browse the articles to better understand how to use digital in favor of your business.
                </p>
            </div>

            <div class="insights-grid insights-grid-blog">
                <!-- Post 1 -->
                <article class="insight-card">
                    <a href="the-success-of-zara" class="insight-card-image-link">
                        <img src="assets/images/posts/O-Grande-sucesso-da-Zara.webp"
                             alt="The success of Zara: Strategy, innovation, and impact on fashion retail"
                             class="insight-card-image">
                    </a>
                    <div class="insight-card-content">
                        <span class="insight-tag">E-Commerce</span>
                        <h3>
                            <a href="the-success-of-zara">
                                The success of Zara: Strategy, innovation, and impact on fashion retail
                            </a>
                        </h3>
                        <p>
                            Zara’s success is a remarkable phenomenon in the fashion and retail world, driven by several strategies and innovations.
                        </p>
                        <div class="insight-meta">
                            <span>By Auctus Consultoria</span>
                            <span>11/20/2025</span>
                        </div>
                    </div>
                </article>

                <!-- Post 2 -->
                <article class="insight-card">
                    <a href="the-science-of-pricing" class="insight-card-image-link">
                        <img src="assets/images/posts/A-Ciencia-dos-precos-Como-a-Psicologia-influencia-suas-vendas-e-lucros.webp"
                             alt="The science of pricing: How psychology influences your sales and profits"
                             class="insight-card-image">
                    </a>
                    <div class="insight-card-content">
                        <span class="insight-tag">Insight</span>
                        <h3>
                            <a href="the-science-of-pricing">
                                The science of pricing: How psychology influences your sales and profits
                            </a>
                        </h3>
                        <p>
                            Understanding the importance of price psychology is essential for any business that wants to attract and retain customers effectively.
                        </p>
                        <div class="insight-meta">
                            <span>By Auctus Consultoria</span>
                            <span>11/19/2025</span>
                        </div>
                    </div>
                </article>

                <!-- Post 3 -->
                <article class="insight-card">
                    <a href="caito-maia-story-lessons-legacy" class="insight-card-image-link">
                        <img src="assets/images/posts/Quem-e-Caito-Maia.webp"
                             alt="Caito Maia: Story, lessons, and the legacy of a visionary entrepreneur"
                             class="insight-card-image">
                    </a>
                    <div class="insight-card-content">
                        <span class="insight-tag">People</span>
                        <h3>
                            <a href="caito-maia-story-lessons-legacy">
                                Caito Maia: Story and lessons from a legacy
                            </a>
                        </h3>
                        <p>
                            Caito Maia is a renowned Brazilian entrepreneur, best known as the founder of Chilli Beans, the largest eyewear and accessories brand in Latin America. ...
                        </p>
                        <div class="insight-meta">
                            <span>By Auctus Consultoria</span>
                            <span>11/18/2025</span>
                        </div>
                    </div>
                </article>

                <!-- Post 4 -->
                <article class="insight-card">
                    <a href="jensen-huang-story-lessons-legacy" class="insight-card-image-link">
                        <img src="assets/images/posts/quem-e-Jensen-Huang.webp"
                             alt="Jensen Huang: Story and lessons from a legacy"
                             class="insight-card-image">
                    </a>
                    <div class="insight-card-content">
                        <span class="insight-tag">People</span>
                        <h3>
                            <a href="jensen-huang-story-lessons-legacy">
                                Jensen Huang: Story and lessons from a legacy
                            </a>
                        </h3>
                        <p>
                            Jensen Huang, officially Jen-Hsun Huang, is a Taiwanese-American entrepreneur and electrical engineer, known for being the cofounder, president, and CEO of NVIDIA, ...
                        </p>
                        <div class="insight-meta">
                            <span>By Auctus Consultoria</span>
                            <span>11/17/2025</span>
                        </div>
                    </div>
                </article>

                <!-- Pagination (commented)
                <div class="blog-pagination">
                    <a href="#" class="page-link disabled">Previous</a>
                    <a href="#" class="page-link active">1</a>
                    <a href="#" class="page-link">2</a>
                    <a href="#" class="page-link">3</a>
                    <a href="#" class="page-link">Next</a>
                </div>-->
            </div>
        </div>
    </section>
</main>

<?php include 'templates/footer.php'; ?>