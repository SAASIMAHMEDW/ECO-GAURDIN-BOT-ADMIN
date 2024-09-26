import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MarkerClickConnectedMap() {
  // State to hold marker data as an array of objects with id, location, and draggable attributes
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    console.log(markers);
  }, [markers]);

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

  return (
    <>
      {/* Map component */}
      <MapContainer
        center={[12.866799235763326, 74.92548488426597]}
        zoom={20}
        scrollWheelZoom={true}
        style={{ height: "100vh", width: "100%" }}
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
            color="blue"
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
                  <button
                    onClick={() => enableDraggable(marker.id)}
                    style={{
                      backgroundColor: "purple",
                      color: "white",
                      margin: "5px",
                      padding: "5px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Enable Drag
                  </button>
                ) : (
                  <button
                    onClick={() => disableDraggable(marker.id)}
                    style={{
                      backgroundColor: "gray",
                      color: "white",
                      margin: "5px",
                      padding: "5px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Disable Drag
                  </button>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent map click event
                    deleteMarker(marker.id);
                  }}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    margin: "5px",
                    padding: "5px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Delete Marker
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
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
