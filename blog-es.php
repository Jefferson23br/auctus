<?php
$pageTitle = 'Blog e Insights | Auctus Consultoria';
$pageDescription = 'Artículos, insights y contenidos sobre creación de sitios web, e-commerce, SaaS, sistemas web y estrategia digital para empresas que quieren crecer con tecnología.';
$pageKeywords = 'blog creación de sitios web, blog e-commerce, blog SaaS, insights digitales, Auctus Consultoria, marketing digital, tecnología para negocios';
$pageUrl = 'https://www.auctusconsultoria.com.br/blog-es';
$pageBaseName = 'blog';
include 'templates/header.php';
?>

<main>
    <!-- Hero del Blog -->
    <section class="page-hero-image">
        <div class="page-hero-overlay"></div>
        <div class="page-hero-content">
            <h1>Blog & Insights</h1>
            <p>Contenidos prácticos sobre sitios web, e-commerce, sistemas web y estrategia digital para apoyar el crecimiento de tu empresa.</p>
        </div>
    </section>

    <!-- Listado de Posts -->
    <section class="section insights-section">
        <div class="container">
            <div class="insights-header insights-header-center">
                <h2 class="insights-title">
                    <span class="insights-word">Últimos</span><span class="insights-dot"> Insights</span>
                </h2>
                <p class="section-subtitle insights-subtitle">
                    Navega por los artículos para entender mejor cómo usar lo digital a favor de tu negocio.
                </p>
            </div>

            <div class="insights-grid insights-grid-blog">
                <!-- Post 1 -->
                <article class="insight-card">
                    <a href="el-exito-de-zara" class="insight-card-image-link">
                        <img src="assets/images/posts/O-Grande-sucesso-da-Zara.webp"
                             alt="El éxito de Zara: Estrategias, innovación e impacto en el retail de moda"
                             class="insight-card-image">
                    </a>
                    <div class="insight-card-content">
                        <span class="insight-tag">E-Commerce</span>
                        <h3>
                            <a href="el-exito-de-zara">
                                El éxito de Zara: Estrategias, innovación e impacto en el retail de moda
                            </a>
                        </h3>
                        <p>
                            El éxito de Zara es un fenómeno notable en el mundo de la moda y del retail, resultado de diversas estrategias e innovaciones.
                        </p>
                        <div class="insight-meta">
                            <span>Por Auctus Consultoria</span>
                            <span>20/11/2025</span>
                        </div>
                    </div>
                </article>

                <!-- Post 2 -->
                <article class="insight-card">
                    <a href="la-ciencia-de-los-precios" class="insight-card-image-link">
                        <img src="assets/images/posts/A-Ciencia-dos-precos-Como-a-Psicologia-influencia-suas-vendas-e-lucros.webp"
                             alt="La ciencia de los precios: Cómo la psicología influye en tus ventas y beneficios"
                             class="insight-card-image">
                    </a>
                    <div class="insight-card-content">
                        <span class="insight-tag">Insight</span>
                        <h3>
                            <a href="la-ciencia-de-los-precios">
                                La ciencia de los precios: Cómo la psicología influye en tus ventas y beneficios
                            </a>
                        </h3>
                        <p>
                            Entender la importancia de la psicología de los precios es fundamental para cualquier negocio que desee conquistar y retener clientes de forma eficaz.
                        </p>
                        <div class="insight-meta">
                            <span>Por Auctus Consultoria</span>
                            <span>19/11/2025</span>
                        </div>
                    </div>
                </article>

                <!-- Post 3 -->
                <article class="insight-card">
                    <a href="caito-maia-historia-lecciones-legado" class="insight-card-image-link">
                        <img src="assets/images/posts/Quem-e-Caito-Maia.webp"
                             alt="Caito Maia: Historia, lecciones y legado de un emprendedor visionario"
                             class="insight-card-image">
                    </a>
                    <div class="insight-card-content">
                        <span class="insight-tag">Personalidades</span>
                        <h3>
                            <a href="caito-maia-historia-lecciones-legado">
                                Caito Maia: Historia y lecciones de un legado
                            </a>
                        </h3>
                        <p>
                            Caito Maia es un reconocido empresario brasileño, conocido principalmente por ser el fundador de Chilli Beans, la mayor marca de gafas y accesorios de América Latina. ...
                        </p>
                        <div class="insight-meta">
                            <span>Por Auctus Consultoria</span>
                            <span>18/11/2025</span>
                        </div>
                    </div>
                </article>

                <!-- Post 4 -->
                <article class="insight-card">
                    <a href="jensen-huang-historia-lecciones-legado" class="insight-card-image-link">
                        <img src="assets/images/posts/quem-e-Jensen-Huang.webp"
                             alt="Jensen Huang: Historia y lecciones de un legado"
                             class="insight-card-image">
                    </a>
                    <div class="insight-card-content">
                        <span class="insight-tag">Personalidades</span>
                        <h3>
                            <a href="jensen-huang-historia-lecciones-legado">
                                Jensen Huang: Historia y lecciones de un legado
                            </a>
                        </h3>
                        <p>
                            Jensen Huang, oficialmente Jen-Hsun Huang, es un empresario y ingeniero eléctrico taiwanés-estadounidense, conocido por ser cofundador, presidente y CEO de NVIDIA, ...
                        </p>
                        <div class="insight-meta">
                            <span>Por Auctus Consultoria</span>
                            <span>17/11/2025</span>
                        </div>
                    </div>
                </article>

                <!-- Paginación (comentada)
                <div class="blog-pagination">
                    <a href="#" class="page-link disabled">Anterior</a>
                    <a href="#" class="page-link active">1</a>
                    <a href="#" class="page-link">2</a>
                    <a href="#" class="page-link">3</a>
                    <a href="#" class="page-link">Próxima</a>
                </div>-->
            </div>
        </div>
    </section>
</main>

<?php include 'templates/footer.php'; ?>