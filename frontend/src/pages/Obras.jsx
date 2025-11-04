import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import MapView from "../components/MapView";

export default function Obras() {
  const [obras, setObras] = useState([]);
  const [filtroStatus, setFiltroStatus] = useState("");
  const [filtroBairro, setFiltroBairro] = useState("");

  const carregarObras = async () => {
    const res = await api.get("/obras");
    setObras(res.data);
  };

  useEffect(() => {
    carregarObras();
  }, []);

  const obrasFiltradas = obras.filter((obra) => {
    return (
      (filtroStatus === "" || obra.status === filtroStatus) &&
      (filtroBairro === "" || obra.bairro.toLowerCase().includes(filtroBairro.toLowerCase()))
    );
  });

  const statusOptions = [
    { value: "", label: "Todos os Status" },
    { value: "planejada", label: "Planejada" },
    { value: "em_andamento", label: "Em Andamento" },
    { value: "concluida", label: "Concluída" },
    { value: "cancelada", label: "Cancelada" }
  ];

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
          Monitoramento de Obras Públicas
        </h1>

        <div className="filtros-section" style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "1.5rem",
          flexWrap: "wrap",
          alignItems: "center"
        }}>
          <div>
            <label style={{ marginRight: "0.5rem", color: "var(--text)" }}>Status:</label>
            <select
              value={filtroStatus}
              onChange={(e) => setFiltroStatus(e.target.value)}
              style={{
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid var(--border)",
                background: "var(--bg)",
                color: "var(--text)"
              }}
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label style={{ marginRight: "0.5rem", color: "var(--text)" }}>Bairro:</label>
            <input
              type="text"
              placeholder="Filtrar por bairro"
              value={filtroBairro}
              onChange={(e) => setFiltroBairro(e.target.value)}
              style={{
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid var(--border)",
                background: "var(--bg)",
                color: "var(--text)"
              }}
            />
          </div>
          <div style={{ color: "var(--text)", fontSize: "0.9rem" }}>
            {obrasFiltradas.length} obra{obrasFiltradas.length !== 1 ? 's' : ''} encontrada{obrasFiltradas.length !== 1 ? 's' : ''}
          </div>
        </div>

        <div className="content-grid">
          <div className="obras-list-section">
            <h2 style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "1rem",
              color: "var(--text)"
            }}>
              Lista de Obras
            </h2>
            {obrasFiltradas.length === 0 ? (
              <p style={{ color: "var(--muted)" }}>Nenhuma obra encontrada.</p>
            ) : (
              <div style={{ maxHeight: "600px", overflowY: "auto" }}>
                {obrasFiltradas.map((obra) => (
                  <div key={obra.id} className="obra-item" style={{
                    background: "var(--card-bg)",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                    border: "1px solid var(--border)"
                  }}>
                    <h3 style={{
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      marginBottom: "0.5rem",
                      color: "var(--text)"
                    }}>
                      {obra.titulo}
                    </h3>
                    <p style={{
                      marginBottom: "0.5rem",
                      color: "var(--text)"
                    }}>
                      {obra.descricao}
                    </p>
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", fontSize: "0.875rem", color: "var(--muted)" }}>
                      <span>Bairro: {obra.bairro}</span>
                      <span>
                        Status: <span style={{
                          background: obra.status === 'planejada' ? '#fbbf24' :
                                     obra.status === 'em_andamento' ? '#3b82f6' :
                                     obra.status === 'concluida' ? '#10b981' : '#ef4444',
                          color: 'white',
                          padding: '2px 6px',
                          borderRadius: '3px',
                          fontSize: '11px',
                          fontWeight: 'bold'
                        }}>
                          {obra.status === 'planejada' ? 'Planejada' :
                           obra.status === 'em_andamento' ? 'Em Andamento' :
                           obra.status === 'concluida' ? 'Concluída' : 'Cancelada'}
                        </span>
                      </span>
                      {obra.progresso !== null && <span>Progresso: {obra.progresso}%</span>}
                      {obra.valor_estimado && <span>Valor: R$ {obra.valor_estimado.toLocaleString('pt-BR')}</span>}
                    </div>
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", fontSize: "0.875rem", color: "var(--muted)", marginTop: "0.5rem" }}>
                      {obra.data_inicio && <span>Início: {new Date(obra.data_inicio).toLocaleDateString('pt-BR')}</span>}
                      {obra.data_fim && <span>Fim Previsto: {new Date(obra.data_fim).toLocaleDateString('pt-BR')}</span>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="map-section">
            <h2 style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "1rem",
              color: "var(--text)"
            }}>
              Mapa das Obras
            </h2>
            <section className="map-root" aria-label="Mapa das obras públicas">
              <MapView />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
