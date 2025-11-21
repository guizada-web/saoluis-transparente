import { supabase } from '../config/db.js';

export const getUserByUsername = async (username) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('username', username)
    .single();

  if (error && error.code !== 'PGRST116') throw error;
  return data;
};

export const createUser = async (username, password, role = 'user') => {
  const { data, error } = await supabase
    .from('users')
    .insert({ username, password, role })
    .select()
    .single();

  if (error) throw error;
  return data;
};
