<?php include 'templates/header.php'; ?>

<main class="page page-contato">
    <section class="section page-hero">
        <div class="container">
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