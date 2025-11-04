import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: "postgresql://postgres:cleanwork7.@cxppkhiirfkwzhoouglo.supabase.co:5432/postgres",
  ssl: { rejectUnauthorized: false },
  connectionTimeoutMillis: 10000,
  query_timeout: 10000
});
