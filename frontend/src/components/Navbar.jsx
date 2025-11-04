import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav style={{
      background: "var(--card-bg)",
      padding: "0.75rem 1rem",
      borderBottom: "1px solid var(--border)",
      color: "var(--text)",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      <div style={{
        maxWidth: 1400,
        margin: "0 auto",
        display: "flex",
        gap: 12,
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <Link to="/" style={{
          color: "var(--text)",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: 10
        }}>
          {/* ícone sem texto embutido */}
          <img src="/cleanwork-logo.svg" alt="" role="img" style={{ height: 36, width: 'auto', display: 'block' }} />
          <span style={{ fontWeight: "700", fontSize: "1.25rem", color: "var(--text)" }}>CleanWork</span>
        </Link>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Link to="/obras" style={{
            color: "var(--text)",
            textDecoration: "none",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            transition: "background 0.2s"
          }}
          onMouseEnter={(e) => e.target.style.background = "var(--bg)"}
          onMouseLeave={(e) => e.target.style.background = "transparent"}
          >
            Obras
          </Link>
          <Link to="/dashboard" style={{
            color: "var(--text)",
            textDecoration: "none",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            transition: "background 0.2s"
          }}
          onMouseEnter={(e) => e.target.style.background = "var(--bg)"}
          onMouseLeave={(e) => e.target.style.background = "transparent"}
          >
            Dashboard
          </Link>
          <Link to="/login" style={{
            color: "var(--text)",
            textDecoration: "none",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            transition: "background 0.2s"
          }}
          onMouseEnter={(e) => e.target.style.background = "var(--bg)"}
          onMouseLeave={(e) => e.target.style.background = "transparent"}
          >
            Entrar
          </Link>
          <button
            onClick={toggleTheme}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "1.5rem",
              padding: "0.5rem",
              borderRadius: "6px",
              transition: "background 0.2s",
              color: "var(--text)"
            }}
            onMouseEnter={(e) => e.target.style.background = "var(--bg)"}
            onMouseLeave={(e) => e.target.style.background = "transparent"}
            aria-label="Alternar tema"
            title={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
}
