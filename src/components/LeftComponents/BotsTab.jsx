import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BotCard from "@/components/LeftCards/BotCard";
import { Bots } from "../../assets/Data";

function BotsTab() {
  const [botsData, setBotsData] = useState([]);
  const [sortStatus, setSortStatus] = useState("All");

  useEffect(() => {
    setBotsData(sortBots(sortStatus));
  }, [sortStatus]);

  const sortBots = (status) => {
    if (status === "Inactive") status = "Not Active";
    if (status === "All") {
      let activeBots = Bots.filter((bot) => bot.status === "Active");
      let inactiveBots = Bots.filter((bot) => bot.status === "Not Active");
      return [...activeBots, ...inactiveBots];
    } else {
      return Bots.filter((bot) => bot.status === status);
    }
  };

  return (
    <div>
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

      {/* Render sorted bot cards */}
      {botsData.map((bot) => (
        <BotCard key={bot.id} {...bot} />
      ))}
    </div>
  );
}

export default BotsTab;
