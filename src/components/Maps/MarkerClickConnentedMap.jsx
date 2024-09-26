import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { Button } from "@/components/ui/button";

function MarkerClickConnectedMap() {
  // State to hold marker data as an array of objects with id, location, and draggable attributes
  const [markers, setMarkers] = useState([]);

  // Function to add a new marker
  const addMarker = (location) => {
    setMarkers((prevMarkers) => [
      ...prevMarkers,
      { id: prevMarkers.length + 1, location, draggable: false },
    ]);
  };

  // Function to enable draggable state of a marker
  const enableDraggable = (id) => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) =>
        marker.id === id ? { ...marker, draggable: true } : marker,
      ),
    );
  };

  // Function to disable draggable state of a marker
  const disableDraggable = (id) => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) =>
        marker.id === id ? { ...marker, draggable: false } : marker,
      ),
    );
  };

  // Function to delete a marker
  const deleteMarker = (id) => {
    setMarkers((prevMarkers) =>
      prevMarkers.filter((marker) => marker.id !== id),
    );
  };

  // Function to update marker location after dragging
  const updateMarkerPosition = (id, newLocation) => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) =>
        marker.id === id
          ? { ...marker, location: newLocation, draggable: false }
          : marker,
      ),
    );
  };

  // Function to handle "Upload" button click
  const handleUpload = () => {
    const markerLocations = markers.map((marker) => marker.location);
    console.log("Marker Locations:", markerLocations);
  };

  return (
    <div className="relative h-full w-full">
      {/* Upload button */}
      <Button
        variant="default"
        size="sm"
        className="absolute right-[110px] top-[10px] z-[1000] h-10 cursor-pointer border-r-8 border-none px-[15px] pb-[10px] pt-[10px] text-sm font-bold"
        onClick={handleUpload}
      >
        Upload
      </Button>

      <MapContainer
        center={[12.866799235763326, 74.92548488426597]}
        zoom={20}
        scrollWheelZoom={true}
        // style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          attribution={import.meta.env.VITE_MAP_ATTRIBUTION}
          url={import.meta.env.VITE_MAP_URL}
          ext="png"
        />
        {/* Map event handler component */}
        <MapEventHandler addMarker={addMarker} />

        {/* Render polyline connecting all markers */}
        {markers.length > 1 && (
          <Polyline
            positions={markers.map((marker) => marker.location)}
            color="purple"
          />
        )}

        {/* Render markers from state */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.location}
            draggable={marker.draggable}
            eventHandlers={{
              dragend: (e) => {
                const newLocation = [
                  e.target.getLatLng().lat,
                  e.target.getLatLng().lng,
                ];
                updateMarkerPosition(marker.id, newLocation);
              },
              dragstart: () => {
                // Once drag starts, keep marker draggable until drag ends
                setMarkers((prevMarkers) =>
                  prevMarkers.map((m) =>
                    m.id === marker.id ? { ...m, draggable: true } : m,
                  ),
                );
              },
            }}
          >
            <Popup>
              <div>
                <span>
                  {marker.draggable
                    ? "Drag the marker to move it."
                    : "Click 'Enable Drag' to move this marker."}
                </span>
                <br />
                {!marker.draggable ? (
                  <Button
                    variant="default"
                    size="sm"
                    className="m-[5px] cursor-pointer border-r-8 border-none px-[15px] pb-[10px] pt-[10px] text-sm font-bold"
                    onClick={() => enableDraggable(marker.id)}
                    // style={{
                    //   backgroundColor: "purple",
                    //   color: "white",
                    //   margin: "5px",
                    //   padding: "5px",
                    //   border: "none",
                    //   cursor: "pointer",
                    // }}
                  >
                    Enable Drag
                  </Button>
                ) : (
                  <Button
                    onClick={() => disableDraggable(marker.id)}
                    variant="secondary"
                    size="sm"
                    className="m-[5px] cursor-pointer border-r-8 border-none px-[15px] pb-[10px] pt-[10px] text-sm font-bold"
                    // style={{
                    //   backgroundColor: "gray",
                    //   color: "white",
                    //   margin: "5px",
                    //   padding: "5px",
                    //   border: "none",
                    //   cursor: "pointer",
                    // }}
                  >
                    Disable Drag
                  </Button>
                )}
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent map click event
                    deleteMarker(marker.id);
                  }}
                  className="m-[5px] cursor-pointer border-r-8 border-none px-[15px] pb-[10px] pt-[10px] text-sm font-bold"
                  // style={{
                  //   backgroundColor: "red",
                  //   color: "white",
                  //   margin: "5px",
                  //   padding: "5px",
                  //   border: "none",
                  //   cursor: "pointer",
                  // }}
                >
                  Delete Marker
                </Button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

// Separate component to handle map events
function MapEventHandler({ addMarker }) {
  useMapEvents({
    click(e) {
      // Add new marker to the state with clicked location
      addMarker([e.latlng.lat, e.latlng.lng]);
    },
  });

  return null; // This component doesn't render anything visually
}

export default MarkerClickConnectedMap;
