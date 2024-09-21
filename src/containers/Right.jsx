import React from "react";
import "./Right.css";
import { RiMenuUnfoldLine } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";
import { ModeToggle, ModeToggleMobile } from "@/components/ThemeMode";

function Right() {
  return (
    <>
      <div className="head lg:col-span-3">
        <div className="right-head-container h-16 flex justify-between mx-3">
          <div className="block lg:hidden">
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
          <div className="right-head w-full flex justify-between ">
            <h3 className="mx-5 make-center text-pretty font-extrabold lg:text-3xl sm:text-xl">
              ECO GAURDIAN BOT
            </h3>
            <span className="lg:hidden md:hidden sm:block">
              <ModeToggleMobile />
            </span>
            <div className="flex items-center">
              <div className="tabs my-3 rounded-xl h-10 mx-10 hidden lg:flex justify-around gap-5">
                <Button className="items list-none p-3  h-10 make-center rounded-s-md">
                  Extra
                </Button>
                <Button className="items list-none p-3  h-10 make-center rounded-md">
                  Turtle Region
                </Button>
                <Button className="items list-none p-3  h-10 make-center rounded-md">
                  Large Waste
                </Button>
                <Button className="items list-none p-3  h-10 make-center rounded-r-md">
                  Map
                </Button>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <ModeToggle />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Change Theme</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
        <div className="right-content-container h-[calc(100vh-64px)] container bg-[url(https://plus.unsplash.com/premium_photo-1681488347845-6e310c3dd682?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover"></div>
      </div>
    </>
  );
}

export default Right;
