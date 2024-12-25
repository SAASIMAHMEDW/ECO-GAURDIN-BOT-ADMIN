import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BotCard from "@/components/LeftCards/BotCard";
import { rdb } from "../../firebase"; // Import from Firebase
import { onValue, off, ref } from "firebase/database";
import { Loader1 } from "../magics/Loader";
import NoData from "../magics/NoData"; 
function BotsTab() {
  const [botData, setBotData] = useState(null); // Bot data object
  const [sortStatus, setSortStatus] = useState("All"); // Default filter: "All"
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const locationRef = ref(rdb, "location");
    const lockRef = ref(rdb, "GPS_LOCK/lock");

    const locationListener = onValue(locationRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        setBotData(null);
        return;
      }

      const bot = {
        id: "1", // Unique identifier
        name: data.name || "Star",
        batteryPercentage: data.battery_percentage || "N/A",
        batteryTemperature: data.temperature || "N/A",
        latitude: data.latitude || "N/A",
        longitude: data.longitude || "N/A",
        status: "Not Active", // Default status
      };

      setBotData(bot);
    });

    const lockListener = onValue(lockRef, (snapshot) => {
      const lockData = snapshot.val();
      const status = lockData ? "Active" : "Not Active";

      setBotData((prevBotData) => {
        if (!prevBotData) return null;
        return { ...prevBotData, status };
      });
    });

    setLoading(false);

    // Cleanup listeners on unmount
    return () => {
      off(locationRef, "value", locationListener);
      off(lockRef, "value", lockListener);
    };
  }, []);

  const sortBot = (status, bot) => {
    if (!bot) return null; // If no bot data exists

    if (status === "Inactive") status = "Not Active"; // Align status terms
    if (status === "All") return bot; // Show bot regardless of status for "All"
    return bot.status === status ? bot : null; // Filter bot by status
  };

  if (loading) {
    return <Loader1 />;
  }

  if (!botData) {
    return (
      <NoData
        title={"No Bots Found"}
        desc={`No ${sortStatus} bots available.`}
        date={
          new Date().toLocaleTimeString() +
          " - " +
          new Date().toLocaleDateString()
        }
      />
    );
  }

  const sortedBot = sortBot(sortStatus, botData);

  return (
    <div>
      {/* Sorting Dropdown */}
      <Select onValueChange={setSortStatus}>
        <SelectTrigger className="mt-3 w-[180px]">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All</SelectItem>
          <SelectItem value="Active">Active</SelectItem>
          <SelectItem value="Inactive">Inactive</SelectItem>
        </SelectContent>
      </Select>

      {/* Render BotCard if data matches the filter */}
      {sortedBot ? <BotCard key={sortedBot.id} {...sortedBot} /> : null}
    </div>
  );
}

export default BotsTab;
