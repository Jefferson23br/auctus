<?php include 'templates/header.php'; ?>

<main id="inicio">
    <!-- HERO -->
    <section class="hero-section">
        <div class="video-overlay"></div>
        <video autoplay muted loop id="background-video">
            <source src="assets/video/video.mp4" type="video/mp4">
            Seu navegador não suporta vídeos HTML5.
        </video>

        <div class="hero-content container">
            <span class="hero-tagline">AGÊNCIA ESPECIALISTA EM PERFORMANCE DIGITAL</span>
            <h1>Criação de Sites, E-commerce, SaaS e Landing Pages que geram resultados.</h1>
            <p>Estratégia, criatividade e tecnologia para transformar sua presença digital em um motor de vendas.</p>

            <div class="hero-buttons">
                <a href="/contato.php" class="btn btn-primary">Quero um projeto sob medida</a>
                <a href="/servicos.php" class="btn btn-outline">Ver soluções</a>
            </div>

            <div class="hero-metricas">
                <div>
                    <strong>+10</strong>
                    <span>anos de experiência em tecnologia e negócios</span>
                </div>
                <div>
                    <strong>+100</strong>
                    <span>projetos entregues entre sites, sistemas e automações</span>
                </div>
                <div>
                    <strong>Especialistas</strong>
                    <span>em soluções digitais sob medida</span>
                </div>
            </div>
        </div>
    </section>

    <!-- SOBRE / QUEM SOMOS (resumo) -->
    <section class="section about-section">
        <div class="container about-container">
            <div class="about-text">
                <h2>Somos a Auctus Consultoria</h2>
                <p>Uma empresa especializada em desenvolvimento de soluções digitais como sites, e-commerce, SaaS, landing pages e sistemas web personalizados.</p>
                <p>Unimos visão estratégica de negócio com tecnologia moderna para criar projetos que não são apenas bonitos, mas que realmente geram resultados.</p>
                <a href="/quem-somos.php" class="btn btn-outline">Conheça nossa história</a>
            </div>
            <div class="about-highlight">
                <h3>Porque empresas escolhem a Auctus</h3>
                <p>Trabalhamos como parceiros do seu crescimento, entendendo seu negócio para entregar uma solução digital que faça sentido para sua realidade.</p>
                <ul class="about-list">
                    <li>✔ Foco em conversão e performance</li>
                    <li>✔ Projetos sob medida, sem templates "copiados"</li>
                    <li>✔ Arquitetura pensada para SEO desde o início</li>
                    <li>✔ Integração com Analytics, CRM e automações</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- SERVIÇOS (resumo) -->
    <section class="section services-section">
        <div class="container">
            <h2>Nossas principais soluções</h2>
            <p class="section-subtitle">Serviços pensados para acelerar o crescimento do seu negócio no digital.</p>

            <div class="services-grid">
                <div class="service-card">
                    <h3>Criação de Sites Profissionais</h3>
                    <p>Sites institucionais modernos, responsivos e otimizados para SEO, focados em gerar credibilidade e oportunidades.</p>
                </div>
                <div class="service-card">
                    <h3>E-commerce & Lojas Virtuais</h3>
                    <p>Estrutura completa para vender online com boa experiência de compra, segurança e escalabilidade.</p>
                </div>
                <div class="service-card">
                    <h3>SaaS & Sistemas Web</h3>
                    <p>Plataformas sob medida para gestão, automação e escalabilidade do seu negócio.</p>
                </div>
                <div class="service-card">
                    <h3>Landing Pages de Alta Conversão</h3>
                    <p>Páginas focadas em campanhas, lançamentos, captura de leads e vendas específicas.</p>
                </div>
                <div class="service-card">
                    <h3>Integrações & Automação</h3>
                    <p>Integrações com APIs, ERPs, CRMs, gateways de pagamento e ferramentas de marketing.</p>
                </div>
                <div class="service-card">
                    <h3>SEO & Analytics</h3>
                    <p>Estrutura técnica e análise de dados para aumentar tráfego qualificado e conversões.</p>
                </div>
            </div>

            <div style="margin-top: 32px; text-align: center;">
                <a href="/servicos.php" class="btn btn-primary">Ver todos os serviços</a>
            </div>
        </div>
    </section>

    <!-- PORTFÓLIO (chamada) -->
    <section class="section portfolio-section">
        <div class="container">
            <h2>Projetos que impulsionam negócios</h2>
            <p class="section-subtitle">Desenvolvemos soluções digitais para diferentes segmentos e modelos de negócio.</p>

            <div class="portfolio-grid">
                <div class="portfolio-item">
                    <h3>Sites institucionais</h3>
                    <p>Presença digital forte e profissional para empresas que querem se posicionar no mercado.</p>
                </div>
                <div class="portfolio-item">
                    <h3>Lojas virtuais</h3>
                    <p>E-commerce com foco em conversão, usabilidade e integração com ferramentas essenciais.</p>
                </div>
                <div class="portfolio-item">
                    <h3>Sistemas personalizados</h3>
                    <p>Portais, sistemas internos e soluções sob medida para o dia a dia da sua operação.</p>
                </div>
            </div>

            <div style="margin-top: 32px; text-align: center;">
                <a href="/portfolio.php" class="btn btn-outline">Conhecer mais</a>
            </div>
        </div>
    </section>

    <!-- CONTATO (call-to-action) -->
    <section class="section contact-section">
        <div class="container contact-container">
            <div class="contact-text">
                <h2>Vamos falar sobre o seu projeto?</h2>
                <p>Preencha o formulário ou fale com a gente pelo WhatsApp. Vamos entender seu momento e desenhar a melhor solução para o seu negócio.</p>

                <ul class="contact-infos">
                    <li><strong>WhatsApp:</strong> <a href="https://wa.me/5535999187047" target="_blank">+55 (35) 99918-7047</a></li>
                    <li><strong>E-mail:</strong> contato@auctusconsultoria.com.br</li>
                    <li><strong>Atendimento:</strong> Segunda a Sexta, das 09h às 18h</li>
                </ul>
            </div>

            <div class="contact-form-wrapper">
                <form action="enviar-contato.php" method="POST" class="contact-form">
                    <div class="form-group">
                        <label for="nome">Nome*</label>
                        <input type="text" id="nome" name="nome" required>
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail*</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="telefone">Telefone / WhatsApp</label>
                        <input type="text" id="telefone" name="telefone">
                    </div>
                    <div class="form-group">
                        <label for="servico">O que você precisa?</label>
                        <select id="servico" name="servico">
                            <option value="">Selecione</option>
                            <option value="site">Criação de Site</option>
                            <option value="ecommerce">E-commerce</option>
                            <option value="saas">SaaS / Sistema Web</option>
                            <option value="landing-page">Landing Page</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="mensagem">Mensagem*</label>
                        <textarea id="mensagem" name="mensagem" rows="4" required></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block">Enviar mensagem</button>
                </form>
            </div>
        </div>
    </section>
</main>

<?php include 'templates/footer.php'; ?>