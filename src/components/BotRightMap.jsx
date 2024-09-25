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
import MarkerClusterGroup from "react-leaflet-cluster";
import "./Maps.css";
import { BotsMarkers } from "../assets/Data";
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
        scrollWheelZoom={true}
      >
        <TileLayer
        attribution='&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          // url={`https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}?api_key=${import.meta.env.VITE_STADIA_MAP_API_KEY}`}
          // url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          ext="png"
        />
        {/* <TileLayer
          attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://blog.safecast.org/about/">SafeCast</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
          // url={`https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}?api_key=${import.meta.env.VITE_STADIA_MAP_API_KEY}`}
          url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}"
          // url="https://s3.amazonaws.com/te512.safecast.org/{z}/{x}/{y}.png"
          ext="png"
        /> */}
        {/* <MarkerClusterGroup chunkedLoading> */}
        {BotsMarkers.map((marker, index) => (
          <Marker
            key={index}
            position={[...marker.location]}
            icon={customBotIconMarker}
            title="Bot"
          >
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
        {/* </MarkerClusterGroup> */}
      </MapContainer>
    </>
  );
}

export default BotRightMap;
