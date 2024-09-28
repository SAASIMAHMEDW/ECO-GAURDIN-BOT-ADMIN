import React from "react";
import "./PhValue.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


function PhValue() {
  return (
    <>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Ph Value
          </CardTitle>
          <CardDescription className="text-justify">
          A pH scale is a tool for measuring acids and bases. The scale ranges from 0-14. Litmus paper is an indicator used to tell if a substance is an acid or a base.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="phvalue__conatiner w-full px-6 h-[150px]">
          <div className="phvalueNumbers w-full h-[30px] flex gap-3">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
          </div>
          <div className="phvalue__color grid grid-cols-14 h-[120px]">
            <div className="phvalueC1 stroke-yellow-300"></div>
            <div className="phvalueC2 bg-green-400"></div>
            <div className="phvalueC3 bg-red-500"></div>
            <div className="phvalueC4 bg-gray-500"></div>
            <div className="phvalueC5 bg-pink-500"></div>
            <div className="phvalueC6 to-blue-600"></div>
            <div className="phvalueC7 "></div>
            <div className="phvalueC8"></div>
            <div className="phvalueC9"></div>
            <div className="phvalueC10"></div>
            <div className="phvalueC11"></div>
            <div className="phvalueC12"></div>
            <div className="phvalueC13"></div>
            <div className="phvalueC14"></div>
          </div>
           
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

        </CardContent>
        <CardFooter>
          <p className="text-justify text-sm mt-2 text-gray-400">
            Last Updated on 10-10-2022
          </p>
        </CardFooter>
      </Card>
    </>
  );
}

export default PhValue;
