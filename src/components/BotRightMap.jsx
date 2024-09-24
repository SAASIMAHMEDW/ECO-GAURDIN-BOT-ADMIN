import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup ,CircleMarker,Tooltip} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Maps.css";
import { BotsMarkers, LargeWasteLocations } from "../assets/Data";
import { Icon } from "leaflet";
function BotRightMap() {
  let customBotIconMarker = new Icon({
    iconUrl: "bot-logo.png",
    iconSize: [38, 38],
  });
  return (
    <>
      <MapContainer
        center={[12.866799235763326, 74.92548488426597]}
        zoom={20}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CircleMarker
          center={[12.86604706350791, 74.92543147376786]}
          pathOptions={{ color: "purple" }}
          radius={30}
        >
          <Tooltip>Large Waste</Tooltip>
        </CircleMarker>
        <CircleMarker
          center={[12.866917755359369, 74.92480310246205]}
          pathOptions={{ color: "purple" }}
          radius={30}
        >
          <Tooltip>Large Waste</Tooltip>
        </CircleMarker>
        {BotsMarkers.map((marker) => (
          <Marker position={[...marker.location]} icon={customBotIconMarker}>
            <Popup>{marker.name}</Popup>
          </Marker>
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

export default BotRightMap;
