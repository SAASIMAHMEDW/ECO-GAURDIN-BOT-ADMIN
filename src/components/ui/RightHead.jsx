import React from 'react'
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
import { ModeToggle, ModeToggleMobile } from "@/components/ThemeMode";
import { Button } from "@/components/ui/button";

function RightHead() {
  return (
    <>
        <div className="right-head-container h-16 flex justify-between mx-3">
            <div className="flex items-center lg:hidden">
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

            <div className="right-head w-full flex justify-between items-center">
              <h3 className="mx-5 text-pretty font-extrabold lg:text-3xl md:text-xl sm:text-xl">
                ECO GAURDIAN BOT
              </h3>
              <div className=" lg:hidden md:hidden sm:block">
                {/* <ModeToggleMobile /> */}
                <ModeToggle />
              </div>
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

            {/* content */}
          </div>
    </>
  )
}

export default RightHead
