import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

export default function MiniMap({ onLocationSelect, initialLat = -2.5307, initialLng = -44.3068 }) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [selectedLatLng, setSelectedLatLng] = useState(null);

  useEffect(() => {
    if (mapRef.current) {
      // Se o mapa já existe, apenas centralizar na nova localização
      mapRef.current.setView([initialLat, initialLng], 12);
      return;
    }

    const map = L.map("mini-map-root", {
      center: [initialLat, initialLng],
      zoom: 12,
      layers: [
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; OpenStreetMap contributors"
        })
      ]
    });

    mapRef.current = map;

    // Adicionar cursor personalizado (alfinete)
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: '<div style="width: 20px; height: 20px; background: red; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 2px solid white; box-shadow: 0 0 5px rgba(0,0,0,0.5);"></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 20]
    });

    // Adicionar evento de clique para definir localização
    map.on('click', (e) => {
      const { lat, lng } = e.latlng;
      setSelectedLatLng({ lat, lng });

      // Remover marcador anterior se existir
      if (markerRef.current) {
        map.removeLayer(markerRef.current);
      }

      // Adicionar novo marcador com ícone personalizado
      markerRef.current = L.marker([lat, lng], { icon: customIcon }).addTo(map);

      // Chamar callback com lat/lng
      if (onLocationSelect) {
        onLocationSelect(lat, lng);
      }
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [initialLat, initialLng, onLocationSelect]);

  return (
    <div style={{ position: "relative", height: "200px", width: "100%" }}>
      <div id="mini-map-root" style={{ height: "100%", width: "100%" }} />
      {selectedLatLng && (
        <div style={{
          position: "absolute",
          top: "5px",
          left: "5px",
          background: "var(--card-bg)",
          padding: "5px 10px",
          borderRadius: "4px",
          border: "1px solid var(--border)",
          color: "var(--text)",
          fontSize: "12px",
          zIndex: 1000
        }}>
          Lat: {selectedLatLng.lat.toFixed(4)}, Lng: {selectedLatLng.lng.toFixed(4)}
        </div>
      )}
    </div>
  );
}
