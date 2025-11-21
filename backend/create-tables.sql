-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert admin user
-- Insert admin user (username: cleanwork7, senha: cleanwork777)
INSERT INTO users (username, password, role) VALUES ('cleanwork7', '$2b$10$N8I4JU4O6WGedek.MZqy1uHDy4QXAcblRDj96yGn1/YfT1j9YqFkS', 'admin') ON CONFLICT (username) DO NOTHING;

-- Create obras table
CREATE TABLE IF NOT EXISTS obras (
    id SERIAL PRIMARY KEY,
    titulo TEXT NOT NULL,
    descricao TEXT,
    bairro TEXT,
    status TEXT DEFAULT 'planejada',
    progresso INTEGER DEFAULT 0,
    valor_estimado REAL,
    data_inicio DATE,
    data_fim DATE,
    latitude REAL,
    longitude REAL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create demandas table
CREATE TABLE IF NOT EXISTS demandas (
    id SERIAL PRIMARY KEY,
    titulo TEXT NOT NULL,
    descricao TEXT,
    bairro TEXT,
    cidade TEXT,
    estado TEXT,
    status TEXT DEFAULT 'pendente',
    latitude REAL,
    longitude REAL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
