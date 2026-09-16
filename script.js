/**
 * APLICAÇÃO DE GESTÃO DE MESAS E RESERVAS
 * Desenvolvido em Vanilla JS para GitHub Pages
 */

// CONFIGURAÇÃO INICIAL E CONFIGURAÇÃO DAS MESAS
const DEFAULT_CONFIG = {
    nomeRestaurANTE: "Restaurante Central",
    duracaoPadrao: 120, // minutos
    intervaloMinimo: 15, // minutos
};

// ESTRUTURA COMPLETA DAS MESAS BASEADA NA IMAGEM DA PLANTA
const INITIAL_TABLES = [
    // Salinha (Lado Esquerdo - 4 retangulares de 20 pax cada)
    { id: "S1", nome: "Salinha 1", capacidade: 20, tipo: "retangular", x: 20, y: 80, largura: 110, altura: 60, area: "Salinha" },
    { id: "S2", nome: "Salinha 2", capacidade: 20, tipo: "retangular", x: 20, y: 220, largura: 110, altura: 60, area: "Salinha" },
    { id: "S3", nome: "Salinha 3", capacidade: 20, tipo: "retangular", x: 20, y: 380, largura: 110, altura: 60, area: "Salinha" },
    { id: "S4", nome: "Salinha 4", capacidade: 20, tipo: "retangular", x: 20, y: 520, largura: 110, altura: 60, area: "Salinha" },

    // Espaço Redondo (Topo - formato osso, 25 pax)
    { id: "RED", nome: "Redondo", capacidade: 25, tipo: "osso", x: 210, y: 20, largura: 220, altura: 70, area: "Topo" },

    // Mesa 29 (10 pax)
    { id: 29, nome: "Mesa 29", capacidade: 10, tipo: "redonda", x: 200, y: 580, largura: 85, altura: 85 },

    // Mesas Quadradas (2 Pessoas)
    { id: 5, nome: "Mesa 5", capacidade: 2, tipo: "quadrada", x: 720, y: 20, largura: 45, altura: 45 },
    { id: 11, nome: "Mesa 11", capacidade: 2, tipo: "quadrada", x: 600, y: 350, largura: 45, altura: 45 },
    { id: 12, nome: "Mesa 12", capacidade: 2, tipo: "quadrada", x: 530, y: 350, largura: 45, altura: 45 },
    { id: 15, nome: "Mesa 15", capacidade: 2, tipo: "quadrada", x: 600, y: 280, largura: 45, altura: 45 },
    { id: 16, nome: "Mesa 16", capacidade: 2, tipo: "quadrada", x: 530, y: 280, largura: 45, altura: 45 },
    { id: 18, nome: "Mesa 18", capacidade: 2, tipo: "quadrada", x: 600, y: 210, largura: 45, altura: 45 },
    { id: 19, nome: "Mesa 19", capacidade: 2, tipo: "quadrada", x: 530, y: 210, largura: 45, altura: 45 },
    { id: 21, nome: "Mesa 21", capacidade: 2, tipo: "quadrada", x: 510, y: 490, largura: 45, altura: 45 },
    { id: 22, nome: "Mesa 22", capacidade: 2, tipo: "quadrada", x: 450, y: 490, largura: 45, altura: 45 },
    { id: 23, nome: "Mesa 23", capacidade: 2, tipo: "quadrada", x: 390, y: 490, largura: 45, altura: 45 },
    { id: 24, nome: "Mesa 24", capacidade: 2, tipo: "quadrada", x: 330, y: 490, largura: 45, altura: 45 },
    { id: 25, nome: "Mesa 25", capacidade: 2, tipo: "quadrada", x: 510, y: 630, largura: 45, altura: 45 },
    { id: 26, nome: "Mesa 26", capacidade: 2, tipo: "quadrada", x: 450, y: 630, largura: 45, altura: 45 },
    { id: 27, nome: "Mesa 27", capacidade: 2, tipo: "quadrada", x: 390, y: 630, largura: 45, altura: 45 },
    { id: 28, nome: "Mesa 28", capacidade: 2, tipo: "quadrada", x: 330, y: 630, largura: 45, altura: 45 },
    { id: 31, nome: "Mesa 31", capacidade: 2, tipo: "quadrada", x: 510, y: 560, largura: 45, altura: 45 },
    { id: 32, nome: "Mesa 32", capacidade: 2, tipo: "quadrada", x: 450, y: 560, largura: 45, altura: 45 },
    { id: 33, nome: "Mesa 33", capacidade: 2, tipo: "quadrada", x: 390, y: 560, largura: 45, altura: 45 },
    { id: 34, nome: "Mesa 34", capacidade: 2, tipo: "quadrada", x: 330, y: 560, largura: 45, altura: 45 },

    // Mesas Retangulares (4 Pessoas)
    { id: 10, nome: "Mesa 10", capacidade: 4, tipo: "retangular", x: 670, y: 350, largura: 70, altura: 45 },
    { id: 14, nome: "Mesa 14", capacidade: 4, tipo: "retangular", x: 670, y: 280, largura: 70, altura: 45 },
    { id: 17, nome: "Mesa 17", capacidade: 4, tipo: "retangular", x: 670, y: 210, largura: 70, altura: 45 },

    // Mesas Redondas (8 Pessoas)
    { id: 1, nome: "Mesa 1", capacidade: 8, tipo: "redonda", x: 900, y: 580, largura: 70, altura: 70 },
    { id: 2, nome: "Mesa 2", capacidade: 8, tipo: "redonda", x: 900, y: 440, largura: 70, altura: 70 },
    { id: 3, nome: "Mesa 3", capacidade: 8, tipo: "redonda", x: 880, y: 280, largura: 80, altura: 80 },
    { id: 4, nome: "Mesa 4", capacidade: 8, tipo: "redonda", x: 900, y: 80, largura: 70, altura: 70 },
    { id: 6, nome: "Mesa 6", capacidade: 8, tipo: "redonda", x: 780, y: 150, largura: 80, altura: 80 },
    { id: 7, nome: "Mesa 7", capacidade: 8, tipo: "redonda", x: 770, y: 300, largura: 70, altura: 70 },
    { id: 8, nome: "Mesa 8", capacidade: 8, tipo: "redonda", x: 790, y: 430, largura: 70, altura: 70 },
    { id: 9, nome: "Mesa 9", capacidade: 8, tipo: "redonda", x: 790, y: 580, largura: 70, altura: 70 },
    { id: 35, nome: "Mesa 35", capacidade: 8, tipo: "redonda", x: 300, y: 270, largura: 70, altura: 70 },
    { id: 36, nome: "Mesa 36", capacidade: 8, tipo: "redonda", x: 290, y: 120, largura: 70, altura: 70 },
    { id: 39, nome: "Mesa 39", capacidade: 8, tipo: "redonda", x: 180, y: 120, largura: 70, altura: 70 },
    { id: 40, nome: "Mesa 40", capacidade: 8, tipo: "redonda", x: 180, y: 270, largura: 70, altura: 70 }
];

