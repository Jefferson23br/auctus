<?php
$pageTitle = 'Habla con Auctus Consultoria en Ribeirão Preto | Presupuestos y Proyectos Digitales';
$pageDescription = 'Ponte en contacto con Auctus Consultoria en Ribeirão Preto y solicita un diagnóstico o presupuesto para la creación de sitio web, e-commerce, SaaS o landing page enfocados en resultados.';
$pageKeywords = 'contacto Auctus Consultoria, presupuesto creación de sitio web, presupuesto e-commerce, presupuesto SaaS, consultoría en TI Ribeirão Preto, proyectos digitales';
$pageUrl = 'https://www.auctusconsultoria.com.br/contacto-es.php';
$pageBaseName = 'contact';
include 'templates/header.php';
?>

<main class="page page-contato">
    <section class="page-hero-image">
        <div class="page-hero-overlay"></div>
        <div class="page-hero-content container">
            <h1>Contacto</h1>
            <p>Rellena el formulario o habla directamente por WhatsApp.</p>
        </div>
    </section>

    <section class="section contact-section">
        <div class="container contact-container">
            <div class="contact-text">
                <h2>Habla con Auctus Consultoria</h2>
                <p>Vamos a entender tu momento y proponer la mejor solución digital para tu negocio.</p>
                <ul class="contact-infos">
                    <li><strong>WhatsApp:</strong> <a href="https://wa.me/5535999187047" target="_blank">+55 (35) 99918-7047</a></li>
                    <li><strong>E-mail:</strong> contato@auctusconsultoria.com.br</li>
                    <li><strong>Atención:</strong> Lunes a Viernes, de 09:00 a 18:00 (hora de Brasil)</li>
                    <li><strong>Ubicación:</strong> Ribeirão Preto - São Paulo, Brasil</li>
                </ul>
            </div>

            <div class="contact-form-wrapper">
                <?php
                if (isset($_GET['exito'])) {
                    echo '<div class="alert alert-success">✓ ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.</div>';
                }
                if (isset($_GET['error'])) {
                    $error = $_GET['error'];
                    if ($error == 'campos_obligatorios') {
                        echo '<div class="alert alert-error">✗ Por favor, rellena todos los campos obligatorios.</div>';
                    } elseif ($error == 'email_invalido') {
                        echo '<div class="alert alert-error">✗ Por favor, indica un e-mail válido.</div>';
                    } elseif ($error == 'envio') {
                        echo '<div class="alert alert-error">✗ Error al enviar el mensaje. Intenta de nuevo o contáctanos por WhatsApp.</div>';
                    }
                }
                ?>
                <form action="enviar-contacto-es.php" method="POST" class="contact-form">
                    <div class="form-group">
                        <label for="nome">Nombre*</label>
                        <input type="text" id="nome" name="nome" required>
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail*</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="telefone">Teléfono / WhatsApp</label>
                        <input type="text" id="telefone" name="telefone">
                    </div>
                    <div class="form-group">
                        <label for="servico">¿Qué necesitas?</label>
                        <select id="servico" name="servico">
                            <option value="">Selecciona</option>
                            <option value="site">Creación de Sitio Web</option>
                            <option value="ecommerce">E-commerce</option>
                            <option value="saas">SaaS / Sistema Web</option>
                            <option value="landing-page">Landing Page</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="mensagem">Mensaje*</label>
                        <textarea id="mensagem" name="mensagem" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Enviar mensaje</button>
                </form>
            </div>
        </div>
    </section>
</main>

<?php include 'templates/footer.php'; ?>