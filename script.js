// Banco de Dados Devocional
const db = {
    promessas: [
        { titulo: "A Volta Visível de Cristo", texto: "Cristo voltará de forma física e visível. Não em segredo, mas em glória, para consumar a história e buscar a Sua Igreja.", ref: "Atos 1:11", categoria: "Reino Futuro" },
        { titulo: "A Ressurreição dos Mortos", texto: "A morte não tem a última palavra. Nossos corpos serão ressuscitados, transformados e glorificados para viver eternamente com Ele.", ref: "1 Coríntios 15:51-53", categoria: "Reino Futuro" },
        { titulo: "Novos Céus e Nova Terra", texto: "A criação que geme será redimida. Habitaremos em um mundo físico restaurado, livre da corrupção do pecado.", ref: "2 Pedro 3:13", categoria: "Reino Futuro" },
        { titulo: "Toda Lágrima Enxugada", texto: "O luto, o pranto, a dor e a morte acabarão. O próprio Deus consolará definitivamente o Seu povo.", ref: "Apocalipse 21:4", categoria: "Reino Futuro" },
        { titulo: "A Plena Habitação de Deus", texto: "O véu foi rasgado, mas um dia a comunhão será plena. Deus fará do meio dos homens a Sua morada eterna.", ref: "Apocalipse 21:3", categoria: "Reino Futuro" },
        { titulo: "A Derrota Definitiva do Mal", texto: "O mal não vencerá. Satanás, a morte e o inferno serão lançados no lago de fogo. A justiça prevalecerá.", ref: "Apocalipse 20:10, 14", categoria: "Reino Futuro" },
        { titulo: "O Juízo Final", texto: "Todas as coisas ocultas serão reveladas. O Rei julgará com perfeita justiça, e os Seus estarão seguros nEle.", ref: "Mateus 25:31-34", categoria: "Reino Futuro" },
        { titulo: "A Consumação do Reino", texto: "Cristo entregará o Reino ao Pai. Tudo estará sujeito a Ele, e Deus será tudo em todos.", ref: "1 Coríntios 15:24-28", categoria: "Reino Futuro" }
    ],
    sofrimento: [
        { texto: "Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque tu estás comigo.", ref: "Salmo 23:4", meditacao: "Ele não promete desvios do vale, mas a Sua presença constante dentro dele. O Bom Pastor caminha com você.", categoria: "Sofrimento" },
        { texto: "Pois considero que os sofrimentos do tempo presente não podem ser comparados com a glória a ser revelada em nós.", ref: "Romanos 8:18", meditacao: "A balança da eternidade fará nossa dor presente parecer leve. Há uma glória imensurável sendo preparada.", categoria: "Sofrimento" },
        { texto: "Não andeis ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus.", ref: "Filipenses 4:6", meditacao: "A ansiedade se combate com a entrega. Deposite suas cargas nAquele que sustenta o universo.", categoria: "Sofrimento" },
        { texto: "Quando passares pelas águas, estarei contigo; e, quando pelos rios, eles não te submergirão.", ref: "Isaías 43:2", meditacao: "Deus não promete a ausência das águas, mas a garantia de que você não vai se afogar. Ele está no barco.", categoria: "Sofrimento" },
        { texto: "Em tudo somos atribulados, mas não angustiados; perplexos, mas não desanimados; abatidos, mas não destruídos.", ref: "2 Coríntios 4:8-9", meditacao: "A fraqueza humana é o palco onde a glória de Deus brilha mais forte. Há um tesouro em seu vaso de barro.", categoria: "Sofrimento" },
        { texto: "O Senhor está perto dos que têm o coração quebrantado e salva os de espírito abatido.", ref: "Salmo 34:18", meditacao: "Seu choro não o afasta de Deus; aproxima. Ele é especialista em recolher corações em pedaços.", categoria: "Sofrimento" },
        { texto: "Jesus chorou.", ref: "João 11:35", meditacao: "O Rei do universo não é insensível à nossa dor. Ele sente, Ele chora conosco, e Ele tem o poder sobre a morte.", categoria: "Sofrimento" },
        { texto: "Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei.", ref: "Mateus 11:28", meditacao: "O descanso não é encontrado em férias ou fugas, mas na Pessoa de Jesus. Corra para Ele.", categoria: "Sofrimento" },
        { texto: "Ele cura os de coração quebrantado e cuida das suas feridas.", ref: "Salmo 147:3", meditacao: "O Médico dos médicos tem as mãos furadas para cuidar das feridas que ninguém mais vê.", categoria: "Sofrimento" },
        { texto: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.", ref: "Salmo 46:1", meditacao: "Mesmo que a terra trema, há um lugar seguro. Esconda-se na Rocha Eterna.", categoria: "Sofrimento" }
    ],
    alegria: [
        { texto: "Alegrem-se sempre no Senhor. Novamente direi: Alegrem-se!", ref: "Filipenses 4:4", meditacao: "A alegria cristã não depende das circunstâncias, mas da imutabilidade de quem Cristo é.", categoria: "Alegria" },
        { texto: "Tu me farás conhecer a vereda da vida, a alegria plena da tua presença, eterno prazer à tua direita.", ref: "Salmo 16:11", meditacao: "Deus não apenas nos dá alegria; Ele é a nossa Alegria. O prazer eterno se encontra nEle.", categoria: "Alegria" },
        { texto: "Não se entristeçam, porque a alegria do Senhor é a força de vocês.", ref: "Neemias 8:10", meditacao: "A alegria não é um luxo, é combustível. A alegria em quem Deus é nos dá forças para perseverar.", categoria: "Alegria" },
        { texto: "Meus irmãos, considerem motivo de grande alegria o fato de passarem por diversas provações.", ref: "Tiago 1:2", meditacao: "Uma alegria tão profunda que consegue enxergar o propósito de Deus por trás da fornalha.", categoria: "Alegria" },
        { texto: "Regozijem-se sempre, orem continuamente, deem graças em todas as circunstâncias.", ref: "1 Tessalonicenses 5:16-18", meditacao: "A gratidão é o pulmão da alegria. Uma vida que reconhece a graça de Deus é uma vida jubilosa.", categoria: "Alegria" },
        { texto: "Sirvam ao Senhor com alegria; apresentem-se diante dele com cânticos.", ref: "Salmo 100:2", meditacao: "Nossa adoração e nosso trabalho não são pesos de escravos, mas privilégios de filhos adotados.", categoria: "Alegria" },
        { texto: "Ainda que a figueira não floresça... ainda assim eu exultarei no Senhor e me alegrarei no Deus da minha salvação.", ref: "Habacuque 3:17-18", meditacao: "Quando as bênçãos se vão, o Abençoador permanece. E Ele é o suficiente para o nosso gozo.", categoria: "Alegria" },
        { texto: "Mas os justos se alegram e exultam diante de Deus; e têm grande júbilo.", ref: "Salmo 68:3", meditacao: "Justificados pela fé, temos paz. E dessa paz brota uma exultação sincera na presença do Pai.", categoria: "Alegria" },
        { texto: "Até agora vocês não pediram nada em meu nome. Peçam e receberão, para que a alegria de vocês seja completa.", ref: "João 16:24", meditacao: "O próprio Jesus deseja que nossa alegria transborde, fundamentada no que Ele conquistou por nós.", categoria: "Alegria" },
        { texto: "Este é o dia que o Senhor fez; regozijemo-nos e alegremo-nos nele.", ref: "Salmo 118:24", meditacao: "Cada novo amanhecer é misericórdia derramada. Hoje é o dia de viver a alegria da salvação.", categoria: "Alegria" }
    ],
    sabedoria: [
        { texto: "O temor do Senhor é o princípio da sabedoria, e o conhecimento do Santo é entendimento.", ref: "Provérbios 9:10", meditacao: "A verdadeira inteligência não começa nos livros, mas na reverência diante da santidade e grandeza de Deus.", categoria: "Sabedoria" },
        { texto: "Ensina-nos a contar os nossos dias para que o nosso coração alcance sabedoria.", ref: "Salmo 90:12", meditacao: "Lembrar que a vida é um sopro nos ajuda a não desperdiçá-la com o que não tem peso eterno.", categoria: "Sabedoria" },
        { texto: "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento.", ref: "Provérbios 3:5", meditacao: "Nossa mente é caída. Confiar na revelação de Deus é mais seguro do que seguir a intuição humana.", categoria: "Sabedoria" },
        { texto: "Acima de tudo, guarde o seu coração, pois dele dependem as fontes da vida.", ref: "Provérbios 4:23", meditacao: "O pecado sempre começa no afeto, antes de virar ação. Proteja as afeições da sua alma.", categoria: "Sabedoria" },
        { texto: "Há tempo para todo propósito debaixo do céu.", ref: "Eclesiastes 3:1", meditacao: "Deus não está apressado nem atrasado. Descansar em Sua providência é o ápice da prudência.", categoria: "Sabedoria" },
        { texto: "De que adianta ao homem ganhar o mundo inteiro e perder a sua alma?", ref: "Marcos 8:36", meditacao: "Nenhum sucesso terreno pode compensar a falência espiritual. A sabedoria investe na eternidade.", categoria: "Sabedoria" },
        { texto: "Deus resiste aos soberbos, mas dá graça aos humildes.", ref: "Tiago 4:6", meditacao: "A arrogância nos coloca em guerra contra o próprio Criador. A humildade nos abre as portas da graça.", categoria: "Sabedoria" },
        { texto: "No muito falar não falta transgressão, mas o que modera os lábios é prudente.", ref: "Provérbios 10:19", meditacao: "O silêncio muitas vezes é a morada do sábio. Cuidado com palavras impulsivas.", categoria: "Sabedoria" },
        { texto: "Lembre-se do seu Criador nos dias da sua juventude, antes que venham os dias difíceis.", ref: "Eclesiastes 12:1", meditacao: "Não ofereça a Deus apenas as sobras de uma vida gasta. Entregue-Lhe o seu vigor hoje.", categoria: "Sabedoria" },
        { texto: "Não se enganem: de Deus não se zomba. Pois o que o homem semear, isso também colherá.", ref: "Gálatas 6:7", meditacao: "A santidade importa. A graça perdoa a culpa do pecado, mas frequentemente não remove as suas consequências terrenas.", categoria: "Sabedoria" }
    ],
    identidade: [
        { texto: "Vejam que grande amor o Pai nos concedeu: sermos chamados filhos de Deus, o que de fato somos!", ref: "1 João 3:1", meditacao: "Você não é um servo tolerado, mas um filho amado e adotado pela obra de Cristo.", categoria: "Identidade" },
        { texto: "Portanto, se alguém está em Cristo, é nova criação. As coisas antigas já passaram; eis que surgiram coisas novas!", ref: "2 Coríntios 5:17", meditacao: "Seu passado não dita seu destino. Em Cristo, você foi ressuscitado para uma nova vida.", categoria: "Identidade" },
        { texto: "Mas em todas estas coisas somos mais que vencedores, por meio daquele que nos amou.", ref: "Romanos 8:37", meditacao: "A vitória não está na isenção do sofrimento, mas na certeza de que nada pode nos separar do Seu amor.", categoria: "Identidade" },
        { texto: "Pois vocês são salvos pela graça, por meio da fé, e isto não vem de vocês, é dom de Deus.", ref: "Efésios 2:8", meditacao: "Sua salvação não é salário pelo seu esforço, é presente da Sua graça soberana. Descanse nEle.", categoria: "Identidade" },
        { texto: "Vocês, porém, são geração eleita, sacerdócio real, nação santa, povo exclusivo de Deus.", ref: "1 Pedro 2:9", meditacao: "Nossa vida é uma liturgia viva, anunciando as grandezas dAquele que nos chamou das trevas para a luz.", categoria: "Identidade" },
        { texto: "Fui crucificado com Cristo. Assim, já não sou eu quem vive, mas Cristo vive em mim.", ref: "Gálatas 2:20", meditacao: "Sua vida anterior morreu na cruz. A vida que você vive hoje é sustentada pela fé no Filho de Deus.", categoria: "Identidade" },
        { texto: "Pois a nossa cidadania está nos céus, de onde esperamos ansiosamente o Salvador, o Senhor Jesus.", ref: "Filipenses 3:20", meditacao: "O mundo não é nosso lar final. Somos exilados viajando em direção à nossa verdadeira pátria.", categoria: "Identidade" },
        { texto: "Pois ele nos resgatou do domínio das trevas e nos transportou para o Reino do seu Filho amado.", ref: "Colossenses 1:13", meditacao: "Você mudou de lado na guerra cósmica. O domínio das trevas não tem mais direito legal sobre sua vida.", categoria: "Identidade" },
        { texto: "Não sabem que o corpo de vocês é santuário do Espírito Santo que habita em vocês, que lhes foi dado por Deus?", ref: "1 Coríntios 6:19", meditacao: "O próprio Deus reside dentro de você através do Espírito. Caminhe com reverência.", categoria: "Identidade" },
        { texto: "Nenhuma condenação há para os que estão em Cristo Jesus.", ref: "Romanos 8:1", meditacao: "Quando o inimigo tentar lembrar você do seu passado, lembre-o de que a dívida já foi paga na cruz.", categoria: "Identidade" }
    ],
    esperanca: [
        { texto: "Aquele que começou a boa obra em vocês, vai completá-la até o dia de Cristo Jesus.", ref: "Filipenses 1:6", meditacao: "Deus não abandona projetos pela metade. A santificação que Ele começou em você será terminada na glória.", categoria: "Esperança" },
        { texto: "Tendo esperança em Deus... de que haverá ressurreição, tanto de justos como de injustos.", ref: "Atos 24:15", meditacao: "A esperança da ressurreição sustenta a vida daquele que sofre e sofre injustiça hoje.", categoria: "Esperança" },
        { texto: "Que o Deus da esperança os encha de toda alegria e paz, por sua confiança nele, para que vocês transbordem de esperança.", ref: "Romanos 15:13", meditacao: "Nossa esperança não é natural, ela é fruto do poder do Espírito Santo em corações que confiam na Palavra.", categoria: "Esperança" },
        { texto: "Mas nós, segundo a sua promessa, aguardamos novos céus e nova terra, em que habita a justiça.", ref: "2 Pedro 3:13", meditacao: "Onde há dor hoje, haverá justiça perfeita. A promessa não falhará.", categoria: "Esperança" },
        { texto: "Temos essa esperança como âncora firme e segura da alma.", ref: "Hebreus 6:19", meditacao: "Em meio às tempestades da vida, nossa âncora não está presa nas circunstâncias, mas rasgou o véu e está firme em Cristo.", categoria: "Esperança" },
        { texto: "E a esperança não nos decepciona, porque Deus derramou seu amor em nossos corações.", ref: "Romanos 5:5", meditacao: "A esperança bíblica não é um 'talvez', é uma certeza baseada no amor comprovado na cruz.", categoria: "Esperança" },
        { texto: "Não se turbe o vosso coração; credes em Deus, crede também em mim. Na casa de meu Pai há muitas moradas.", ref: "João 14:1-2", meditacao: "O Rei está preparando um lugar para você. Não permita que o medo domine seu coração peregrino.", categoria: "Esperança" },
        { texto: "Estou convencido de que nem morte nem vida... poderá nos separar do amor de Deus que está em Cristo Jesus.", ref: "Romanos 8:38-39", meditacao: "A segurança eterna não depende da sua força de segurar a mão de Deus, mas da força dEle em não soltar a sua.", categoria: "Esperança" },
        { texto: "Ele o guardará em perfeita paz, aquele cujo propósito está firme, porque em ti confia.", ref: "Isaías 26:3", meditacao: "Uma mente fixada na soberania de Deus é a receita para a verdadeira paz interior.", categoria: "Esperança" },
        { texto: "Jesus Cristo é o mesmo, ontem, hoje e para sempre.", ref: "Hebreus 13:8", meditacao: "Tudo muda. Pessoas, saúde, economias. Mas o nosso Salvador não muda. Ele é o rochedo imutável.", categoria: "Esperança" }
    ]
};

// Juntar todos os versículos para o sorteio
const todosVersiculos = [
    ...db.sofrimento,
    ...db.alegria,
    ...db.sabedoria,
    ...db.identidade,
    ...db.esperanca
];

// Funções de Renderização
function renderCards(containerId, data, isPromessa = false) {
    const container = document.getElementById(containerId);
    if (!container) return;

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        if (isPromessa) {
            card.innerHTML = `
                <span class="badge">${item.categoria}</span>
                <h3 class="card-title">${item.titulo}</h3>
                <p class="card-text">${item.texto}</p>
                <div class="card-ref"><i data-lucide="book" width="16" height="16"></i> ${item.ref}</div>
            `;
        } else {
            card.innerHTML = `
                <h3 class="card-title" style="font-family: var(--font-heading); font-style: italic;">"${item.texto}"</h3>
                <p class="card-text">${item.meditacao}</p>
                <div class="card-ref"><i data-lucide="book" width="16" height="16"></i> ${item.ref}</div>
            `;
        }
        
        container.appendChild(card);
    });
}