// ESTADO DA APLICAÇÃO
let appState = {
    config: { ...DEFAULT_CONFIG },
    mesas: [],
    reservas: [],
    editMapMode: false
};

// ELEMENTOS DOM
const DOM = {
    tabs: document.querySelectorAll('.nav-btn'),
    tabContents: document.querySelectorAll('.tab-content'),
    liveClock: document.getElementById('live-clock'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    mainNav: document.getElementById('main-nav'),
    restaurantMap: document.getElementById('restaurant-map'),
    btnToggleEditMap: document.getElementById('btn-toggle-edit-map'),
    btnSaveMap: document.getElementById('btn-save-map'),
    
    // Dashboard
    dashTotalMesas: document.getElementById('dash-total-mesas'),
    dashMesasLivres: document.getElementById('dash-mesas-livres'),
    dashMesasReservadas: document.getElementById('dash-mesas-reservadas'),
    dashMesasOcupadas: document.getElementById('dash-mesas-ocupadas'),
    dashResHoje: document.getElementById('dash-res-hoje'),
    dashTotalClientes: document.getElementById('dash-total-clientes'),
    nextResContent: document.getElementById('next-reservation-content'),

    // Modais
    modalReserva: document.getElementById('modal-reserva'),
    modalMesaInfo: document.getElementById('modal-mesa-info'),
    formReserva: document.getElementById('form-reserva'),
    
    // Tabelas e Filtros
    tbodyReservas: document.getElementById('tbody-reservas'),
    filterSearch: document.getElementById('filter-search'),
    filterDate: document.getElementById('filter-date'),
    filterStatus: document.getElementById('filter-status'),
    timelineHoje: document.getElementById('timeline-hoje'),
    todayDateDisplay: document.getElementById('today-date-display'),
    
    // Configurações
    formConfig: document.getElementById('form-config')
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    loadLocalStorage();
    initClock();
    initNavigation();
    renderMap();
    renderDashboard();
    renderReservasTable();
    renderHojeTimeline();
    setupEventListeners();
});

