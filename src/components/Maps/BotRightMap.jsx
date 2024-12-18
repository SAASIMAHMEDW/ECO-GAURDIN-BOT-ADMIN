import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Maps.css";
import { Icon } from "leaflet";
import {rdb} from "../../firebase"
import {ref,onValue,off} from "firebase/database"

function BotRightMap() {
  let customBotIconMarker = new Icon({
    iconUrl: "bot-logo.png",
    iconSize: [38, 38],
  });

  const [location,setLocation] = useState(null)
  

  useEffect(() => {
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

  return (
    <>
      <MapContainer
        center={[parseFloat(import.meta.env.VITE_MAP_CENTER_POINTS_ONE),parseFloat(import.meta.env.VITE_MAP_CENTER_POINTS_TWO)]}
        zoom={30}
        scrollWheelZoom={false}
      >
        <TileLayer
        attribution={import.meta.env.VITE_STADIA_MAP_ATTRIBUTION}
        url={import.meta.env.VITE_STADIA_MAP_URL}
        ext={import.meta.env.VITE_STADIA_MAP_EXT}
        />
      {location && 
          location.latitude !== undefined &&
          location.longitude !== undefined &&
          !isNaN(location.latitude) &&
          !isNaN(location.longitude) && (
            <Marker
              key={0}
              position={[location.latitude, location.longitude]}
              icon={customBotIconMarker}
              title="Bot"
            />
          )}
        {/* </MarkerClusterGroup> */}
      </MapContainer>
    </>
  );
}

export default BotRightMap;
