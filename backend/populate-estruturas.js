import { supabase } from "./src/config/db.js";

const estruturas = [
  {
    slug: "teatro-arthur-azevedo",
    nome: "Teatro Artur Azevedo",
    imagem: "/estruturas culturais/Teatro Artur Azevedo.jpg",
    local: "Centro Histórico, São Luís - MA",
    latitude: -2.5295,
    longitude: -44.301,
    ano: "1893",
    descricao: "Um dos mais antigos e emblemáticos espaços de artes cênicas da cidade.",
    historia:
      "Inaugurado no final do século XIX, o Teatro Artur Azevedo foi palco de importantes montagens teatrais e serviu como centro de difusão cultural local.",
  },
  {
    slug: "palacio-dos-leoes",
    nome: "Palácio dos Leões",
    imagem: "/estruturas culturais/Palácio dos Leões [São Luís, Maranhão].jpg",
    local: "Praça Pedro II, Centro, São Luís - MA",
    latitude: -2.529,
    longitude: -44.3025,
    ano: "1800",
    descricao: "Sede histórica do governo estadual e marco arquitetônico da capital.",
    historia:
      "O Palácio dos Leões é referência política e histórica e compõe o conjunto arquitetônico do centro histórico de São Luís.",
  },
  {
    slug: "museu-historico",
    nome: "Museu Histórico e Artístico do Maranhão",
    imagem: "/estruturas culturais/museu-maranhao.jpg",
    local: "Centro Histórico, São Luís - MA",
    latitude: -2.53,
    longitude: -44.302,
    ano: "1800",
    descricao: "Museu que preserva coleções relacionadas à história, arte e memória maranhense.",
    historia:
      "Com um acervo composto por objetos, documentos e obras de arte, o museu registra a formação social e cultural do estado.",
  },
  {
    slug: "casa-do-maranhao",
    nome: "Casa do Maranhão",
    imagem: "/estruturas culturais/Casa do Maranhão.jpg",
    local: "Centro Histórico, São Luís - MA",
    latitude: -2.5298,
    longitude: -44.3018,
    ano: "1900",
    descricao: "Espaço de promoção das manifestações culturais maranhenses.",
    historia:
      "A Casa do Maranhão abriga atividades culturais, exposições e ações educativas que valorizam as tradições locais.",
  },
  {
    slug: "igreja-do-carmo",
    nome: "Igreja de Nossa Senhora do Carmo",
    imagem: "/estruturas culturais/igreja de nossa senhora.jpg",
    local: "Centro Histórico, São Luís - MA",
    latitude: -2.5285,
    longitude: -44.303,
    ano: "1700-1800",
    descricao: "Igreja histórica com valor arquitetônico e importância nas manifestações religiosas locais.",
    historia:
      "Parte integrante do patrimônio arquitetônico do centro histórico, a igreja preserva elementos barrocos.",
  },
  {
    slug: "cais-das-tulhas",
    nome: "Cais das Tulhas",
    imagem: "/estruturas culturais/cais das tulhas.jpg",
    local: "Beira-Mar, Porto, São Luís - MA",
    latitude: -2.5375,
    longitude: -44.2955,
    ano: "1800",
    descricao: "Antigo mercado e área portuária que mantém tradição comercial e cultural ligada ao mar.",
    historia:
      "O Cais das Tulhas foi tradicional ponto de comércio e hoje preserva a memória das atividades portuárias.",
  },
  {
    slug: "teatro-joao-do-vale",
    nome: "Teatro João do Vale",
    imagem: "/estruturas culturais/teatro joão do vale.jpg",
    local: "Bairro do Anil, São Luís - MA",
    latitude: -2.539,
    longitude: -44.3075,
    ano: "1970",
    descricao: "Espaço cultural voltado para a produção local e popular.",
    historia:
      "O teatro tem sido palco para grupos locais e iniciativas comunitárias, contribuindo para a formação de artistas regionais.",
  },
  {
    slug: "casa-da-memoria",
    nome: "Casa da Memória",
    imagem: "/estruturas culturais/casa da memoria.jpg",
    local: "Centro Histórico, São Luís - MA",
    latitude: -2.5297,
    longitude: -44.3022,
    ano: "1800",
    descricao: "Espaço dedicado à preservação de documentos e memórias locais.",
    historia:
      "A Casa da Memória reúne acervos que ajudam a contar a trajetória social e cultural de São Luís.",
  },
  {
    slug: "mercado-central",
    nome: "Mercado Central",
    imagem: "/estruturas culturais/mercado central.jpg",
    local: "Rua da Paz, Centro, São Luís - MA",
    latitude: -2.5302,
    longitude: -44.3028,
    ano: "1900",
    descricao: "Mercado tradicional que concentra comércio local, comidas típicas e artesanato.",
    historia:
      "O Mercado Central funciona como ponto de encontro e referência para produtos regionais e gastronomia local.",
  },
  {
    slug: "igreja-sao-francisco",
    nome: "Igreja e Convento de São Francisco",
    imagem: "/estruturas culturais/igreja da Sé.jpg",
    local: "Centro Histórico, São Luís - MA",
    latitude: -2.5292,
    longitude: -44.3035,
    ano: "1700",
    descricao: "Complexo religioso com rica ornamentação barroca e azulejaria.",
    historia:
      "A Igreja e Convento de São Francisco são destaque do barroco no Maranhão e ponto de visitação cultural.",
  },
  {
    slug: "convento-das-merces",
    nome: "Convento das Mercês",
    imagem: "/estruturas culturais/merces.jpg",
    local: "Praça Dom Pedro II, Centro Histórico, São Luís - MA",
    latitude: -2.5289,
    longitude: -44.3032,
    ano: "1600-1700",
    descricao: "Edifício religioso histórico que integra o conjunto do centro histórico.",
    historia:
      "O Convento das Mercês faz parte do rico conjunto arquitetônico do centro histórico de São Luís.",
  },
  {
    slug: "praca-goncalves-dias",
    nome: "Praça Gonçalves Dias",
    imagem: "/estruturas culturais/Praça Gonçalves Dias.jpg",
    local: "Centro Histórico, São Luís - MA",
    latitude: -2.5296,
    longitude: -44.3029,
    ano: "1800",
    descricao: "Praça histórica que serve de espaço público para manifestações culturais e eventos.",
    historia:
      "A praça é tradicional na vida urbana de São Luís, recebendo feiras, concertos e atividades culturais.",
  },
  {
    slug: "solar-do-ribeira",
    nome: "Solar do Ribeira",
    imagem: "/estruturas culturais/solar.jpg",
    local: "Bairro do Ribeira, São Luís - MA",
    latitude: -2.5308,
    longitude: -44.2995,
    ano: "1800",
    descricao: "Solar histórico representativo da arquitetura residencial antiga da cidade.",
    historia:
      "O Solar do Ribeira preserva características arquitetônicas de antigas residências e integra roteiros culturais locais.",
  },
];

async function populateEstruturas() {
  for (const estrutura of estruturas) {
    const { error } = await supabase
      .from("estruturas_culturais")
      .upsert(estrutura, { onConflict: "slug" });

    if (error) {
      console.error(`Erro ao inserir ${estrutura.nome}`, error);
    } else {
      console.log(`✓ ${estrutura.nome} sincronizada`);
    }
  }
  console.log("Estruturas culturais sincronizadas.");
}

populateEstruturas();

