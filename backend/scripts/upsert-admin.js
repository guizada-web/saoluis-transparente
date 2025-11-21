import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Faltam variáveis SUPABASE_URL ou SUPABASE_KEY no .env');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function upsertAdmin() {
  const username = 'cleanwork7';
  const passwordHash = '$2b$10$N8I4JU4O6WGedek.MZqy1uHDy4QXAcblRDj96yGn1/YfT1j9YqFkS';
  const role = 'admin';

  // Tenta inserir ou atualizar (upsert) baseado em username
  const { data, error } = await supabase
    .from('users')
    .upsert({ username, password: passwordHash, role }, { onConflict: 'username' })
    .select();

  if (error) {
    console.error('Erro ao upsert admin:', error);
    process.exit(1);
  }

  console.log('Upsert admin bem-sucedido:', data);
}

upsertAdmin().then(() => process.exit(0)).catch(err => { console.error(err); process.exit(1); });
