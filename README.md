# Clone do Dio.Me  🌐

## Descrição: 
### Este projeto é um clone do site Dio.Me, desenvolvido com React e estilizado utilizando Styled Components. O objetivo é replicar a interface e a experiência do usuário das páginas principais do Dio.Me.

## Páginas Implementadas:

### Página Inicial: Apresenta a interface principal do Dio.Me, com informações sobre cursos e bootcamps disponíveis. 🏠

### Página de Login: Permite que usuários acessem suas contas ou se registrem na plataforma. 🔒

### Feed de Novidades: Exibe atualizações recentes, novos cursos e eventos relacionados. 📰

## 📌 Tecnologias Utilizadas

### - ⚛️ React: Biblioteca JavaScript para construção de interfaces de usuário.

### - 💅 Styled Components: Biblioteca para estilização de componentes React utilizando CSS-in-JS.

### - 🗺️ React Router DOM: Para gerenciamento de rotas entre as diferentes páginas do aplicativo.

### - ✅ React Hook Forms: Para validação de formulários. 

### - 📡 Axios: para Cliente HTTP.

### - 🗄️ json-server: para criar uma API fake com os usuários cadastros no site.

## 🚀 Validação de Formulário de Login

### A página de login possui validação de formulário utilizando o React Hook Form com integração ao Yup para garantir que os dados do usuário estejam corretos antes de submeter o formulário.

### Validação de E-mail: O campo de e-mail verifica se o formato inserido é válido (ex: exemplo@dominio.com).

### Validação de Senha: A senha precisa ter no mínimo 3 caracteres para ser considerada válida.

### Ao submeter o formulário de login, os dados são enviados para uma API fake construída com o json-server.

## 💻 API Fake de Usuários Cadastrados
### O projeto utiliza o json-server para criar uma API fake, que simula a autenticação de usuários cadastrados. A API está configurada para ler os dados de um arquivo db.json, que contém os dados de usuários cadastrados.

### Para autenticar um usuário, é realizado um GET na URL http://localhost:8001/users?email={email}&senha={senha} com os parâmetros email e senha enviados pelo usuário no formulário de login.

### Se um usuário com as credenciais fornecidas for encontrado, ele será redirecionado para a página Feed de Novidades.

## 🛠️ Como Executar o Projeto

### 1️⃣ Clone este repositório:

#### git clone https://github.com/seu-usuario/dioclone.git

### 2️⃣ Acesse a pasta do projeto:

#### cd dioclone

### 3️⃣ Instale as dependências:

#### npm install

### 4️⃣ Execute a API fake:

#### npm run api

### Isso irá iniciar o servidor da API fake com o json-server na porta 8001.

### 5️⃣ Execute o projeto React:

#### npm start

### 6️⃣ Abra o navegador em http://localhost:3000

### O projeto estará disponível no navegador e você poderá interagir com a interface de login, fazer autenticação e acessar o feed de novidades.

## Projeto realizado por: Pedro Macedo.