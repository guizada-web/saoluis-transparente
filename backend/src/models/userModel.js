import { supabase } from '../config/db.js';

export const getUserByUsername = async (username) => {
  const sanitizedUsername = (username ?? '').trim();
  if (!sanitizedUsername) return null;

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .ilike('username', sanitizedUsername)
    .single();

  if (error && error.code !== 'PGRST116') throw error;
  return data;
};

export const createUser = async (username, password, role = 'user') => {
  const sanitizedUsername = (username ?? '').trim();
  if (!sanitizedUsername) throw new Error('Nome de usuário obrigatório');

  const { data, error } = await supabase
    .from('users')
    .insert({ username: sanitizedUsername, password, role })
    .select()
    .single();

  if (error) throw error;
  return data;
};
