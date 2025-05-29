# Aprendendo_React
Nesse repositório documento todos meus testes e aprendizados com a biblioteca REACT

1- A priemira coisa que se deve fazer para inicar um projeto React é usar abrir o Terminal do Vs Code para poder estar baixado todas as dependencias do React:

Abra o terminal e digite "npm create vite@latest" (caso esteja usando o vite);

Após isso, digite o nome do seu projeto quando o terminal pedir: "Project name";

Certo, agor provavelmente o terminal perguntou qual será o nome do seu pacote (package name). Por padrão eu usarei Package.json mesmo.

após isso, uma lista de opções de bibliotecas irá aparecer. desceremos até react e confirmaremos.

agora voce estará diante de outra lista. entre elas, estará Javascript e Javascript + SWC. Qual a diferença entre eles e qual escolher?: Bom, a principal diferença entre os dois é o bundler de cada, ou seja, a ferramente que será usado para a transpilação (processo de converter código fonte escrito em uma linguagem para um código equivalente em uma outra linguagem (geralmente uma versão mais antiga da mesma linguagem)) ou seja. vai tranformar o Código Jsx em JS. Más e a versão Javascrip SWC? bom, ela usa um bundler escritp em Rust. enquanto o normal é escrito em GO. que é o que iremos usar. Por isso, selecione "Javascript".

Certo! agora iremos iremos entrar dentro da pasta que nomeamos mais cedo, para isso, digite no terminal: cd (nome_da_pasta) e enter. 

Agora Digite: 
npm i

para instalar todas as dependencias da biblioteca dentro da pasta que voce nomeou.

Agora. para abrir seu projeto no Navegor. você precisará de um host. Digite no terminal: 

npm run dev

E ele gerará um link de host local para o se navegador. Pressione Shift e clique encima do endereço em Azul.

Beleza. Para os próximos passos, vamos aprender um pouco sobre os arquivos que instalamos dentro do nosso projeto e para que eles servem.

meu-primeiro-react-app/  <-- Pasta raiz do seu projeto
├── public/              <-- Conteúdo estático
│   └── vite.svg         <-- Logo do Vite (exemplo)
├── src/                 <-- Seu código fonte principal (onde você mais trabalha)
│   ├── assets/          <-- Imagens, ícones, etc.
│   │   └── react.svg    <-- Logo do React (exemplo)
│   ├── App.css          <-- Estilos CSS para o componente App
│   ├── App.jsx          <-- Componente principal do seu aplicativo (onde o React começa)
│   ├── index.css        <-- Estilos CSS globais (para o HTML e body)
│   └── main.jsx         <-- Ponto de entrada do JavaScript para o React (renderiza o App)
├── .eslintrc.cjs        <-- Configurações do ESLint (ferramenta de linting para qualidade de código)
├── .gitignore           <-- Arquivos e pastas a serem ignorados pelo Git
├── index.html           <-- O arquivo HTML principal do seu aplicativo
├── package.json         <-- Metadados do projeto e lista de dependências
├── package-lock.json    <-- Versões exatas das dependências (gerado automaticamente)
├── README.md            <-- Documentação do projeto (geralmente como usar)
└── vite.config.js       <-- Configurações específicas do Vite

____________________________________________________________________________________________________________________

Bastante coisa né? que tal falarmos sobre: 

Arquivos que Você PODE APAGAR ou Modificar (Conteúdo Exemplo/Configurações Iniciais): 

    public/vite.svg: É apenas um arquivo SVG de exemplo. Você pode apagar, substituir ou ignorar.

    src/assets/react.svg: Outro arquivo SVG de exemplo. Pode apagar, substituir ou ignorar.

    src/App.css: Contém estilos CSS iniciais para o App.jsx. Você pode apagar todo o conteúdo e escrever seus próprios estilos, ou até mesmo apagar o arquivo se não for usá-lo e remover a importação em App.jsx.

    src/index.css: Contém estilos CSS globais. Similar ao App.css, você pode modificar, limpar ou apagar se não for usar e remover a importação em main.jsx.

    .eslintrc.cjs: Configurações do ESLint. Se você não planeja usar o ESLint para linting de código, pode apagar este arquivo, mas é altamente recomendado mantê-lo para garantir a qualidade do código.

    .gitignore: Você pode modificar este arquivo para incluir ou excluir pastas/arquivos específicos que você quer (ou não quer) que o Git rastreie. Não o apague, pois ele é útil para o controle de versão.

    README.md: Este é um arquivo de documentação. Você pode apagar todo o seu conteúdo e escrever sua própria documentação para o projeto. É uma boa prática mantê-lo, mas não essencial para o funcionamento do código.

