import React from "react";
import "./Right.css";


import RightHead from "@/components/ui/RightHead";
import RightContent from "@/components/ui/RightContent";


function Right() {
  
  return (
    <>
      <div className="head lg:col-span-3">
        <div className="right-content-container h-screen bg-[url(https://plus.unsplash.com/premium_photo-1681488347845-6e310c3dd682?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover">
          <RightHead/>
          <RightContent/>
        </div>
      </div>
    </>
  );
}

export default Right;
