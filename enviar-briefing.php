<?php
$emailDestino = "contato@auctusconsultoria.com.br";
$emailRemetente = "jeffersonlima@auctusconsultoria.com.br";

$nome = trim($_POST['nome'] ?? '');
$empresa = trim($_POST['empresa'] ?? '');
$cargo = trim($_POST['cargo'] ?? '');
$email = trim($_POST['email'] ?? '');
$telefone = trim($_POST['telefone'] ?? '');
$segmento = trim($_POST['segmento'] ?? '');
$possuiSite = trim($_POST['possui_site'] ?? '');
$siteUrl = trim($_POST['site_url'] ?? '');
$principalObjetivo = trim($_POST['principal_objetivo'] ?? '');
$objetivoOutro = trim($_POST['objetivo_outro'] ?? '');
$servicos = $_POST['servicos'] ?? [];
$servicoOutroDescricao = trim($_POST['servico_outro_descricao'] ?? '');
$investimento = trim($_POST['investimento'] ?? '');
$investimentoOutro = trim($_POST['investimento_outro'] ?? '');
$prazo = trim($_POST['prazo'] ?? '');
$mensagem = trim($_POST['mensagem'] ?? '');
$aceiteLgpd = trim($_POST['aceite_lgpd'] ?? '');

if (
    $nome === '' ||
    $empresa === '' ||
    $email === '' ||
    $telefone === '' ||
    $principalObjetivo === '' ||
    $investimento === ''
) {
    header("Location: briefing-projeto.php?erro=campos_obrigatorios");
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: briefing-projeto.php?erro=email_invalido");
    exit;
}

if (!is_array($servicos) || count($servicos) === 0) {
    header("Location: briefing-projeto.php?erro=servico_obrigatorio");
    exit;
}

if ($aceiteLgpd !== 'sim') {
    header("Location: briefing-projeto.php?erro=lgpd_obrigatorio");
    exit;
}

$mapaServicos = [
    'criacao-site' => 'Criacao de Site',
    'criacao-landing-page' => 'Criacao de Landing Page',
    'criacao-saas' => 'Criacao de SaaS de Negocio',
    'automacao-processos' => 'Automacao de Processos Gerenciais',
    'alteracao-site' => 'Alteracao de Site',
    'alteracao-landing-page' => 'Alteracao de Landing Page',
    'alteracao-saas' => 'Alteracao de SaaS de Negocio',
    'otimizacao-seo' => 'Otimizacao de SEO',
    'google-ads' => 'Criacao e Estudos de Marketing no Google Ads',
    'trafego-pago' => 'Trafego Pago',
    'outro' => 'Outro'
];

$mapaObjetivos = [
    'gerar-leads' => 'Gerar mais leads qualificados',
    'vender-mais' => 'Vender mais produtos/servicos',
    'reposicionamento' => 'Reposicionar a marca',
    'automatizar-processos' => 'Automatizar processos internos',
    'validar-ideia' => 'Validar nova ideia/produto',
    'outro' => 'Outro objetivo'
];

$mapaInvestimento = [
    '100-1000' => 'R$ 100,00 a R$ 1.000,00',
    '1001-2000' => 'R$ 1.001,00 a R$ 2.000,00',
    '2001-3000' => 'R$ 2.001,00 a R$ 3.000,00',
    '3001-4000' => 'R$ 3.001,00 a R$ 4.000,00',
    '4000-6000' => 'R$ 4.000,00 a R$ 6.000,00',
    'acima-6000' => 'Acima de R$ 6.000,00',
    'outro' => 'Outro valor'
];

$mapaPrazo = [
    'imediato' => 'Imediato (ate 15 dias)',
    'curto-prazo' => 'Curto prazo (15 a 30 dias)',
    'medio-prazo' => 'Medio prazo (1 a 3 meses)',
    'sem-prazo' => 'Sem prazo definido'
];

$servicosTexto = [];
foreach ($servicos as $codigoServico) {
    if (isset($mapaServicos[$codigoServico])) {
        $servicosTexto[] = $mapaServicos[$codigoServico];
    }
}

$objetivoTexto = $mapaObjetivos[$principalObjetivo] ?? $principalObjetivo;
$investimentoTexto = $mapaInvestimento[$investimento] ?? $investimento;
$prazoTexto = $mapaPrazo[$prazo] ?? 'Nao informado';

$assunto = "Novo briefing de projeto - Auctus Consultoria";

$corpo = "=== NOVO BRIEFING RECEBIDO ===\n\n";
$corpo .= "Nome: {$nome}\n";
$corpo .= "Empresa/Marca: {$empresa}\n";
$corpo .= "Cargo: " . ($cargo !== '' ? $cargo : 'Nao informado') . "\n";
$corpo .= "E-mail: {$email}\n";
$corpo .= "Telefone/WhatsApp: {$telefone}\n";
$corpo .= "Segmento: " . ($segmento !== '' ? $segmento : 'Nao informado') . "\n\n";

$corpo .= "=== CONTEXTO ===\n";
$corpo .= "Possui site hoje?: " . ($possuiSite === 'sim' ? 'Sim' : 'Nao') . "\n";
$corpo .= "URL do site atual: " . ($siteUrl !== '' ? $siteUrl : 'Nao informado') . "\n";
$corpo .= "Objetivo principal: {$objetivoTexto}\n";
if ($principalObjetivo === 'outro') {
    $corpo .= "Descricao do objetivo: " . ($objetivoOutro !== '' ? $objetivoOutro : 'Nao informado') . "\n";
}
$corpo .= "\n";

$corpo .= "=== SERVICOS DE INTERESSE ===\n";
$corpo .= count($servicosTexto) > 0 ? "- " . implode("\n- ", $servicosTexto) . "\n" : "Nenhum servico informado\n";
if (in_array('outro', $servicos, true)) {
    $corpo .= "Descricao de outro servico: " . ($servicoOutroDescricao !== '' ? $servicoOutroDescricao : 'Nao informado') . "\n";
}
$corpo .= "\n";

$corpo .= "=== INVESTIMENTO E PRAZO ===\n";
$corpo .= "Faixa de investimento: {$investimentoTexto}\n";
if ($investimento === 'outro') {
    $corpo .= "Outro valor informado: " . ($investimentoOutro !== '' ? $investimentoOutro : 'Nao informado') . "\n";
}
$corpo .= "Prazo para iniciar: {$prazoTexto}\n\n";

$corpo .= "Informacoes adicionais:\n";
$corpo .= "----------------------------------------\n";
$corpo .= ($mensagem !== '' ? $mensagem : 'Nao informado') . "\n";
$corpo .= "----------------------------------------\n\n";

$corpo .= "Aceite LGPD: Sim\n";
$corpo .= "Data/Hora: " . date('d/m/Y H:i:s') . "\n";

$headers = "From: Auctus Consultoria <{$emailRemetente}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($emailDestino, $assunto, $corpo, $headers)) {
    header("Location: obrigado.php");
    exit;
}

header("Location: briefing-projeto.php?erro=envio");
exit;
?>
