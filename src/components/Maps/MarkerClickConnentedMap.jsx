import React, { useState, useEffect, useMemo, useCallback } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { rdb } from "../../firebase";
import { ref, onValue, set, off } from "firebase/database";
import { Loader1, Loader2 } from "../magics/Loader";

function MarkerClickConnectedMap() {
  const [markers, setMarkers] = useState([]);
  const [isAddingMarker, setIsAddingMarker] = useState(false);
  const [showPolyline, setShowPolyline] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [loading, setLoading] = useState(true);

  const markersRef = ref(rdb, "MAP_MARKER_LOCATIONS");

  // Fetch markers from Firebase on mount
  useEffect(() => {
    const unsubscribe = onValue(markersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const fetchedMarkers = data.latitude.map((lat, index) => ({
          id: index.toString(),
          latitude: lat,
          longitude: data.longitude[index],
          draggable: false,
        }));
        setMarkers(fetchedMarkers);
      } else {
        setMarkers([]);
      }
      setLoading(false);
    });

    return () => {
      off(markersRef);
    };
  }, []);

  // Add marker
  const addMarker = useCallback((location) => {
    const newMarker = {
      id: Date.now().toString(),
      latitude: location[0],
      longitude: location[1],
      draggable: false,
    };
    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    setHasChanges(true);
  }, []);

  // Toggle draggable state of marker
  const toggleDraggable = useCallback((id, isDraggable) => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) =>
        marker.id === id
          ? { ...marker, draggable: isDraggable }
          : marker
      )
    );
    setHasChanges(true);
  }, []);

  // Delete marker
  const deleteMarker = useCallback((id) => {
    setMarkers((prevMarkers) => prevMarkers.filter((marker) => marker.id !== id));
    setHasChanges(true);
  }, []);

  // Update marker position
  const updateMarkerPosition = useCallback((id, newLocation) => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) =>
        marker.id === id
          ? { ...marker, latitude: newLocation[0], longitude: newLocation[1], draggable: false }
          : marker
      )
    );
    setHasChanges(true);
  }, []);

  // Toggle add marker mode
  const handleToggleMarkerMode = useCallback(() => {
    setIsAddingMarker((prev) => !prev);
  }, []);

  // Toggle polyline/rectangle display
  const handleToggleShape = useCallback(() => {
    setShowPolyline((prevShowPolyline) => !prevShowPolyline);
  }, []);

  // Calculate rectangle bounds
  const rectangleBounds = useMemo(() => {
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
  }, [markers]);

  // Handle upload to Firebase
  const handleUpload = useCallback(async () => {
    try {
      if (markers.length === 0) {
        toast.error("No markers to upload.");
        return;
      }

      const latitudes = markers.map((marker) => marker.latitude);
      const longitudes = markers.map((marker) => marker.longitude);

      await set(markersRef, {
        latitude: latitudes,
        longitude: longitudes,
      });

      toast.success("Markers successfully uploaded.");
      setHasChanges(false);
      setIsAddingMarker(false); // Exit add marker mode after upload
    } catch (error) {
      toast.error("Error uploading markers: " + error.message);
    }
  }, [markers]);

  if (loading) {
    return (
      <Loader2 text={"Loading marker map..."}/>
    )
  }

  return (
    <div className="relative h-[calc(100vh-69px)] w-full">
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

      {markers.length > 0 && (
        <Button
          variant="default"
          size="sm"
          className="absolute right-[340px] top-[10px] z-[1000] h-10 cursor-pointer border-r-8 border-none px-[15px] pb-[10px] pt-[10px] text-sm font-bold"
          onClick={handleToggleShape}
        >
          {showPolyline ? "Show Rectangle" : "Show Polyline"}
        </Button>
      )}

      <MapContainer
        center={[parseFloat(import.meta.env.VITE_MAP_CENTER_POINTS_ONE), parseFloat(import.meta.env.VITE_MAP_CENTER_POINTS_TWO)]}
        zoom={20}
        scrollWheelZoom={false}
        dragging={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution={import.meta.env.VITE_STADIA_MAP_ATTRIBUTION}
          url={import.meta.env.VITE_STADIA_MAP_URL}
          ext={import.meta.env.VITE_STADIA_MAP_EXT}
        />
        {isAddingMarker && <MapEventHandler addMarker={addMarker} markers={markers} />}

        {showPolyline && markers.length > 1 && (
          <Polyline
            positions={markers.map((marker) => [marker.latitude, marker.longitude])}
            color="purple"
          />
        )}

        {!showPolyline && rectangleBounds && (
          <Rectangle bounds={rectangleBounds} color="green" />
        )}

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
                    onClick={() => toggleDraggable(marker.id, true)}
                  >
                    Enable Drag
                  </Button>
                ) : (
                  <Button
                    onClick={() => toggleDraggable(marker.id, false)}
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
                    e.stopPropagation();
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
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

function MapEventHandler({ addMarker, markers }) {
  useMapEvents({
    click(e) {
      const clickedLat = e.latlng.lat;
      const clickedLng = e.latlng.lng;
      const isExistingMarker = markers.some(
        (marker) => marker.latitude === clickedLat && marker.longitude === clickedLng
      );

      if (!isExistingMarker) {
        addMarker([clickedLat, clickedLng]);
      }
    },
  });

  return null;
}

export default MarkerClickConnectedMap;
