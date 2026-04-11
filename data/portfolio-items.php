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
];
