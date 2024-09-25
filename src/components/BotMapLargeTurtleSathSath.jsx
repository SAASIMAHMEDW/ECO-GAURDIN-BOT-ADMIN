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
          attribution='&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}?api_key=${import.meta.env.VITE_STADIA_MAP_API_KEY}`}
          // url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}"
          ext="jpg"
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
