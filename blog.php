<?php
$pageTitle = 'Blog e Insights | Auctus Consultoria';
$pageDescription = 'Artigos, insights e conteúdos sobre criação de sites, e-commerce, SaaS, sistemas web e estratégia digital para empresas que querem crescer com tecnologia.';
$pageKeywords = 'blog criação de sites, blog e-commerce, blog SaaS, insights digitais, Auctus Consultoria, marketing digital, tecnologia para negócios';
$pageUrl = 'https://www.auctusconsultoria.com.br/blog';
include 'templates/header.php';
?>

<main>
    <!-- Hero do Blog -->
    <section class="page-hero-image">
        <div class="page-hero-overlay"></div>
        <div class="page-hero-content">
            <h1>Blog & Insights</h1>
            <p>Conteúdos práticos sobre sites, e-commerce, sistemas web e estratégia digital para apoiar o crescimento da sua empresa.</p>
        </div>
    </section>

    <!-- Listagem de Posts em Grade (2x4) -->
    <section class="section insights-section">
        <div class="container">
            <div class="insights-header insights-header-center">
                <h2 class="insights-title">
                    <span class="insights-word">Últimos</span><span class="insights-dot"> Insights</span>
                </h2>
                <p class="section-subtitle insights-subtitle">
                    Navegue pelos artigos para entender melhor como usar o digital a favor do seu negócio.
                </p>
            </div>

            <div class="insights-grid insights-grid-blog">
                <!-- Post 1 -->
                <article class="insight-card">
                    <a href="o-sucesso-da-zara" class="insight-card-image-link">
                        <img src="assets/images/posts/O-Grande-sucesso-da-Zara.webp"
                             alt="O sucesso da Zara: Estratégias, inovação e impacto no varejo de moda"
                             class="insight-card-image">
                    </a>
                    <div class="insight-card-content">
                        <span class="insight-tag">E-Commerce</span>
                        <h3>
                            <a href="o-sucesso-da-zara">
                                O sucesso da Zara: Estratégias, inovação e impacto no varejo de moda
                            </a>
                        </h3>
                        <p>
                            O sucesso da Zara é um fenômeno notável no mundo da moda e do varejo, atribuído a várias estratégias e inovações. 
                        </p>
                        <div class="insight-meta">
                            <span>Por Auctus Consultoria</span>
                            <span>20/11/2025</span>
                        </div>
                    </div>
                </article>
                <!-- Post 2 -->
                <article class="insight-card">
                    <a href="a-ciencia-dos-precos" class="insight-card-image-link">
                        <img src="assets/images/posts/A-Ciencia-dos-precos-Como-a-Psicologia-influencia-suas-vendas-e-lucros.webp"
                             alt="A Ciência dos preços: Como a Psicologia influencia suas vendas e lucros"
                             class="insight-card-image">
                    </a>
                    <div class="insight-card-content">
                        <span class="insight-tag">Insight</span>
                        <h3>
                            <a href="a-ciencia-dos-precos">
                                A Ciência dos preços: Como a Psicologia influencia suas vendas e lucros
                            </a>
                        </h3>
                        <p>
                            Compreender a importância da psicologia dos preços é fundamental para qualquer negócio que deseje conquistar e reter clientes de forma eficaz.
                        </p>
                        <div class="insight-meta">
                            <span>Por Auctus Consultoria</span>
                            <span>19/11/2025</span>
                        </div>
                    </div>
                </article>
                <!-- Post 3 -->
                <article class="insight-card">
                    <a href="caito-maia-historia-licoes-e-legado" class="insight-card-image-link">
                        <img src="assets/images/posts/Quem-e-Caito-Maia.webp"
                             alt="Caito Maia: História, lições, empresas e o legado de um empreendedor visionário"
                             class="insight-card-image">
                    </a>
                    <div class="insight-card-content">
                        <span class="insight-tag">Personalidades</span>
                        <h3>
                            <a href="caito-maia-historia-licoes-e-legado">
                                Caito Maia: História, lições de um Legado
                            </a>
                        </h3>
                        <p>
                            Caito Maia é um renomado empresário brasileiro, conhecido principalmente por ser o fundador da Chilli Beans, a maior marca de óculos e acessórios da América Latina. ...
                        </p>
                        <div class="insight-meta">
                            <span>Por Auctus Consultoria</span>
                            <span>18/11/2025</span>
                        </div>
                    </div>
                </article>
                <!-- Post 4 -->
                <article class="insight-card">
                    <a href="jensen-huang-historia-licoes-empresas-e-o-legado-de-um-visionario-da-tecnologia" class="insight-card-image-link">
                        <img src="assets/images/posts/quem-e-Jensen-Huang.webp"
                             alt="Jensen Huang: História, lições de um Legado"
                             class="insight-card-image">
                    </a>
                    <div class="insight-card-content">
                        <span class="insight-tag">Personalidades</span>
                        <h3>
                            <a href="jensen-huang-historia-licoes-empresas-e-o-legado-de-um-visionario-da-tecnologia">
                                Jensen Huang: História, lições de um Legado
                            </a>
                        </h3>
                        <p>
                            Jensen Huang, oficialmente Jen-Hsun Huang, é um empresário e engenheiro elétrico taiwanês-americano, conhecido por ser o cofundador, presidente e CEO da NVIDIA,...
                        </p>
                        <div class="insight-meta">
                            <span>Por Auctus Consultoria</span>
                            <span>17/11/2025</span>
                        </div>
                    </div>
                </article>

            <!-- Paginação 
            <div class="blog-pagination">
                <a href="#" class="page-link disabled">Anterior</a>
                <a href="#" class="page-link active">1</a>
                <a href="#" class="page-link">2</a>
                <a href="#" class="page-link">3</a>
                <a href="#" class="page-link">Próxima</a>
            </div>-->
        </div>
    </section>
</main>

<?php include 'templates/footer.php'; ?>