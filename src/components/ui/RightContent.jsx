import React from "react";
import RightHead from "./RightHead";
import BotRightMap from "../BotRightMap";
let TabsData = [
  {
    label:"Extra",
    content : "Extra content"
  },
  {
    label:"Turtle Region",
    content : "Turtle Region content"
  },
  {
    label:"Large Waste",
    content : "Large Waste content"
  },
  {
    label:"Map",
    content : "Map content"
  },

]

function RightContent({content}) {
    
  return (
    <>
      <div className="right-content-container w-[calc(100%)] h-[calc(100vh-69px)] lg:col-span-3 [grid-area]">
        {/* <RightHead TabsData={TabsData} /> */}
        {content}
      </div>
    </>
  );
}

export default RightContent;
