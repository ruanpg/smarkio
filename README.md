# Lista Filmes TMDB

## Descrição do Projeto:
Esse projeto consiste em listar os filmes mais acessados da semana no site do TMDB

## Funcionalidades

Apresenta seis filmes na homepage, contendo titulo, capa e ano de lançamento.
Todas as capas são botões clicáveis que, ao clicar, será apresentado um popup com informações complementares sobre o filme

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Sequelize](https://sequelize.org/)
- [Vue.js](https://vuejs.org/)
- [Axios](https://axios-http.com/)
- [Express](https://expressjs.com/)

## Como Rodar:

### Pré-requisitos para executar a aplicação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disso, será necessário um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Rodando...

- Dentro do Diretório backend:
    - Na pasta principal do projeto: npm install para instalar as dependências;
    - Apagar o diretório .ENV e em .ENVexemple colocar os respectivos valores seguindo o exemplo colocado. Assim que já estiver substituído, renomear o diretório para .ENV;
    - Executar o comando "npx sequelize db:create" para criar o BD;
    - Executar o comando "npx sequelize db:migrate" para criar as tabelas dentro do BD;
    - Para rodar o serve, executar com o comando "yarn dev";
- Dentro do Diretório frontend:        
    - Executar o comando "yarn install" para instalar as dependências;
    - Executar o comando "yarn serve" para rodar o serv
    - O servidor inciará na porta: 8081 - acesse http://localhost:8081

## Contato
- Linkedin: [Ruan Pereira Guimarães](https://www.linkedin.com/in/ruan-pereira-1939a112a/)
- Email: ruanpg@live.com