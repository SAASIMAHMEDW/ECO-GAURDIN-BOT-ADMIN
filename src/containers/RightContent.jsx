import React from "react";

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
