<?php
$emailDestino = "contato@auctusconsultoria.com.br"; 
$emailRemetente = "jeffersonlima@auctusconsultoria.com.br"; 

$nome     = $_POST['nome'] ?? '';
$email    = $_POST['email'] ?? '';
$telefone = $_POST['telefone'] ?? '';
$servico  = $_POST['servico'] ?? '';
$mensagem = $_POST['mensagem'] ?? '';

if (empty($nome) || empty($email) || empty($mensagem)) {
    header("Location: contacto-es.php?error=campos_obligatorios");
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: contacto-es.php?error=email_invalido");
    exit;
}

$servicoTexto = $servico;
switch($servico) {
    case 'site':
        $servicoTexto = 'Creación de Sitio Web';
        break;
    case 'ecommerce':
        $servicoTexto = 'E-commerce';
        break;
    case 'saas':
        $servicoTexto = 'SaaS / Sistema Web';
        break;
    case 'landing-page':
        $servicoTexto = 'Landing Page';
        break;
    case 'otro':
        $servicoTexto = 'Otro';
        break;
    default:
        $servicoTexto = 'No informado';
}

$assunto = "Nuevo contacto desde el sitio web - Auctus Consultoria (ES)";

$corpo = "=== NUEVO CONTACTO RECIBIDO DESDE EL SITIO WEB (ESPAÑOL) ===\n\n";
$corpo .= "Nombre: {$nome}\n";
$corpo .= "E-mail: {$email}\n";
$corpo .= "Teléfono/WhatsApp: " . ($telefone ?: 'No informado') . "\n";
$corpo .= "Servicio de interés: {$servicoTexto}\n\n";
$corpo .= "Mensaje:\n";
$corpo .= "----------------------------------------\n";
$corpo .= "{$mensagem}\n";
$corpo .= "----------------------------------------\n\n";
$corpo .= "Fecha/Hora: " . date('d/m/Y H:i:s') . "\n";

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
            window.location.href = 'contacto-es.php?exito=1';
        </script>
    </body>
    </html>
    <?php
    exit;
} else {
    header("Location: contacto-es.php?error=envio");
    exit;
}
?>