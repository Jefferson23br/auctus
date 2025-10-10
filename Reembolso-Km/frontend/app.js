function initMap() {

    const options = {
        componentRestrictions: { country: "br" },
        strictBounds: false,
    };

    try {
        const saidaInput = document.getElementById("viagem-saida");
        const chegadaInput = document.getElementById("viagem-chegada");


        const autocompleteSaida = new google.maps.places.Autocomplete(saidaInput, options);
        const autocompleteChegada = new google.maps.places.Autocomplete(chegadaInput, options);

        // 2. Adicionamos um "ouvinte" para cada campo (ESTA É A MUDANÇA PRINCIPAL)
        // Este código só executa QUANDO o usuário CLICA em uma sugestão da lista.
        // Se ele não clicar em nada, o texto que ele digitou é mantido.
        autocompleteSaida.addListener('place_changed', () => {
            const place = autocompleteSaida.getPlace();
            // Se o local selecionado tiver um endereço formatado, usamos ele.
            if (place.formatted_address) {
                saidaInput.value = place.formatted_address;
            }
        });

        autocompleteChegada.addListener('place_changed', () => {
            const place = autocompleteChegada.getPlace();
            if (place.formatted_address) {
                chegadaInput.value = place.formatted_address;
            }
        });

    } catch (e) {
        console.error("Erro ao inicializar o Google Maps Autocomplete. Verifique a chave da API.", e);
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const mainContainer = document.getElementById('main-container');
    const dashboardArea = document.getElementById('dashboard-area');
    const messageArea = document.getElementById('message-area');
    const menuButtons = document.querySelectorAll('.dashboard-menu button');
    const views = document.querySelectorAll('.view');
    const pageTitle = document.getElementById('page-title');
    const dashboardTitle = document.getElementById('dashboard-title');
    
    const loginArea = document.getElementById('login-area');
    const registerArea = document.getElementById('register-area');
    const forgotPasswordArea = document.getElementById('forgot-password-area');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const logoutButton = document.getElementById('logoutButton');
    const loginTitle = document.getElementById('login-title');
    const showRegisterLink = document.getElementById('showRegister');
    const showForgotPasswordLink = document.getElementById('showForgotPassword');
    const showLoginFromRegisterLink = document.getElementById('showLoginFromRegister');
    const showLoginFromForgotLink = document.getElementById('showLoginFromForgot');

    const veiculoForm = document.getElementById('veiculoForm');
    const veiculosList = document.getElementById('veiculos-list');
    const editModal = document.getElementById('edit-veiculo-modal');
    const editForm = document.getElementById('editVeiculoForm');
    const cancelEditBtn = document.getElementById('cancel-edit-btn');
    
    const despesaForm = document.getElementById('despesaForm');
    const despesasasList = document.getElementById('despesas-list');
    const despesaVeiculoSelect = document.getElementById('despesa-veiculo-select');
    const despesaComprovanteFile = document.getElementById('despesa-comprovante-file');
    const despesaLinkComprovante = document.getElementById('despesa-link-comprovante');
    const editDespesaModal = document.getElementById('edit-despesa-modal');
    const editDespesaForm = document.getElementById('editDespesaForm');
    const cancelEditDespesaBtn = document.getElementById('cancel-edit-despesa-btn');
    const editDespesaComprovanteFile = document.getElementById('edit-despesa-comprovante-file');

    const pagamentoForm = document.getElementById('pagamentoForm');
    const viagensAPagarList = document.getElementById('viagens-a-pagar-list');
    const totalViagensSpan = document.getElementById('total-viagens-selecionadas');
    const valorTotalSpan = document.getElementById('valor-total-a-pagar');
    const selecionarTodasCheckbox = document.getElementById('selecionar-todas');

    const gerarRelatorioBtn = document.getElementById('gerar-relatorio-btn');
    const imprimirRelatorioBtn = document.getElementById('imprimir-relatorio-btn');
    const reportContent = document.getElementById('report-content');
    const reportDataInicio = document.getElementById('report-data-inicio');
    const reportDataFim = document.getElementById('report-data-fim');
    const relatorioSelect = document.getElementById('relatorio-select');
    
    const viagensFiltroDataInicio = document.getElementById('viagens-filtro-data-inicio');
    const viagensFiltroDataFim = document.getElementById('viagens-filtro-data-fim');
    const viagensFiltroStatus = document.getElementById('viagens-filtro-status');
    const viagensBtnFiltrar = document.getElementById('viagens-btn-filtrar');
    const viagensBtnPrev = document.getElementById('viagens-btn-prev');
    const viagensBtnNext = document.getElementById('viagens-btn-next');
    const viagensPageInfo = document.getElementById('viagens-page-info');
    const viagensLimitSelect = document.getElementById('viagens-limit-select');

    const despesasFiltroDataInicio = document.getElementById('despesas-filtro-data-inicio');
    const despesasFiltroDataFim = document.getElementById('despesas-filtro-data-fim');
    const despesasFiltroTipo = document.getElementById('despesas-filtro-tipo');
    const despesasFiltroStatus = document.getElementById('despesas-filtro-status');
    const despesasBtnFiltrar = document.getElementById('despesas-btn-filtrar');
    const despesasBtnPrev = document.getElementById('despesas-btn-prev');
    const despesasBtnNext = document.getElementById('despesas-btn-next');
    const despesasPageInfo = document.getElementById('despesas-page-info');
    const despesasLimitSelect = document.getElementById('despesas-limit-select');
 
    const viagemForm = document.getElementById('viagemForm');
    const viagemIdInput = document.getElementById('viagem-id');
    const viagemVeiculoSelect = document.getElementById('viagem-veiculo-select');
    const viagemDataInput = document.getElementById('viagem-data');
    const viagemKmInicialInput = document.getElementById('viagem-km-inicial');
    const viagemKmFinalInput = document.getElementById('viagem-km-final');
    const viagemDistanciaInput = document.getElementById('viagem-distancia');
    const viagemSaidaInput = document.getElementById('viagem-saida');
    const viagemChegadaInput = document.getElementById('viagem-chegada');
    const viagemDescricaoInput = document.getElementById('viagem-descricao');
    const preSalvarBtn = document.getElementById('presalvar-viagem-btn');
    const salvarBtn = document.getElementById('salvar-viagem-btn');
    const cancelarEdicaoBtn = document.getElementById('cancelar-edicao-viagem-btn');
    const rascunhoListDiv = document.getElementById('rascunho-viagens-list');

    const API_URL = 'https://api.auctusconsultoria.com.br'; 
    const CONFIG = { appName: "Reembolso de Km" };
 
    let viagensCurrentPage = 1;
    let viagensTotalPages = 1;
    let despesasCurrentPage = 1;
    let despesasTotalPages = 1;

    const showView = (viewId) => {
        views.forEach(view => view.style.display = 'none');
        const viewToShow = document.getElementById(viewId);
        if (viewToShow) { viewToShow.style.display = 'block'; }
        menuButtons.forEach(button => button.classList.toggle('active', button.dataset.view === viewId));
        
        if (viewId === 'view-home') fetchDashboardSummary();
        if (viewId === 'view-listar-veiculo') fetchVeiculos();
        if (viewId === 'view-lancar-km') {
            populateVeiculoSelect(viagemVeiculoSelect);
            resetViagemForm();
            fetchViagensRascunho();
        }
        if (viewId === 'view-listar-viagens') {
            viagensCurrentPage = 1; 
            fetchViagens();
        }
        if (viewId === 'view-lancar-despesa') populateVeiculoSelect(despesaVeiculoSelect);
        if (viewId === 'view-listar-despesas') {
            despesasCurrentPage = 1;
            fetchDespesas();
        }
        if (viewId === 'view-lancar-pagamento') fetchViagensAPagar();
    };
    
    const showAuthScreen = (screenToShow) => {
        loginArea.style.display = 'none';
        registerArea.style.display = 'none';
        forgotPasswordArea.style.display = 'none';
        if (screenToShow) {
            screenToShow.style.display = 'block';
        }
    };

    const showLogin = () => { 
        mainContainer.classList.add('container-login'); 
        mainContainer.classList.remove('container-app'); 
        dashboardArea.style.display = 'none'; 
        showAuthScreen(loginArea); 
    };

    const showDashboard = () => { 
        mainContainer.classList.remove('container-login'); 
        mainContainer.classList.add('container-app'); 
        loginArea.style.display = 'none'; 
        registerArea.style.display = 'none';
        forgotPasswordArea.style.display = 'none';
        dashboardArea.style.display = 'block'; 
        showView('view-home'); 
    };

    menuButtons.forEach(button => button.addEventListener('click', (event) => showView(event.target.dataset.view)));
    showRegisterLink.addEventListener('click', (event) => { event.preventDefault(); showAuthScreen(registerArea); });
    showForgotPasswordLink.addEventListener('click', (event) => { event.preventDefault(); showAuthScreen(forgotPasswordArea); });
    showLoginFromRegisterLink.addEventListener('click', (event) => { event.preventDefault(); showAuthScreen(loginArea); });
    showLoginFromForgotLink.addEventListener('click', (event) => { event.preventDefault(); showAuthScreen(loginArea); });

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        try {
            const response = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: emailInput.value, password: passwordInput.value })
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message);
            localStorage.setItem('token', data.token);
            messageArea.textContent = '';
            showDashboard();
        } catch (error) {
            messageArea.textContent = `Erro: ${error.message}`;
            messageArea.className = 'message error';
        }
    });

    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const nome = document.getElementById('register-nome').value;
        const email = document.getElementById('register-email').value;
        const senha = document.getElementById('register-password').value;
        try {
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, email, senha })
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message);
            messageArea.textContent = data.message;
            messageArea.className = 'message success';
            setTimeout(() => { showAuthScreen(loginArea); messageArea.textContent = ''; }, 2000);
        } catch (error) {
            messageArea.textContent = `Erro: ${error.message}`;
            messageArea.className = 'message error';
        }
    });

    forgotPasswordForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = document.getElementById('forgot-email').value;
        try {
            const response = await fetch(`${API_URL}/api/auth/forgot-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message);
            messageArea.textContent = data.message;
            messageArea.className = 'message success';
        } catch (error) {
            messageArea.textContent = `Erro: ${error.message}`;
            messageArea.className = 'message error';
        }
    });

    logoutButton.addEventListener('click', () => { 
        localStorage.removeItem('token'); 
        messageArea.textContent = 'Você saiu com sucesso.'; 
        messageArea.className = 'message success'; 
        showLogin(); 
    });

    const populateVeiculoSelect = async (selectElement) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`${API_URL}/api/veiculos`, { headers: { 'Authorization': `Bearer ${token}` } });
            if (!response.ok) throw new Error('Não foi possível carregar os veículos.');
            const veiculos = await response.json();
            selectElement.innerHTML = '<option value="">-- Selecione um Veículo --</option>';
            veiculos.forEach(veiculo => {
                const option = document.createElement('option');
                option.value = veiculo.id;
                option.textContent = `${veiculo.placa} (${veiculo.descricao})`;
                selectElement.appendChild(option);
            });
        } catch (error) {
            messageArea.textContent = `Erro: ${error.message}`;
        }
    };
    
    const fetchVeiculos = async () => {
        const token = localStorage.getItem('token');
        if (!token) { showLogin(); return; }
        try {
            const response = await fetch(`${API_URL}/api/veiculos`, { headers: { 'Authorization': `Bearer ${token}` } });
            if (response.status === 401) { localStorage.removeItem('token'); showLogin(); throw new Error('Sessão expirou.'); }
            if (!response.ok) throw new Error('Falha ao buscar veículos.');
            const veiculos = await response.json();
            veiculosList.innerHTML = '';
            if (veiculos.length === 0) {
                veiculosList.innerHTML = '<p>Nenhum veículo cadastrado.</p>';
            } else {
                veiculos.forEach(veiculo => {
                    const veiculoDiv = document.createElement('div');
                    veiculoDiv.className = 'veiculo-item';
                    const dataInicio = new Date(veiculo.data_inicio_aluguel).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                    const dataFim = veiculo.data_fim_aluguel ? new Date(veiculo.data_fim_aluguel).toLocaleDateString('pt-BR', { timeZone: 'UTC' }) : 'Em aberto';
                    veiculoDiv.innerHTML = `<div><strong>${veiculo.placa}</strong> (${veiculo.descricao})<br><small>Aluguel: ${dataInicio} - ${dataFim}</small></div><button class="edit-btn" data-id="${veiculo.id}">Editar</button>`;
                    veiculosList.appendChild(veiculoDiv);
                });
            }
        } catch (error) {
            messageArea.textContent = `Erro: ${error.message}`;
            messageArea.className = 'message error';
        }
    };

    veiculoForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        const data = {
            placa: document.getElementById('placa').value,
            descricao: document.getElementById('descricao').value,
            data_inicio_aluguel: document.getElementById('data_inicio_aluguel').value
        };
        try {
            const response = await fetch(`${API_URL}/api/veiculos`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.message);
            messageArea.textContent = 'Veículo cadastrado com sucesso!';
            messageArea.className = 'message success';
            veiculoForm.reset();
            showView('view-listar-veiculo'); 
        } catch (error) {
            messageArea.textContent = `Erro: ${error.message}`;
            messageArea.className = 'message error';
        }
    });

    veiculosList.addEventListener('click', async (event) => {
        if (event.target.classList.contains('edit-btn')) {
            const veiculoId = event.target.dataset.id;
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_URL}/api/veiculos`, { headers: { 'Authorization': `Bearer ${token}` }});
            const veiculos = await response.json();
            const veiculoParaEditar = veiculos.find(veiculo => veiculo.id == veiculoId);
            if (veiculoParaEditar) {
                document.getElementById('edit-veiculo-id').value = veiculoParaEditar.id;
                document.getElementById('edit-placa').value = veiculoParaEditar.placa;
                document.getElementById('edit-descricao').value = veiculoParaEditar.descricao;
                document.getElementById('edit-data_inicio_aluguel').value = new Date(veiculoParaEditar.data_inicio_aluguel).toISOString().split('T')[0];
                document.getElementById('edit-data_fim_aluguel').value = veiculoParaEditar.data_fim_aluguel ? new Date(veiculoParaEditar.data_fim_aluguel).toISOString().split('T')[0] : '';
                editModal.style.display = 'flex';
            }
        }
    });

    editForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        const veiculoId = document.getElementById('edit-veiculo-id').value;
        const updatedData = {
            placa: document.getElementById('edit-placa').value,
            descricao: document.getElementById('edit-descricao').value,
            data_inicio_aluguel: document.getElementById('edit-data_inicio_aluguel').value,
            data_fim_aluguel: document.getElementById('edit-data_fim_aluguel').value,
        };
        try {
            const response = await fetch(`${API_URL}/api/veiculos/${veiculoId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(updatedData)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message);
            editModal.style.display = 'none';
            fetchVeiculos();
            messageArea.textContent = 'Veículo atualizado com sucesso!';
            messageArea.className = 'message success';
        } catch (error) {
            messageArea.textContent = `Erro: ${error.message}`;
            messageArea.className = 'message error';
        }
    });

    cancelEditBtn.addEventListener('click', () => { editModal.style.display = 'none'; });

    const fetchViagensRascunho = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`${API_URL}/api/viagens/rascunho`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!response.ok) throw new Error('Falha ao buscar rascunhos.');
            
            const rascunhos = await response.json();
            rascunhoListDiv.innerHTML = '';

            if (rascunhos.length === 0) {
                rascunhoListDiv.innerHTML = '<p>Nenhuma viagem em rascunho.</p>';
                return;
            }

            rascunhos.forEach(rascunho => {
                const dataFormatada = new Date(rascunho.data_viagem).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                const itemDiv = document.createElement('div');
                itemDiv.className = 'rascunho-item';
                itemDiv.innerHTML = `
                    <div>
                        <strong>${dataFormatada} - ${rascunho.placa}</strong><br>
                        <small>${rascunho.descricao || 'Sem descrição'}</small>
                    </div>
                    <button class="edit-rascunho-btn" data-id="${rascunho.id}">Finalizar</button>
                `;
                rascunhoListDiv.appendChild(itemDiv);
            });
        } catch (error) {
            rascunhoListDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
        }
    };
    
    const populateViagemForm = (viagem) => {
        viagemIdInput.value = viagem.id;
        viagemVeiculoSelect.value = viagem.veiculo_id;
        viagemDataInput.value = new Date(viagem.data_viagem).toISOString().split('T')[0];
        viagemKmInicialInput.value = viagem.km_inicial || '';
        viagemKmFinalInput.value = viagem.km_final || '';
        viagemDistanciaInput.value = viagem.distancia_percorrida > 0 ? viagem.distancia_percorrida : '';
        viagemSaidaInput.value = viagem.local_saida || '';
        viagemChegadaInput.value = viagem.local_chegada || '';
        viagemDescricaoInput.value = viagem.descricao || '';
        
        salvarBtn.textContent = 'Salvar Viagem Final';
        preSalvarBtn.style.display = 'none';
        cancelarEdicaoBtn.style.display = 'block';
    };

    const resetViagemForm = () => {
        viagemForm.reset();
        viagemIdInput.value = '';
        salvarBtn.textContent = 'Registrar Viagem';
        preSalvarBtn.style.display = 'block';
        cancelarEdicaoBtn.style.display = 'none';
    };

    rascunhoListDiv.addEventListener('click', async (event) => {
        if (event.target.classList.contains('edit-rascunho-btn')) {
            const id = event.target.dataset.id;
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_URL}/api/viagens/rascunho`, { headers: { 'Authorization': `Bearer ${token}` } });
            const rascunhos = await response.json();
            const rascunhoParaEditar = rascunhos.find(rascunho => rascunho.id == id);
            
            if (rascunhoParaEditar) {
                populateViagemForm(rascunhoParaEditar);
            }
        }
    });

    cancelarEdicaoBtn.addEventListener('click', resetViagemForm);

    preSalvarBtn.addEventListener('click', async () => {
        const token = localStorage.getItem('token');
        const viagemData = {
            veiculo_id: viagemVeiculoSelect.value,
            data_viagem: viagemDataInput.value,
            km_inicial: viagemKmInicialInput.value,
            descricao: viagemDescricaoInput.value,
            isDraft: true 
        };

        if (!viagemData.veiculo_id || !viagemData.data_viagem) {
            messageArea.textContent = 'Selecione um veículo e uma data para pré-salvar.';
            messageArea.className = 'message error';
            return;
        }

        try {
            const response = await fetch(`${API_URL}/api/viagens`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
                body: JSON.stringify(viagemData)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message);

            messageArea.textContent = 'Rascunho salvo com sucesso!';
            messageArea.className = 'message success';
            resetViagemForm();
            fetchViagensRascunho(); 

        } catch (error) {
            messageArea.textContent = `Erro: ${error.message}`;
            messageArea.className = 'message error';
        }
    });

    viagemForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        
        const viagemData = {
            id: viagemIdInput.value || null,
            veiculo_id: viagemVeiculoSelect.value,
            data_viagem: viagemDataInput.value,
            distancia_percorrida: viagemDistanciaInput.value,
            local_saida: viagemSaidaInput.value,
            local_chegada: viagemChegadaInput.value,
            descricao: viagemDescricaoInput.value,
            km_inicial: viagemKmInicialInput.value,
            km_final: viagemKmFinalInput.value,
            isDraft: false
        };
        
        const method = viagemData.id ? 'PUT' : 'POST';
        const url = viagemData.id ? `${API_URL}/api/viagens/${viagemData.id}` : `${API_URL}/api/viagens`;

        try {
            const response = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
                body: JSON.stringify(viagemData)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message);

            messageArea.textContent = data.message;
            messageArea.className = 'message success';
            resetViagemForm();
            fetchViagensRascunho();
        } catch (error) {
            messageArea.textContent = `Erro: ${error.message}`;
            messageArea.className = 'message error';
        }
    });

    const fetchViagens = async () => {
        const token = localStorage.getItem('token');
        if (!token) { showLogin(); return; }
        
        const limit = viagensLimitSelect.value;
        const status = viagensFiltroStatus.value;
        const data_inicio = viagensFiltroDataInicio.value;
        const data_fim = viagensFiltroDataFim.value;
        
        const params = new URLSearchParams({ page: viagensCurrentPage, limit: limit });
        if (status) params.append('status', status);
        if (data_inicio) params.append('data_inicio', data_inicio);
        if (data_fim) params.append('data_fim', data_fim);

        try {
            const response = await fetch(`${API_URL}/api/viagens?${params.toString()}`, { 
                headers: { 'Authorization': `Bearer ${token}` } 
            });

            if (!response.ok) throw new Error('Falha ao buscar viagens.');
            
            const data = await response.json();
            const { viagens, totalItems, totalPages } = data;
            
            viagensTotalPages = totalPages;

            const viagensListElement = document.getElementById('viagens-list');
            viagensListElement.innerHTML = '';
            if (viagens.length === 0) {
                viagensListElement.innerHTML = '<p>Nenhuma viagem encontrada para os filtros selecionados.</p>';
            } else {
                viagens.forEach(viagem => {
                    const viagemDiv = document.createElement('div');
                    viagemDiv.className = 'viagem-item';
                    const dataViagem = new Date(viagem.data_viagem).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                    let statusClass = '';
                    switch (viagem.status_pagamento) {
                        case 'A Pagar': statusClass = 'status-apagar'; break;
                        case 'Pago': statusClass = 'status-pago'; viagemDiv.classList.add('pago'); break;
                        case 'Pago Parcial': statusClass = 'status-pago-parcial'; break;
                        default: statusClass = '';
                    }
                    viagemDiv.innerHTML = `
                        <div class="viagem-header">
                            <span>${dataViagem} - ${viagem.placa} (${Number(viagem.distancia_percorrida).toFixed(2)} km)</span>
                            <span class="status-badge ${statusClass}">${viagem.status_pagamento}</span>
                        </div>
                        <p class="viagem-details"><strong>Trajeto:</strong> ${viagem.local_saida || 'N/A'} → ${viagem.local_chegada || 'N/A'}</p>
                        <p class="viagem-details"><strong>Descrição:</strong> ${viagem.descricao || 'N/A'}</p>
                        <p class="viagem-details"><strong>Reembolso:</strong> R$ ${Number(viagem.valor_reembolso).toFixed(2)}</p>
                    `;
                    viagensListElement.appendChild(viagemDiv);
                });
            }
            updatePaginationControls();
        } catch (error) {
            messageArea.textContent = `Erro: ${error.message}`;
            messageArea.className = 'message error';
        }
    };
   
    const updatePaginationControls = () => {
        viagensPageInfo.textContent = `Página ${viagensCurrentPage} de ${viagensTotalPages}`;
        viagensBtnPrev.disabled = viagensCurrentPage <= 1;
        viagensBtnNext.disabled = viagensCurrentPage >= viagensTotalPages;
    };
    
    viagensBtnFiltrar.addEventListener('click', () => { viagensCurrentPage = 1; fetchViagens(); });
    viagensLimitSelect.addEventListener('change', () => { viagensCurrentPage = 1; fetchViagens(); });
    viagensBtnPrev.addEventListener('click', () => { if (viagensCurrentPage > 1) { viagensCurrentPage--; fetchViagens(); } });
    viagensBtnNext.addEventListener('click', () => { if (viagensCurrentPage < viagensTotalPages) { viagensCurrentPage++; fetchViagens(); } });
    
    despesaComprovanteFile.addEventListener('change', async (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const formData = new FormData();
        formData.append('comprovante', file);
        const token = localStorage.getItem('token');
        try {
            messageArea.textContent = 'Enviando comprovante...';
            messageArea.className = 'message';
            const response = await fetch(`${API_URL}/api/upload`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formData
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message);
            despesaLinkComprovante.value = data.filePath;
            messageArea.textContent = 'Comprovante anexado com sucesso!';
            messageArea.className = 'message success';
        } catch (error) {
            messageArea.textContent = `Erro no upload: ${error.message}`;
            messageArea.className = 'message error';
            despesaComprovanteFile.value = '';
        }
    });

    despesaForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        const valorComVirgula = document.getElementById('despesa-valor').value;
        const valorFormatado = valorComVirgula.replace(/\./g, '').replace(',', '.');
        const kmValue = document.getElementById('despesa-km').value;

        const despesaData = {
            veiculo_id: despesaVeiculoSelect.value,
            data_despesa: document.getElementById('despesa-data').value,
            tipo_despesa: document.getElementById('despesa-tipo').value,
            forma_pagamento: document.getElementById('despesa-forma-pagamento').value,
            valor: valorFormatado, 
            km: kmValue ? parseInt(kmValue, 10) : null, 
            status_pagamento: document.getElementById('despesa-status-pagamento').value,
            link_comprovante: despesaLinkComprovante.value,
            descricao: document.getElementById('despesa-descricao').value,
        };

        if (isNaN(parseFloat(despesaData.valor))) {
            messageArea.textContent = 'Erro: O valor da despesa é inválido.';
            messageArea.className = 'message error';
            return;
        }
        try {
            const response = await fetch(`${API_URL}/api/despesas`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
                body: JSON.stringify(despesaData)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message);
            messageArea.textContent = 'Despesa registrada com sucesso!';
            messageArea.className = 'message success';
            despesaForm.reset();
            despesaLinkComprovante.value = '';
            showView('view-listar-despesas');
        } catch (error) {
            messageArea.textContent = `Erro: ${error.message}`;
            messageArea.className = 'message error';
        }
    });

    const fetchDespesas = async () => {
        const token = localStorage.getItem('token');
        if (!token) { showLogin(); return; }

        const limit = despesasLimitSelect.value;
        const data_inicio = despesasFiltroDataInicio.value;
        const data_fim = despesasFiltroDataFim.value;
        const tipo = despesasFiltroTipo.value;
        const status = despesasFiltroStatus.value;

        const params = new URLSearchParams({ page: despesasCurrentPage, limit: limit });
        if (data_inicio) params.append('data_inicio', data_inicio);
        if (data_fim) params.append('data_fim', data_fim);
        if (tipo) params.append('tipo', tipo);
        if (status) params.append('status', status);

        try {
            const response = await fetch(`${API_URL}/api/despesas?${params.toString()}`, { 
                headers: { 'Authorization': `Bearer ${token}` } 
            });
            if (!response.ok) throw new Error('Falha ao buscar despesas.');
            
            const data = await response.json();
            const { despesas, totalItems, totalPages } = data;
            despesasTotalPages = totalPages;

            despesasasList.innerHTML = '';
            if (despesas.length === 0) {
                despesasasList.innerHTML = '<p>Nenhuma despesa encontrada para os filtros selecionados.</p>';
            } else {
                despesas.forEach(despesa => {
                    const itemDiv = document.createElement('div');
                    itemDiv.className = 'despesa-item';
                    const dataDespesa = new Date(despesa.data_despesa).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                    itemDiv.innerHTML = `
                        <div class="despesa-info">
                            <strong>${despesa.tipo_despesa}</strong> - ${despesa.placa}
                            <small>${dataDespesa} | ${despesa.forma_pagamento} | Status: ${despesa.status_pagamento}</small>
                        </div>
                        <strong class="despesa-valor">R$ ${Number(despesa.valor).toFixed(2)}</strong>
                        <div class="despesa-actions">
                            <button class="edit-despesa-btn" data-id="${despesa.id}">Editar</button>
                            <button class="delete-despesa-btn" data-id="${despesa.id}">Excluir</button>
                        </div>
                    `;
                    despesasasList.appendChild(itemDiv);
                });
            }
            updateDespesasPaginationControls();
        } catch (error) {
            messageArea.textContent = `Erro: ${error.message}`;
            messageArea.className = 'message error';
        }
    };
    
    const updateDespesasPaginationControls = () => {
        despesasPageInfo.textContent = `Página ${despesasCurrentPage} de ${despesasTotalPages}`;
        despesasBtnPrev.disabled = despesasCurrentPage <= 1;
        despesasBtnNext.disabled = despesasCurrentPage >= despesasTotalPages;
    };

    despesasBtnFiltrar.addEventListener('click', () => { despesasCurrentPage = 1; fetchDespesas(); });
    despesasLimitSelect.addEventListener('change', () => { despesasCurrentPage = 1; fetchDespesas(); });
    despesasBtnPrev.addEventListener('click', () => { if (despesasCurrentPage > 1) { despesasCurrentPage--; fetchDespesas(); } });
    despesasBtnNext.addEventListener('click', () => { if (despesasCurrentPage < despesasTotalPages) { despesasCurrentPage++; fetchDespesas(); } });

    despesasasList.addEventListener('click', async (event) => {
        const token = localStorage.getItem('token');
        if (event.target.classList.contains('delete-despesa-btn')) {
            const id = event.target.dataset.id;
            if (confirm('Tem certeza que deseja excluir esta despesa?')) {
                try {
                    const response = await fetch(`${API_URL}/api/despesas/${id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } });
                    const data = await response.json();
                    if (!response.ok) throw new Error(data.message);
                    messageArea.textContent = 'Despesa excluída com sucesso!';
                    messageArea.className = 'message success';
                    fetchDespesas();
                } catch (error) {
                    messageArea.textContent = `Erro: ${error.message}`;
                    messageArea.className = 'message error';
                }
            }
        }
        if (event.target.classList.contains('edit-despesa-btn')) {
            const id = event.target.dataset.id;
            const response = await fetch(`${API_URL}/api/despesas?page=1&limit=1000`, { headers: { 'Authorization': `Bearer ${token}` }});
            const data = await response.json();
            const despesaParaEditar = data.despesas.find(despesa => despesa.id == id);
            
            if (despesaParaEditar) {
                await populateVeiculoSelect(document.getElementById('edit-despesa-veiculo-select'));
                document.getElementById('edit-despesa-id').value = despesaParaEditar.id;
                document.getElementById('edit-despesa-veiculo-select').value = despesaParaEditar.veiculo_id;
                document.getElementById('edit-despesa-data').value = new Date(despesaParaEditar.data_despesa).toISOString().split('T')[0];
                document.getElementById('edit-despesa-tipo').value = despesaParaEditar.tipo_despesa;
                document.getElementById('edit-despesa-forma-pagamento').value = despesaParaEditar.forma_pagamento;
                document.getElementById('edit-despesa-valor').value = String(despesaParaEditar.valor).replace('.', ',');
                document.getElementById('edit-despesa-km').value = despesaParaEditar.km || '';
                document.getElementById('edit-despesa-status-pagamento').value = despesaParaEditar.status_pagamento;
                document.getElementById('edit-despesa-link-comprovante').value = despesaParaEditar.link_comprovante || '';
                document.getElementById('edit-despesa-descricao').value = despesaParaEditar.descricao || '';

                const previewContainer = document.getElementById('edit-comprovante-preview-container');
                if (despesaParaEditar.link_comprovante) {
                    const correctedPath = despesaParaEditar.link_comprovante.replace('/public', '');
                    const fullUrl = `${correctedPath}`; // CORRIGIDO
                    document.getElementById('edit-comprovante-preview-img').src = fullUrl;
                    document.getElementById('edit-comprovante-download-link').href = fullUrl;
                    previewContainer.style.display = 'block';
                } else {
                    previewContainer.style.display = 'none';
                }
                
                document.getElementById('edit-despesa-comprovante-file').value = '';
                editDespesaModal.style.display = 'flex';
            }
        }
    });
    
    editDespesaForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        const id = document.getElementById('edit-despesa-id').value;

        const valorComVirgula = document.getElementById('edit-despesa-valor').value;
        const valorFormatado = valorComVirgula.replace(/\./g, '').replace(',', '.');
        const kmValue = document.getElementById('edit-despesa-km').value;

        const despesaData = {
            veiculo_id: document.getElementById('edit-despesa-veiculo-select').value,
            data_despesa: document.getElementById('edit-despesa-data').value,
            tipo_despesa: document.getElementById('edit-despesa-tipo').value,
            forma_pagamento: document.getElementById('edit-despesa-forma-pagamento').value,
            valor: valorFormatado,
            km: kmValue ? parseInt(kmValue, 10) : null,
            status_pagamento: document.getElementById('edit-despesa-status-pagamento').value,
            link_comprovante: document.getElementById('edit-despesa-link-comprovante').value,
            descricao: document.getElementById('edit-despesa-descricao').value,
        };

        try {
            const response = await fetch(`${API_URL}/api/despesas/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(despesaData)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message);
            editDespesaModal.style.display = 'none';
            fetchDespesas();
            messageArea.textContent = 'Despesa atualizada com sucesso!';
            messageArea.className = 'message success';
        } catch (error) {
            messageArea.textContent = `Erro: ${error.message}`;
            messageArea.className = 'message error';
        }
    });

    editDespesaComprovanteFile.addEventListener('change', async (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const formData = new FormData();
        formData.append('comprovante', file);
        const token = localStorage.getItem('token');
        try {
            messageArea.textContent = 'Enviando novo comprovante...';
            messageArea.className = 'message';
            const response = await fetch(`${API_URL}/api/upload`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formData
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message);
            document.getElementById('edit-despesa-link-comprovante').value = data.filePath;
            const previewContainer = document.getElementById('edit-comprovante-preview-container');
            const correctedPath = data.filePath.replace('/public', '');
            const fullUrl = `${correctedPath}`; 
            document.getElementById('edit-comprovante-preview-img').src = fullUrl;
            document.getElementById('edit-comprovante-download-link').href = fullUrl;
            previewContainer.style.display = 'block';
            messageArea.textContent = 'Novo comprovante anexado com sucesso!';
            messageArea.className = 'message success';
        } catch (error) {
            messageArea.textContent = `Erro no upload: ${error.message}`;
            messageArea.className = 'message error';
            editDespesaComprovanteFile.value = ''; 
        }
    });

    cancelEditDespesaBtn.addEventListener('click', () => { editDespesaModal.style.display = 'none'; });

    const fetchViagensAPagar = async () => {
        const token = localStorage.getItem('token');
        try {
            selecionarTodasCheckbox.checked = false;
            const response = await fetch(`${API_URL}/api/pagamentos/apagar`, { headers: { 'Authorization': `Bearer ${token}` } });
            if (!response.ok) throw new Error('Falha ao buscar viagens a pagar.');
            const viagens = await response.json();
            viagensAPagarList.innerHTML = '';
            if (viagens.length === 0) {
                viagensAPagarList.innerHTML = '<p style="padding: 10px;">Nenhuma viagem a pagar encontrada.</p>';
                return;
            }
            viagens.forEach(viagem => {
                const dataViagem = new Date(viagem.data_viagem).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                const itemDiv = document.createElement('div');
                itemDiv.className = 'viagem-pagamento-item';
                itemDiv.innerHTML = `
                    <input type="checkbox" class="viagem-checkbox" id="viagem-${viagem.id}" value="${viagem.id}" data-valor="${viagem.valor_reembolso}">
                    <div class="viagem-pagamento-info">
                        <span class="info-header">${dataViagem} <small>- ${viagem.placa}</small></span>
                        <span class="info-desc">${viagem.descricao || 'Sem descrição'}</span>
                    </div>
                    <strong class="viagem-pagamento-valor">R$ ${Number(viagem.valor_reembolso).toFixed(2)}</strong>
                `;
                viagensAPagarList.appendChild(itemDiv);
            });
        } catch (error) {
            messageArea.textContent = `Erro: ${error.message}`;
            messageArea.className = 'message error';
        }
    };

    const atualizarResumoPagamento = () => {
        const checkedCheckboxes = document.querySelectorAll('.viagem-checkbox:checked');
        let totalViagens = 0;
        let valorTotal = 0;
        checkedCheckboxes.forEach(checkbox => {
            totalViagens++;
            valorTotal += parseFloat(checkbox.dataset.valor);
        });
        totalViagensSpan.textContent = totalViagens;
        valorTotalSpan.textContent = valorTotal.toFixed(2);
        selecionarTodasCheckbox.checked = document.querySelectorAll('.viagem-checkbox').length > 0 && checkedCheckboxes.length === document.querySelectorAll('.viagem-checkbox').length;
    };
    
    viagensAPagarList.addEventListener('change', atualizarResumoPagamento);
    selecionarTodasCheckbox.addEventListener('change', (event) => {
        document.querySelectorAll('.viagem-checkbox').forEach(checkbox => checkbox.checked = event.target.checked);
        atualizarResumoPagamento();
    });

    pagamentoForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const form = event.target; 
        const token = localStorage.getItem('token');
        const selectedViagensIds = Array.from(document.querySelectorAll('.viagem-checkbox:checked')).map(checkbox => checkbox.value);
    
        if (selectedViagensIds.length === 0) {
            messageArea.textContent = 'Erro: Selecione ao menos uma viagem para pagar.';
            messageArea.className = 'message error';
            return;
        }
    
        const pagamentoData = {
            viagens_ids: selectedViagensIds,
            data_pagamento: form.querySelector('#pagamento-data').value,
            metodo_pagamento: form.querySelector('#pagamento-metodo').value,
            valor_total: parseFloat(form.querySelector('#valor-total-a-pagar').textContent),
            descricao: form.querySelector('#pagamento-descricao').value,
        };
    
        try {
            const response = await fetch(`${API_URL}/api/pagamentos`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(pagamentoData)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message);
            messageArea.textContent = 'Pagamento registrado com sucesso!';
            messageArea.className = 'message success';
            form.reset();
            atualizarResumoPagamento();
            fetchViagensAPagar();
            showView('view-listar-viagens');
        } catch (error) {
            messageArea.textContent = `Erro: ${error.message}`;
            messageArea.className = 'message error';
        }
    });

    const fetchDashboardSummary = async () => {
        const token = localStorage.getItem('token');
        const filterType = document.querySelector('input[name="filter-type"]:checked').value;
        const params = new URLSearchParams();
        params.append('filterType', filterType);

        if (filterType === 'month') {
            const mes = document.getElementById('filter-month').value;
            const ano = document.getElementById('filter-year').value;
            params.append('mes', mes);
            params.append('ano', ano);
        } else {
            const data_inicio = document.getElementById('filter-data-inicio').value;
            const data_fim = document.getElementById('filter-data-fim').value;
            if (!data_inicio || !data_fim) {
                messageArea.textContent = 'Por favor, selecione data de início e fim.';
                messageArea.className = 'message error';
                return;
            }
            params.append('data_inicio', data_inicio);
            params.append('data_fim', data_fim);
        }

        try {
            const response = await fetch(`${API_URL}/api/dashboard/summary?${params.toString()}`, { 
                headers: { 'Authorization': `Bearer ${token}` } 
            });
            if (!response.ok) throw new Error('Falha ao carregar o resumo.');
            const summary = await response.json();
            document.getElementById('card-km-mes').textContent = `${Number(summary.totalKmMes).toFixed(1)} km`;
            document.getElementById('card-receber-mes').textContent = `R$ ${Number(summary.totalAReceberMes).toFixed(2)}`;
            document.getElementById('card-despesas-mes').textContent = `R$ ${Number(summary.totalDespesasMes).toFixed(2)}`;
            document.getElementById('card-reembolsado-mes').textContent = `R$ ${Number(summary.totalReembolsadoMes).toFixed(2)}`;
            const alertaDiv = document.getElementById('card-alerta-atrasados');
            if (summary.pendentesMesesAnteriores > 0) {
                alertaDiv.textContent = `Atenção: Você possui ${summary.pendentesMesesAnteriores} viagem(s) de meses anteriores com pagamento pendente.`;
                alertaDiv.style.display = 'block';
            } else {
                alertaDiv.style.display = 'none';
            }
        } catch (error) {
            messageArea.textContent = '';
            messageArea.className = 'message';
            console.error("Erro ao carregar resumo do dashboard:", error.message);
        }
    };

    function initializeDashboardFilters() {
        const monthSelect = document.getElementById('filter-month');
        const yearInput = document.getElementById('filter-year');
        const applyFilterBtn = document.getElementById('apply-filter-btn');
        const filterTypeRadios = document.querySelectorAll('input[name="filter-type"]');
        const monthYearFilter = document.getElementById('filter-by-month-year');
        const dateRangeFilter = document.getElementById('filter-by-date-range');

        filterTypeRadios.forEach(radio => {
            radio.addEventListener('change', (event) => {
                if (event.target.value === 'month') {
                    monthYearFilter.style.display = 'flex';
                    dateRangeFilter.style.display = 'none';
                } else {
                    monthYearFilter.style.display = 'none';
                    dateRangeFilter.style.display = 'flex';
                }
            });
        });

        const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        meses.forEach((mes, index) => {
            const option = document.createElement('option');
            option.value = index + 1;
            option.textContent = mes;
            monthSelect.appendChild(option);
        });
        const hoje = new Date();
        monthSelect.value = hoje.getMonth() + 1;
        yearInput.value = hoje.getFullYear();
        applyFilterBtn.addEventListener('click', fetchDashboardSummary);
    }
    
    gerarRelatorioBtn.addEventListener('click', async () => {
        const selectedReport = relatorioSelect.value;
        const dataInicio = reportDataInicio.value;
        const dataFim = reportDataFim.value;

        if (!selectedReport) { reportContent.innerHTML = `<p style="color: red;">Por favor, selecione um relatório para gerar.</p>`; return; }
        if (!dataInicio || !dataFim) { reportContent.innerHTML = `<p style="color: red;">Por favor, selecione as datas de início e fim.</p>`; return; }
        
        const token = localStorage.getItem('token');
        reportContent.innerHTML = `<p>Gerando relatório...</p>`;

        switch (selectedReport) {
            case 'kmReembolso':
                try {
                    const response = await fetch(`${API_URL}/api/relatorios/viagens?data_inicio=${dataInicio}&data_fim=${dataFim}`, {
                        headers: { 'Authorization': `Bearer ${token}` }
                    });
                    if (!response.ok) { const err = await response.json(); throw new Error(err.message); }
                    const dados = await response.json();
                    if (dados.length === 0) {
                        reportContent.innerHTML = '<p>Nenhuma viagem encontrada para o período selecionado.</p>';
                        imprimirRelatorioBtn.style.display = 'none';
                        return;
                    }
                    let totalKm = 0;
                    let totalReembolso = 0;
                    let totalReembolsado = 0;
                    let tableRows = '';
                    dados.forEach(dado => {
                        totalKm += parseFloat(dado.distancia_percorrida);
                        totalReembolso += parseFloat(dado.valor_reembolso);
                        totalReembolsado += parseFloat(dado.valor_reembolsado);
                        tableRows += `
                            <tr>
                                <td>${new Date(dado.data_viagem).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</td>
                                <td>${dado.local_saida || 'N/A'}</td>
                                <td>${dado.local_chegada || 'N/A'}</td>
                                <td>${parseFloat(dado.distancia_percorrida).toFixed(2)}</td>
                                <td>R$ ${parseFloat(dado.valor_reembolso).toFixed(2)}</td>
                                <td>R$ ${parseFloat(dado.valor_reembolsado).toFixed(2)}</td>
                                <td>${dado.data_reembolso ? new Date(dado.data_reembolso).toLocaleDateString('pt-BR', { timeZone: 'UTC' }) : '--'}</td>
                                <td>${dado.status_pagamento}</td>
                            </tr>
                        `;
                    });
                    reportContent.innerHTML = `
                        <table class="report-table">
                            <thead><tr><th>Data</th><th>Saída</th><th>Chegada</th><th>KM Rodado</th><th>Vl. Reembolso</th><th>Vl. Reembolsado</th><th>Dt. Reembolso</th><th>Status</th></tr></thead>
                            <tbody>${tableRows}</tbody>
                            <tfoot><tr><td colspan="3">TOTAIS</td><td>${totalKm.toFixed(2)}</td><td>R$ ${totalReembolso.toFixed(2)}</td><td>R$ ${totalReembolsado.toFixed(2)}</td><td colspan="2"></td></tr></tfoot>
                        </table>
                    `;
                    imprimirRelatorioBtn.style.display = 'inline-block';
                } catch (error) {
                    reportContent.innerHTML = `<p style="color: red;">Erro ao gerar relatório: ${error.message}</p>`;
                    imprimirRelatorioBtn.style.display = 'none';
                }
                break;
            default:
                reportContent.innerHTML = `<p style="color: red;">Tipo de relatório desconhecido.</p>`;
                break;
        }
    });

    imprimirRelatorioBtn.addEventListener('click', () => { window.print(); });

    initializeDashboardFilters();
    pageTitle.textContent = CONFIG.appName;
    loginTitle.textContent = CONFIG.appName;
    dashboardTitle.textContent = `Painel ${CONFIG.appName}`;
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    const token = localStorage.getItem('token');
    if (token) { showDashboard(); } 
    else { showLogin(); }
});

