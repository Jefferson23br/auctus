<?php
$pageTitle = 'Contact Auctus Consulting | Digital Projects and Proposals';
$pageDescription = 'Get in touch with Auctus Consulting and request a diagnosis or quote for website, e-commerce, SaaS or landing page projects focused on results.';
$pageKeywords = 'contact Auctus, website quote, e-commerce quote, SaaS quote, technology consulting Brazil';
$pageUrl = 'https://www.auctusconsultoria.com.br/en/contact.php';
include 'header-en.php';
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
                <h2>Talk to Auctus Consulting</h2>
                <p>We’ll understand your current situation and propose the best digital solution for your business.</p>
                <ul class="contact-infos">
                    <li><strong>WhatsApp:</strong> <a href="https://wa.me/5535999187047" target="_blank">+55 (35) 99918-7047</a></li>
                    <li><strong>Email:</strong> contact@auctusconsultoria.com.br</li>
                    <li><strong>Service hours:</strong> Monday to Friday, 9am to 6pm (BRT)</li>
                    <li><strong>Location:</strong> Ribeirão Preto - São Paulo, Brazil</li>
                </ul>
            </div>

            <div class="contact-form-wrapper">
                <?php
                if (isset($_GET['success'])) {
                    echo '<div class="alert alert-success">✓ Message sent successfully! We will get back to you shortly.</div>';
                }
                if (isset($_GET['error'])) {
                    $error = $_GET['error'];
                    if ($error == 'required_fields') {
                        echo '<div class="alert alert-error">✗ Please fill in all required fields.</div>';
                    } elseif ($error == 'invalid_email') {
                        echo '<div class="alert alert-error">✗ Please provide a valid email address.</div>';
                    } elseif ($error == 'send') {
                        echo '<div class="alert alert-error">✗ Error sending message. Please try again or contact us via WhatsApp.</div>';
                    }
                }
                ?>

                <form action="send-contact-en.php" method="POST" class="contact-form">
                    <div class="form-group">
                        <label for="name">Name*</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email*</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone / WhatsApp</label>
                        <input type="text" id="phone" name="phone">
                    </div>
                    <div class="form-group">
                        <label for="service">What do you need?</label>
                        <select id="service" name="service">
                            <option value="">Select</option>
                            <option value="site">Website development</option>
                            <option value="ecommerce">E-commerce</option>
                            <option value="saas">SaaS / Web System</option>
                            <option value="landing-page">Landing Page</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="message">Message*</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block">Send message</button>
                </form>
            </div>
        </div>
    </section>
</main>

<?php include 'footer-en.php'; ?>