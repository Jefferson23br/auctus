<?php
$pageTitle = 'Contact Auctus Consultoria in Ribeirão Preto | Quotes and Digital Projects';
$pageDescription = 'Get in touch with Auctus Consultoria in Ribeirão Preto and request a diagnosis or quote for website creation, e-commerce, SaaS, or landing page focused on results.';
$pageKeywords = 'contact Auctus Consultoria, website quote, e-commerce quote, SaaS quote, IT consulting Ribeirão Preto, digital projects';
$pageUrl = 'https://www.auctusconsultoria.com.br/contact-en.php';
$pageBaseName = 'contact';
include 'templates/header.php';
?>

<main class="page page-contato">
    <section class="page-hero-image">
        <div class="page-hero-overlay"></div>
        <div class="page-hero-content container">
            <h1>Contact</h1>
            <p>Fill out the form or talk directly via WhatsApp.</p>
        </div>
    </section>

    <section class="section contact-section">
        <div class="container contact-container">
            <div class="contact-text">
                <h2>Talk to Auctus Consultoria</h2>
                <p>We will understand your current stage and propose the best digital solution for your business.</p>
                <ul class="contact-infos">
                    <li><strong>WhatsApp:</strong> <a href="https://wa.me/5535999187047" target="_blank">+55 (35) 99918-7047</a></li>
                    <li><strong>Email:</strong> contato@auctusconsultoria.com.br</li>
                    <li><strong>Business Hours:</strong> Monday to Friday, from 9:00 a.m. to 6:00 p.m. (BRT)</li>
                    <li><strong>Location:</strong> Ribeirão Preto - São Paulo, Brazil</li>
                </ul>
            </div>

            <div class="contact-form-wrapper">
                <?php
                if (isset($_GET['success'])) {
                    echo '<div class="alert alert-success">✓ Message sent successfully! We will get back to you soon.</div>';
                }
                if (isset($_GET['error'])) {
                    $error = $_GET['error'];
                    if ($error == 'required_fields') {
                        echo '<div class="alert alert-error">✗ Please fill in all required fields.</div>';
                    } elseif ($error == 'invalid_email') {
                        echo '<div class="alert alert-error">✗ Please provide a valid email address.</div>';
                    } elseif ($error == 'send_error') {
                        echo '<div class="alert alert-error">✗ Error sending message. Please try again or contact us via WhatsApp.</div>';
                    }
                }
                ?>
                <form action="send-contact-en.php" method="POST" class="contact-form">
                    <div class="form-group">
                        <label for="nome">Name*</label>
                        <input type="text" id="nome" name="nome" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email*</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="telefone">Phone / WhatsApp</label>
                        <input type="text" id="telefone" name="telefone">
                    </div>
                    <div class="form-group">
                        <label for="servico">What do you need?</label>
                        <select id="servico" name="servico">
                            <option value="">Select</option>
                            <option value="site">Website Creation</option>
                            <option value="ecommerce">E-commerce</option>
                            <option value="saas">SaaS / Web System</option>
                            <option value="landing-page">Landing Page</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="mensagem">Message*</label>
                        <textarea id="mensagem" name="mensagem" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Send message</button>
                </form>
            </div>
        </div>
    </section>
</main>

<?php include 'templates/footer.php'; ?>