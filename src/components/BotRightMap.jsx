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
          attribution='&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}"
          ext="jpg"
        />
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