Agora, antes de colocarmo em prática a nossa programação Utilizando a biblioteca React, devemos aprender mais sobre o que é JSX e como ele é usado pelo React.

JSX é um recurso muito utilizado pelo React, Ele é como o HTML, voce pode abrir e fechar tags, mas com algumas diferenças. Pois é como se voce estivesse escrevendo seu código HTML dentro do Javascript (que é a linguagem que o react é nativamente Programado). Atráves do JSX, nós podemos interpolar variaveis inserindo elas entre {} de uma forma té que parecida com o JS comum, MAS sem os "$". Também é possível executar funções em JSX que na maioria das vezes será usada para afetar a interface do usuário com mudanças a partir da interatividade dele com a página. Além disso, para estilização, assim como o html comum, você pode usar atributos de tags como ID´s e Classes. Porém, com algumas diferenças de Sintaxe já que estamos tratando esse código dentro de um Javascript por trás do panos.

Outro assunto muito importante antes de começar a Desenvolver em React, é ter uma noção do qu são Componentes em React, para que eles servem e qual a importância deles dentro do código?

-O que são Componentes?

Um componente em React é como um pequeno bloco dentro da sua página, ele pode ser um container, um botão, um título ou qualquer outra coisa, o importante é saber que em react você precisa saber estruturar esses blocos para construir a sua aplicação. De forma mais simples, é como se um componente fosse uma peça de lego. Cada peça tem a sua função, e se voce souber juntar todas as peças e encaixa-las de uma forma inteligente, pode construir um monumento legal.

Nos arquivos do nosso projeto React que instalamos, é possivel ver um chamado App.jsx, e esse arquivo já é um componente! o Primeiro Componente padrão do nosso site. Ele é o componente raiz (ou componente pai) da nossa aplicação, ou seja, ele é o responsavel por exibir o que colocamos nele na tela do navegador. No começo ele nao tem muita coisa, mas com o tempo, nós temos que criar cada componente de forma separada em diferentes arquivos (geralmente dentro de uma pasta chamada components) e ir importando pra dentro do nosso Componente pai, que vai mostrar essas coisas que fizemos para o cliente. Resumindo, é como se o react fosse um grande quebra-cabeça, onde todas as peças sao feitas separadamente e encaixadas no final, formando um layout.

Mas como juntar todos esses componentes se eles estão em aquivos diferentes? 

Sempre que voce criar um novo componente da sua aplicação, é importante voce exportar esse mesmo componente pro seu componente pai (q geralmente é o App.jsx). para fzaer isso, no arquivo do componente que voce criou, na ultima linha, escreva: 

"export default componente-filho" (nome de exemplificação)

e no componente pai, para importar esse componente para dentro dele, no topo do arquivo escreva:

"import componente-filho from "local/do/arquivo"; "

PRONTO! agora seu componente ja esta importado pra dentro do componente pai, voce so precisa usar ele, e é simples.

para colocar o seu comonente na tela, basta escolher um local onde ele ficará na pagina dentro do seu "Estrtura HTML" que na verdade é um JSX e escreva o nome do seu componente como se fosse um tag. exemplo: 

"<componente-filho/>"

Qual a praticidade disso? bom, é muito muito util, principalmente quando se fala em reutilização de componentes, ja que voce nao precisa reescrevdo o mesmo componente 200 vezes, voce só usa o que voce ja criou reescrevendo a tag e se quiser, pode fazer alterações individuais nele. Componentes tambem sao otimos em contexto de projetos escalaveis, resolução pratica de bugs e re-estilização ou modificação, nao precisando mudar todo o layout ou a pagina inteira, e sim somente o componente em especifico.

Agora, tendo conhecimento dessa parte do React, vamos entender um pouco mais sobre uma peça fundamental do React. Responsavel por dar mais vida e interatividade aos componentes, tornando-os de componentes estáticos para componentes Dinâmincos, Os Props. 

O QUE SÃO OS PROPS? 

Props sao propriedades impostas em um componente filho, é como se ele abrisse uma variavel em seu componente, onde o componente pai, importando ele, pode controlas os valores que irão ser armazenados nesse espaço. Um componente filho nao pode criar um valor por conta propria dentro de um prop e passar pro pai.

Agora que voce tem uma página já estruturada em React, chegamos na parte de ESstilizar ela, Vamos colocar em prática o Css que ja tivemos contato antes com o HTML básico. Mas agora, ao react, há algumas mudanças importantes que devemos nos atentar pra conseguir usar da melhor maneira. 

