BEGIN;

CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = timezone('utc', now());
  RETURN NEW;
END;
$$;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user','admin')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);

CREATE UNIQUE INDEX IF NOT EXISTS users_username_ci_idx ON users ((lower(username)));

INSERT INTO users (username, password, role)
VALUES (
  'cleanwork7',
  '$2b$10$N8I4JU4O6WGedek.MZqy1uHDy4QXAcblRDj96yGn1/YfT1j9YqFkS',
  'admin'
)
ON CONFLICT (username) DO UPDATE
SET password = EXCLUDED.password,
    role = EXCLUDED.role;

CREATE TABLE IF NOT EXISTS obras (
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  descricao TEXT,
  bairro TEXT,
  status TEXT NOT NULL DEFAULT 'planejada'
    CHECK (status IN ('planejada','em_andamento','concluida','cancelada','parada')),
  progresso SMALLINT NOT NULL DEFAULT 0 CHECK (progresso BETWEEN 0 AND 100),
  valor_estimado NUMERIC(14,2),
  data_inicio DATE,
  data_fim DATE,
  latitude NUMERIC(9,6),
  longitude NUMERIC(9,6),
  usuario_id INTEGER NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);

CREATE INDEX IF NOT EXISTS obras_status_idx ON obras (status);
CREATE INDEX IF NOT EXISTS obras_bairro_idx ON obras (bairro);
CREATE INDEX IF NOT EXISTS obras_usuario_idx ON obras (usuario_id);

DROP TRIGGER IF EXISTS set_timestamp_obras ON obras;
CREATE TRIGGER set_timestamp_obras
BEFORE UPDATE ON obras
FOR EACH ROW EXECUTE FUNCTION trigger_set_timestamp();

CREATE TABLE IF NOT EXISTS demandas (
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  descricao TEXT,
  bairro TEXT,
  cidade TEXT,
  estado TEXT,
  status TEXT NOT NULL DEFAULT 'pendente'
    CHECK (status IN ('pendente','confirmada','confirmado','resolvida','cancelada','em_andamento','planejada')),
  latitude NUMERIC(9,6),
  longitude NUMERIC(9,6),
  usuario_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);

CREATE INDEX IF NOT EXISTS demandas_status_idx ON demandas (status);
CREATE INDEX IF NOT EXISTS demandas_local_idx ON demandas (estado, cidade, bairro);

DROP TRIGGER IF EXISTS set_timestamp_demandas ON demandas;
CREATE TRIGGER set_timestamp_demandas
BEFORE UPDATE ON demandas
FOR EACH ROW EXECUTE FUNCTION trigger_set_timestamp();

CREATE TABLE IF NOT EXISTS estruturas_culturais (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  nome TEXT NOT NULL,
  imagem TEXT,
  local TEXT,
  ano TEXT,
  descricao TEXT,
  historia TEXT,
  latitude NUMERIC(9,6),
  longitude NUMERIC(9,6),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);

CREATE INDEX IF NOT EXISTS estruturas_nome_idx ON estruturas_culturais (nome);
CREATE INDEX IF NOT EXISTS estruturas_coords_idx ON estruturas_culturais (latitude, longitude);

DROP TRIGGER IF EXISTS set_timestamp_estruturas ON estruturas_culturais;
CREATE TRIGGER set_timestamp_estruturas
BEFORE UPDATE ON estruturas_culturais
FOR EACH ROW EXECUTE FUNCTION trigger_set_timestamp();

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE obras ENABLE ROW LEVEL SECURITY;
ALTER TABLE demandas ENABLE ROW LEVEL SECURITY;
ALTER TABLE estruturas_culturais ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS users_service_role_all ON users;
CREATE POLICY users_service_role_all
ON users
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

DROP POLICY IF EXISTS obras_service_role_all ON obras;
CREATE POLICY obras_service_role_all
ON obras
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

DROP POLICY IF EXISTS demandas_service_role_all ON demandas;
CREATE POLICY demandas_service_role_all
ON demandas
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

DROP POLICY IF EXISTS estruturas_service_role_all ON estruturas_culturais;
CREATE POLICY estruturas_service_role_all
ON estruturas_culturais
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

COMMIT;
