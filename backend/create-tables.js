import { supabase } from "./src/config/db.js";
import fs from 'fs';

const sql = fs.readFileSync('./create-tables.sql', 'utf8');

async function createTables() {
  try {
    console.log("Executando SQL para criar tabelas...");

    const { data, error } = await supabase.rpc('exec_sql', { sql });

    if (error) {
      console.error("Erro ao executar SQL:", error);
    } else {
      console.log("Tabelas criadas com sucesso!");
    }
  } catch (error) {
    console.error("Erro:", error);
  }
}

createTables();
