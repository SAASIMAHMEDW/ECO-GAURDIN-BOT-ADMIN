import React from "react";
import "./Right.css";

import RightContent from "@/components/ui/RightContent";
import RightHead from "@/components/ui/RightHead";
import BotRightMap from "@/components/BotRightMap";

function Right() {
  let TabsData = [
    {
      label: "Extra",
      content: "map-circle-2.jpg",
    },
    {
      label: "Turtle Region",
      content: "map-circle.jpg",
    },
    {
      label: "Large Waste",
      content: "map-circle-2.jpg",
    },
    {
      label: "Map",
      content: <BotRightMap/>,
    },
  ];
  return (
    <>
      <div className="head w-[calc(100vw-450px)] h-[calc(100vh-70px)] lg:col-span-3">
        {/* <RightContent /> */}
        <RightHead TabsData={TabsData} />
      </div>
    </>
  );
}

export default Right;
