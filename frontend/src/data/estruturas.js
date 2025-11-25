// Dados para Estruturas Culturais de São Luís
// Conteúdo com imagens públicas (Wikimedia) e textos descritivos.
// Substitua ou acrescente informações verificadas quando necessário.

const estruturas = [
  {
    id: 'teatro-arthur-azevedo',
    nome: 'Teatro Artur Azevedo',
    imagem: '/estruturas culturais/Teatro Artur Azevedo.jpg',
    local: 'Centro Histórico, São Luís - MA',
    ano: '1893',
    descricao: 'Um dos mais antigos e emblemáticos espaços de artes cênicas da cidade.',
    historia: 'Inaugurado no final do século XIX, o Teatro Artur Azevedo foi palco de importantes montagens teatrais e serviu como centro de difusão cultural local. Ao longo do tempo passou por restaurações que preservaram elementos arquitetônicos originais e adaptaram o espaço para a plateia contemporânea.'
  },
  {
    id: 'palacio-dos-leoes',
    nome: 'Palácio dos Leões',
    imagem: '/estruturas culturais/Palácio dos Leões [São Luís, Maranhão].jpg',
    local: 'Praça Pedro II, Centro, São Luís - MA',
    ano: '1800',
    descricao: 'Sede histórica do governo estadual e marco arquitetônico da capital.',
    historia: 'O Palácio dos Leões, com sua fachada imponente, é referência política e histórica na paisagem urbana de São Luís. Além de sua função administrativa, o palácio compõe o conjunto arquitetônico do centro histórico e já abrigou exposições e eventos culturais que dialogam com a memória e identidade locais.'
  },
  {
    id: 'museu-historico',
    nome: 'Museu Histórico e Artístico do Maranhão',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Pal_acio_Dos_Leoes_-_Museu_Hist_rico.jpg',
    local: 'Centro Histórico, São Luís - MA',
    ano: '1800',
    descricao: 'Museu que preserva coleções relacionadas à história, arte e memória maranhense.',
    historia: 'Com um acervo composto por objetos, documentos e obras de arte, o museu registra a formação social e cultural do estado. Suas exposições e ações educativas auxiliam na difusão do patrimônio imaterial e material da região.'
  },
  {
    id: 'casa-do-maranhao',
    nome: 'Casa do Maranhão',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Casa_do_Maranh%C3%A3o.jpg',
    local: 'Centro Histórico, São Luís - MA',
    ano: '1900',
    descricao: 'Espaço de promoção das manifestações culturais maranhenses.',
    historia: 'A Casa do Maranhão abriga atividades culturais, exposições e ações educativas que valorizam as tradições locais. Atua como polo de articulação entre artistas, pesquisadores e a comunidade.'
  },
  {
    id: 'igreja-do-carmo',
    nome: 'Igreja de Nossa Senhora do Carmo',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Igreja_do_Carmo_Sao_Luis.jpg',
    local: 'Centro Histórico, São Luís - MA',
    ano: '1700-1800',
    descricao: 'Igreja histórica com valor arquitetônico e importância nas manifestações religiosas locais.',
    historia: 'Parte integrante do patrimônio arquitetônico do centro histórico, a igreja preserva elementos barrocos e foi central nas celebrações religiosas e festividades populares da cidade. Sua conservação contribui para o conjunto histórico e turístico.'
  },
  {
    id: 'cais-das-tulhas',
    nome: 'Cais das Tulhas',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Cais_das_Tulhas_Sao_Luis.jpg',
    local: 'Beira-Mar, Porto, São Luís - MA',
    ano: '1800',
    descricao: 'Antigo mercado e área portuária que mantém tradição comercial e cultural ligada ao mar.',
    historia: 'O Cais das Tulhas foi tradicional ponto de comércio entre a cidade e o interior do estado. Ao longo do tempo assumiu funções culturais e turísticas, preservando a memória das atividades portuárias e das relações com comunidades pesqueiras.'
  },
  {
    id: 'teatro-joao-do-vale',
    nome: 'Teatro João do Vale',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Teatro_Joao_do_Vale.jpg',
    local: 'Bairro do Anil, São Luís - MA',
    ano: '1970',
    descricao: 'Espaço cultural voltado para a produção local e popular.',
    historia: 'Nascido como espaço de resistência e fomento às artes populares, o teatro tem sido palco para grupos locais e iniciativas comunitárias, contribuindo para a formação de plateias e artistas regionais.'
  },
  {
    id: 'casa-da-memoria',
    nome: 'Casa da Memória',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Casa_da_Memoria_Sao_Luis.jpg',
    local: 'Centro Histórico, São Luís - MA',
    ano: '1800',
    descricao: 'Espaço dedicado à preservação de documentos e memórias locais.',
    historia: 'A Casa da Memória reúne acervos que ajudam a contar a trajetória social e cultural de São Luís. Promove pesquisa, exposições e atividades educativas voltadas à preservação do patrimônio imaterial.'
  }
  ,
  {
    id: 'mercado-central',
    nome: 'Mercado Central',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Mercado_Central_Sao_Luis.jpg',
    local: 'Rua da Paz, Centro, São Luís - MA',
    ano: '1900',
    descricao: 'Mercado tradicional que concentra comércio local, comidas típicas e artesanato.',
    historia: 'O Mercado Central funciona como ponto de encontro e referência para produtos regionais e gastronomia local. Mantém intensa atividade comercial e é frequentemente visitado por moradores e turistas interessados na cultura maranhense.'
  },
  {
    id: 'igreja-sao-francisco',
    nome: 'Igreja e Convento de São Francisco',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Igreja_Sao_Francisco_Sao_Luis.jpg',
    local: 'Centro Histórico, São Luís - MA',
    ano: '1700',
    descricao: 'Complexo religioso com rica ornamentação barroca e azulejaria.',
    historia: 'A Igreja e Convento de São Francisco são destaque do barroco no Maranhão, com interiores decorados e importante papel nas tradições religiosas e culturais locais. O conjunto arquitetônico é frequentemente ponto de visitação cultural e turística.'
  },
  {
    id: 'convento-das-merces',
    nome: 'Convento das Mercês',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Convento_das_Merces_Sao_Luis.jpg',
    local: 'Praça Dom Pedro II, Centro Histórico, São Luís - MA',
    ano: '1600-1700',
    descricao: 'Edifício religioso histórico que integra o conjunto do centro histórico.',
    historia: 'O Convento das Mercês faz parte do rico conjunto arquitetônico do centro histórico de São Luís. Ao longo do tempo teve diferentes usos e hoje compõe o circuito de preservação do patrimônio cultural da cidade.'
  },
  {
    id: 'praca-goncalves-dias',
    nome: 'Praça Gonçalves Dias',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Praca_Goncalves_Dias_Sao_Luis.jpg',
    local: 'Centro Histórico, São Luís - MA',
    ano: '1800',
    descricao: 'Praça histórica que serve de espaço público para manifestações culturais e eventos.',
    historia: 'A Praça Gonçalves Dias é tradicional na vida urbana de São Luís, recebendo feiras, concertos e atividades culturais. Sua localização no centro histórico facilita o acesso a outros pontos patrimoniais.'
  },
  {
    id: 'solar-do-ribeira',
    nome: 'Solar do Ribeira',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Solar_do_Ribeira_Sao_Luis.jpg',
    local: 'Bairro do Ribeira, São Luís - MA',
    ano: '1800',
    descricao: 'Solar histórico representativo da arquitetura residencial antiga da cidade.',
    historia: 'O Solar do Ribeira preserva características arquitetônicas de antigas residências de famílias importantes da cidade e é referenciado em roteiros culturais locais como exemplo de patrimônio íntimo e urbano.'
  }
];

export default estruturas;
