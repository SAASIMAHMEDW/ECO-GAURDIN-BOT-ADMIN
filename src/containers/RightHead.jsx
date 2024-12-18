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
import { auth } from "../firebase";
import GpsLock from "@/components/mini/GpsLock";
import Weather from "@/components/mini/Weather";

function RightHead({ TabsData }) {
  let [Tab, setTab] = useState(3);
  return (
    <>
      <div className="right-head-container">
        {/* mobile nav bar  */}
        <div className="mx-3 flex items-center lg:hidden">
          <Sheet>
            <SheetTrigger>
              <RiMenuUnfoldLine color="red" size={30} />
            </SheetTrigger>
            <SheetContent side="left" className="w-[350px] sm:w-[300px]">
              <SheetHeader>
                <SheetTitle>
                  <h3 className="text-pretty text-3xl font-extrabold">STAR</h3>
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
        <div className="right-head sticky top-0 z-50 flex h-16 w-full items-center justify-between backdrop-blur-md sm:justify-between">
          <span className="text-pretty rounded-xl p-3 shadow-2xl backdrop-blur-sm">
            <h3 className="mx-5 text-pretty font-extrabold text-purple-500 sm:text-xl md:text-xl lg:text-3xl">
              STAR
            </h3>
          </span>

          {/* mobile dark mode btn */}
          <div className="mr-3 sm:block md:hidden lg:hidden">
            <ModeToggle />
          </div>
            <Weather/>
          <div className="hidden items-center lg:flex">
          <GpsLock />
            <div className="tabs mx-10 my-3 h-10 justify-around gap-5 rounded-xl lg:flex">
            
              {TabsData.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`items make-center h-10 list-none rounded-s-md p-3 text-black ${
                    Tab === index ? "bg-purple-500" : "bg-white"
                  }`}
                  onClick={() => setTab(index)}
                >
                  {item.label}
                </Button>
              ))}

              <div className="mx-3 flex items-center gap-3">
                <Button
                  className="h-10"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    auth.signOut();
                  }}
                >
                  Logout
                </Button>
                <ModeToggle className="h-10" />
              </div>
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
