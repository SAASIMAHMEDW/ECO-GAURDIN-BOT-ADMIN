import React from "react";
import Left from "./Left";
import Right from "./Right";

function Main() {
  return (
    <>
      <div className="main grid grid-cols-4 grid-rows-1 lg:grid">
        <Left />
        <Right />
      </div>
    </>
  );
}

export default Main;
