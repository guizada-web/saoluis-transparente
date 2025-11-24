import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from "react";

// Fix for default markers in webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

export default function MapSelector({ onSelect }) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [center] = useState([-2.5307, -44.3068]); // São Luís como centro aproximado

  useEffect(() => {
    if (mapRef.current) return;

    const map = L.map("map-selector-root", {
      center,
      zoom: 12,
      layers: [
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; OpenStreetMap contributors"
        })
      ]
    });

    mapRef.current = map;

    // Ao clicar no mapa, colocar/ mover marcador e informar coords
    map.on('click', function(e) {
      const { lat, lng } = e.latlng;
      if (markerRef.current) {
        markerRef.current.setLatLng([lat, lng]);
      } else {
        markerRef.current = L.marker([lat, lng]).addTo(map);
      }
      if (typeof onSelect === 'function') onSelect({ lat: Number(lat.toFixed(6)), lng: Number(lng.toFixed(6)) });
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [center, onSelect]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div id="map-selector-root" style={{ width: '100%', height: '100%' }} />
      <div style={{ position: 'absolute', bottom: 8, left: 8, zIndex: 1000, background: 'rgba(255,255,255,0.95)', padding: 6, borderRadius: 6, border: '1px solid var(--border)' }}>
        <small style={{ color: 'var(--muted)' }}>Clique no mapa para selecionar o local</small>
      </div>
    </div>
  );
}
