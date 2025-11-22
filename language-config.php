<?php
// Detecta o idioma atual baseado na URL ou sessão
function getCurrentLanguage() {
    if (isset($_GET['lang'])) {
        $lang = $_GET['lang'];
        $_SESSION['lang'] = $lang;
        return $lang;
    }
    
    if (isset($_SESSION['lang'])) {
        return $_SESSION['lang'];
    }
    
    // Detecta pelo nome do arquivo
    $currentFile = basename($_SERVER['PHP_SELF']);
    if (strpos($currentFile, '-en.php') !== false) {
        return 'en';
    } elseif (strpos($currentFile, '-es.php') !== false) {
        return 'es';
    }
    
    return 'pt'; // Padrão português
}

// Retorna URLs alternativas para o mesmo conteúdo
function getAlternateUrls($basePage) {
    $baseUrl = 'https://www.auctusconsultoria.com.br/';
    return [
        'pt' => $baseUrl . $basePage . '.php',
        'en' => $baseUrl . $basePage . '-en.php',
        'es' => $baseUrl . $basePage . '-es.php'
    ];
}

// Configuração de idiomas
$languages = [
    'pt' => [
        'code' => 'pt-BR',
        'name' => 'Português',
        'flag' => '🇧🇷'
    ],
    'en' => [
        'code' => 'en-US',
        'name' => 'English',
        'flag' => '🇺🇸'
    ],
    'es' => [
        'code' => 'es-ES',
        'name' => 'Español',
        'flag' => '🇪🇸'
    ]
];

$currentLang = getCurrentLanguage();
?>