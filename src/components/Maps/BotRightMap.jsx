import React, { useEffect, useState, useCallback } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Maps.css";
import { Icon } from "leaflet";
import { rdb } from "../../firebase";
import { ref, onValue, off } from "firebase/database";

function BotRightMap() {
  const customBotIconMarker = new Icon({
    iconUrl: "bot_icons/walle-icon48.svg",
    iconSize: [38, 38],
  });

  const [location, setLocation] = useState(null);

  const fetchLocation = useCallback(() => {
    const dbRef = ref(rdb, "location");

    const listener = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setLocation(data);
      } else {
        console.log("No data available");
        setLocation(null);
      }
    });

    // Cleanup function to remove the listener
    return () => {
      off(dbRef, "value", listener);
    };
  }, []);

  useEffect(() => {
    const cleanupListener = fetchLocation();
    return cleanupListener;
  }, [fetchLocation]);

  // Location validation check
  const isValidLocation = location && 
    typeof location.latitude === "number" && 
    typeof location.longitude === "number" &&
    !isNaN(location.latitude) && 
    !isNaN(location.longitude);

  return (
    <MapContainer
      center={[
        parseFloat(import.meta.env.VITE_MAP_CENTER_POINTS_ONE),
        parseFloat(import.meta.env.VITE_MAP_CENTER_POINTS_TWO),
      ]}
      zoom={30}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution={import.meta.env.VITE_STADIA_MAP_ATTRIBUTION}
        url={import.meta.env.VITE_STADIA_MAP_URL}
        ext={import.meta.env.VITE_STADIA_MAP_EXT}
      />
      {isValidLocation && (
        <Marker
          position={[location.latitude, location.longitude]}
          icon={customBotIconMarker}
          title="Bot"
        />
      )}
    </MapContainer>
  );
}

export default BotRightMap;
