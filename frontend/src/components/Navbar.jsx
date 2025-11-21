import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  // Navbar simplificada: só logo e controle de tema

  return (
    <nav style={{ padding: "1rem 1rem", color: "var(--text)" }}>
      <div style={{
        maxWidth: 1400,
        margin: "0 auto",
        position: 'relative',
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <div style={{ flex: '0 0 auto' }} />

        <div style={{ flex: '0 0 auto', display: 'flex', gap: 12, alignItems: 'center' }}>
          {/* botão de tema removido — controle de tema pode ser mantido na sidebar se necessário */}
        </div>
      </div>
    </nav>
  );
}
