## Gerenciamento de Usuários 👩🏾👨🏾

Este projeto full-stack crud que tem como objetivo criar gerenciador de usuários podendo adicionar, editar e deletar um usuário.

### Estrutura de Arquivos 📄


```
├── src
│ ├── controller
│ │ └── estatistica.controller.js
│ ├── model
│ │ └── estatisticas.model.js
│ ├── routes
│ │ └── estatistica.router.js
│ └── server.js
├── .gitignore
├── package-lock.json
├── package.json
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
