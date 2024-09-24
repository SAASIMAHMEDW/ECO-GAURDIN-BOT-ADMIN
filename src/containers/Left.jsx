import React, { useEffect, useLayoutEffect, useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "./Left.css";
import { ScrollArea } from "@/components/ui/scroll-area";
import BotCard from "@/components/ui/BotCard";
import { Bots } from "../assets/Data";
import NotificationCard from "@/components/ui/NotificationCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Left() {
  let [BotsData, setBotsData] = useState([]);
  let [SortBotsStatus, setSortBotsStatus] = useState("All");
  // let [BotDataBasedStatus, setBotDataBasedStatus] = useState([]);

  useEffect(() => {
    // setBotsData(Bots);
    // SortBotsAccordingToStatus(Bots);
    // setBotDataBasedStatus(SortBotsAccordingToStatus(SortBotsStatus));
  }, []);
  useEffect(() => {
    setBotsData(SortBotsAccordingToStatus(SortBotsStatus));
  }, [SortBotsStatus]);

  const SortBotsAccordingToStatus = (status) => {
    if (status === "Inactive") status = "Not Active";
    if (status === "All") {
      let BotsActive = Bots.filter((bot) => {
        return bot.status === "Active";
      });
      let BotsInactive = Bots.filter((bot) => {
        return bot.status === "Not Active";
      });
      return [...BotsActive, ...BotsInactive];
    } else {
      return BotsData.filter((bot) => {
        return bot.status === status;
      });
    }
  };
  return (
    <>
      <div className="head col-span-1 hidden lg:block">
        <Tabs defaultValue="notifications" className="">
          {" "}
          {/* border-none bg-none */}
          {/* //nav button */}
          <TabsList className="flex h-16 justify-evenly">
            <TabsTrigger className="h-10" value="notifications">
              Notifications
            </TabsTrigger>
            <TabsTrigger className="h-10" value="bots">
              Bots
            </TabsTrigger>
            <TabsTrigger className="h-10" value="ph_value">
              PH Value
            </TabsTrigger>
            <TabsTrigger className="h-10" value="tds_value">
              TDS
            </TabsTrigger>
          </TabsList>
          {/* //nav content area */}
          <div className="left__tabs__content_container h-[calc(100vh-64px)] w-[100%] overflow-y-auto">
            <ScrollArea className="h-full w-[100%] rounded-md">
              <TabsContent value="notifications">
              <Select
                  onValueChange={(a) => {
                    // setSortBotsStatus(a);
                  }}
                >
                  <SelectTrigger className="mt-3 w-[180px]">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="x1">X1</SelectItem>
                    <SelectItem value="x2">x2</SelectItem>
                  </SelectContent>
                </Select>
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
              </TabsContent>

              <TabsContent value="bots">
                <Select
                  onValueChange={(a) => {
                    // setSortBotsStatus(a);
                  }}
                >
                  <SelectTrigger className="mt-3 w-[180px]">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>

                {BotsData.map((bot) => (
                  <BotCard key={bot.id} {...bot} />
                ))}
              </TabsContent>
              <TabsContent value="ph_value">ph value details</TabsContent>
              <TabsContent value="tds_value">tds details</TabsContent>
            </ScrollArea>
          </div>
        </Tabs>
      </div>
    </>
  );
}

export default Left;