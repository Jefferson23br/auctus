<?php
$pageTitle = 'Briefing de Projeto Digital | Auctus Consultoria';
$pageDescription = 'Formulário de briefing da Auctus Consultoria para entender seu projeto digital, objetivos e investimento disponível.';
$pageKeywords = 'briefing de projeto, orçamento site, orçamento landing page, orçamento SaaS, Auctus Consultoria';
$pageUrl = 'https://www.auctusconsultoria.com.br/briefing-projeto.php';
include 'templates/header.php';
?>

<main class="page page-briefing">
    <section class="page-hero-image">
        <div class="page-hero-overlay"></div>
        <div class="page-hero-content container">
            <h1>Briefing de Projeto</h1>
            <p>Preencha este formulário para entendermos seu momento e montar uma proposta alinhada ao seu objetivo.</p>
        </div>
    </section>

    <section class="section contact-section">
        <div class="container contact-container">
            <div class="contact-text">
                <h2>Conte para a Auctus o que voce precisa</h2>
                <p>Com estas respostas, conseguimos acelerar o diagnóstico inicial e sugerir a melhor estrategia para o seu negócio.</p>
                <ul class="contact-infos">
                    <li><strong>Tempo medio:</strong> 4 a 7 minutos</li>
                    <li><strong>Retorno:</strong> em até 1 dia util</li>
                    <li><strong>Canal preferencial:</strong> WhatsApp +55 (35) 99918-7047</li>
                </ul>
            </div>

            <div class="contact-form-wrapper">
                <form class="contact-form briefing-form" method="POST" action="#">
                    <fieldset class="briefing-fieldset">
                        <legend>Dados pessoais e da empresa</legend>

                        <div class="form-group">
                            <label for="nome">Nome completo*</label>
                            <input type="text" id="nome" name="nome" required>
                        </div>

                        <div class="form-group">
                            <label for="empresa">Empresa / marca*</label>
                            <input type="text" id="empresa" name="empresa" required>
                        </div>

                        <div class="form-group">
                            <label for="cargo">Seu cargo na empresa</label>
                            <input type="text" id="cargo" name="cargo" placeholder="Ex.: Proprietario(a), Diretor(a), Gestor(a)">
                        </div>

                        <div class="form-group">
                            <label for="email">E-mail corporativo*</label>
                            <input type="email" id="email" name="email" required>
                        </div>

                        <div class="form-group">
                            <label for="telefone">Telefone / WhatsApp*</label>
                            <input type="text" id="telefone" name="telefone" required>
                        </div>

                        <div class="form-group">
                            <label for="segmento">Segmento de atuação</label>
                            <input type="text" id="segmento" name="segmento" placeholder="Ex.: Clinica, Industria, Serviços, E-commerce">
                        </div>
                    </fieldset>

                    <fieldset class="briefing-fieldset">
                        <legend>Contexto atual</legend>

                        <div class="form-group">
                            <label>Voce ja possui site hoje?*</label>
                            <div class="choice-inline">
                                <label class="choice-inline-item">
                                    <input type="radio" name="possui_site" value="sim" required>
                                    <span>Sim</span>
                                </label>
                                <label class="choice-inline-item">
                                    <input type="radio" name="possui_site" value="nao" required>
                                    <span>Nao</span>
                                </label>
                            </div>
                        </div>

                        <div class="form-group is-hidden" id="site-url-group">
                            <label for="site_url">Qual o link do site atual?</label>
                            <input type="url" id="site_url" name="site_url" placeholder="https://www.seusite.com.br">
                        </div>

                        <div class="form-group">
                            <label for="principal_objetivo">Principal objetivo do projeto*</label>
                            <select id="principal_objetivo" name="principal_objetivo" required>
                                <option value="">Selecione</option>
                                <option value="gerar-leads">Gerar mais leads qualificados</option>
                                <option value="vender-mais">Vender mais produtos/serviços</option>
                                <option value="reposicionamento">Reposicionar a marca</option>
                                <option value="automatizar-processos">Automatizar processos internos</option>
                                <option value="validar-ideia">Validar nova ideia/produto</option>
                                <option value="outro">Outro objetivo</option>
                            </select>
                        </div>

                        <div class="form-group is-hidden" id="objetivo-outro-group">
                            <label for="objetivo_outro">Descreva o objetivo</label>
                            <textarea id="objetivo_outro" name="objetivo_outro" rows="3"></textarea>
                        </div>
                    </fieldset>

                    <fieldset class="briefing-fieldset">
                        <legend>Serviços de interesse (multipla escolha)*</legend>
                        <p class="form-helper">Pode selecionar mais de uma opção.</p>

                        <div class="choice-grid">
                            <label class="choice-card">
                                <input type="checkbox" name="servicos[]" value="criacao-site" class="service-option">
                                <span>Criacao de Site</span>
                            </label>
                            <label class="choice-card">
                                <input type="checkbox" name="servicos[]" value="criacao-landing-page" class="service-option">
                                <span>Criacao de Landing Page</span>
                            </label>
                            <label class="choice-card">
                                <input type="checkbox" name="servicos[]" value="criacao-saas" class="service-option">
                                <span>Criacao de SaaS de Negocio</span>
                            </label>
                            <label class="choice-card">
                                <input type="checkbox" name="servicos[]" value="automacao-processos" class="service-option">
                                <span>Automacao de Processos Gerenciais</span>
                            </label>
                            <label class="choice-card">
                                <input type="checkbox" name="servicos[]" value="alteracao-site" class="service-option">
                                <span>Alteracao de Site</span>
                            </label>
                            <label class="choice-card">
                                <input type="checkbox" name="servicos[]" value="alteracao-landing-page" class="service-option">
                                <span>Alteracao de Landing Page</span>
                            </label>
                            <label class="choice-card">
                                <input type="checkbox" name="servicos[]" value="alteracao-saas" class="service-option">
                                <span>Alteracao de SaaS de Negocio</span>
                            </label>
                            <label class="choice-card">
                                <input type="checkbox" name="servicos[]" value="otimizacao-seo" class="service-option">
                                <span>Otimizacao de SEO</span>
                            </label>
                            <label class="choice-card">
                                <input type="checkbox" name="servicos[]" value="google-ads" class="service-option">
                                <span>Criacao e Estudos de Marketing no Google Ads</span>
                            </label>
                            <label class="choice-card">
                                <input type="checkbox" name="servicos[]" value="trafego-pago" class="service-option">
                                <span>Trafego Pago</span>
                            </label>
                            <label class="choice-card">
                                <input type="checkbox" name="servicos[]" value="outro" id="servico-outro-checkbox" class="service-option">
                                <span>Outro</span>
                            </label>
                        </div>

                        <div class="form-group is-hidden" id="servico-outro-group">
                            <label for="servico_outro_descricao">Descreva sua necessidade com suas palavras*</label>
                            <textarea id="servico_outro_descricao" name="servico_outro_descricao" rows="4"></textarea>
                        </div>
                    </fieldset>

                    <fieldset class="briefing-fieldset">
                        <legend>Investimento previsto*</legend>
                        <div class="choice-grid choice-grid-budget">
                            <label class="choice-card choice-card-radio">
                                <input type="radio" name="investimento" value="100-1000" required>
                                <span>R$ 100,00 a R$ 1.000,00</span>
                            </label>
                            <label class="choice-card choice-card-radio">
                                <input type="radio" name="investimento" value="1001-2000" required>
                                <span>R$ 1.001,00 a R$ 2.000,00</span>
                            </label>
                            <label class="choice-card choice-card-radio">
                                <input type="radio" name="investimento" value="2001-3000" required>
                                <span>R$ 2.001,00 a R$ 3.000,00</span>
                            </label>
                            <label class="choice-card choice-card-radio">
                                <input type="radio" name="investimento" value="3001-4000" required>
                                <span>R$ 3.001,00 a R$ 4.000,00</span>
                            </label>
                            <label class="choice-card choice-card-radio">
                                <input type="radio" name="investimento" value="4000-6000" required>
                                <span>R$ 4.000,00 a R$ 6.000,00</span>
                            </label>
                            <label class="choice-card choice-card-radio">
                                <input type="radio" name="investimento" value="acima-6000" required>
                                <span>Acima de R$ 6.000,00</span>
                            </label>
                            <label class="choice-card choice-card-radio">
                                <input type="radio" name="investimento" value="outro" id="investimento-outro-radio" required>
                                <span>Outro valor</span>
                            </label>
                        </div>

                        <div class="form-group is-hidden" id="investimento-outro-group">
                            <label for="investimento_outro">Informe o valor aproximado*</label>
                            <input type="text" id="investimento_outro" name="investimento_outro" placeholder="Ex.: R$ 7.500,00">
                        </div>
                    </fieldset>

                    <fieldset class="briefing-fieldset">
                        <legend>Prazos e observações</legend>

                        <div class="form-group">
                            <label for="prazo">Prazo esperado para iniciar</label>
                            <select id="prazo" name="prazo">
                                <option value="">Selecione</option>
                                <option value="imediato">Imediato (ate 15 dias)</option>
                                <option value="curto-prazo">Curto prazo (15 a 30 dias)</option>
                                <option value="medio-prazo">Medio prazo (1 a 3 meses)</option>
                                <option value="sem-prazo">Sem prazo definido</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="mensagem">Informações adicionais</label>
                            <textarea id="mensagem" name="mensagem" rows="4" placeholder="Se desejar, descreva detalhes importantes, referencias e expectativas."></textarea>
                        </div>
                    </fieldset>

                    <fieldset class="briefing-fieldset">
                        <legend>Termo LGPD*</legend>
                        <div class="lgpd-box">
                            <p>
                                Ao enviar este formulário, voce concorda com a coleta e tratamento dos dados pessoais informados pela Auctus Consultoria, para contato comercial, elaboração de proposta e acompanhamento da solicitação, conforme a Lei Geral de Proteção de Dados (Lei n 13.709/2018).
                            </p>
                            <p>
                                Os dados nao serao comercializados e serao utilizados somente para as finalidades descritas, podendo voce solicitar atualização ou exclusão a qualquer momento.
                            </p>
                            <label class="choice-inline-item lgpd-accept">
                                <input type="checkbox" name="aceite_lgpd" value="sim" required>
                                <span>Li e aceito o termo de compartilhamento e tratamento de dados pessoais.</span>
                            </label>
                        </div>
                    </fieldset>

                    <button type="submit" class="btn btn-primary btn-block">Enviar briefing</button>
                </form>
            </div>
        </div>
    </section>
