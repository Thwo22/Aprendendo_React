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


