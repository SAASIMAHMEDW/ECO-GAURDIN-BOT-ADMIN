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
      <div className="right-content-container flex justify-center items-center h-[calc(100vh-64px)]">
        {/* <RightHead TabsData={TabsData} /> */}
        <BotRightMap/>
      </div>
    </>
  );
}

export default RightContent;
