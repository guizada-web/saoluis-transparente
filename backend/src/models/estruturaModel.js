import { supabase } from "../config/db.js";

const table = "estruturas_culturais";

export const listarEstruturas = async () => {
  const { data, error } = await supabase
    .from(table)
    .select("*")
    .order("nome", { ascending: true });

  if (error) throw error;
  return data;
};

export const criarEstrutura = async (estrutura) => {
  const { data, error } = await supabase
    .from(table)
    .insert(estrutura)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const atualizarEstrutura = async (id, updates) => {
  const { data, error } = await supabase
    .from(table)
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deletarEstrutura = async (id) => {
  const { data, error } = await supabase
    .from(table)
    .delete()
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const obterEstrutura = async (identifier) => {
  const isNumeric = !Number.isNaN(Number(identifier));
  const { data, error } = await supabase
    .from(table)
    .select("*")
    .eq(isNumeric ? "id" : "slug", isNumeric ? Number(identifier) : identifier)
    .maybeSingle();

  if (error) throw error;
  return data;
};

