// Inside components/InteractiveMap.tsx
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet'; // Import types from 'leaflet'

const InteractiveMap: React.FC = () => {
  const center: LatLngExpression = [51.505, -0.09]; // Define center as LatLngExpression type

  return (
    <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>
          A simple marker with a popup.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default InteractiveMap;
