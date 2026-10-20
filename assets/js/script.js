/* ====== EDITE AQUI ====== */
const EMAIL = 'ca.peterdrucker@gmail.com'; // TODO: confirmar e-mail oficial
const LT = 'https://forms.gle/Pz8ktExDyrrn8kM99';
const LTS = 'https://chat.whatsapp.com/C29ZciAGacD7fIRwcMhw3y';
const LTP = 'https://chat.whatsapp.com/Ihgdq2vCTXg7EGxnLnwJR2';
const LTF = 'https://sigaa.ufrn.br/sigaa/public/curso/portal.jsf?id=2000002&lc=pt_BR';

const LINKS = [
    // cat: comunicados | oportunidades | eventos (pode combinar separando por espaço)
    {
        cat: 'comunicados', hl: true, icon: 'inbox', color: '#7353FF', tag: 'Canal aberto', title: 'Ouvidoria PDCA',
        desc: 'Dúvida, sugestão ou precisa de ajuda? Fale com a gente.', url: LT
    },          // TODO: link real
    {
        cat: 'oportunidades', icon: 'trend', color: '#4596AC', title: 'Oportunidades em ADM',
        desc: 'Estágios, trainees, bolsas e projetos na UFRN.', url: LTS
    },                    // TODO: link real
    {
        cat: 'oportunidades comunicados', icon: 'chat', color: '#34D399', title: 'Comunidade Administração UFRN',
        desc: 'Grupos oficiais de avisos e integração no WhatsApp.', url: LTP
    },               // TODO: link real
    {
        cat: 'oportunidades', icon: 'globe', color: '#4385DC', title: 'Página da Coordenação',
        desc: 'Portal do curso de Administração, contatos e SIGAA.', url: LTF
    },               // TODO: link real
    {
        cat: 'comunicados', icon: 'book', color: '#3F5AE0', title: 'Estatuto & Documentos',
        desc: 'Transparência, atas e regimento interno do Centro Acadêmico.', //sem link
    },      // TODO: link real
];
/* ======================== */

const P = { // ícones (Lucide, embutidos)
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3"/>',
    mega: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    cal: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    up: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    ig: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z"/><path d="M17.5 6.5h.01"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/>',
    chev: '<path d="m9 18 6-6-6-6"/>',
    inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
    trend: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
    chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/>',
    book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    cam: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3"/>'
};
const ic = n => P[n] || '';
document.querySelectorAll('[data-ic]').forEach(s => s.innerHTML = ic(s.dataset.ic));

/* lista */
const list = document.getElementById('list');
LINKS.forEach((l, i) => {
    const a = document.createElement('a');
    a.className = 'card glass' + (l.hl ? ' hl' : '');
    a.href = l.url; a.target = '_blank'; a.rel = 'noopener';
    a.dataset.cat = l.cat; a.style.animationDelay = (i * 60) + 'ms';
    a.innerHTML = `<span class="ic" style="background:${l.color}33;border:1px solid ${l.color}66;color:${l.color}"><svg class="i" viewBox="0 0 24 24">${ic(l.icon)}</svg></span>
<span class="tx"><h3>${l.title}${l.tag ? `<span class="new">${l.tag}</span>` : ''}</h3><p>${l.desc}</p></span>
<svg class="i ch" viewBox="0 0 24 24">${ic('chev')}</svg>`;
    list.appendChild(a);
});

/* filtros (abas + destaques) */
function filter(cat) {
    document.querySelectorAll('#tabs button').forEach(b => b.setAttribute('aria-pressed', b.dataset.filter === cat));
    list.querySelectorAll('.card').forEach(c => { c.style.display = (cat === 'all' || c.dataset.cat.split(' ').includes(cat)) ? '' : 'none'; });
}
document.querySelectorAll('[data-filter]').forEach(b => b.addEventListener('click', () => {
    filter(b.dataset.filter);
    if (b.classList.contains('story')) list.scrollIntoView({ behavior: 'smooth', block: 'start' });
}));

/* toast */
const toast = document.getElementById('toast');
function say(msg) { toast.textContent = msg; toast.classList.add('on'); setTimeout(() => toast.classList.remove('on'), 2000); }
async function copy(text) {
    try { await navigator.clipboard.writeText(text); return true; }
    catch {
        const t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select();
        try { document.execCommand('copy'); return true; } catch { return false; } finally { t.remove(); }
    }
}

/* tema */
const root = document.documentElement, themeIc = document.getElementById('themeIc');
function setTheme(t) {
    root.dataset.theme = t; themeIc.innerHTML = t === 'dark' ? ic('sun') : ic('moon'); root.style.colorScheme = t;
    document.querySelector('meta[name=theme-color]').content = t === 'dark' ? '#0D1030' : '#F4F7FC';
}
let saved = null; try { saved = localStorage.getItem('pdca-theme'); } catch { }
setTheme(saved || 'dark');
document.getElementById('themeBtn').onclick = () => {
    const t = root.dataset.theme === 'dark' ? 'light' : 'dark'; setTheme(t);
    try { localStorage.setItem('pdca-theme', t); } catch { }
};

/* compartilhar e e-mail */
document.getElementById('shareBtn').onclick = async () => {
    if (navigator.share) { try { await navigator.share({ title: 'PDCA UFRN – Gestão Essentia', url: location.href }); } catch { } }
    else say(await copy(location.href) ? 'Link copiado!' : 'Não foi possível copiar');
};
document.getElementById('mailBtn').onclick = async () => {
    const lbl = document.getElementById('mailLbl');
    if (await copy(EMAIL)) { lbl.textContent = 'E-mail copiado!'; setTimeout(() => lbl.textContent = 'Copiar e-mail', 2000); }
    else say(EMAIL);
};