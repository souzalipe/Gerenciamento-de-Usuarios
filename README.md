## Gerenciamento de Usuários 👩🏾👨🏾

Este projeto full-stack crud que tem como objetivo criar gerenciador de usuários podendo adicionar, editar e deletar um usuário.

### Estrutura de Arquivos 📄


```
MINI-PROJETO-M5
│
├── DataBase
│   └── crud.sql
│
├── frontEnd
│   ├── node_modules
│   ├── public
│   └── src
│       ├── assets
│       ├── Components
│       │   ├── Create.jsx
│       │   ├── Edit.jsx
│       │   ├── Home.jsx
│       │   ├── Read.jsx
│       ├── App.css
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│   ├── .gitignore
│   ├── index.html
│   ├── eslint.config.js
│   ├── package-lock.json
│   ├── package.json
│   ├── vite.config.js
│
├── server
│   ├── node_modules
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│
└── README.md

```


## Tecnologias 🔧

- ⚛️ React.js
- 📦 Node.js
- 🐬 MySql 

## Instalação 🛠

1. Clone o repositório:

   ```
   git clone https://github.com/souzalipe/Mini-projeto-m5
   ```

2. Navegue até o diretório do projeto:

   ```
   cd Mini-projeto-m5
   ```
   
   ```
   cd frontEnd
   ```

   ```
   cd sever
   ```

3. Instale as dependências:

   ```
   npm install
   ```


## Executando a Aplicação *SEVER( BACK-END )* &#x27A1;

- npm start

## Executando a Aplicação *fronEnd* &#x27A1;

- npm run dev

# Importando o Banco de Dados 

Este projeto utiliza um banco de dados MySQL chamado **crud**. O arquivo para importação está localizado na pasta `DataBase` do repositório. Siga as instruções abaixo para importar o banco de dados corretamente via terminal.

## Pré-requisitos

Antes de importar o banco de dados, certifique-se de que você tem os seguintes itens instalados e configurados:

- MySQL instalado (versão mínima 5.7)
- Acesso ao MySQL via terminal 
- O arquivo `.sql` do banco de dados (disponível na pasta `/DataBase` do repositório)

## Instruções para Importar via Terminal

1. Abra o terminal e conecte-se ao MySQL:
   ```bash
   mysql -u seu_usuario -p

2.Crie o banco de dados com o nome crud:

```
CREATE DATABASE crud;
```

3.Importe o arquivo .sql para o banco de dados:

```
mysql -u seu_usuario -p crud < caminho_para_o_arquivo/DataBase/crud.sql
```

4.Verifique se o banco foi importado corretamente:

```
USE crud;
SHOW TABLES;
```
## Endpoints

## *Mostras usuários*

- Rota: GET /
- Descrição: Mostra os usários ja cadastrados.
- Corpo da Requisição: json

   ```
   {
     "nome": "valor",
     "telefone": valor,
     "email": valor,
   }
   ```

- Resposta: 

   ```
   [
     {
       "id_user": 1,
       "nome": "João Silva",
       "telefone": "99999-9999",
       "email": "joao@example.com"
     },
     {
       "id_user": 2,
       "nome": "Maria Souza",
       "telefone": "88888-8888",
       "email": "maria@example.com"
     }
   ]
   
   ```

## *Adicionar usuário*

- Rota: POST /user
- Descrição: Adiciona um novo usuário
- Corpo da Requisição:
   ```
   {
     "nome": "Nome do Usuário",
     "telefone": "Telefone do Usuário",
     "email": "Email do Usuário"
   }
   
   ```
- Resposta:

   ```
   {
  "affectedRows": 1,
  "insertId": 3,
  "message": "Usuário adicionado com sucesso!"
   }
   ```

## *Buscar usuário por id*

- Rota: GET /read/:id
- Descrição: Retorna as um usuário com o id.
- Resposta:
   ```
   {
     "id_user": 1,
     "nome": "João Silva",
     "telefone": "99999-9999",
     "email": "joao@example.com"
   }
   
   ```

## *Atualizar usuário*

- Rota: PUT /update/:id
- Descrição: Atualiza usuário com base no id.
- Corpo da requisição:
   ```
   {
     "nome": "Nome Atualizado",
     "telefone": "Telefone Atualizado",
     "email": "Email Atualizado"
   }
   
   ```
- Resposta:
   ```
   {
     "affectedRows": 1,
     "message": "Usuário atualizado com sucesso!"
   }

   
   ```


## *Excluir usuário*

- Rota: DELETE /delete/:id
- Descrição: Exclui um usuário pelo ID.
- Resposta:
   ```
   {
     "id_user": 1,
     "nome": "João Silva",
     "telefone": "99999-9999",
     "email": "joao@example.com"
   }
   
   ```

## Contribuindo

Se desejar contribuir com o projeto, siga os passos abaixo:

1. Fork o projeto.
2. Crie uma nova branch com sua feature: `git checkout -b minha-feature`.
3. Commit suas alterações: `git commit -m 'Minha nova feature'`.
4. Push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## Licença

© *Felipe Nascimento de Souza*. 
<img  width=100% src="https://capsule-render.vercel.app/api?type=waving&color=499a00&height=120&section=footer"/>
