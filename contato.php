<?php
$pageTitle = 'Fale com a Auctus Consultoria em Ribeirão Preto | Orçamentos e Projetos Digitais';
$pageDescription = 'Entre em contato com a Auctus Consultoria em Ribeirão Preto e solicite um diagnóstico ou orçamento para criação de site, e-commerce, SaaS ou landing page focados em resultados.';
$pageKeywords = 'contato Auctus Consultoria, orçamento criação de site, orçamento e-commerce, orçamento SaaS, consultoria em TI Ribeirão Preto, projetos digitais';
$pageUrl = 'https://www.auctusconsultoria.com.br/contato.php';
include 'templates/header.php';
?>
<main class="page page-contato">
    <section class="page-hero-image">
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content container">
    <h1>Contato</h1>
    <p>Preencha o formulário ou fale diretamente pelo WhatsApp.</p>
    </div>
    </section>
    <section class="section contact-section">
    <div class="container contact-container">
    <div class="contact-text">
    <h2>Fale com a Auctus Consultoria</h2>
    <p>Vamos entender seu momento e propor a melhor solução digital para o seu negócio.</p>
    <ul class="contact-infos">
    <li><strong>WhatsApp:</strong> <a href="https://wa.me/5535999187047" target="_blank">+55 (35) 99918-7047</a></li>
    <li><strong>E-mail:</strong> contato@auctusconsultoria.com.br</li>
    <li><strong>Atendimento:</strong> Segunda a Sexta, das 09h às 18h</li>
    <li><strong>Localização:</strong> Ribeirão Preto - São Paulo, Brasil</li>
    </ul>
    </div>
    <div class="contact-form-wrapper">
    <?php
    if (isset($_GET['sucesso'])) {
        echo '<div class="alert alert-success">✓ Mensagem enviada com sucesso! Entraremos em contato em breve.</div>';
    }
    if (isset($_GET['erro'])) {
        $erro = $_GET['erro'];
        if ($erro == 'campos_obrigatorios') {
            echo '<div class="alert alert-error">✗ Por favor, preencha todos os campos obrigatórios.</div>';
        } elseif ($erro == 'email_invalido') {
            echo '<div class="alert alert-error">✗ Por favor, informe um e-mail válido.</div>';
        } elseif ($erro == 'envio') {
            echo '<div class="alert alert-error">✗ Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.</div>';
        }
    }
    ?>
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