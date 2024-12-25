import { useEffect, useState } from "react";
import { db } from "../../firebase"; // Import your Firebase configuration
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  updateDoc,
  doc,
  where,
  deleteDoc,
} from "firebase/firestore";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import NotificationCard from "@/components/LeftCards/NotificationCard";
import NoData from "../magics/NoData";

function NotificationTab() {
  const [notifications, setNotifications] = useState([]);
  const [sortStatus, setSortStatus] = useState("All");

  // Fetch notifications in real-time based on sortStatus
  useEffect(() => {
    const collectionRef = collection(db, "NOTIFICATIONS");

    let q;
    if (sortStatus === "All") {
      q = query(collectionRef, orderBy("date", "desc"));
    } else {
      q = query(
        collectionRef,
        where("status", "==", sortStatus),
        orderBy("date", "desc"),
      );
    }

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const notificationsData = [];
      querySnapshot.forEach((doc) => {
        notificationsData.push({ ...doc.data(), id: doc.id });
      });
      setNotifications(notificationsData);
      updateStatus(notificationsData); // Update status when fetching new data
    });

    return () => unsubscribe(); // Cleanup subscription on unmount or status change
  }, [sortStatus]); // Re-run whenever sortStatus changes

  // Update status to false for new notifications
  const updateStatus = async (notificationsData) => {
    notificationsData.forEach(async (notification) => {
      if (notification.isNew) {
        const docRef = doc(db, "NOTIFICATIONS", notification.id);
        await updateDoc(docRef, {
          isNew: false, // Mark as no longer new
        });
      }
    });
  };

  // Handle sorting option change
  const handleSort = (status) => {
    setSortStatus(status);
  };

  // Mark a notification as resolved
  const handleResolve = async (id) => {
    const docRef = doc(db, "NOTIFICATIONS", id);
    await updateDoc(docRef, {
      status: "Resolved", // Change status to Resolved
    });
  };
  const handleResolvedDelete = async (id) => {
    const docRef = doc(db, "NOTIFICATIONS", id);
    await deleteDoc(docRef);
  };

  if (notifications.length === 0) {
    return (
      <NoData
        title={"Khali..."}
        desc={"No new notifications available."}
        date={
          new Date().toLocaleTimeString() +
          " - " +
          new Date().toLocaleDateString()
        }
      />
    );
  }

  return (
    <div>
      <Select onValueChange={handleSort}>
        <SelectTrigger className="mt-3 w-[280px]">
          <SelectValue placeholder="Sort The Noti" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All</SelectItem>
          <SelectItem value="Resolved">Resolved</SelectItem>
          <SelectItem value="Unresolved">Unresolved</SelectItem>
        </SelectContent>
      </Select>

      {/* Render notifications dynamically */}
      {notifications.map((notification) => (
        <div key={notification.id} className="mb-4">
          <NotificationCard
            title={notification.title}
            message={notification.message}
            isNew={notification.isNew}
            status={notification.status}
            dateAndTime={notification.date + " / " + notification.time}
            onResolve={() => handleResolve(notification.id)}
            onResolveDelete={() => handleResolvedDelete(notification.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default NotificationTab;
