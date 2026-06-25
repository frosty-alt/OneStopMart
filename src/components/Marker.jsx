"use client";

import "maplibre-gl/dist/maplibre-gl.css";
import { useState } from "react";
import { MapPin } from "lucide-react";
import {
  Map,

  MapMarker,
  MarkerContent,
  MarkerPopup,
} from "./map";
const Locationpin = () => {
  const [draggableMarker, setDraggableMarker] = useState({
    lng: 83.988889,
    lat: 28.208333,
  });

  return (
    <div className="h-screen w-full">
      <Map center={[83.988889, 28.208333]} zoom={12}>
        <MapMarker
          longitude={draggableMarker.lng}
          latitude={draggableMarker.lat}
          onDrag={(lngLat) => {
            setDraggableMarker({
              lng: lngLat.lng,
              lat: lngLat.lat,
            });
          }}  
        >
          <MarkerContent>
            <div className="cursor-move">
              <MapPin
                className="fill-black stroke-white dark:fill-white"
                size={28}
              />
            </div>
          </MarkerContent>

          <MarkerPopup>
            <div className="space-y-1">
              <p className="font-medium">Coordinates</p>
              <p className="text-xs tabular-nums">
                {draggableMarker.lat.toFixed(6)},{" "}
                {draggableMarker.lng.toFixed(6)}
              </p>
            </div>
          </MarkerPopup>
        </MapMarker>
      </Map>
    </div>
  );
}

export default Locationpin;
