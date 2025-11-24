import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import estruturas from "../data/estruturas";

export default function EstruturaDetail() {
  const { id } = useParams();
  const item = estruturas.find(s => s.id === id);

  if (!item) {
    return (
      <div className="app-container">
        <Navbar />
        <main className="main-content" style={{ marginLeft: 240 }}>
          <div style={{ maxWidth: 800, margin: '2rem auto', padding: 12 }}>
            <h2>Estrutura não encontrada</h2>
            <p>Verifique a lista de estruturas.</p>
            <Link to="/estruturas" className="btn-ghost">Voltar</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content" style={{ marginLeft: 240 }}>
        <div style={{ maxWidth: 900, margin: '1.5rem auto', background: 'var(--card-bg)', borderRadius: 8, overflow: 'hidden', border: '1px solid var(--border)' }}>
          <div style={{ width: '100%', height: 360, overflow: 'hidden' }}>
            <img src={item.imagem} alt={item.nome} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ padding: 20 }}>
            <h1 style={{ marginTop: 0 }}>{item.nome}</h1>
            <div style={{ color: 'var(--muted)', marginBottom: 12 }}>{item.local} • Fundação: {item.ano}</div>
            <h3>Descrição</h3>
            <p style={{ color: 'var(--text)' }}>{item.descricao}</p>
            <h3>História</h3>
            <p style={{ color: 'var(--text)' }}>{item.historia}</p>
            <div style={{ marginTop: 12 }}>
              <Link to="/estruturas" className="btn-ghost">Voltar à lista</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
