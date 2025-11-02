# Jogo da Memória em navegador web
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

## Sobre o projeto
O presente projeto foi desenvolvido como uma atividade de fixação dos princípios de **orientação de objetos com [JavaScript](https://www.oracle.com/br/developer/javascript/)**. Foi solicitado a elaboração de Jogo de Memória interativo com o usuário e ferramentas que fossem de nossa escolha. Optamos pelo desenvolvimento de opção de **modo de jogo**, onde o usuário pode escolher o tema das cartas presentes.

## Instruções para execução

O site é acessível através do link de hospedagem em nuvem da [Netlify](https://www.netlify.com/), possibilitando fácil acesso aos usuários por quaiquer navegadores.

- https://jogodamemoria-ph.netlify.app/

## Como jogar

Ao acessar o link, a página mostrará um selecionador com as [opções de tema](#galeria-de-temas-da-partida) temas para o baralho. No momento, há três opções de temáticas:

- Macacos;
- Animais domésticos;
- Animais marinhos;

![Tela inicial com opções de tema de cartas do jogo da memória.](/opc_JM.png)

Ao selecionar uma das opções, selecione a opção ao lado **Iniciar Jogo**.

Em seguida, um conjunto de oito cartas aparecerá na tela, iniciando a partida. 

![Tela mostra a iniciação do jogo, mostrando a opção um conjunto de 8 cartas.](/inicio_JM.png)

Em cada rodada, duas cartas devem ser selecionadas, com a segunda sendo igual a primeira. Caso as cartas não possuam a mesma ilustração, ambas serão ocultadas novamente. Senão, elas ficaram visiveís ao jogador durantes as próximas rodadas com as cartas restantes.

As rodadas devem ser repetidas até que todos os pares sejam encontrados, assim, finalizando a partida!

![Tela mostra a mensagem em formato de 'alert' de navegador com a mensagem 'Bom jogo, você ganhou!!'](/vitoria_JM.png)

### Galeria de temas da partida

- Tema "Macacos"

![Tema Macacos'](/macacos_JM.png)
- Tema "Animais Domésticos"

!['Tema Animais Domésticos'](/domesticos.png)
- Temas "Animais Marinhos"

!['Tema Animais Marinhos'](/marinhos_JM.png)

## Princípios SOLID aplicados

### S — Single Responsibility Principle (Responsabilidade Única)

As funções como _verificar()_, _mostrar()_ e _criarTabuleiro()_ têm papéis bem definidos e tratam de uma única tarefa.

- **verificar()** - cuida da lógica de comparação de cartas.

- **mostrar()** - cuida de virar uma carta.

- **criarTabuleiro()** - monta o tabuleiro.

### O — Open/Closed Principle (Aberto/Fechado)

O objeto _temas_ podem ser adicionados facilmente sem alterar o restante do código.

```
const temas = {
    macacos: ['🙈', '🙉', '🙊', '🐵'],
    domesticos: ['🐶', '🐱', '🐭', '🐰'],
    marinhos: ['🐠', '🐙', '🐳', '🐬']
};
```

### L — Liskov Substitution Principle (Substituição de Liskov)

Este príncipo não se aplica diretamente aqui, pois o código não usa classes nem herança.


### I — Interface Segregation Principle (Segregação de Interfaces)

O conceito também não se aplica, pois o código não usa interfaces nem classes.

### D — Dependency Inversion Principle (Inversão de Dependência)

O código depende unicamente do funcionamento do 'DOM' para seu funcionamento, não possuindo uma classe que faça o _intermédio_ entre elas, portanto não é aplicado aqui.

##
Contudo, apesar de sua simplicidade, o código possibilita a aplicação futura de extensões, caso necessário, visto que, há a devida separação de responsabilidades entre as funções.

## Dos colaboradores

- Pedro Henrick A. Braga - desenvolvedor e elaborador do sistema;
- Mayra G.M. dos Santos e Lucas N. Grandini - documentação e relatório do projeto.