// CARREGAR / GUARDAR LOCALSTORAGE
function loadLocalStorage() {
    const cfg = localStorage.getItem('rest_config');
    const mesas = localStorage.getItem('rest_mesas');
    const res = localStorage.getItem('rest_reservas');

    appState.config = cfg ? JSON.parse(cfg) : { ...DEFAULT_CONFIG };
    appState.mesas = mesas ? JSON.parse(mesas) : INITIAL_TABLES;
    appState.reservas = res ? JSON.parse(res) : [];

    // Preencher formulário de configuração
    document.getElementById('cfg-rest-name').value = appState.config.nomeRestaurANTE;
    document.getElementById('cfg-duration').value = appState.config.duracaoPadrao;
    document.getElementById('cfg-interval').value = appState.config.intervaloMinimo;
    document.getElementById('restaurant-title-header').textContent = appState.config.nomeRestaurANTE;
}

function saveData() {
    localStorage.setItem('rest_config', JSON.stringify(appState.config));
    localStorage.setItem('rest_mesas', JSON.stringify(appState.mesas));
    localStorage.setItem('rest_reservas', JSON.stringify(appState.reservas));
    renderDashboard();
    renderMap();
}

// RELÓGIO EM TEMPO REAL
function initClock() {
    function update() {
        const now = new Date();
        DOM.liveClock.textContent = now.toLocaleTimeString('pt-PT');
    }
    update();
    setInterval(update, 1000);
}

// NAVEGAÇÃO ENTRE TABS
function initNavigation() {
    DOM.tabs.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            DOM.tabs.forEach(b => b.classList.remove('active'));
            DOM.tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(`tab-${targetTab}`).classList.add('active');
            
            if (window.innerWidth <= 768) {
                DOM.mainNav.classList.remove('active');
            }

            if(targetTab === 'hoje') renderHojeTimeline();
            if(targetTab === 'reservas') renderReservasTable();
        });
    });

    DOM.mobileMenuBtn.addEventListener('click', () => {
        DOM.mainNav.classList.toggle('active');
    });
}

// RENDERING DA PLANTA (MAPA DE MESAS)
function renderMap() {
    // Manter estáticos
    DOM.restaurantMap.querySelectorAll('.table-element').forEach(el => el.remove());

    const todayStr = getTodayString();

    appState.mesas.forEach(mesa => {
        const el = document.createElement('div');
        el.className = `table-element shape-${mesa.tipo}`;
        el.style.left = `${mesa.x}px`;
        el.style.top = `${mesa.y}px`;
        el.style.width = `${mesa.largura}px`;
        el.style.height = `${mesa.altura}px`;
        
        // Determinar estado atual da mesa para o dia de hoje
        const estadoAtual = getMesaStatusAtual(mesa.id);
        el.classList.add(`st-${estadoAtual.toLowerCase().replace('/', '').replace(' ', '')}`);

        el.innerHTML = `
            <span class="t-name">${mesa.nome}</span>
            <span class="t-cap"><i class="fas fa-user"></i> ${mesa.capacidade}</span>
        `;

        // Eventos
        el.addEventListener('click', () => {
            if(!appState.editMapMode) {
                openMesaModal(mesa, estadoAtual);
            }
        });

        if(appState.editMapMode) {
            makeElementDraggable(el, mesa);
        }

        DOM.restaurantMap.appendChild(el);
    });
}

