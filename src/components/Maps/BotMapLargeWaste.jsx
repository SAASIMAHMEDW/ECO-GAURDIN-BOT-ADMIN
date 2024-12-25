import React, { useEffect, useState, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Maps.css";

import { off, onValue, ref } from "firebase/database";
import { rdb } from "../../firebase";

function BotMapLargeWaste() {
  const [largeWasteLoc, setLargeWasteLoc] = useState(null);

  useEffect(() => {
    const largeRef = ref(rdb, "LARGE_WASTE_LOCATIONS");

    const largeSubs = onValue(largeRef, (snapshot) => {
      if (snapshot.exists()) {
        setLargeWasteLoc(snapshot.toJSON());
      } else {
        setLargeWasteLoc(null); // Clear the state if no data exists
      }
    });

    return () => off(largeRef, "value", largeSubs); // Ensure proper cleanup
  }, []);

  // Memoize the markers for performance
  const largeWasteMarkers = useMemo(() => {
    if (!largeWasteLoc) return null;

    return Object.keys(largeWasteLoc).map((key, id) => {
      const { lat, lon } = largeWasteLoc[key];

      // Ensure latitude and longitude are valid
      if (lat === undefined || lon === undefined) return null;

      return (
        <CircleMarker
          key={`LW-${id}`}
          center={[lat, lon]}
          pathOptions={{ color: "purple" }}
          radius={30}
        >
          <Tooltip>Large Waste</Tooltip>
        </CircleMarker>
      );
    });
  }, [largeWasteLoc]);

  // Default map center if environment variables are missing
  const defaultCenter = [
    parseFloat(import.meta.env.VITE_MAP_CENTER_POINTS_ONE || 0),
    parseFloat(import.meta.env.VITE_MAP_CENTER_POINTS_TWO || 0),
  ];

  return (
    <MapContainer
      center={defaultCenter}
      zoom={20}
      scrollWheelZoom={false}
      className="leaflet-container"
    >
      <TileLayer
        attribution={import.meta.env.VITE_STADIA_MAP_ATTRIBUTION || ""}
        url={import.meta.env.VITE_STADIA_MAP_URL || ""}
        ext={import.meta.env.VITE_STADIA_MAP_EXT || ""}
      />
      {largeWasteMarkers}
    </MapContainer>
  );
}

export default BotMapLargeWaste;
