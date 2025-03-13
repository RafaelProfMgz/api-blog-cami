# 🚀 API Blog Cami

![API Blog Cami](https://img.shields.io/badge/NestJS-000000?style=for-the-badge&logo=nestjs&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white) ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white) ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)

Este é um projeto de **API** para um blog desenvolvido com **NestJS**, **Prisma**, **Docker** e outras ferramentas modernas para garantir um desenvolvimento eficiente e escalável. A API é projetada para ser robusta, segura e fácil de manter, com foco em boas práticas de desenvolvimento e arquitetura limpa.

---

## 🌟 Recursos Principais

- **Autenticação e Autorização**: Suporte a autenticação JWT e estratégias de autorização.
- **CRUD de Posts**: Gerenciamento completo de posts, incluindo criação, leitura, atualização e exclusão.
- **Gerenciamento de Usuários**: Cadastro, login, atualização de perfil e exclusão de usuários.
- **Documentação Automatizada**: Documentação da API gerada automaticamente com Swagger.
- **Testes Automatizados**: Testes unitários e de integração com Jest.
- **Dockerização**: Facilidade de desenvolvimento e deployment com Docker.

---

## 🛠️ Tecnologias Utilizadas

- **NestJS**: Framework para construir APIs eficientes e escaláveis.
- **Prisma**: ORM (Object Relational Mapper) para interagir com o banco de dados.
- **Docker**: Contêineres para facilitar o desenvolvimento e deployment.
- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript.
- **PostgreSQL**: Banco de dados relacional robusto e escalável.
- **ESLint**: Ferramenta para garantir que o código siga as melhores práticas e convenções.
- **Prettier**: Ferramenta para formatar o código automaticamente.
- **Jest**: Framework de testes para garantir que a aplicação esteja funcionando corretamente.
- **Swagger**: Ferramenta para documentação de APIs.

---

## 🏗️ Estrutura do Projeto

Abaixo está a estrutura geral do projeto:

```plaintext
📦 meu-projeto-api
┣ 📂 prisma
┃ ┗ 📜 schema.prisma
┣ 📂 src
┃ ┣ 📂 database
┃ ┃ ┣ 📜 prisma.module.ts
┃ ┃ ┗ 📜 prisma.service.ts
┃ ┣ 📂 common
┃ ┃ ┣ 📂 decorators
┃ ┃ ┣ 📂 filters
┃ ┃ ┣ 📂 guards
┃ ┃ ┣ 📂 interceptors
┃ ┃ ┣ 📂 middlewares
┃ ┃ ┣ 📂 pipes
┃ ┃ ┗ 📂 utils
┃ ┣ 📂 config
┃ ┣ 📂 models
┃ ┃ ┣ 📂 auth
┃ ┃ ┃ ┣ 📂 dto
┃ ┃ ┃ ┃ ┣ 📜 login.dto.ts
┃ ┃ ┃ ┃ ┗ 📜 register.dto.ts
┃ ┃ ┃ ┣ 📂 strategies
┃ ┃ ┃ ┃ ┣ 📜 jwt.strategy.ts
┃ ┃ ┃ ┃ ┗ 📜 local.strategy.ts
┃ ┃ ┃ ┣ 📜 auth.controller.ts
┃ ┃ ┃ ┣ 📜 auth.module.ts
┃ ┃ ┃ ┣ 📜 auth.service.ts
┃ ┃ ┃ ┣ 📜 jwt-auth.guard.ts
┃ ┃ ┃ ┗ 📜 auth.guard.ts
┃ ┃ ┣ 📂 post
┃ ┃ ┃ ┣ 📂 dto
┃ ┃ ┃ ┃ ┣ 📜 create-post.dto.ts
┃ ┃ ┃ ┃ ┣ 📜 delete-post.dto.ts
┃ ┃ ┃ ┃ ┣ 📜 get-one-post.dto.ts
┃ ┃ ┃ ┃ ┣ 📜 pagination.dto.ts
┃ ┃ ┃ ┃ ┗ 📜 update-post.dto.ts
┃ ┃ ┃ ┣ 📜 post.controller.ts
┃ ┃ ┃ ┣ 📜 post.module.ts
┃ ┃ ┃ ┗ 📜 post.service.ts
┃ ┃ ┣ 📂 users
┃ ┃ ┃ ┣ 📂 dto
┃ ┃ ┃ ┃ ┣ 📜 create-user.dto.ts
┃ ┃ ┃ ┃ ┣ 📜 delete-user.dto.ts
┃ ┃ ┃ ┃ ┣ 📜 get-one-user.dto.ts
┃ ┃ ┃ ┃ ┣ 📜 pagination.dto.ts
┃ ┃ ┃ ┃ ┗ 📜 update-user.dto.ts
┃ ┃ ┃ ┣ 📜 users.controller.ts
┃ ┃ ┃ ┣ 📜 users.module.ts
┃ ┃ ┃ ┗ 📜 users.service.ts
┃ ┣ 📜 app.module.ts
┃ ┣ 📜 main.ts
┃ ┣ 📜 swagger.ts
┃ ┣ 📜 app.service.ts
┃ ┗ 📜 app.controller.ts
┣ 📜 Dockerfile
┣ 📜 docker-compose.yml
┣ 📜 .env
┣ 📜 .prettierrc
┣ 📜 eslint.config.mjs
┣ 📜 structure.md
┣ 📜 .gitignore
┣ 📜 nest-cli.json
┣ 📜 package.json
┣ 📜 package-lock.json
┣ 📜 tsconfig.json
┣ 📜 tsconfig.build.json
┗ 📜 README.md
```

---

## 📚 Documentação da API

A documentação da API está disponível através do Swagger. Para acessar, inicie o servidor e navegue até `/api` no seu navegador.

```bash
http://localhost:3000/api
```

**OBS: Só funciona em produção.**

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js (v22.14.0 ou superior)
- Docker
- Docker Compose

### Passos para Execução

Aqui está uma versão mais organizada e estruturada das instruções para facilitar o entendimento e execução:

---

## Como Rodar o Projeto

### 1. **Clone o Repositório**

Primeiro, clone o repositório do projeto em sua máquina local:

```bash
git clone https://github.com/RafaelProfMgz/blog-cami.git
cd blog-cami
```

### 2. **Instale as Dependências**

Instale todas as dependências do projeto utilizando o `npm`:

```bash
npm install
```

### 3. **Configure o Ambiente**

- Crie um arquivo `.env` na raiz do projeto.
- Configure as variáveis de ambiente necessárias para o funcionamento da aplicação.

Você pode encontrar um exemplo de configuração no arquivo `.env.example`.

### 4. **Suba os Contêineres Docker**

Para subir os contêineres Docker necessários para rodar a aplicação, execute:

```bash
docker-compose up -d
```

### 5. **Execute as Migrações do Prisma**

Aplique as migrações do Prisma para configurar o banco de dados:

```bash
npx prisma migrate dev
```

### 6. **Inicie o Servidor**

Agora, inicie o servidor de desenvolvimento para rodar a aplicação:

```bash
npm run start:dev
```

### 7. **Acesse a API**

A documentação da API estará disponível em [http://localhost:3000](http://localhost:3000).

### 8. **Verifique a Versão do Node.js (Opcional)**

Caso esteja utilizando o **Node Version Manager (nvm)**, certifique-se de estar utilizando a versão correta do Node.js especificada no arquivo `.nvmrc`:

```bash
nvm use
```

Isso garantirá que você esteja utilizando a versão exata do Node.js necessária para o projeto.

---

Esses passos garantirão que você consiga configurar, executar e acessar a API do projeto de forma eficiente!

## 🧪 Testes

Para executar os testes, utilize o seguinte comando:

```bash
npm test
```

Para testes de integração (e2e):

```bash
npm run test:e2e
```

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙌 Agradecimentos

- **NestJS** por fornecer um framework incrível para construção de APIs.
- **Prisma** por simplificar a interação com o banco de dados.
- **Docker** por facilitar o desenvolvimento e deployment.

---

Feito por [Angel Rafael](https://github.com/RafaelProfMgz)
