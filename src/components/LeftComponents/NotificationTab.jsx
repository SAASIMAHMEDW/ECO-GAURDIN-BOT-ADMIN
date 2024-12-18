import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NotificationCard from "@/components/LeftCards/NotificationCard";

function NotificationTab() {
  const [sortStatus, setSortStatus] = useState("All");

  const handleSort = (status) => {
    setSortStatus(status);
    // Add your sorting logic here if necessary
  };

  return (
    <div>
      <Select onValueChange={handleSort}>
        <SelectTrigger className="mt-3 w-[280px]">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All</SelectItem>
          <SelectItem value="Resolved">Resolved</SelectItem>
          <SelectItem value="Unresolved">Unresolved</SelectItem>
          <SelectItem value="resolved_then_unresolved">
            Resolved Then Unresolved
          </SelectItem>
          <SelectItem value="unresolved_then_resolved">
            Unresolved Then Resolved
          </SelectItem>
        </SelectContent>
      </Select>

      {/* Replace with dynamically sorted notification cards */}
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
    </div>
  );
}

export default NotificationTab;
