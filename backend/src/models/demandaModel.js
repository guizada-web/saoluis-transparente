import { pool } from "../config/db.js";

export const criarDemanda = async (titulo, descricao, bairro, estado, cidade, latitude, longitude, usuario_id) => {
  const result = await pool.query(
    "INSERT INTO demandas (titulo, descricao, bairro, estado, cidade, latitude, longitude, usuario_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
    [titulo, descricao, bairro, estado, cidade, latitude, longitude, usuario_id]
  );
  return result.rows[0];
};

export const listarDemandas = async () => {
  const result = await pool.query("SELECT * FROM demandas ORDER BY id DESC");
  return result.rows;
};

export const atualizarDemanda = async (id, status) => {
  const result = await pool.query(
    "UPDATE demandas SET status = $1 WHERE id = $2 RETURNING *",
    [status, id]
  );
  return result.rows[0];
};

export const deletarDemanda = async (id) => {
  const result = await pool.query("DELETE FROM demandas WHERE id = $1 RETURNING *", [id]);
  return result.rows[0];
};
