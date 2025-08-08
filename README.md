# É Só abrir meu xoxoto 
me pede o .env
Este projeto é um CRUD simples de lista de tarefas (ToDo) utilizando React para o frontend e Supabase como backend (banco de dados).
##  Estrutura do Projeto

- `src/App.jsx`: Componente principal React, implementa as operações CRUD.
- `src/supabase-client.js`: Configuração da conexão com o Supabase.
- `src/App.css`: Estilos da aplicação.

## Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado
- Conta no Supabase com um projeto configurado
- Editor de código (ex: VS Code)

### Passo 1: Clone o repositório

```sh
git clone https://github.com/Matiax01/CrudTesteDeProjetoAmazonNext.git
cd CrudTesteDeProjetoAmazonNext
```

### Passo 2: Instale as dependências

```sh
npm install
```

### Passo 3: Configure o Supabase ou só pega o env comigo

- Crie um projeto no [Supabase](https://supabase.com/).
- Crie uma tabela chamada `ToDoLista` com os campos:
  - `id` (integer, primary key, auto increment)
  - `name` (text)
  - `isCompleted` (boolean)
- No arquivo `src/supabase-client.js`, coloque sua URL e chave do Supabase:

```js
const supabaseUrl = 'SUA_URL_DO_SUPABASE';
const supabaseKey = 'SUA_CHAVE_DO_SUPABASE';
```

### Passo 4: Rode o projeto

```sh
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## Funcionalidades CRUD

- **Create:** Adicione uma nova tarefa usando o campo de texto e o botão "Adicionar".
- **Read:** As tarefas cadastradas aparecem automaticamente na lista.
- **Update:** Clique em "Marcar como concluído" ou "Desmarcar" para alterar o status da tarefa.
- **Delete:** Clique em "Deletar Task" para remover uma tarefa da lista.

## Observações

- Todas as operações são sincronizadas com o banco Supabase.
- O layout é simples e responsivo.
- Para testes, basta adicionar, editar e remover tarefas pela interface.

---

Feito para fins de teste e aprendizado.

