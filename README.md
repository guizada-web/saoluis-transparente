# CleanWork

Aplicativo web para transparência e participação comunitária em São Luís — permite visualizar obras públicas no mapa, submeter demandas comunitárias e acompanhar informações básicas das obras.

## Visão geral

O projeto é dividido em duas partes:

- `backend/` — API em Node.js (Express) que serve endpoints para obras e demandas.
- `frontend/` — Aplicação React com Vite que exibe mapa, lista de demandas e formulário para criar novas demandas.

Funcionalidades principais:

- Listagem de obras públicas no mapa (Leaflet).
- Criação de novas demandas comunitárias (opcionalmente com localização geográfica).
- Alternância entre tema claro e escuro (modo noturno).
- Possibilidade de remover a localização associada a uma demanda.

## Pré-requisitos

- Node.js (recomendado 18+)
- NPM ou Yarn
- Banco de dados PostgreSQL (opcional: o backend está configurado para usar Postgres via variáveis de ambiente)

## Configuração do backend

1. Crie um arquivo `.env` dentro de `backend/` com as variáveis abaixo (a **service role key** do Supabase só pode ser usada no servidor; nunca exponha esse valor no frontend):

```
SUPABASE_URL=https://<id-do-seu-projeto>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<service-role-key>
JWT_SECRET=<chave forte à sua escolha>
PORT=5000
```

> ⚠️ **Importante:** não use a chave `anon` no backend, porque as policies das tabelas (`users`, `obras`, `demandas`, `estruturas_culturais`) permitem acesso apenas para a role `service_role`. Sem a service role key, o login retornará “Usuário não encontrado”.

2. Instale dependências e inicie o servidor (PowerShell):

```powershell
cd backend
npm install
npm run dev    # usa nodemon; ou npm start
```

3. Se ainda não tiver rodado as migrações, execute o script SQL (`backend/create-tables.sql`) no Supabase SQL Editor ou utilize o script `node backend/create-tables.js` após configurar o `.env`. Depois rode `node backend/scripts/upsert-admin.js` para garantir o admin padrão `cleanwork7 / cleanwork777`.

# 🌆 CleanWork

Aplicativo web para transparência e participação comunitária em São Luís — visualize obras públicas no mapa, submeta demandas e acompanhe informações relevantes.

---

## 🔎 Visão geral

O projeto tem duas partes principais:

- `backend/` — API em Node.js (Express) que fornece endpoints para obras e demandas.
- `frontend/` — Aplicação React (Vite) com mapa (Leaflet), formulário de novas demandas e listagem.

Funcionalidades principais:

- 🗺️ Listagem de obras públicas no mapa (Leaflet).
- 📝 Criação de demandas comunitárias (opcional com localização geográfica).
- 🌙 Alternância entre tema claro e escuro (persistido em localStorage).
- ❌ Remoção da localização associada a uma demanda.

---

## ⚙️ Pré-requisitos

- Node.js (recomendado 18+)
- NPM ou Yarn
- PostgreSQL (o backend usa Postgres via variáveis de ambiente)

---

## 🛠️ Configuração do backend

1. Garanta que o `.env` esteja preenchido conforme descrito na seção superior.

2. Instale dependências e inicie o servidor (PowerShell):

```powershell
cd backend
npm install
npm run dev    # usa nodemon; ou npm start
```

3. Para popular dados iniciais, utilize:

```powershell
node backend/create-tables.js        # cria as tabelas via Supabase RPC
node backend/scripts/upsert-admin.js # garante o usuário admin cleanwork7
node backend/populate-estruturas.js  # opcional
node backend/populate-obras.js       # opcional
```

> ❗ Caso não queira usar o RPC `exec_sql`, copie o conteúdo de `create-tables.sql` para o SQL Editor do Supabase e execute por lá.

---

## 🖥️ Configuração do frontend

1. Instale dependências e inicie a aplicação (PowerShell):

```powershell
cd frontend
npm install
npm run dev
```

O frontend (Vite) ficará disponível em `http://localhost:5173` por padrão.

---

## 🚀 Endpoints principais

- `GET /api/demandas` — lista todas as demandas
- `POST /api/demandas` — cria nova demanda (aceita `titulo`, `descricao`, `bairro`, `latitude`, `longitude`, `usuario_id`)
- `PUT /api/demandas/:id` — atualiza status da demanda
- `PATCH /api/demandas/:id/location` — atualiza ou remove localização (envie `{ "latitude": null, "longitude": null }` para remover)
- `DELETE /api/demandas/:id` — exclui demanda

---

## 🗺️ Integração mapa / demandas

- Clique no mapa para selecionar coordenadas ao criar uma demanda — as coordenadas são enviadas ao backend junto ao POST.
- Marcadores no mapa representam obras (ou demandas com localização). O popup do marcador tem um botão para remover a localização (faz um `PATCH /api/demandas/:id/location`).

---

## 📝 Notas e recomendações

- O tema claro/escuro é gerenciado por `ThemeContext` e salvo em `localStorage`.
- Para automatizar a criação das tabelas, adicione migrações com ferramentas como Knex, Sequelize CLI ou TypeORM.

---

## ✅ Próximos passos sugeridos

- Implementar autenticação para associar `usuario_id` às demandas.
- Adicionar paginação e filtros à listagem de demandas.
- Escrever testes automatizados para os endpoints e componentes.

---

Se quiser, eu posso:

- ▶️ Iniciar o backend aqui para testar os endpoints (preciso de sua confirmação para rodar o servidor).
- 🧭 Criar scripts de migração para facilitar a criação das tabelas.