// Inicializar Cards
document.addEventListener('DOMContentLoaded', () => {
    renderCards('grid-promessas', db.promessas, true);
    renderCards('grid-sofrimento', db.sofrimento.slice(0, 6)); // Mostrando apenas 6 de cada na home
    renderCards('grid-alegria', db.alegria.slice(0, 6));
    renderCards('grid-sabedoria', db.sabedoria.slice(0, 6));
    renderCards('grid-identidade', db.identidade.slice(0, 6));
    
    // Atualizar ícones lucide recém criados
    lucide.createIcons();
    
    loadFavorites();
});

// Lógica do Versículo do Dia
let versiculoAtual = null;

document.getElementById('btn-gerar-versiculo').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * todosVersiculos.length);
    versiculoAtual = todosVersiculos[randomIndex];
    
    document.getElementById('v-categoria').innerText = versiculoAtual.categoria;
    document.getElementById('v-texto').innerText = `"${versiculoAtual.texto}"`;
    document.getElementById('v-referencia').innerText = versiculoAtual.ref;
    document.getElementById('v-meditacao').innerText = versiculoAtual.meditacao;
    
    const container = document.getElementById('versiculo-container');
    container.classList.remove('hidden');
    
    // Check if is favorited
    updateFavoriteIcon();
});

