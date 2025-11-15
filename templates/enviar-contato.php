<?php
$emailDestino = "contato@auctusconsultoria.com.br"; 
$emailRemetente = "jeffersonlima@auctusconsultoria.com.br"; 


$nome     = $_POST['nome'] ?? '';
$email    = $_POST['email'] ?? '';
$telefone = $_POST['telefone'] ?? '';
$servico  = $_POST['servico'] ?? '';
$mensagem = $_POST['mensagem'] ?? '';

if (empty($nome) || empty($email) || empty($mensagem)) {
    header("Location: contato.php?erro=campos_obrigatorios");
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: contato.php?erro=email_invalido");
    exit;
}

$servicoTexto = $servico;
switch($servico) {
    case 'site':
        $servicoTexto = 'Criação de Site';
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
    case 'outro':
        $servicoTexto = 'Outro';
        break;
    default:
        $servicoTexto = 'Não informado';
}

$assunto = "Novo contato pelo site - Auctus Consultoria";

$corpo = "=== NOVO CONTATO RECEBIDO PELO SITE ===\n\n";
$corpo .= "Nome: {$nome}\n";
$corpo .= "E-mail: {$email}\n";
$corpo .= "Telefone/WhatsApp: " . ($telefone ?: 'Não informado') . "\n";
$corpo .= "Serviço de interesse: {$servicoTexto}\n\n";
$corpo .= "Mensagem:\n";
$corpo .= "----------------------------------------\n";
$corpo .= "{$mensagem}\n";
$corpo .= "----------------------------------------\n\n";
$corpo .= "Data/Hora: " . date('d/m/Y H:i:s') . "\n";

$headers  = "From: Auctus Consultoria <{$emailRemetente}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($emailDestino, $assunto, $corpo, $headers)) {
    header("Location: contato.php?sucesso=1");
    exit;
} else {
    header("Location: contato.php?erro=envio");
    exit;
}
?>