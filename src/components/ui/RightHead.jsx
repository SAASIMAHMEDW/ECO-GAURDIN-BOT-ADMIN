import React, { useState } from "react";
import { RiMenuUnfoldLine } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from "@/components/ThemeMode";
import { Button } from "@/components/ui/button";
import RightContent from "./RightContent";

function RightHead({ TabsData }) {
  let [Tab, setTab] = useState(3);
  return (
    <>
      <div className="right-head-container h-16 flex sticky top-0 sm:justify-between">
        {/* mobile nav bar  */}
        <div className="flex items-center mx-3 lg:hidden">
          <Sheet>
            <SheetTrigger>
              <RiMenuUnfoldLine color="red" size={30} />
            </SheetTrigger>
            <SheetContent side="left" className="w-[350px] sm:w-[300px]">
              <SheetHeader>
                <SheetTitle>
                  <h3 className="text-pretty font-extrabold text-3xl">
                    ECO GAURDIAN BOT
                  </h3>
                </SheetTitle>
                <SheetDescription>
                  Cleaning is not a my job, its my love.
                </SheetDescription>
              </SheetHeader>
              <div className="nav_items mt-10 grid grid-cols-2 gap-5">
                <Button className="nav_item" size="">
                  Notifications
                </Button>
                <Button className="nav_item">Extra</Button>
                <Button className="nav_item">Bots</Button>
                <Button className="nav_item">Turtle Region</Button>
                <Button className="nav_item">LEFT 3</Button>
                <Button className="nav_item">Large Waste</Button>
                <Button className="nav_item">LEFT 4</Button>
                <Button className="nav_item">Map</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* tabs */}
        <div className="right-head w-full flex justify-between items-center">
          <span className="text-pretty shadow-2xl backdrop-blur-sm rounded-xl p-3">
            <h3 className="mx-5 text-purple-500 text-pretty font-extrabold lg:text-3xl md:text-xl sm:text-xl">
              ECO GAURDIAN BOT
            </h3>
          </span>

          {/* mobile dark mode btn */}
          <div className="lg:hidden md:hidden sm:block mr-3">
            <ModeToggle />
          </div>

          <div className="hidden items-center  lg:flex">
            <div className="tabs my-3 rounded-xl h-10 mx-10 lg:flex justify-around gap-5">
              {TabsData.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`items list-none p-3  h-10 make-center rounded-s-md text-black ${
                    Tab === index ? "bg-purple-500" : "bg-white"
                  }`}
                  onClick={() => setTab(index)}
                >
                  {item.label}
                </Button>
              ))}
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <RightContent content={TabsData[Tab].content} />
    </>
  );
}

export default RightHead;
