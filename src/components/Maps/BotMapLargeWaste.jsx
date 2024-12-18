import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup ,CircleMarker,Tooltip} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Maps.css";
import { LargeWasteLocations } from "../../assets/Data";
import { Icon } from "leaflet";
function BotMapLargeWaste() {
  let customBotIconMarker = new Icon({
    iconUrl: "bot-logo.png",
    iconSize: [38, 38],
  });
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
        {LargeWasteLocations.map((marker,index) => (
          <CircleMarker
          key={"LW"+index}
          center={[...marker.location]}
          pathOptions={{ color: "purple" }}
          radius={30}
        >
          <Tooltip>Large Waste{}</Tooltip>
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

export default BotMapLargeWaste;