// OBTER ESTADO ATUAL DA MESA
function getMesaStatusAtual(mesaId) {
    const now = new Date();
    const todayStr = getTodayString();
    const nowMinutes = now.getHours() * 60 + now.getMinutes();

    const reservasHoje = appState.reservas.filter(r => 
        r.mesaId == mesaId && r.data === todayStr && r.estado !== 'Cancelada' && r.estado !== 'Concluída'
    );

    for(let r of reservasHoje) {
        const [h, m] = r.hora.split(':').map(Number);
        const startMin = h * 60 + m;
        const endMin = startMin + parseInt(r.duracao || appState.config.duracaoPadrao);

        if(r.estado === 'Sentado/Ocupada') return 'OCUPADA';
        if(nowMinutes >= startMin && nowMinutes <= endMin) {
            if(r.estado === 'A aguardar') return 'A AGUARDAR';
            return 'RESERVADA';
        }
    }
    return 'LIVRE';
}

// DRAG & DROP PARA EDITAR PLANTA
function makeElementDraggable(elmnt, mesaObj) {
    elmnt.classList.add('editable');
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        let newY = elmnt.offsetTop - pos2;
        let newX = elmnt.offsetLeft - pos1;

        // Limites do mapa
        if(newX >= 0 && newX <= (1000 - mesaObj.largura)) elmnt.style.left = newX + "px";
        if(newY >= 0 && newY <= (700 - mesaObj.altura)) elmnt.style.top = newY + "px";

        mesaObj.x = parseInt(elmnt.style.left);
        mesaObj.y = parseInt(elmnt.style.top);
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// DASHBOARD RENDERING
function renderDashboard() {
    const todayStr = getTodayString();
    const reservasHoje = appState.reservas.filter(r => r.data === todayStr && r.estado !== 'Cancelada');

    let livres = 0, reservadas = 0, ocupadas = 0;
    appState.mesas.forEach(m => {
        const st = getMesaStatusAtual(m.id);
        if(st === 'LIVRE') livres++;
        else if(st === 'OCUPADA') ocupadas++;
        else reservadas++;
    });

    DOM.dashTotalMesas.textContent = appState.mesas.length;
    DOM.dashMesasLivres.textContent = livres;
    DOM.dashMesasReservadas.textContent = reservadas;
    DOM.dashMesasOcupadas.textContent = ocupadas;
    DOM.dashResHoje.textContent = reservasHoje.length;

    const totalPax = reservasHoje.reduce((acc, r) => acc + parseInt(r.pessoas), 0);
    DOM.dashTotalClientes.textContent = totalPax;

    // Próxima Reserva
    const nowMinutes = new Date().getHours() * 60 + new Date().getMinutes();
    const proximas = reservasHoje
        .filter(r => {
            const [h, m] = r.hora.split(':').map(Number);
            return (h * 60 + m) >= nowMinutes && r.estado !== 'Concluída';
        })
        .sort((a, b) => a.hora.localeCompare(b.hora));

    if(proximas.length > 0) {
        const p = proximas[0];
        const mesa = appState.mesas.find(m => m.id == p.mesaId);
        DOM.nextResContent.innerHTML = `
            <div style="font-size:1.1rem; font-weight:bold; color:var(--accent);">${p.hora} - ${p.cliente}</div>
            <div>Mesa: <strong>${mesa ? mesa.nome : p.mesaId}</strong> | Pessoas: <strong>${p.pessoas}</strong></div>
            <div>Contacto: ${p.telefone}</div>
        `;
    } else {
        DOM.nextResContent.innerHTML = `<p>Nenhuma reserva pendente para hoje.</p>`;
    }
}

// GESTÃO DE RESERVAS (LISTA & FILTROS)
function renderReservasTable() {
    let list = [...appState.reservas];

    const search = DOM.filterSearch.value.toLowerCase();
    const date = DOM.filterDate.value;
    const status = DOM.filterStatus.value;

    if(search) {
        list = list.filter(r => r.cliente.toLowerCase().includes(search) || r.telefone.includes(search));
    }
    if(date) {
        list = list.filter(r => r.data === date);
    }
    if(status) {
        list = list.filter(r => r.estado === status);
    }

    list.sort((a,b) => b.data.localeCompare(a.data) || a.hora.localeCompare(b.hora));

    DOM.tbodyReservas.innerHTML = '';
    list.forEach(r => {
        const mesa = appState.mesas.find(m => m.id == r.mesaId);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${formatDate(r.data)}</td>
            <td>${r.hora}</td>
            <td><strong>${r.cliente}</strong></td>
            <td>${r.telefone}</td>
            <td>${r.pessoas}</td>
            <td>${mesa ? mesa.nome : r.mesaId}</td>
            <td><span class="badge st-${r.estado.toLowerCase().replace('/', '').replace(' ', '')}">${r.estado}</span></td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editReserva('${r.id}')"><i class="fas fa-edit"></i></button>
                <button class="btn btn-sm btn-danger" onclick="deleteReserva('${r.id}')"><i class="fas fa-trash"></i></button>
            </td>
        `;
        DOM.tbodyReservas.appendChild(tr);
    });
}

// TIMELINE DE HOJE
function renderHojeTimeline() {
    const todayStr = getTodayString();
    DOM.todayDateDisplay.textContent = formatDate(todayStr);

    const reservasHoje = appState.reservas
        .filter(r => r.data === todayStr)
        .sort((a,b) => a.hora.localeCompare(b.hora));

    DOM.timelineHoje.innerHTML = '';

    if(reservasHoje.length === 0) {
        DOM.timelineHoje.innerHTML = `<p>Sem reservas agendadas para hoje.</p>`;
        return;
    }

    reservasHoje.forEach(r => {
        const mesa = appState.mesas.find(m => m.id == r.mesaId);
        const card = document.createElement('div');
        card.className = `timeline-card`;
        card.innerHTML = `
            <div>
                <span style="font-size: 1.2rem; font-weight: bold; margin-right: 15px;">${r.hora}</span>
                <strong>${r.cliente}</strong> (${r.pessoas} pessoas) - Mesa: <strong>${mesa ? mesa.nome : r.mesaId}</strong>
                <br><small>Contacto: ${r.telefone} | Obs: ${r.obs || 'Nenhuma'}</small>
            </div>
            <div>
                <span class="badge st-${r.estado.toLowerCase().replace('/', '').replace(' ', '')}">${r.estado}</span>
                <button class="btn btn-sm btn-secondary" onclick="quickStateChange('${r.id}')">Alterar Estado</button>
            </div>
        `;
        DOM.timelineHoje.appendChild(card);
    });
}

// MUDANÇA RÁPIDA DE ESTADO DA RESERVA
window.quickStateChange = function(resId) {
    const res = appState.reservas.find(r => r.id === resId);
    if(!res) return;

    const estados = ["Confirmada", "A aguardar", "Sentado/Ocupada", "Concluída", "Cancelada"];
    let nextIdx = (estados.indexOf(res.estado) + 1) % estados.length;
    res.estado = estados[nextIdx];

    saveData();
    renderHojeTimeline();
    renderReservasTable();
    showToast(`Estado alterado para: ${res.estado}`, "info");
};

// VALIDAÇÃO DE CONFLITOS DE RESERVA E CAPACIDADE
function checkConflito(mesaId, data, hora, duracaoMin, resIdAtual = null) {
    const mesa = appState.mesas.find(m => m.id == mesaId);
    const [h, m] = hora.split(':').map(Number);
    const inicioNovo = h * 60 + m;
    const fimNovo = inicioNovo + parseInt(duracaoMin);

    for(let r of appState.reservas) {
        if(r.id === resIdAtual) continue; // Ignorar a própria se for edição
        if(r.mesaId == mesaId && r.data === data && r.estado !== 'Cancelada' && r.estado !== 'Concluída') {
            const [rh, rm] = r.hora.split(':').map(Number);
            const inicioExistente = rh * 60 + rm;
            const fimExistente = inicioExistente + parseInt(r.duracao || appState.config.duracaoPadrao);

            // Verificação de sobreposição de horários
            if(inicioNovo < fimExistente && fimNovo > inicioExistente) {
                return { conflito: true, motivo: `Mesa ocupada por ${r.cliente} (${r.hora})` };
            }
        }
    }
    return { conflito: false };
}

// ABRIR E SUBMETER MODAL DE RESERVA
function openReservaModal(resData = null, defaultMesaId = null) {
    DOM.formReserva.reset();
    document.getElementById('res-id').value = '';
    document.getElementById('availability-warning').classList.add('hidden');

    // Preencher Select de Mesas
    const selectMesa = document.getElementById('res-mesa');
    selectMesa.innerHTML = '';
    appState.mesas.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m.id;
        opt.textContent = `${m.nome} (Cap: ${m.capacidade})`;
        selectMesa.appendChild(opt);
    });

    if(resData) {
        document.getElementById('modal-reserva-title').textContent = "Editar Reserva";
        document.getElementById('res-id').value = resData.id;
        document.getElementById('res-nome').value = resData.cliente;
        document.getElementById('res-telefone').value = resData.telefone;
        document.getElementById('res-data').value = resData.data;
        document.getElementById('res-hora').value = resData.hora;
        document.getElementById('res-pessoas').value = resData.pessoas;
        document.getElementById('res-mesa').value = resData.mesaId;
        document.getElementById('res-estado').value = resData.estado;
        document.getElementById('res-obs').value = resData.obs || '';
    } else {
        document.getElementById('modal-reserva-title').textContent = "Nova Reserva";
        document.getElementById('res-data').value = getTodayString();
        if(defaultMesaId) document.getElementById('res-mesa').value = defaultMesaId;
    }

    DOM.modalReserva.classList.add('active');
}

DOM.formReserva.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = document.getElementById('res-id').value || 'RES-' + Date.now();
    const cliente = document.getElementById('res-nome').value.trim();
    const telefone = document.getElementById('res-telefone').value.trim();
    const data = document.getElementById('res-data').value;
    const hora = document.getElementById('res-hora').value;
    const pessoas = parseInt(document.getElementById('res-pessoas').value);
    const mesaId = document.getElementById('res-mesa').value;
    const estado = document.getElementById('res-estado').value;
    const obs = document.getElementById('res-obs').value.trim();

    const mesa = appState.mesas.find(m => m.id == mesaId);

    // Validação 1: Capacidade
    if(pessoas > mesa.capacidade) {
        showWarningModal(`A capacidade máxima da ${mesa.nome} é de ${mesa.capacidade} pessoas.`);
        return;
    }

    // Validação 2: Conflito de Horário
    const check = checkConflito(mesaId, data, hora, appState.config.duracaoPadrao, id);
    if(check.conflito) {
        // Encontrar alternativas
        const livres = appState.mesas.filter(m => 
            m.capacidade >= pessoas && !checkConflito(m.id, data, hora, appState.config.duracaoPadrao, id).conflito
        );
        let msg = `${check.motivo}.`;
        if(livres.length > 0) {
            msg += `<br>Mesas alternativas disponíveis: <strong>${livres.map(l => l.nome).join(', ')}</strong>`;
        } else {
            msg += `<br>Não existem mesas alternativas disponíveis para este horário.`;
        }
        showWarningModal(msg);
        return;
    }

    const newReserva = { id, cliente, telefone, data, hora, pessoas, mesaId, estado, obs, duracao: appState.config.duracaoPadrao };

    const idx = appState.reservas.findIndex(r => r.id === id);
    if(idx >= 0) appState.reservas[idx] = newReserva;
    else appState.reservas.push(newReserva);

    saveData();
    DOM.modalReserva.classList.remove('active');
    showToast("Reserva guardada com sucesso!", "success");
    renderReservasTable();
});

function showWarningModal(htmlMsg) {
    const box = document.getElementById('availability-warning');
    box.innerHTML = htmlMsg;
    box.classList.remove('hidden');
}

// INTERAÇÃO COM MESA NO MAPA
function openMesaModal(mesa, estadoAtual) {
    document.getElementById('mesa-info-titulo').textContent = `${mesa.nome} (Capacidade: ${mesa.capacidade} pessoas)`;
    const body = document.getElementById('mesa-info-body');
    const actions = document.getElementById('mesa-info-actions');

    const todayStr = getTodayString();
    const resAtual = appState.reservas.find(r => 
        r.mesaId == mesa.id && r.data === todayStr && r.estado !== 'Cancelada' && r.estado !== 'Concluída'
    );

    let html = `<p><strong>Estado Atual:</strong> <span class="badge st-${estadoAtual.toLowerCase().replace('/', '').replace(' ', '')}">${estadoAtual}</span></p>`;

    if(resAtual) {
        html += `
            <div style="margin-top:10px; padding:10px; background:#f8f9fa; border-radius:4px;">
                <p><strong>Cliente:</strong> ${resAtual.cliente}</p>
                <p><strong>Hora:</strong> ${resAtual.hora}</p>
                <p><strong>Pessoas:</strong> ${resAtual.pessoas}</p>
                <p><strong>Telefone:</strong> ${resAtual.telefone}</p>
                <p><strong>Obs:</strong> ${resAtual.obs || 'Nenhuma'}</p>
            </div>
        `;
    } else {
        html += `<p style="margin-top:10px;">Sem reservas ativas para hoje neste momento.</p>`;
    }
    body.innerHTML = html;

    actions.innerHTML = '';
    if(resAtual) {
        const btnOcupar = document.createElement('button');
        btnOcupar.className = 'btn btn-warning';
        btnOcupar.textContent = 'Mudar Estado (Ocupar / Libertar)';
        btnOcupar.onclick = () => {
            resAtual.estado = resAtual.estado === 'Sentado/Ocupada' ? 'Concluída' : 'Sentado/Ocupada';
            saveData();
            DOM.modalMesaInfo.classList.remove('active');
            showToast("Estado da mesa atualizado!", "info");
        };
        actions.appendChild(btnOcupar);

        const btnEdit = document.createElement('button');
        btnEdit.className = 'btn btn-primary';
        btnEdit.textContent = 'Editar Reserva';
        btnEdit.onclick = () => {
            DOM.modalMesaInfo.classList.remove('active');
            openReservaModal(resAtual);
        };
        actions.appendChild(btnEdit);
    }

    const btnNova = document.createElement('button');
    btnNova.className = 'btn btn-success';
    btnNova.textContent = '+ Nova Reserva nesta Mesa';
    btnNova.onclick = () => {
        DOM.modalMesaInfo.classList.remove('active');
        openReservaModal(null, mesa.id);
    };
    actions.appendChild(btnNova);

    DOM.modalMesaInfo.classList.add('active');
}

// EDIÇÃO DA PLANTA (MODO DE ARRASTAR)
DOM.btnToggleEditMap.addEventListener('click', () => {
    appState.editMapMode = !appState.editMapMode;
    if(appState.editMapMode) {
        DOM.btnToggleEditMap.classList.add('hidden');
        DOM.btnSaveMap.classList.remove('hidden');
        showToast("Modo de edição ativo. Arraste as mesas para reposicionar.", "info");
    }
    renderMap();
});

DOM.btnSaveMap.addEventListener('click', () => {
    appState.editMapMode = false;
    DOM.btnToggleEditMap.classList.remove('hidden');
    DOM.btnSaveMap.classList.add('hidden');
    saveData();
    showToast("Nova planta guardada com sucesso!", "success");
    renderMap();
});

// AÇÕES DE EDIÇÃO E ELIMINAÇÃO
window.editReserva = function(id) {
    const res = appState.reservas.find(r => r.id === id);
    if(res) openReservaModal(res);
};

window.deleteReserva = function(id) {
    if(confirm("Tem a certeza que pretende eliminar esta reserva?")) {
        appState.reservas = appState.reservas.filter(r => r.id !== id);
        saveData();
        renderReservasTable();
        showToast("Reserva eliminada.", "error");
    }
};

// CONFIGURAÇÕES & BACKUP
DOM.formConfig.addEventListener('submit', (e) => {
    e.preventDefault();
    appState.config.nomeRestaurANTE = document.getElementById('cfg-rest-name').value;
    appState.config.duracaoPadrao = parseInt(document.getElementById('cfg-duration').value);
    appState.config.intervaloMinimo = parseInt(document.getElementById('cfg-interval').value);
    
    document.getElementById('restaurant-title-header').textContent = appState.config.nomeRestaurANTE;
    saveData();
    showToast("Configurações atualizadas!", "success");
});

document.getElementById('btn-export-backup').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `backup_restaurante_${getTodayString()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("Backup exportado com sucesso!", "success");
});

document.getElementById('import-file').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if(!file) return;

    if(confirm("ATENÇÃO: A importação irá substituir todos os dados atuais. Pretende continuar?")) {
        const reader = new FileReader();
        reader.onload = function(evt) {
            try {
                const importedData = JSON.parse(evt.target.result);
                if(importedData.mesas && importedData.reservas) {
                    appState = importedData;
                    saveData();
                    location.reload();
                } else {
                    alert("Ficheiro de backup inválido.");
                }
            } catch(err) {
                alert("Erro ao ler o ficheiro JSON.");
            }
        };
        reader.readAsText(file);
    }
});

document.getElementById('reset-all' || 'btn-reset-all').addEventListener('click', () => {
    if(confirm("ATENÇÃO: Esta operação irá eliminar TODOS os dados e repor a configuração de fábrica. Continuar?")) {
        localStorage.clear();
        location.reload();
    }
});

// EVENTOS DIVERSOS
function setupEventListeners() {
    document.querySelectorAll('.open-res-modal, #btn-quick-new-res').forEach(btn => {
        btn.addEventListener('click', () => openReservaModal());
    });

    document.getElementById('btn-quick-go-map').addEventListener('click', () => {
        document.querySelector('[data-tab="mapa"]').click();
    });

    document.querySelectorAll('.close-modal, .close-modal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            DOM.modalReserva.classList.remove('active');
            DOM.modalMesaInfo.classList.remove('active');
        });
    });

    // Filtros
    DOM.filterSearch.addEventListener('input', renderReservasTable);
    DOM.filterDate.addEventListener('change', renderReservasTable);
    DOM.filterStatus.addEventListener('change', renderReservasTable);
    document.getElementById('btn-reset-filters').addEventListener('click', () => {
        DOM.filterSearch.value = '';
        DOM.filterDate.value = '';
        DOM.filterStatus.value = '';
        renderReservasTable();
    });
}

// UTILITÁRIOS
function getTodayString() {
    const d = new Date();
    return d.toISOString().split('T')[0];
}

function formatDate(dateStr) {
    if(!dateStr) return '';
    const [y, m, d] = dateStr.split('-');
    return `${d}/${m}/${y}`;
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}
