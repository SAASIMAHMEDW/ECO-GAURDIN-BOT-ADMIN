import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  Rectangle,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { Button } from "@/components/ui/button";

import { db } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function MarkerClickConnectedMap() {
  // State to hold marker data
  const [markers, setMarkers] = useState([]);
  // State to manage marker adding mode
  const [isAddingMarker, setIsAddingMarker] = useState(false);
  // State to toggle polyline or rectangle (polyline is default)
  const [showPolyline, setShowPolyline] = useState(true);
  // State to track if there are unsaved changes
  const [hasChanges, setHasChanges] = useState(false);
  // State to manage loading status
  const [loading, setLoading] = useState(true);

  const markersCollectionRef = collection(db, "MARKERS"); //  "markers" collection name

  // Fetch markers from Firestore on component mount
  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const querySnapshot = await getDocs(markersCollectionRef);
        const fetchedMarkers = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          fetchedMarkers.push({
            id: doc.id, // Use Firestore document ID
            latitude: data.latitude,
            longitude: data.longitude,
            draggable: false,
          });
        });
        setMarkers(fetchedMarkers);
      } catch (error) {
        console.error("Error fetching markers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarkers();
  }, []);

  // Function to add a new marker
  const addMarker = (location) => {
    const newMarker = {
      id: Date.now().toString(), // Temporary ID; Firestore will generate a real ID on upload
      latitude: location[0],
      longitude: location[1],
      draggable: false,
    };
    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    setHasChanges(true);
  };

  // Function to enable draggable state of a marker
  const enableDraggable = (id) => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) =>
        marker.id === id ? { ...marker, draggable: true } : marker
      )
    );
    setHasChanges(true);
  };

  // Function to disable draggable state of a marker
  const disableDraggable = (id) => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) =>
        marker.id === id ? { ...marker, draggable: false } : marker
      )
    );
    setHasChanges(true);
  };

  // Function to delete a marker
  const deleteMarker = (id) => {
    setMarkers((prevMarkers) => prevMarkers.filter((marker) => marker.id !== id));
    setHasChanges(true);
  };

  // Function to update marker location after dragging
  const updateMarkerPosition = (id, newLocation) => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) =>
        marker.id === id
          ? { ...marker, latitude: newLocation[0], longitude: newLocation[1], draggable: false }
          : marker
      )
    );
    setHasChanges(true);
  };

  // Function to toggle adding marker mode
  const handleToggleMarkerMode = () => {
    setIsAddingMarker((prev) => !prev);
  };

  // Function to toggle between showing the polyline and rectangle
  const handleToggleShape = () => {
    setShowPolyline((prevShowPolyline) => !prevShowPolyline);
  };

  // Function to calculate bounds for the rectangle
  const calculateRectangleBounds = () => {
    if (markers.length === 0) return null;

    const latitudes = markers.map((marker) => marker.latitude);
    const longitudes = markers.map((marker) => marker.longitude);

    const minLat = Math.min(...latitudes);
    const maxLat = Math.max(...latitudes);
    const minLng = Math.min(...longitudes);
    const maxLng = Math.max(...longitudes);

    return [
      [minLat, minLng],
      [maxLat, maxLng],
    ];
  };

  const rectangleBounds = calculateRectangleBounds();

  // Function to handle "Upload" button click
  const handleUpload = async () => {
    try {
      if (markers.length === 0) {
        // If no markers, optionally delete the collection or handle accordingly
        // Firestore doesn't support deleting collections directly; you'd need to delete documents individually
        // Here, we'll skip deletion for simplicity
        console.log("No markers to upload.");
        return;
      }

      // Option 1: Clear existing markers and add all current markers
      // Note: Firestore doesn't support bulk deletes; you'd need to iterate and delete each document
      // For simplicity, we'll assume you want to overwrite existing markers

      // First, delete existing markers
      const existingMarkersSnapshot = await getDocs(markersCollectionRef);
      const deletePromises = existingMarkersSnapshot.docs.map((doc) => deleteDoc(doc.ref));
      await Promise.all(deletePromises);

      // Then, add current markers
      const addPromises = markers.map((marker) =>
        addDoc(markersCollectionRef, {
          latitude: marker.latitude,
          longitude: marker.longitude,
        })
      );
      await Promise.all(addPromises);

      console.log("Markers successfully uploaded.");
      setHasChanges(false);
    } catch (error) {
      console.error("Error uploading markers:", error);
    }
  };

  // Optionally, handle initial upload if no markers exist
  // This depends on your specific requirements

  if (loading) {
    return <div>Loading map...</div>;
  }

  return (
    <div className="relative h-[calc(100vh-69px)] w-full">
      {/* Conditionally render Upload button */}
      {hasChanges && markers.length > 0 && (
        <Button
          variant="default"
          size="sm"
          className="absolute right-[110px] top-[10px] z-[1000] h-10 cursor-pointer border-r-8 border-none px-[15px] pb-[10px] pt-[10px] text-sm font-bold"
          onClick={handleUpload}
        >
          Upload
        </Button>
      )}

      {/* Toggle Add Marker / Exit button */}
      {isAddingMarker ? (
        <Button
          variant="secondary"
          size="sm"
          className="absolute right-[210px] top-[10px] z-[1000] h-10 cursor-pointer border-r-8 border-none px-[15px] pb-[10px] pt-[10px] text-sm font-bold"
          onClick={handleToggleMarkerMode}
        >
          Exit
        </Button>
      ) : (
        <Button
          variant="default"
          size="sm"
          className="absolute right-[210px] top-[10px] z-[1000] h-10 cursor-pointer border-r-8 border-none px-[15px] pb-[10px] pt-[10px] text-sm font-bold"
          onClick={handleToggleMarkerMode}
        >
          Add Marker
        </Button>
      )}

      {/* Toggle between Polyline and Rectangle button */}
      <Button
        variant="default"
        size="sm"
        className="absolute right-[340px] top-[10px] z-[1000] h-10 cursor-pointer border-r-8 border-none px-[15px] pb-[10px] pt-[10px] text-sm font-bold"
        onClick={handleToggleShape}
      >
        {showPolyline ? "Show Rectangle" : "Show Polyline"}
      </Button>

      <MapContainer
        center={[12.866799235763326, 74.92548488426597]}
        zoom={20} // Adjust zoom level as needed
        scrollWheelZoom={false} // Allow scroll zoom
        dragging={false} // Allow dragging
        className="h-full w-full"
      >
        <TileLayer
          attribution={import.meta.env.VITE_STADIA_MAP_ATTRIBUTION}
          url={import.meta.env.VITE_STADIA_MAP_URL}
          ext="png"
        />
        {/* Map event handler component */}
        {isAddingMarker && <MapEventHandler addMarker={addMarker} />}

        {/* Conditionally render polyline or rectangle */}
        {showPolyline && markers.length > 1 && (
          <Polyline
            positions={markers.map((marker) => [marker.latitude, marker.longitude])}
            color="purple"
          />
        )}

        {!showPolyline && rectangleBounds && (
          <Rectangle bounds={rectangleBounds} color="green" />
        )}

        {/* Render markers from state */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={[marker.latitude, marker.longitude]}
            draggable={marker.draggable}
            eventHandlers={{
              dragend: (e) => {
                const newLocation = [e.target.getLatLng().lat, e.target.getLatLng().lng];
                updateMarkerPosition(marker.id, newLocation);
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
                  >
                    Enable Drag
                  </Button>
                ) : (
                  <Button
                    onClick={() => disableDraggable(marker.id)}
                    variant="secondary"
                    size="sm"
                    className="m-[5px] cursor-pointer border-r-8 border-none px-[15px] pb-[10px] pt-[10px] text-sm font-bold"
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
