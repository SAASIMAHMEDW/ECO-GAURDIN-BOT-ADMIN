import React from "react";
import RightHead from "./RightHead";
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
      <div className="right-content-container h-[calc(100vh-64px)]">
        {/* <RightHead TabsData={TabsData} /> */}
        <img className="h-full w-full" src={content} />
      </div>
    </>
  );
}

export default RightContent;
