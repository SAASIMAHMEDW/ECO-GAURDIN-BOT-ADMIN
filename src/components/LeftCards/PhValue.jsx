import React, { useState } from "react";
import "./PhValue.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";


function PhValue({value,date}) {
  const [showDescription, setShowDescription] = useState(true);

  // Calculate marker position as a percentage within the range 0-14
  const markerPosition = Math.min(Math.max(value, 0), 14) / 14 * 100;

  return (
    <>
      <Card className="mx-auto mt-5 w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Ph Value</CardTitle>
          
          {showDescription && (
            <CardDescription className="text-justify">
              A pH scale is a tool for measuring acids and bases. The scale ranges
              from 0-14. Litmus paper is an indicator used to tell if a substance
              is an acid or a base.
            </CardDescription>
          )}
          
        </CardHeader>

        <CardContent className="p-0">
          <div className="phvalue__container h-[150px] w-full px-6">
            <div className="phvalueNumbers flex h-[30px] w-full justify-between text-sm">
              {[...Array(14).keys()].map((num) => (
                <p key={num + 1}>{num + 1}</p>
              ))}
            </div>

            <div
              className="phvalue__color grid-cols-14 relative mt-2 grid h-[80px] rounded-md"
              style={{
                background:
                  "linear-gradient(to right, #ff0000, #ffa500, #ffff00, #008000, #0000ff, #4b0082, #8b00ff)",
              }}
            >
              {value <= 14 ? (
                <div
                  className="phvalue__marker absolute bottom-0 -translate-y-full transform transition-all duration-500 ease-in-out"
                  style={{
                    left: `${markerPosition - 5}%`,
                    transform: `translateX(-50%)`,
                  }}
                >
                  <img src="upward.svg" alt="marker" className="h-6 w-6" />
                </div>
              ) : (
                <div className="absolute top-0 w-full text-center text-red-600 font-bold">
                  pH value is too high: {value}
                </div>
              )}
            </div>
          </div>

          <div className="phvalue__value__container z-[10000] mt-8 flex items-center gap-3 px-6">
            <h1 className="text-3xl font-bold">Value:</h1>
            <p className="text-3xl font-bold">{value}</p>
          </div>
        </CardContent>

        <CardFooter>
          <p className="mt-2 text-justify text-sm text-gray-400">
            Last Updated on {date}
          </p>
        </CardFooter>
        <Button 
            variant="ghost"
            className="mt-2 text-sm bg-none text-gray-500 underline hover:bg-transparent"
            onClick={() => setShowDescription((prev) => !prev)} 
            >
          {showDescription ? "Hide Description" : "Show Description"}
          </Button>
      </Card>
    </>
  );
}

export default PhValue;
