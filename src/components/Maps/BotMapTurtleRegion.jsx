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
        center={[parseFloat(import.meta.env.VITE_MAP_CENTER_POINTS_ONE),parseFloat(import.meta.env.VITE_MAP_CENTER_POINTS_TWO)]}
        zoom={20}
        scrollWheelZoom={false}
      >
         <TileLayer
        attribution={import.meta.env.VITE_STADIA_MAP_ATTRIBUTION}
        url={import.meta.env.VITE_STADIA_MAP_URL}
        ext={import.meta.env.VITE_STADIA_MAP_EXT}
        />
        {TurtlesRegion.map((marker, index) => (
          <CircleMarker
          key={"TR"+index}
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
