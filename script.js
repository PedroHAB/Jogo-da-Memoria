// ==============================================
// Jogo da Memória
// Script responsável por criar, controlar e verificar
// o funcionamento do jogo da memória com diferentes temas.
// ==============================================
// O código só é iniciado após o carregamento completo da página
document.addEventListener('DOMContentLoaded', function () {

    // Nesta parte, são coletados os elementos do HTML que serão utilizados no código: Tabuleiro, seletor de tema e o botão de iniciar.
    const tabuleiro = document.getElementById('tabuleiro');
    const jogoSelect = document.getElementById('jogoSelect');
    const btnStart = document.getElementById('btnStart');

    // Temas do tabuleiro, estruturados de forma que seja simples adicionar novos.
    const temas = {
        macacos: ['🙈', '🙉', '🙊', '🐵'],
        domesticos: ['🐶', '🐱', '🐭', '🐰'],
        marinhos: ['🐠', '🐙', '🐳', '🐬']
    };

    // Inicialização das variáveis
    let simbolos = []; // Símbolos do tema escolhido
    let cartas = []; // Cartas do jogo (símbolos duplicados e embaralhados)
    let clicou = 0; // Contador de cartas viradas (0 ou 1)
    let clicks = [0, 0]; // Índices das cartas clicadas
    let certos = 0; // Placar: número de cartas acertadas
    let clicados = []; // Array de funções de evento de clique para cada carta
    let bloqueado = false; // Flag para bloquear cliques durante a verificação
    let divs = []; // Referência para todos os elementos das cartas (divs)


    // Função para verificar se as duas cartas viradas são iguais e se o jogador ganhou
    function verificar() {

        // O clique fica bloqueado durante a verificação, daí a variável: bloqueado
        bloqueado = true;

        // Verifica se os símbolos das cartas são iguais, comparando o conteúdo HTML.
        // Os índices das cartas estão armazenados no vetor clicks.
        if (divs[clicks[0]].innerHTML === divs[clicks[1]].innerHTML) {
            // Quando as cartas são iguais, remove-se o evento de clique delas, impedindo que o usuário clique novamente.
            divs[clicks[0]].removeEventListener('click', clicados[clicks[0]]);
            divs[clicks[1]].removeEventListener('click', clicados[clicks[1]]);

            // Adiciona 2 pontos ao placar do jogador (duas cartas acertadas).
            certos += 2;

            // Verifica se a pontuação é igual ao número total de cartas; se for, o usuário ganhou.
            if (certos === cartas.length) {
                alert("Parabéns! Você venceu o jogo!");
            }

            // Após a verificação (acerto), o clique é liberado imediatamente.
            bloqueado = false;

        } else {
            // Se as cartas não forem iguais, elas são viradas de volta (mostrando o '🌲') após 1 segundo.
            setTimeout(function () {
                divs[clicks[0]].innerHTML = '🌲';
                divs[clicks[1]].innerHTML = '🌲';
                // Após virar as cartas, o clique é liberado.
                bloqueado = false;
            }, 1000);
        }
    }

    // Função para virar/mostrar uma carta (no índice i)
    function mostrar(i) {

        // Se o clique estiver bloqueado ou se a carta já estiver virada, a função retorna sem fazer nada.
        if (bloqueado || divs[i].innerHTML !== '🌲') return;

        // Modifica o conteúdo da carta para mostrar o símbolo referente ao seu índice no array 'cartas'.
        divs[i].innerHTML = cartas[i];

        // Verifica o número de cartas viradas:
        if (clicou < 1) {
            // Se for a primeira carta virada, armazena seu índice em clicks[0] e muda 'clicou' para 1.
            clicks[0] = i;
            clicou = 1;
        } else {
            // Se for a segunda carta virada (clicou era 1), armazena seu índice em clicks[1],
            // reseta 'clicou' para 0 e inicia a função 'verificar'.
            clicks[1] = i;
            clicou = 0;
            verificar();
        }
    }

    // Função para criar e montar o tabuleiro
    function criarTabuleiro(simbolosTema) {

        // Reinicia as variáveis de controle para permitir um novo jogo.
        clicou = 0;
        clicks = [0, 0];
        certos = 0;
        bloqueado = false;
        clicados = [];

        // Para melhor organização, busca-se os contêineres de linha e zera-se o conteúdo deles.
        const linhaSuperior = document.getElementById('linhaSuperior');
        const linhaInferior = document.getElementById('linhaInferior');
        linhaSuperior.innerHTML = '';
        linhaInferior.innerHTML = '';

        // Duplica os símbolos do tema, cria o conjunto de cartas e as embaralha.
        cartas = simbolosTema.concat(simbolosTema);
        cartas.sort(() => Math.random() - 0.5);

        // Cria e insere as cartas no tabuleiro
        cartas.forEach((_, i) => {
            const ndiv = document.createElement('div');
            ndiv.classList.add('carta');
            ndiv.innerHTML = '🌲'; // Símbolo da 'costa' da carta

            /* Para possibilitar a remoção do evento de clique, é criado um array 'clicados' do mesmo tamanho que as cartas.
            Cada índice armazena uma função que chama 'mostrar(i)'.
            Ao adicionar o evento de clique, utiliza-se a função armazenada em 'clicados[i]' em vez de uma função anônima direta. */
            clicados[i] = function () { mostrar(i); };
            ndiv.addEventListener('click', clicados[i]);

            // Divide as cartas: metade na linha superior e o restante na inferior.
            if (i < cartas.length / 2) {
                linhaSuperior.appendChild(ndiv);
            } else {
                linhaInferior.appendChild(ndiv);
            }
        });

        // Coleta todas as cartas criadas (divs) e as armazena no vetor 'divs'.
        divs = document.querySelectorAll('.carta');
    }

    /* Adiciona o evento de clique ao botão 'Start'.
    Quando clicado, ele pega o tema selecionado no HTML, armazena seus símbolos no vetor 'simbolos'
    e inicia a função 'criarTabuleiro' com os símbolos escolhidos. */
    btnStart.addEventListener('click', () => {
        const escolha = jogoSelect.value;
        simbolos = temas[escolha];
        criarTabuleiro(simbolos);
    });
});