-- Criar tabela de demandas
CREATE TABLE IF NOT EXISTS demandas (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  descricao TEXT,
  bairro VARCHAR(100),
  estado VARCHAR(50),
  cidade VARCHAR(100),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  status VARCHAR(20) DEFAULT 'pendente',
  usuario_id INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criar tabela de obras
CREATE TABLE IF NOT EXISTS obras (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  descricao TEXT,
  bairro VARCHAR(100),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  usuario_id INTEGER,
  status VARCHAR(20) DEFAULT 'planejada',
  progresso INTEGER DEFAULT 0,
  data_inicio DATE,
  data_fim DATE,
  valor_estimado DECIMAL(15, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir dados de exemplo para demandas
INSERT INTO demandas (titulo, descricao, bairro, estado, cidade, latitude, longitude, usuario_id, status) VALUES
('Iluminação pública na Rua das Flores', 'A rua está muito escura à noite, precisamos de mais postes', 'Centro', 'MA', 'São Luís', -2.5307, -44.3068, 1, 'pendente'),
('Buraco na Avenida Beira-Mar', 'Há um buraco grande que está causando acidentes', 'Beira-Mar', 'MA', 'São Luís', -2.5257, -44.3008, 1, 'em_andamento'),
('Lixo acumulado na Praça Central', 'A praça precisa de limpeza mais frequente', 'Centro', 'MA', 'São Luís', -2.5327, -44.3088, 1, 'resolvida');

-- Inserir dados de exemplo para obras
INSERT INTO obras (titulo, descricao, bairro, latitude, longitude, usuario_id, status, progresso, data_inicio, data_fim, valor_estimado) VALUES
('Reforma da Praça Central', 'Reforma completa da praça central com novo paisagismo, iluminação LED e área de lazer', 'Centro', -2.5307, -44.3068, 1, 'em_andamento', 45, '2024-01-15', '2024-06-30', 1500000.00),
('Construção de Creche Municipal', 'Construção de nova creche com capacidade para 200 crianças', 'Vila Nova', -2.5457, -44.3208, 1, 'em_andamento', 30, '2024-02-01', '2024-08-15', 2800000.00),
('Pavimentação da Rua das Flores', 'Pavimentação asfáltica completa da Rua das Flores', 'Jardim Primavera', -2.5207, -44.2908, 1, 'em_andamento', 60, '2024-01-20', '2024-05-10', 850000.00),
('Reforma do Centro Esportivo', 'Modernização do ginásio poliesportivo', 'Centro', -2.5357, -44.3108, 1, 'planejada', 0, '2024-04-01', '2024-09-30', 2200000.00),
('Construção de UBS', 'Nova Unidade Básica de Saúde', 'São Francisco', -2.5507, -44.3308, 1, 'em_andamento', 25, '2024-03-01', '2024-10-15', 3200000.00);
