import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import NotificationTab from "@/components/LeftComponents/NotificationTab";
import BotsTab from "@/components/LeftComponents/BotsTab";
import PhValueTab from "@/components/LeftComponents/PhValueTab";
import TdsTab from "@/components/LeftComponents/TdsTab";
import SoilErosionTab from "@/components/LeftComponents/SoilErosionTab";

function Left() {
  return (
    <div className="head col-span-1 hidden lg:block h-full">
      <Tabs defaultValue="notifications" className="h-full">
        {/* Navigation Tabs */}
        <ScrollArea className="h-auto w-full">
          <TabsList className="flex h-16 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400">
            <TabsTrigger className="h-10 min-w-max px-4" value="notifications">
              Notifications
            </TabsTrigger>
            <TabsTrigger className="h-10 min-w-max px-4" value="bots">
              Bots
            </TabsTrigger>
            <TabsTrigger className="h-10 min-w-max px-4" value="ph_value">
              PH Value
            </TabsTrigger>
            <TabsTrigger className="h-10 min-w-max px-4" value="tds_value">
              TDS
            </TabsTrigger>
            <TabsTrigger className="h-10 min-w-max px-4" value="soil_erosion">
              Soil Erosion
            </TabsTrigger>
          </TabsList>
        </ScrollArea>

        {/* Tab Content */}
        <div className="h-[calc(100vh-64px)] w-full overflow-y-auto">
          <ScrollArea className="h-full w-full">
            <TabsContent value="notifications">
              <NotificationTab />
            </TabsContent>
            <TabsContent value="bots">
              <BotsTab />
            </TabsContent>
            <TabsContent value="ph_value">
              <PhValueTab />
            </TabsContent>
            <TabsContent value="tds_value">
              <TdsTab />
            </TabsContent>
            <TabsContent value="soil_erosion">
              <SoilErosionTab />
            </TabsContent>
          </ScrollArea>
        </div>
      </Tabs>
    </div>
  );
}

export default Left;
