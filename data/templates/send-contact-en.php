<?php
$destinationEmail = "contato@auctusconsultoria.com.br";
$senderEmail      = "jeffersonlima@auctusconsultoria.com.br";

$name    = $_POST['name']   ?? '';
$email   = $_POST['email']  ?? '';
$phone   = $_POST['phone']  ?? '';
$service = $_POST['service'] ?? '';
$message = $_POST['message'] ?? '';

if (empty($name) || empty($email) || empty($message)) {
    header("Location: contact-en.php?error=required_fields");
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: contact-en.php?error=invalid_email");
    exit;
}

switch ($service) {
    case 'site':
        $serviceText = 'Website development';
        break;
    case 'ecommerce':
        $serviceText = 'E-commerce';
        break;
    case 'saas':
        $serviceText = 'SaaS / Web System';
        break;
    case 'landing-page':
        $serviceText = 'Landing Page';
        break;
    case 'other':
        $serviceText = 'Other';
        break;
    default:
        $serviceText = 'Not informed';
}

$subject = "New contact from website (EN) - Auctus Consulting";

$body  = "=== NEW CONTACT RECEIVED FROM WEBSITE (EN) ===\n\n";
$body .= "Name: {$name}\n";
$body .= "Email: {$email}\n";
$body .= "Phone/WhatsApp: " . ($phone ?: 'Not informed') . "\n";
$body .= "Service of interest: {$serviceText}\n\n";
$body .= "Message:\n";
$body .= "----\n";
$body .= "{$message}\n";
$body .= "----\n\n";
$body .= "Date/Time: " . date('d/m/Y H:i:s') . "\n";

$headers  = "From: Auctus Consulting <{$senderEmail}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($destinationEmail, $subject, $body, $headers)) {
    header("Location: thank-you-en.php");
    exit;
} else {
    header("Location: contact-en.php?error=send");
    exit;
}
?>