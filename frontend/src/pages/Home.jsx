import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import MapView from "../components/MapView";
import MiniMap from "../components/MiniMap";

export default function Home() {
  const [demandas, setDemandas] = useState([]);
  const [nova, setNova] = useState({ titulo: "", descricao: "", bairro: "", estado: "", cidade: "", latitude: null, longitude: null });

  // Dados de estados e cidades do Brasil com coordenadas aproximadas
  const estados = [
    { sigla: "AC", nome: "Acre", lat: -9.974, lng: -67.809 },
    { sigla: "AL", nome: "Alagoas", lat: -9.571, lng: -36.782 },
    { sigla: "AP", nome: "Amapá", lat: 0.902, lng: -52.003 },
    { sigla: "AM", nome: "Amazonas", lat: -3.416, lng: -65.856 },
    { sigla: "BA", nome: "Bahia", lat: -12.971, lng: -38.501 },
    { sigla: "CE", nome: "Ceará", lat: -3.731, lng: -38.526 },
    { sigla: "DF", nome: "Distrito Federal", lat: -15.794, lng: -47.882 },
    { sigla: "ES", nome: "Espírito Santo", lat: -20.315, lng: -40.312 },
    { sigla: "GO", nome: "Goiás", lat: -16.686, lng: -49.264 },
    { sigla: "MA", nome: "Maranhão", lat: -2.530, lng: -44.306 },
    { sigla: "MT", nome: "Mato Grosso", lat: -15.598, lng: -56.094 },
    { sigla: "MS", nome: "Mato Grosso do Sul", lat: -20.469, lng: -54.620 },
    { sigla: "MG", nome: "Minas Gerais", lat: -19.919, lng: -43.938 },
    { sigla: "PA", nome: "Pará", lat: -1.455, lng: -48.504 },
    { sigla: "PB", nome: "Paraíba", lat: -7.115, lng: -34.861 },
    { sigla: "PR", nome: "Paraná", lat: -25.428, lng: -49.267 },
    { sigla: "PE", nome: "Pernambuco", lat: -8.047, lng: -34.877 },
    { sigla: "PI", nome: "Piauí", lat: -5.089, lng: -42.803 },
    { sigla: "RJ", nome: "Rio de Janeiro", lat: -22.906, lng: -43.172 },
    { sigla: "RN", nome: "Rio Grande do Norte", lat: -5.794, lng: -35.209 },
    { sigla: "RS", nome: "Rio Grande do Sul", lat: -30.034, lng: -51.217 },
    { sigla: "RO", nome: "Rondônia", lat: -8.761, lng: -63.903 },
    { sigla: "RR", nome: "Roraima", lat: 2.819, lng: -60.671 },
    { sigla: "SC", nome: "Santa Catarina", lat: -27.595, lng: -48.548 },
    { sigla: "SP", nome: "São Paulo", lat: -23.550, lng: -46.633 },
    { sigla: "SE", nome: "Sergipe", lat: -10.947, lng: -37.073 },
    { sigla: "TO", nome: "Tocantins", lat: -10.249, lng: -48.324 }
  ];

  const cidadesPorEstado = {
    AC: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá", "Feijó"],
    AL: ["Maceió", "Arapiraca", "Rio Largo", "Palmeira dos Índios", "São Miguel dos Campos"],
    AP: ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque", "Porto Grande"],
    AM: ["Manaus", "Parintins", "Itacoatiara", "Manacapuru", "Coari"],
    BA: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna"],
    CE: ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú", "Sobral"],
    DF: ["Brasília"],
    ES: ["Vitória", "Vila Velha", "Serra", "Cariacica", "Linhares"],
    GO: ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde", "Luziânia"],
    MA: ["São Luís", "Imperatriz", "São José de Ribamar", "Timon", "Caxias"],
    MT: ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop", "Tangará da Serra"],
    MS: ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá", "Ponta Porã"],
    MG: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim"],
    PA: ["Belém", "Ananindeua", "Santarém", "Marabá", "Castanhal"],
    PB: ["João Pessoa", "Campina Grande", "Santa Rita", "Patos", "Bayeux"],
    PR: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel"],
    PE: ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru", "Petrolina"],
    PI: ["Teresina", "Parnaíba", "Picos", "Piripiri", "Floriano"],
    RJ: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu", "Niterói"],
    RN: ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante", "Macau"],
    RS: ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas", "Santa Maria"],
    RO: ["Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena", "Cacoal"],
    RR: ["Boa Vista", "Rorainópolis", "Caracaraí", "Alto Alegre", "Mucajaí"],
    SC: ["Florianópolis", "Joinville", "Blumenau", "São José", "Chapecó"],
    SP: ["São Paulo", "Guarulhos", "Campinas", "São Bernardo do Campo", "Santo André"],
    SE: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana", "São Cristóvão"],
    TO: ["Palmas", "Araguaína", "Gurupi", "Porto Nacional", "Paraíso do Tocantins"]
  };

  const carregarDemandas = async () => {
    const res = await api.get("/demandas");
    setDemandas(res.data);
  };

  const criarDemanda = async (e) => {
    e.preventDefault();
    await api.post("/demandas", { ...nova });
    setNova({ titulo: "", descricao: "", bairro: "", estado: "", cidade: "", latitude: null, longitude: null });
    carregarDemandas();
  };

  const deletarDemanda = async (id) => {
    await api.delete(`/demandas/${id}`);
    carregarDemandas();
  };

  useEffect(() => {
    carregarDemandas();
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <h1 style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
          color: "var(--text)",
          textAlign: "center"
        }}>
          Demandas Comunitárias e Mapa de Obras
        </h1>

        <div className="content-grid">
          <div className="demandas-section">
            <div className="form-container">
              <h2 style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "var(--text)"
              }}>
                Nova Demanda
              </h2>
              <form onSubmit={criarDemanda}>
                <input
                  type="text"
                  placeholder="Título"
                  value={nova.titulo}
                  onChange={(e) => setNova({ ...nova, titulo: e.target.value })}
                  className="input-field"
                  required
                />
                <textarea
                  placeholder="Descrição"
                  value={nova.descricao}
                  onChange={(e) => setNova({ ...nova, descricao: e.target.value })}
                  onInput={(e) => {
                    // auto-resize: reset height, então ajusta ao scrollHeight
                    const ta = e.target;
                    ta.style.height = 'auto';
                    ta.style.height = ta.scrollHeight + 'px';
                  }}
                  className="input-field"
                  required
                />
                <select
                  value={nova.estado}
                  onChange={(e) => setNova({ ...nova, estado: e.target.value, cidade: "" })}
                  className="input-field"
                  required
                >
                  <option value="">Selecione o Estado</option>
                  {estados.map((estado) => (
                    <option key={estado.sigla} value={estado.sigla}>
                      {estado.nome}
                    </option>
                  ))}
                </select>
                <select
                  value={nova.cidade}
                  onChange={(e) => setNova({ ...nova, cidade: e.target.value })}
                  className="input-field"
                  required
                  disabled={!nova.estado}
                >
                  <option value="">Selecione a Cidade</option>
                  {nova.estado && cidadesPorEstado[nova.estado]?.map((cidade) => (
                    <option key={cidade} value={cidade}>
                      {cidade}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Bairro"
                  value={nova.bairro}
                  onChange={(e) => setNova({ ...nova, bairro: e.target.value })}
                  className="input-field"
                  required
                />
                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--text)" }}>
                    Clique no mapa para selecionar a localização:
                  </label>
                  <MiniMap
                    onLocationSelect={(lat, lng) => setNova({ ...nova, latitude: lat, longitude: lng })}
                    initialLat={estados.find(e => e.sigla === nova.estado)?.lat || -15.794}
                    initialLng={estados.find(e => e.sigla === nova.estado)?.lng || -47.882}
                  />
                </div>
                <button type="submit" className="btn-primary">
                  Criar Demanda
                </button>
              </form>
            </div>

            <div className="demandas-list">
              <h2 style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "var(--text)"
              }}>
                Demandas Existentes
              </h2>
              {demandas.length === 0 ? (
                <p style={{ color: "var(--muted)" }}>Nenhuma demanda encontrada.</p>
              ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {demandas.map((d) => (
                    <li key={d.id} className="demanda-item">
                      <div>
                        <h3 style={{
                          fontSize: "1.125rem",
                          fontWeight: "600",
                          marginBottom: "0.5rem",
                          color: "var(--text)"
                        }}>
                          {d.titulo}
                        </h3>
                        <p style={{
                          marginBottom: "0.5rem",
                          color: "var(--text)"
                        }}>
                          {d.descricao}
                        </p>
                        <span style={{
                          fontSize: "0.875rem",
                          color: "var(--muted)"
                        }}>
                          {d.cidade}, {d.estado} - Bairro: {d.bairro}
                        </span>
                      </div>
                      <button
                        onClick={() => deletarDemanda(d.id)}
                        className="btn-danger"
                      >
                        Excluir
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="map-section">
            <h2 style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "1rem",
              color: "var(--text)"
            }}>
              Mapa de Obras Públicas
            </h2>
            <section className="map-root" aria-label="Mapa de obras públicas">
              <MapView />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
