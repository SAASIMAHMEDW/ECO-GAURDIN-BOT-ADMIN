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
      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Total dissolved solids
          </CardTitle>
          <CardDescription className="text-justify">
            total dissolved solids, and represents the total concentration of
            dissolved substances in water.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="tds__img px-6">
            <img src="tds_chart_final.svg" alt="" />
          </div>
          <div className="tds__marker__container">
            <div className="tds__marker">
              <img src="upward.svg" alt="" />
            </div>
          </div>
          <div className="tds__value__container mt-8 flex gap-3 z-[10000] px-6">
            <h1 className="text-3xl font-bold">Value: </h1>
            <p className="text-3xl font-bold">100</p>
          </div>

          <div className="tds__card__water__wave__container mt-[-15px]">
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
            <div className="wave wave4"></div>
            <div className="wave wave5"></div>
          </div>
        </CardContent>
        {/* <CardFooter>
          <p className="text-justify text-gray-400">
            Last Updated on 10-10-2022
          </p>
        </CardFooter> */}
      </Card>
    </>
  );
}

export default TdsCard;
