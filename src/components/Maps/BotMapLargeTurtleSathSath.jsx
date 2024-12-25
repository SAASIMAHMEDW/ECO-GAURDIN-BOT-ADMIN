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

function BotMapLargeTurtleSathSath() {
  const [locations, setLocations] = useState({
    largeWaste: null,
    turtles: null,
  });

  useEffect(() => {
    const largeRef = ref(rdb, "LARGE_WASTE_LOCATIONS");
    const turtleRef = ref(rdb, "TURTULE_LOCATION");

    const fetchLocations = () => {
      // Fetch large waste locations
      const largeListener = onValue(largeRef, (snapshot) => {
        if (snapshot.exists()) {
          setLocations((prev) => ({
            ...prev,
            largeWaste: snapshot.toJSON(),
          }));
        }
      });

      // Fetch turtle locations
      const turtleListener = onValue(turtleRef, (snapshot) => {
        if (snapshot.exists()) {
          setLocations((prev) => ({
            ...prev,
            turtles: snapshot.toJSON(),
          }));
        }
      });

      return () => {
        off(largeRef, "value", largeListener);
        off(turtleRef, "value", turtleListener);
      };
    };

    const unsubscribe = fetchLocations();

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  // Memoize markers to prevent unnecessary recalculations
  const largeWasteMarkers = useMemo(() => {
    if (!locations.largeWaste) return null;

    return Object.keys(locations.largeWaste).map((key, id) => {
      const { lat, lon } = locations.largeWaste[key];
      if (lat === undefined || lon === undefined) return null;

      return (
        <CircleMarker
          key={"LW" + id}
          center={[lat, lon]}
          pathOptions={{ color: "purple" }}
          radius={30}
        >
          <Tooltip>Large Waste</Tooltip>
        </CircleMarker>
      );
    });
  }, [locations.largeWaste]);

  const turtleMarkers = useMemo(() => {
    if (!locations.turtles) return null;

    return Object.keys(locations.turtles).map((key, id) => {
      const { lat, lon } = locations.turtles[key];
      if (lat === undefined || lon === undefined) return null;

      return (
        <CircleMarker
          key={"TR" + id}
          center={[lat, lon]}
          pathOptions={{ color: "yellow" }}
          radius={30}
        >
          <Tooltip>Turtle: {key}</Tooltip>
        </CircleMarker>
      );
    });
  }, [locations.turtles]);

  // Default map center if env variables are missing
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
      {turtleMarkers}
    </MapContainer>
  );
}

export default BotMapLargeTurtleSathSath;
