import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup ,CircleMarker,Tooltip} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Maps.css";
import { TurtlesRegion } from "../../assets/Data";
import { Icon } from "leaflet";
function BotMapTurtleRegion() {
  return (
    <>
      <MapContainer
        center={[12.866799235763326, 74.92548488426597]}
        zoom={20}
        scrollWheelZoom={false}
      >
         <TileLayer
        attribution={import.meta.env.VITE_MAP_ATTRIBUTION}
          url={import.meta.env.VITE_MAP_URL}
          ext="png"
        />
        {TurtlesRegion.map((marker) => (
          <CircleMarker
          center={[...marker.location]}
          pathOptions={{ color: "yellow" }}
          radius={30}
        >
          <Tooltip>Turtle: {marker.name}</Tooltip>
        </CircleMarker>
        ))}
        {/* <Marker position={[12.866799235763326, 74.92548488426597]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </>
  );
}

export default BotMapTurtleRegion;
