import React from "react";
import "./Right.css";

import RightContent from "@/components/ui/RightContent";
import RightHead from "@/components/ui/RightHead";

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
      content: "maps-markers.jpeg",
    },
  ];
  return (
    <>
      <div className="head w-[100%] lg:col-span-3">
        {/* <RightContent /> */}
        <RightHead TabsData={TabsData} />
      </div>
    </>
  );
}

export default Right;
