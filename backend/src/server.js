// ...existing code...
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import demandaRoutes from "./routes/demandaRoutes.js";
import obraRoutes from "./routes/obraRoutes.js";
import authRoutes from "./routes/authRoutes.js";

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

// Porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
// ...existing code...