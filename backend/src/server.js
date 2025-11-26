// ...existing code...
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import demandaRoutes from "./routes/demandaRoutes.js";
import obraRoutes from "./routes/obraRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { supabase } from "./config/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/demandas", demandaRoutes);
app.use("/api/obras", obraRoutes);
app.use("/api/auth", authRoutes);

// Rotas de exemplo
app.get("/", (req, res) => {
  res.send("API da Plataforma de Transparência está rodando 🚀");
});

// Função para testar conexão com o Supabase (tenta ler 1 registro da tabela 'obras')
async function testarConexaoDB() {
  try {
    const { data, error } = await supabase.from('obras').select('id').limit(1);
    if (error) {
      console.error('Erro ao acessar Supabase:', error.message || error);
      return false;
    }
    console.log('Supabase: conexão verificada (consulta de teste OK).');
    return true;
  } catch (err) {
    console.error('Erro ao testar Supabase:', err);
    return false;
  }
}

// Porta do servidor
const PORT = process.env.PORT || 5000;

// Inicia o servidor após tentar verificar a conexão com o DB (não bloqueante em caso de falha)
(async () => {
  const ok = await testarConexaoDB();
  if (!ok) {
    console.warn('Aviso: não foi possível verificar o Supabase na inicialização. Se as variáveis de ambiente estiverem corretas, verifique a conectividade da rede e as chaves. O servidor continuará inicializando.');
  }

  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
})();
// ...existing code...