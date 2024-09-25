import React from "react";
import "./TdsCard.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function TdsCard() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Total dissolved solids
          </CardTitle>
          <CardDescription className="text-justify">
            total dissolved solids, and represents the total concentration of
            dissolved substances in water.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="tds__img">
            <img src="tds_chart_final.svg" alt="" />
          </div>
          <div className="tds__marker__container">
            <div className="tds__marker">
              <img src="upward.svg" alt="" />
            </div>
          </div>
          <div className="tds__value__container mt-8 flex gap-3 z-50">
            <h1 className="text-3xl font-bold">Value: </h1>
            <p className="text-3xl font-bold">100</p>
          </div>

          <div className="tds__card__water__wave__container h-[200px] border-red-700">
            <img src="water-wave.svg" alt="" />
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-justify text-gray-400">
            Last Updated on 10-10-2022
          </p>
        </CardFooter>
      </Card>
    </>
  );
}

export default TdsCard;
