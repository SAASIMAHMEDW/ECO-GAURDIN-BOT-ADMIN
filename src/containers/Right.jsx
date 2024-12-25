import React from "react";
import "./Right.css";

import RightContent from "../containers/RightContent";
import RightHead from "../containers/RightHead";
import BotRightMap from "@/components/Maps/BotRightMap";
import BotMapLargeWaste from "@/components/Maps/BotMapLargeWaste";
import BotMapTurtleRegion from "@/components/Maps/BotMapTurtleRegion";
import BotMapLargeTurtleSathSath from "@/components/Maps/BotMapLargeTurtleSathSath";
import MarkerClickConnentedMap from "@/components/Maps/MarkerClickConnentedMap";

function Right() {
  let TabsData = [
    {
      label: "Sath Sath",
      content: <BotMapLargeTurtleSathSath />,
    },
    {
      label: "Turtle Region",
      content: <BotMapTurtleRegion />,
    },
    {
      label: "Large Waste",
      content: <BotMapLargeWaste />,
    },
    {
      label: "Bot Map",
      content: <BotRightMap />,
    },
    {
      label: "Make Marker",
      content: <MarkerClickConnentedMap />,
    },
  ];
  return (
    <>
      <div className="head sm:col-span-1 md:col-span-1 lg:col-span-3">
        {/* <RightContent /> */}
        <RightHead TabsData={TabsData} />
      </div>
    </>
  );
}

export default Right;
