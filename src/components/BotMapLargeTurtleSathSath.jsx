import React from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  CircleMarker,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Maps.css";
import { LargeWasteLocations, TurtlesRegion } from "../assets/Data";
import { Icon } from "leaflet";
function BotMapLargeTurtleSathSath() {
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
        {LargeWasteLocations.map((marker) => (
          <CircleMarker
            center={[...marker.location]}
            pathOptions={{ color: "purple" }}
            radius={30}
          >
            <Tooltip>Large Waste</Tooltip>
          </CircleMarker>
        ))}
        {TurtlesRegion.map((marker) => (
          <CircleMarker
            center={[...marker.location]}
            pathOptions={{ color: "gray" }}
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

export default BotMapLargeTurtleSathSath;