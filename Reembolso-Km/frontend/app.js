function initMap() {
    const options = {
        componentRestrictions: { country: "br" }, 
        fields: ["formatted_address", "name"],
        strictBounds: false,
    };
    try {
        const saidaInput = document.getElementById("viagem-saida");
        const chegadaInput = document.getElementById("viagem-chegada");
        new google.maps.places.Autocomplete(saidaInput, options);
        new google.maps.places.Autocomplete(chegadaInput, options);
    } catch (e) {
        console.error("Erro ao inicializar o Google Maps Autocomplete. Verifique a chave da API.", e);
    }
}

document.addEventListener('DOMContentLoaded', () => {


    const mainContainer = document.getElementById('main-container');
    const loginArea = document.getElementById('login-area');
    const dashboardArea = document.getElementById('dashboard-area');
    const loginForm = document.getElementById('loginForm');
    const logoutButton = document.getElementById('logoutButton');
    const messageArea = document.getElementById('message-area');
    const menuButtons = document.querySelectorAll('.dashboard-menu button');
    const views = document.querySelectorAll('.view');
    const pageTitle = document.getElementById('page-title');
    const loginTitle = document.getElementById('login-title');
    const dashboardTitle = document.getElementById('dashboard-title');
    

    const veiculoForm = document.getElementById('veiculoForm');
    const veiculosList = document.getElementById('veiculos-list');
    const editModal = document.getElementById('edit-veiculo-modal');
    const editForm = document.getElementById('editVeiculoForm');
    const cancelEditBtn = document.getElementById('cancel-edit-btn');
    

    const viagemForm = document.getElementById('viagemForm');
    const viagemVeiculoSelect = document.getElementById('viagem-veiculo-select');
    const viagensList = document.getElementById('viagens-list');


    const despesaForm = document.getElementById('despesaForm');
    const despesasasList = document.getElementById('despesas-list');
    const despesaVeiculoSelect = document.getElementById('despesa-veiculo-select');
    const despesaComprovanteFile = document.getElementById('despesa-comprovante-file');
    const despesaLinkComprovante = document.getElementById('despesa-link-comprovante');
    const editDespesaModal = document.getElementById('edit-despesa-modal');
    const editDespesaForm = document.getElementById('editDespesaForm');
    const cancelEditDespesaBtn = document.getElementById('cancel-edit-despesa-btn');


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

    const API_URL = 'https://api.auctusconsultoria.com.br';
    const CONFIG = { appName: "Reembolso de Km" };


    const showView = (viewId) => {
        views.forEach(view => view.style.display = 'none');
        const viewToShow = document.getElementById(viewId);
        if (viewToShow) { viewToShow.style.display = 'block'; }
        menuButtons.forEach(button => button.classList.toggle('active', button.dataset.view === viewId));
        

        if (viewId === 'view-home') fetchDashboardSummary();
        if (viewId === 'view-listar-veiculo') fetchVeiculos();
        if (viewId === 'view-lancar-km') populateVeiculoSelect(viagemVeiculoSelect);
        if (viewId === 'view-listar-viagens') fetchViagens();
        if (viewId === 'view-lancar-despesa') populateVeiculoSelect(despesaVeiculoSelect);
        if (viewId === 'view-listar-despesas') fetchDespesas();
        if (viewId === 'view-lancar-pagamento') fetchViagensAPagar();
    };

    menuButtons.forEach(button => button.addEventListener('click', (e) => showView(e.target.dataset.view)));

    const showLogin = () => { mainContainer.classList.add('container-login'); mainContainer.classList.remove('container-app'); loginArea.style.display = 'block'; dashboardArea.style.display = 'none'; };
    const showDashboard = () => { mainContainer.classList.remove('container-login'); mainContainer.classList.add('container-app'); loginArea.style.display = 'none'; dashboardArea.style.display = 'block'; showView('view-home'); };
    

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

    logoutButton.addEventListener('click', () => { localStorage.removeItem('token'); messageArea.textContent = 'Você saiu com sucesso.'; messageArea.className = 'message success'; showLogin(); });
    

    const populateVeiculoSelect = async (selectElement) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`${API_URL}/api/veiculos`, { headers: { 'Authorization': `Bearer ${token}` } });
            if (!response.ok) throw new Error('Não foi possível carregar os veículos.');
            const veiculos = await response.json();
            selectElement.innerHTML = '<option value="">-- Selecione um Veículo --</option>';
            veiculos.forEach(v => {
                const option = document.createElement('option');
                option.value = v.id;
                option.textContent = `${v.placa} (${v.descricao})`;
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
                veiculos.forEach(v => {
                    const veiculoDiv = document.createElement('div');
                    veiculoDiv.className = 'veiculo-item';
                    const dataInicio = new Date(v.data_inicio_aluguel).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                    const dataFim = v.data_fim_aluguel ? new Date(v.data_fim_aluguel).toLocaleDateString('pt-BR', { timeZone: 'UTC' }) : 'Em aberto';
                    veiculoDiv.innerHTML = `<div><strong>${v.placa}</strong> (${v.descricao})<br><small>Aluguel: ${dataInicio} - ${dataFim}</small></div><button class="edit-btn" data-id="${v.id}">Editar</button>`;
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
            const veiculoParaEditar = veiculos.find(v => v.id == veiculoId);
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


    viagemForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        const viagemData = {
            veiculo_id: document.getElementById('viagem-veiculo-select').value,
            data_viagem: document.getElementById('viagem-data').value,
            distancia_percorrida: document.getElementById('viagem-distancia').value,
            local_saida: document.getElementById('viagem-saida').value,
            local_chegada: document.getElementById('viagem-chegada').value,
            descricao: document.getElementById('viagem-descricao').value,
        };
        try {
            const response = await fetch(`${API_URL}/api/viagens`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
                body: JSON.stringify(viagemData)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message);
            messageArea.textContent = 'Viagem registrada com sucesso!';
            messageArea.className = 'message success';
            viagemForm.reset();
            showView('view-listar-viagens');
        } catch (error) {
            messageArea.textContent = `Erro: ${error.message}`;
            messageArea.className = 'message error';
        }
    });

    const fetchViagens = async () => {
        const token = localStorage.getItem('token');
        if (!token) { showLogin(); return; }
        try {
            const response = await fetch(`${API_URL}/api/viagens`, { headers: { 'Authorization': `Bearer ${token}` } });
            if (!response.ok) throw new Error('Falha ao buscar viagens.');
            const viagens = await response.json();
            viagensList.innerHTML = '';
            if (viagens.length === 0) {
                viagensList.innerHTML = '<p>Nenhuma viagem registrada.</p>';
            } else {
                viagens.forEach(v => {
                    const viagemDiv = document.createElement('div');
                    viagemDiv.className = 'viagem-item';

                    const dataViagem = new Date(v.data_viagem).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                    let statusClass = '';
                    switch (v.status_pagamento) {
                        case 'A Pagar': statusClass = 'status-apagar'; break;
                        case 'Pago': 
                            statusClass = 'status-pago'; 
                            viagemDiv.classList.add('pago');
                            break;
                        case 'Pago Parcial': statusClass = 'status-pago-parcial'; break;
                        default: statusClass = '';
                    }
                    viagemDiv.innerHTML = `
                        <div class="viagem-header">
                            <span>${dataViagem} - ${v.placa} (${Number(v.distancia_percorrida).toFixed(2)} km)</span>
                            <span class="status-badge ${statusClass}">${v.status_pagamento}</span>
                        </div>
                        <p class="viagem-details"><strong>Trajeto:</strong> ${v.local_saida || 'N/A'} → ${v.local_chegada || 'N/A'}</p>
                        <p class="viagem-details"><strong>Descrição:</strong> ${v.descricao || 'N/A'}</p>
                        <p class="viagem-details"><strong>Reembolso:</strong> R$ ${Number(v.valor_reembolso).toFixed(2)}</p>
                    `;
                    viagensList.appendChild(viagemDiv);
                });
            }
        } catch (error) {
            messageArea.textContent = `Erro: ${error.message}`;
            messageArea.className = 'message error';
        }
    };
    

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
        const despesaData = {
            veiculo_id: despesaVeiculoSelect.value,
            data_despesa: document.getElementById('despesa-data').value,
            tipo_despesa: document.getElementById('despesa-tipo').value,
            forma_pagamento: document.getElementById('despesa-forma-pagamento').value,
            valor: document.getElementById('despesa-valor').value,
            status_pagamento: document.getElementById('despesa-status-pagamento').value,
            link_comprovante: despesaLinkComprovante.value,
            descricao: document.getElementById('despesa-descricao').value,
        };
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
        try {
            const response = await fetch(`${API_URL}/api/despesas`, { headers: { 'Authorization': `Bearer ${token}` } });
            if (!response.ok) throw new Error('Falha ao buscar despesas.');
            const despesas = await response.json();
            despesasasList.innerHTML = '';
            if (despesas.length === 0) {
                despesasasList.innerHTML = '<p>Nenhuma despesa registrada.</p>';
            } else {
                despesas.forEach(d => {
                    const itemDiv = document.createElement('div');
                    itemDiv.className = 'despesa-item';
                    const dataDespesa = new Date(d.data_despesa).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                    itemDiv.innerHTML = `
                        <div class="despesa-info">
                            <strong>${d.tipo_despesa}</strong> - ${d.placa}
                            <small>${dataDespesa} | ${d.forma_pagamento} | Status: ${d.status_pagamento}</small>
                        </div>
                        <strong class="despesa-valor">R$ ${Number(d.valor).toFixed(2)}</strong>
                        <div class="despesa-actions">
                            <button class="edit-despesa-btn" data-id="${d.id}">Editar</button>
                            <button class="delete-despesa-btn" data-id="${d.id}">Excluir</button>
                        </div>
                    `;
                    despesasasList.appendChild(itemDiv);
                });
            }
        } catch (error) {
            messageArea.textContent = `Erro: ${error.message}`;
            messageArea.className = 'message error';
        }
    };
    
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
            const response = await fetch(`${API_URL}/api/despesas`, { headers: { 'Authorization': `Bearer ${token}` }});
            const despesas = await response.json();
            const despesaParaEditar = despesas.find(d => d.id == id);
            if (despesaParaEditar) {
                await populateVeiculoSelect(document.getElementById('edit-despesa-veiculo-select'));
                document.getElementById('edit-despesa-id').value = despesaParaEditar.id;
                document.getElementById('edit-despesa-veiculo-select').value = despesaParaEditar.veiculo_id;
                document.getElementById('edit-despesa-data').value = new Date(despesaParaEditar.data_despesa).toISOString().split('T')[0];
                document.getElementById('edit-despesa-tipo').value = despesaParaEditar.tipo_despesa;
                document.getElementById('edit-despesa-forma-pagamento').value = despesaParaEditar.forma_pagamento;
                document.getElementById('edit-despesa-valor').value = despesaParaEditar.valor;
                document.getElementById('edit-despesa-status-pagamento').value = despesaParaEditar.status_pagamento;
                document.getElementById('edit-despesa-link-comprovante').value = despesaParaEditar.link_comprovante || '';
                document.getElementById('edit-despesa-descricao').value = despesaParaEditar.descricao || '';
                editDespesaModal.style.display = 'flex';
            }
        }
    });
    
    editDespesaForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        const id = document.getElementById('edit-despesa-id').value;
        const despesaData = {
            veiculo_id: document.getElementById('edit-despesa-veiculo-select').value,
            data_despesa: document.getElementById('edit-despesa-data').value,
            tipo_despesa: document.getElementById('edit-despesa-tipo').value,
            forma_pagamento: document.getElementById('edit-despesa-forma-pagamento').value,
            valor: document.getElementById('edit-despesa-valor').value,
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

    cancelEditDespesaBtn.addEventListener('click', () => { editDespesaModal.style.display = 'none'; });


    const fetchViagensAPagar = async () => {
        const token = localStorage.getItem('token');
        try {
            selecionarTodasCheckbox.checked = false;
            const response = await fetch(`${API_URL}/api/pagamentos/apagar`, { 
                headers: { 'Authorization': `Bearer ${token}` } 
            });
            if (!response.ok) throw new Error('Falha ao buscar viagens a pagar.');
            
            const viagens = await response.json();
            viagensAPagarList.innerHTML = '';

            if (viagens.length === 0) {
                viagensAPagarList.innerHTML = '<p style="padding: 10px;">Nenhuma viagem a pagar encontrada.</p>';
                return;
            }

            viagens.forEach(v => {
                const dataViagem = new Date(v.data_viagem).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                const itemDiv = document.createElement('div');
                itemDiv.className = 'viagem-pagamento-item';
                itemDiv.innerHTML = `
                    <input type="checkbox" class="viagem-checkbox" id="viagem-${v.id}" value="${v.id}" data-valor="${v.valor_reembolso}">
                    <div class="viagem-pagamento-info">
                        <span class="info-header">${dataViagem} <small>- ${v.placa}</small></span>
                        <span class="info-desc">${v.descricao || 'Sem descrição'}</span>
                    </div>
                    <strong class="viagem-pagamento-valor">R$ ${Number(v.valor_reembolso).toFixed(2)}</strong>
                `;
                viagensAPagarList.appendChild(itemDiv);
            });

        } catch (error) {
            messageArea.textContent = `Erro: ${error.message}`;
            messageArea.className = 'message error';
            viagensAPagarList.innerHTML = `<p style="padding: 10px; color: red;">${error.message}</p>`;
        }
    };

    const atualizarResumoPagamento = () => {
        const checkboxes = document.querySelectorAll('.viagem-checkbox');
        const checkedCheckboxes = document.querySelectorAll('.viagem-checkbox:checked');
        
        let totalViagens = 0;
        let valorTotal = 0;

        checkedCheckboxes.forEach(cb => {
            totalViagens++;
            valorTotal += parseFloat(cb.dataset.valor);
        });

        totalViagensSpan.textContent = totalViagens;
        valorTotalSpan.textContent = valorTotal.toFixed(2);
        
        if (checkboxes.length > 0 && checkboxes.length === checkedCheckboxes.length) {
            selecionarTodasCheckbox.checked = true;
        } else {
            selecionarTodasCheckbox.checked = false;
        }
    };
    
    viagensAPagarList.addEventListener('change', atualizarResumoPagamento);

    selecionarTodasCheckbox.addEventListener('change', (event) => {
        const isChecked = event.target.checked;
        const checkboxes = document.querySelectorAll('.viagem-checkbox');
        checkboxes.forEach(cb => {
            cb.checked = isChecked;
        });
        atualizarResumoPagamento();
    });

    pagamentoForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        const selectedViagensIds = Array.from(document.querySelectorAll('.viagem-checkbox:checked')).map(cb => cb.value);

        if (selectedViagensIds.length === 0) {
            messageArea.textContent = 'Erro: Selecione ao menos uma viagem para pagar.';
            messageArea.className = 'message error';
            return;
        }

        const pagamentoData = {
            viagens_ids: selectedViagensIds,
            data_pagamento: document.getElementById('pagamento-data').value,
            metodo_pagamento: document.getElementById('metodo-pagamento').value,
            valor_total: parseFloat(valorTotalSpan.textContent),
            descricao: document.getElementById('pagamento-descricao').value,
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
            pagamentoForm.reset();
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
    

    const mes = document.getElementById('filter-month').value;
    const ano = document.getElementById('filter-year').value;


    const apiUrlWithFilters = `${API_URL}/api/dashboard/summary?mes=${mes}&ano=${ano}`;

    try {
        const response = await fetch(apiUrlWithFilters, { 
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!response.ok) throw new Error('Falha ao carregar o resumo.');
        
        const summary = await response.json();

        document.getElementById('card-km-mes').textContent = `${summary.totalKmMes.toFixed(1)} km`;
        document.getElementById('card-receber-mes').textContent = `R$ ${summary.totalAReceberMes.toFixed(2)}`;
        document.getElementById('card-despesas-mes').textContent = `R$ ${summary.totalDespesasMes.toFixed(2)}`;

        const alertaDiv = document.getElementById('card-alerta-atrasados');
        if (summary.pendentesMesesAnteriores > 0) {
            alertaDiv.textContent = `Atenção: Você possui ${summary.pendentesMesesAnteriores} viagem(s) de meses anteriores com pagamento pendente.`;
            alertaDiv.style.display = 'block';
        } else {
            alertaDiv.style.display = 'none';
        }

    } catch (error) {
        document.getElementById('view-home').innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
};

function initializeDashboardFilters() {
    const monthSelect = document.getElementById('filter-month');
    const yearInput = document.getElementById('filter-year');
    const applyFilterBtn = document.getElementById('apply-filter-btn');

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
        const dataInicio = reportDataInicio.value;
        const dataFim = reportDataFim.value;

        if (!dataInicio || !dataFim) {
            reportContent.innerHTML = `<p style="color: red;">Por favor, selecione as datas de início e fim.</p>`;
            return;
        }

        const token = localStorage.getItem('token');
        reportContent.innerHTML = `<p>Gerando relatório...</p>`;

        try {
            const response = await fetch(`${API_URL}/api/relatorios/viagens?data_inicio=${dataInicio}&data_fim=${dataFim}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.message);
            }

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
            dados.forEach(d => {
                totalKm += parseFloat(d.distancia_percorrida);
                totalReembolso += parseFloat(d.valor_reembolso);
                totalReembolsado += parseFloat(d.valor_reembolsado);

                tableRows += `
                    <tr>
                        <td>${new Date(d.data_viagem).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</td>
                        <td>${d.local_saida || 'N/A'}</td>
                        <td>${d.local_chegada || 'N/A'}</td>
                        <td>${parseFloat(d.distancia_percorrida).toFixed(2)}</td>
                        <td>R$ ${parseFloat(d.valor_reembolso).toFixed(2)}</td>
                        <td>R$ ${parseFloat(d.valor_reembolsado).toFixed(2)}</td>
                        <td>${d.data_reembolso ? new Date(d.data_reembolso).toLocaleDateString('pt-BR', { timeZone: 'UTC' }) : '--'}</td>
                        <td>${d.status_pagamento}</td>
                    </tr>
                `;
            });

            reportContent.innerHTML = `
                <table class="report-table">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Saída</th>
                            <th>Chegada</th>
                            <th>KM Rodado</th>
                            <th>Vl. Reembolso</th>
                            <th>Vl. Reembolsado</th>
                            <th>Dt. Reembolso</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3">TOTAIS</td>
                            <td>${totalKm.toFixed(2)}</td>
                            <td>R$ ${totalReembolso.toFixed(2)}</td>
                            <td>R$ ${totalReembolsado.toFixed(2)}</td>
                            <td colspan="2"></td>
                        </tr>
                    </tfoot>
                </table>
            `;

            imprimirRelatorioBtn.style.display = 'inline-block';

        } catch (error) {
            reportContent.innerHTML = `<p style="color: red;">Erro ao gerar relatório: ${error.message}</p>`;
            imprimirRelatorioBtn.style.display = 'none';
        }
    });

    imprimirRelatorioBtn.addEventListener('click', () => {
        window.print();
    });


initializeDashboardFilters();
    
    pageTitle.textContent = CONFIG.appName;
    loginTitle.textContent = CONFIG.appName;
    dashboardTitle.textContent = `Painel ${CONFIG.appName}`;
    const token = localStorage.getItem('token');
    if (token) { showDashboard(); } else { showLogin(); }
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
