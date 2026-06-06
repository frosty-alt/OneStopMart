import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import './map.css'
const LocationMarker = ({ setPosition }) => {
  const [position, setMarkerPosition] = useState(null);

  useMapEvents({
    click: (e) => {
      setMarkerPosition(e.latlng);
      setPosition(e.latlng);
    },
  });

  return position ? <Marker position={position} /> : null;
};

const LocationPicker = () => {
  const [position, setPosition] = useState(null);

  return (
    <>
      <MapContainer
        center={[28.13, 83.59]} // Centered on Nepal
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker setPosition={setPosition} />
      </MapContainer>

      {position && (
        <div>
          <p>Latitude: {position.lat}</p>
          <p>Longitude: {position.lng}</p>
        </div>
      )}
    </>
  );
};

export default LocationPicker;