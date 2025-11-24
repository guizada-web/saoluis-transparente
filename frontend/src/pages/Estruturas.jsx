import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import estruturas from "../data/estruturas";

export default function Estruturas() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content" style={{ marginLeft: 240 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '1.5rem' }}>
          <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: 12 }}>Estruturas Culturais de São Luís</h1>
          <p style={{ color: 'var(--muted)', textAlign: 'center', marginBottom: 24 }}>Lista organizada de espaços culturais com imagem, local, ano de criação e um resumo. Clique em "Ver mais" para a página completa da estrutura.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {estruturas.map((e) => (
              <div key={e.id} style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden' }}>
                <div style={{ height: 160, overflow: 'hidden' }}>
                  <img src={e.imagem} alt={e.nome} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 12 }}>
                  <h3 style={{ margin: '4px 0 8px 0' }}>{e.nome}</h3>
                  <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 8 }}>{e.local} • {e.ano}</div>
                  <p style={{ margin: 0, color: 'var(--text)', minHeight: 44 }}>{e.descricao}</p>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12 }}>
                    <Link to={`/estruturas/${e.id}`} className="btn-primary" style={{ padding: '0.4rem 0.8rem', textDecoration: 'none' }}>Ver mais</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
