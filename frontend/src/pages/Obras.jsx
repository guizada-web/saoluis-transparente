import Footer from "../components/Footer";
import MapView from "../components/MapView";
import Navbar from "../components/Navbar";

export default function Obras() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content" style={{ marginLeft: 240 }}>
        <h1 style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          marginBottom: "1rem",
          color: "var(--text)",
          textAlign: "center"
        }}>
          Obras Públicas
        </h1>

        <div style={{ width: '100%', height: '80vh', borderRadius: 8, overflow: 'hidden', border: '1px solid var(--border)' }}>
          <MapView />
        </div>
      </main>
      <Footer />
    </div>
  );
}
