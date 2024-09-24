import React, { useEffect, useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "./Left.css";
import { ScrollArea } from "@/components/ui/scroll-area";
import BotCard from "@/components/ui/BotCard";
import {Bots} from "../assets/Data";
import NotificationCard from "@/components/ui/NotificationCard";

function Left() {
  let [BotsData,setBotsData] = useState([])
  useEffect(()=>{
    setBotsData(Bots)
    SortBotsAccordingToStatus(Bots)
  },[BotsData])
  const SortBotsAccordingToStatus = (BotsData)=>{
     let BotsActive = BotsData.filter((bot)=>{
       return bot.status === "Active"
     })
     let BotsInactive = BotsData.filter((bot)=>{
       return bot.status === "Not Active"
     })
     let temp = [...BotsActive,...BotsInactive]
     setBotsData(temp)
  }
  return (
    <>
      <div className="head hidden lg:block col-span-1">
        <Tabs defaultValue="notifications" className="">  {/* border-none bg-none */}
          {/* //nav button */}
          <TabsList className="h-16 flex justify-evenly">
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
          <div className="left__tabs__content_container w-[100%] h-[calc(100vh-64px)] overflow-y-auto">
            <ScrollArea className="h-full w-[100%] rounded-md">
              <TabsContent value="notifications">
                 <NotificationCard/>
                 <NotificationCard/>
                 <NotificationCard/>
                 <NotificationCard/>
                 <NotificationCard/>
              </TabsContent>
              <TabsContent value="bots">
                {
                  BotsData.map((bot) => (
                    <BotCard key={bot.id} {...bot}/>
                  ))
                }
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
