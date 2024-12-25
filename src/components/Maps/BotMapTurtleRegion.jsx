import React, { useEffect, useState, useMemo } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Maps.css";

import { off, onValue, ref } from "firebase/database";
import { rdb } from "../../firebase";

function BotMapTurtleRegion() {
  const [turtleLoc, setTurtleLoc] = useState(null);

  useEffect(() => {
    const turtleRef = ref(rdb, "TURTULE_LOCATION");

    const turtleSubs = onValue(turtleRef, (snapshot) => {
      if (snapshot.exists()) {
        setTurtleLoc(snapshot.toJSON());
      } else {
        setTurtleLoc(null); // Clear state if no data exists
      }
    });

    return () => off(turtleRef, "value", turtleSubs); // Ensure proper cleanup
  }, []);

  // Memoize markers for better performance
  const turtleMarkers = useMemo(() => {
    if (!turtleLoc) return null;

    return Object.keys(turtleLoc).map((key, id) => {
      const { lat, lon } = turtleLoc[key];

      // Validate latitude and longitude
      if (lat === undefined || lon === undefined) return null;

      return (
        <CircleMarker
          key={`TR-${id}`}
          center={[lat, lon]}
          pathOptions={{ color: "yellow" }}
          radius={30}
        >
          <Tooltip>Turtle: {key}</Tooltip>
        </CircleMarker>
      );
    });
  }, [turtleLoc]);

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
      {turtleMarkers}
    </MapContainer>
  );
}

export default BotMapTurtleRegion;