A primeira é que, se voce deseja fazer estilizxações globnais na sua página, como cor de fundo, tipografria, margin, padding, etc, melhor seria voce estilizar em css usando o arquivo ja existe (geralemnte chamado de index.css) que ja vem instalado junto com as dependências do seu projeto. 

Mas e quando o assunto é estilizar Componentes em especifico? o que fazemos? o index apenas altera as tags localizadas no componente pai, entao como fazermos essa aplicação mais específica?

Para isso, usamos os CSS MODULES, nele nós podemos fazer estilizações em arquivos jsx (ou simplesmente js) dos nossos componentes individuais. Primeiro voce cria uma pagina.css (opte sempre por usar o nome do seu componente com ".modules.css") exemplo:

"componenteFilho.component.css"

e agora que voce tem a pagina criada, voce so precisa importar ela para o arquivo jsx especifico no qual pretende estilizar. Mas atenção! Importar um arquivo CSS nao é a mesma coisa que importar um arquivo jsx como ja aprendemos antes, ele na verdade deve ser escrito de outra forma: 

No topo do seu site, escreva: 

import styles from "./componenteFilho.modules.css"

e agora que voce ja importou a página, vamos começar a estilização.  

Para estilizar tags como divs, paragrafos, etc, voce ja deve saber que geralmente usamos identificadores como Class ou ID´s. Bom, isso tambem muda no Reac, porque, para colocar esses identificadores no nosso JSX. fazemos da seguinte forma: 

"<div className={styles.container}></div>"

ou seja, alem do className no lugar de somente Class, devemos usar {styles.O_NOME_DA_TAG_QUE_QUEREMOS_PERSONALIZAR}

E lemebrando, nunca com -, use somente camelCase ou _

FRAGMENTS EM REACT.

Se a esse ponto voce já comecou a estruturar páginas simples com o conhecimento escrito até agora, talvez vocé tenha notado com a grande quatidade de divs usadas em um projeto React, já que uma das principais regras da biblioteca é que tudo deve sempre estar estrururado dentro de caixas. Mas no HTML, é nitido que excesso é um tanto exagerado e pode acabar deixando o arquivo sujo e de dificíl leitura. 

Essa é a pricipal função dos FRAGMENTS, eles servem para que voce possa passar elementos filhos para o container PAI sem ter que enviar uma div inteira junto, apenas o conteúdo em si, geralmente elementos mais simples como um parágrafo, listas, etc...

Para criar um fragment, ao invés de usar uma div para o seu componente filho, escreva apenas "<> </>" que é como se fosse uma "caixa-transparente", escreva todo o conteudo que voce quer que seja importado para o Componente pai sem que precise de uma div.

PROPTYPES

Voltando um pouco atrás, vamos falar sobre algumas coisas mais avançadas dos props, ja que são um elemento essencial do React. Os PropTypes são responsaveis por definir dentro do componente, o TIPO DE DADO que esta sendo passado, e o TIPO DE DADO que a prop "exige". Dessa forma, voce pode construir um algoritmo mais completo e eficiente, como também pode te ajudar em resolver bugs e tambem para trabalho em equipe, já que definindo um proptype, voce ajuda o proximo a entender melhor  intenção da prop.

Para voce poder definir isso, basta que, em uma função de um componente filho, voce faça:

Function nomeIdade ({nome, idade}) {
    return (
        <h1> olá {nome}, voce tem {idade}, correto?
    )
}

nomeIdade.propTypes = {
    nome: PropTypes.string.isRequired,
    idade: PropTypes.number,
}

// PropTypes.string.isRequired --> 
//isRequired --> Obrigatóriamente o dado passado precise ser um numero para que funcione corretamente.

OBS: para que toda essa funcionalidade funcione, é preciso baixar o pacote de prop-types no seu projeto. Basta abrir o terminal do seu projeto e digitar: 

npm install prop-types

EVENTOS NO REACT. 

Lá no HTML, Usei bastante eventos de Botoões como o onClick, onSubmit e outros, o mesmo é possível no React. Você pode criar botoes que disparam eventos dentro de funções de componentes, seja ele para alertar algo na tela, enviar um dado para o bando de dados, mudar o DOM da página, etc... Nessa ferramente existe uma boa diversidade de ações possíveis.

exemplo:

function componenteFilho {

    function meuEvento() {
        alert("Evento Disparado!")
    }

    return(
        <button onClick={meuEvento}>
    )
}

entre outros, É exatamente como no HTML, mas com as importações do React e algumas outras regrinhas de props

