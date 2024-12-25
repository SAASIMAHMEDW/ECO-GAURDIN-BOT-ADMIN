import React, { useEffect, useState } from "react";
import { rdb } from "../../firebase";
import { ref, onValue, off } from "firebase/database";

function GpsLock() {
  const [isLocked, setIsLocked] = useState(null);

  useEffect(() => {
    const dbRef = ref(rdb, "GPS_LOCK/lock");

    const listener = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        setIsLocked(snapshot.val());
      } else {
        console.log("No lock data available");
        setIsLocked(null);
      }
    });

    // Cleanup the listener on component unmount
    return () => {
      off(dbRef); // Unsubscribe from all events
    };
  }, []);

  // Determine badge styles and message based on the lock state
  const badgeStyles = isLocked
    ? "bg-green-100 text-green-800 border border-green-400"
    : "bg-red-100 text-red-800 border border-red-400";

  const badgeMessage = isLocked
    ? "GPS LOCKED"
    : isLocked === false
    ? "GPS NOT LOCKED"
    : "Loading..."; // Show a loading state before data is fetched

  return (
    <span
      className={`text-xs font-medium px-2.5 py-1.5 rounded dark:bg-gray-700 dark:text-gray-200 ${badgeStyles}`}
    >
      {badgeMessage}
    </span>
  );
}

export default GpsLock;
