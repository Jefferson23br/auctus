<?php
$emailDestino = "contato@auctusconsultoria.com.br"; 
$emailRemetente = "jeffersonlima@auctusconsultoria.com.br"; 

$nome     = $_POST['nome'] ?? '';
$email    = $_POST['email'] ?? '';
$telefone = $_POST['telefone'] ?? '';
$servico  = $_POST['servico'] ?? '';
$mensagem = $_POST['mensagem'] ?? '';

if (empty($nome) || empty($email) || empty($mensagem)) {
    header("Location: contact-en.php?error=required_fields");
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: contact-en.php?error=invalid_email");
    exit;
}

$servicoTexto = $servico;
switch($servico) {
    case 'site':
        $servicoTexto = 'Website Creation';
        break;
    case 'ecommerce':
        $servicoTexto = 'E-commerce';
        break;
    case 'saas':
        $servicoTexto = 'SaaS / Web System';
        break;
    case 'landing-page':
        $servicoTexto = 'Landing Page';
        break;
    case 'other':
        $servicoTexto = 'Other';
        break;
    default:
        $servicoTexto = 'Not informed';
}

$assunto = "New contact from website - Auctus Consultoria (EN)";

$corpo = "=== NEW CONTACT RECEIVED FROM WEBSITE (ENGLISH) ===\n\n";
$corpo .= "Name: {$nome}\n";
$corpo .= "Email: {$email}\n";
$corpo .= "Phone/WhatsApp: " . ($telefone ?: 'Not informed') . "\n";
$corpo .= "Service of interest: {$servicoTexto}\n\n";
$corpo .= "Message:\n";
$corpo .= "----------------------------------------\n";
$corpo .= "{$mensagem}\n";
$corpo .= "----------------------------------------\n\n";
$corpo .= "Date/Time: " . date('m/d/Y H:i:s') . "\n";

$headers  = "From: Auctus Consultoria <{$emailRemetente}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($emailDestino, $assunto, $corpo, $headers)) {
    ?>
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <!-- Event snippet for Enviar formulário de lead conversion page -->
        <script>
          gtag('event', 'conversion', {'send_to': 'AW-17742202169/GZ2_CMTmo8MbELmKkoxC'});
        </script>
    </head>
    <body>
        <script>
            window.location.href = 'contact-en.php?success=1';
        </script>
    </body>
    </html>
    <?php
    exit;
} else {
    header("Location: contact-en.php?error=send_error");
    exit;
}
?>