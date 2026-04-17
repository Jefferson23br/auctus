<?php
/**
 * Cases do portfólio (PT). Incluir em portfolio.php e na home.
 *
 * Por item:
 * - stacks: lista de ['name' => '...', 'icon' => 'caminho.svg'] (preferido)
 * - ou legado: stack + stack_icon (um só)
 * - url vazio = projeto sem link público (ex.: em desenvolvimento)
 */
$portfolioItems = [
    [
        'title'   => 'Dr. Camila Capeli',
        'url'     => 'https://www.dracamilacapeli.com.br',
        'summary' => 'Dra. Camila Capeli - Biomédica Esteta CRBM1-58168, especialista em Harmonização Íntima Masculina e Feminina, Harmonização Facial, Rinomodelação, Laser CO2, Laser Laviien, Botox e Bioestimuladores de Colágeno. Mais de 40 cursos. Clínica própria em Ribeirão Preto - SP. Procedimentos não invasivos com resultados naturais. Atendimento em todo Brasil.',
        'image'   => 'assets/images/portfolio/dr-camila-capeli.webp',
        'tag'     => 'Landing Page',
        'year'    => 2025,
        'stack'   => 'React.js',
        'stack_icon' => 'assets/images/stacks/react.svg',
    ],
    [
        'title'   => 'Plataforma Integrada de Gestão Agrícola (Web e Mobile)',
        'url'     => '',
        'summary' => 'Plataforma SaaS para o agronegócio, com foco em centralizar informações críticas do campo. Oferece ao produtor uma ferramenta unificada para controle de terras, gestão de lavouras e rastreamento do histórico de produtividade safra após safra. Idealizada e desenvolvida para web e mobile.',
        'image'   => 'assets/images/portfolio/gestao-agricola.webp',
        'tag'     => 'SaaS · Agronegócio',
        'year'    => 2025,
        'stacks'  => [
            ['name' => 'Node.js', 'icon' => 'assets/images/stacks/nodejs.svg'],
            ['name' => 'React.js', 'icon' => 'assets/images/stacks/react.svg'],
            ['name' => 'Flutter', 'icon' => 'assets/images/stacks/flutter.svg'],
            ['name' => 'PostgreSQL', 'icon' => 'assets/images/stacks/postgresql.svg'],
        ],
    ],
    [
        'title'   => 'PCP Premium Produção',
        'url'     => 'https://api4.auctusconsultoria.com.br',
        'summary' => 'Sistema de PCP (Planejamento e Controle da Produção) que modernizou operação industrial: da base legada em VBA e Excel para uma plataforma SaaS full-stack com API em Node.js e Express, PostgreSQL e interface web em React. Cobre cadastros industriais, ordens de produção com roteiros, dashboard Kanban, Gantt operacional, monitor para chão de fábrica e relatórios gerenciais (incluindo OEE), com autenticação JWT, exportação e deploy orientado a produção (PM2 e Nginx).',
        'image'   => 'assets/images/portfolio/pcp-premium-producao.webp',
        'tag'     => 'SaaS · PCP · Indústria',
        'year'    => 2026,
        'stacks'  => [
            ['name' => 'Node.js', 'icon' => 'assets/images/stacks/nodejs.svg'],
            ['name' => 'Express', 'icon' => ''],
            ['name' => 'PostgreSQL', 'icon' => 'assets/images/stacks/postgresql.svg'],
            ['name' => 'React.js', 'icon' => 'assets/images/stacks/react.svg'],
        ],
    ],
    [
        'title'   => 'FakeGps Simulator',
        'url'     => 'https://play.google.com/store/apps/details?id=com.fakegpsfakesimulator',
        'url_label' => 'Android',
        'summary' => 'Aplicativo Android para simular deslocamento GPS em rota real entre dois pontos, com controle de velocidade e atualização progressiva da localização do dispositivo. Permite selecionar origem e destino no mapa, traçar rota e executar simulação em foreground service com notificação persistente.',
        'image'   => 'assets/images/portfolio/fakegps-simulator.webp',
        'tag'     => 'App Mobile · Localização',
        'year'    => 2026,
        'stacks'  => [
            ['name' => 'Kotlin', 'icon' => ''],
            ['name' => 'Android', 'icon' => ''],
            ['name' => 'Jetpack Compose', 'icon' => ''],
            ['name' => 'Firebase', 'icon' => ''],
        ],
    ],
    [
        'title'   => 'Reembolso de Quilometragem',
        'url'     => 'https://auctusconsultoria.com.br/Reembolso-Km/frontend/Reembolso.html',
        'url_label' => 'Site',
        'secondary_url' => 'https://play.google.com/store/apps/details?id=com.jefferson23br.ReembolsoKm&pcampaignid=web_share',
        'secondary_url_label' => 'Android',
        'summary' => 'Plataforma web e mobile para gestao de reembolso por quilometragem, com dashboard por periodo, cadastro de veiculos, lancamento de viagens e despesas com comprovantes, controle de pagamentos e relatorios prontos para impressao/PDF.',
        'image'   => 'assets/images/portfolio/reembolso-km.webp',
        'tag'     => 'Web + App Mobile · Financas',
        'year'    => 2026,
        'stacks'  => [
            ['name' => 'React Native', 'icon' => 'assets/images/stacks/react.svg'],
            ['name' => 'Expo', 'icon' => ''],
            ['name' => 'JavaScript', 'icon' => ''],
            ['name' => 'Node.js', 'icon' => 'assets/images/stacks/nodejs.svg'],
        ],
    ],
];