document.getElementById('btn-copiar').addEventListener('click', () => {
    if (!versiculoAtual) return;
    const textToCopy = `"${versiculoAtual.texto}"\n— ${versiculoAtual.ref}\n\nMeditação: ${versiculoAtual.meditacao}\n\nVia: Rumo ao Reino`;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Copiado para a área de transferência!');
    });
});

// Favoritos Locais
function getFavorites() {
    return JSON.parse(localStorage.getItem('rumoReinoFavs') || '[]');
}

function saveFavorites(favs) {
    localStorage.setItem('rumoReinoFavs', JSON.stringify(favs));
}

document.getElementById('btn-favoritar').addEventListener('click', () => {
    if (!versiculoAtual) return;
    let favs = getFavorites();
    
    const exists = favs.findIndex(f => f.ref === versiculoAtual.ref);
    if (exists >= 0) {
        favs.splice(exists, 1); // Remove
    } else {
        favs.push(versiculoAtual); // Adiciona
    }
    
    saveFavorites(favs);
    updateFavoriteIcon();
    loadFavorites();
});

function updateFavoriteIcon() {
    if (!versiculoAtual) return;
    const favs = getFavorites();
    const btn = document.getElementById('btn-favoritar');
    const icon = btn.querySelector('i');
    
    if (favs.some(f => f.ref === versiculoAtual.ref)) {
        icon.setAttribute('fill', 'var(--detail-terra)');
        icon.style.color = 'var(--detail-terra)';
    } else {
        icon.setAttribute('fill', 'none');
        icon.style.color = 'var(--text-muted)';
    }
}

function loadFavorites() {
    const favs = getFavorites();
    const container = document.getElementById('grid-favoritos');
    const section = document.getElementById('favoritos-container');
    
    container.innerHTML = '';
    
    if (favs.length > 0) {
        section.style.display = 'block';
        favs.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <span class="badge">${item.categoria}</span>
                <h3 class="card-title" style="font-family: var(--font-heading); font-style: italic; font-size: 1rem;">"${item.texto}"</h3>
                <div class="card-ref"><i data-lucide="book" width="16" height="16"></i> ${item.ref}</div>
                <button class="btn-icon" style="margin-top: 12px; align-self: flex-start;" onclick="removeFavorite('${item.ref}')">
                    <i data-lucide="trash-2" width="16" height="16"></i> Remover
                </button>
            `;
            container.appendChild(card);
        });
        lucide.createIcons();
    } else {
        section.style.display = 'none';
    }
}

window.removeFavorite = function(ref) {
    let favs = getFavorites();
    favs = favs.filter(f => f.ref !== ref);
    saveFavorites(favs);
    loadFavorites();
    if(versiculoAtual && versiculoAtual.ref === ref) {
        updateFavoriteIcon();
    }
}