</main>

<script>
document.addEventListener('DOMContentLoaded', function () {
    const siteRadios = document.querySelectorAll('input[name="possui_site"]');
    const siteUrlGroup = document.getElementById('site-url-group');
    const siteUrlInput = document.getElementById('site_url');

    const objetivoSelect = document.getElementById('principal_objetivo');
    const objetivoOutroGroup = document.getElementById('objetivo-outro-group');
    const objetivoOutroInput = document.getElementById('objetivo_outro');

    const servicoOutroCheckbox = document.getElementById('servico-outro-checkbox');
    const servicoOutroGroup = document.getElementById('servico-outro-group');
    const servicoOutroInput = document.getElementById('servico_outro_descricao');

    const investimentoRadios = document.querySelectorAll('input[name="investimento"]');
    const investimentoOutroGroup = document.getElementById('investimento-outro-group');
    const investimentoOutroInput = document.getElementById('investimento_outro');

    function toggleGroup(groupElement, inputElement, shouldShow, requiredWhenVisible) {
        if (!groupElement || !inputElement) {
            return;
        }

        groupElement.classList.toggle('is-hidden', !shouldShow);

        if (requiredWhenVisible) {
            inputElement.required = shouldShow;
        }

        if (!shouldShow) {
            inputElement.value = '';
        }
    }

    function handleSiteGroup() {
        const selected = document.querySelector('input[name="possui_site"]:checked');
        const show = selected && selected.value === 'sim';
        toggleGroup(siteUrlGroup, siteUrlInput, show, false);
    }

    function handleObjetivoOutro() {
        const show = objetivoSelect && objetivoSelect.value === 'outro';
        toggleGroup(objetivoOutroGroup, objetivoOutroInput, show, false);
    }

    function handleServicoOutro() {
        const show = servicoOutroCheckbox && servicoOutroCheckbox.checked;
        toggleGroup(servicoOutroGroup, servicoOutroInput, show, true);
    }

    function handleInvestimentoOutro() {
        const selected = document.querySelector('input[name="investimento"]:checked');
        const show = selected && selected.value === 'outro';
        toggleGroup(investimentoOutroGroup, investimentoOutroInput, show, true);
    }

    siteRadios.forEach(function (radio) {
        radio.addEventListener('change', handleSiteGroup);
    });

    if (objetivoSelect) {
        objetivoSelect.addEventListener('change', handleObjetivoOutro);
    }

    if (servicoOutroCheckbox) {
        servicoOutroCheckbox.addEventListener('change', handleServicoOutro);
    }

    investimentoRadios.forEach(function (radio) {
        radio.addEventListener('change', handleInvestimentoOutro);
    });

    handleSiteGroup();
    handleObjetivoOutro();
    handleServicoOutro();
    handleInvestimentoOutro();
});
</script>

<?php include 'templates/footer.php'; ?>
