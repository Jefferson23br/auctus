<?php
$pageTitle = 'Obrigado pelo contato | Auctus Consultoria';
$pageDescription = 'Recebemos sua mensagem com sucesso. Para agilizar seu atendimento, fale com a Auctus Consultoria pelo WhatsApp.';
$pageKeywords = 'obrigado contato, confirmação envio formulário, atendimento WhatsApp Auctus';
$pageUrl = 'https://www.auctusconsultoria.com.br/obrigado.php';
include 'templates/header.php';
?>

<main class="page page-contato">
    <section class="page-hero-image">
        <div class="page-hero-overlay"></div>
        <div class="page-hero-content container">
            <h1>Obrigado pelo contato!</h1>
            <p>Recebemos seu formulário com sucesso.</p>
        </div>
    </section>

    <section class="section contact-section">
        <div class="container contact-container">
            <div class="contact-text">
                <h2>Mensagem enviada com sucesso</h2>
                <p>Nosso time vai analisar suas informações e retornar em breve.</p>
                <p>Para agilizar, você pode falar diretamente conosco no WhatsApp:</p>
                <a class="btn btn-primary" href="https://wa.me/5535984047078" target="_blank" rel="noopener noreferrer">
                    Chamar no WhatsApp
                </a>
            </div>
        </div>
    </section>
</main>

<?php include 'templates/footer.php'; ?>
