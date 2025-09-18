

document.addEventListener('DOMContentLoaded', () => {

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
    const messageArea = document.getElementById('message-area'); 
    const API_URL = 'https://api.auctusconsultoria.com.br'; 


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

            rascunhos.forEach(r => {
                const dataFormatada = new Date(r.data_viagem).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                const itemDiv = document.createElement('div');
                itemDiv.className = 'rascunho-item';
                itemDiv.innerHTML = `
                    <div>
                        <strong>${dataFormatada} - ${r.placa}</strong>
                        <br>
                        <small>${r.descricao || 'Sem descrição'}</small>
                    </div>
                    <button class="edit-rascunho-btn" data-id="${r.id}">Finalizar</button>
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
        viagemDistanciaInput.value = viagem.distancia_percorrida || '';
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
            const rascunhoParaEditar = rascunhos.find(r => r.id == id);
            
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


    window.initLancarKmView = () => {
        const populateVeiculoSelect = window.populateVeiculoSelectGlobal; 
        if (populateVeiculoSelect) {
            populateVeiculoSelect(viagemVeiculoSelect);
        }
        resetViagemForm();
        fetchViagensRascunho();
    };
});