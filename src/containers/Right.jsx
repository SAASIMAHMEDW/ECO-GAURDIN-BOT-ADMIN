import React from "react";
import "./Right.css";

import RightContent from "@/components/ui/RightContent";
import RightHead from "@/components/ui/RightHead";
import BotRightMap from "@/components/BotRightMap";
import BotMapLargeWaste from "@/components/BotMapLargeWaste";
import BotMapTurtleRegion from "@/components/BotMapTurtleRegion";
import BotMapLargeTurtleSathSath from "@/components/BotMapLargeTurtleSathSath";
import MarkerClickConnentedMap from "@/components/Maps/MarkerClickConnentedMap";

function Right() {
  let TabsData = [
    {
      label: "Sath Sath",
      content: <BotMapLargeTurtleSathSath/>,
    },
    {
      label: "Turtle Region",
      content: <BotMapTurtleRegion/>,
    },
    {
      label: "Large Waste",
      content: <BotMapLargeWaste/>,
    },
    {
      label: "Bot Map",
      content: <BotRightMap/>,
    },
    {
      label: "Make Marker",
      content: <MarkerClickConnentedMap/>
    },
  ];
  return (
    <>
      <div className="head  lg:col-span-3">
        {/* <RightContent /> */}
        <RightHead TabsData={TabsData} />
      </div>
    </>
  );
}

export default Right;
