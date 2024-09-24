import React from "react";
import "./BotCard.css";
import { Separator } from "@/components/ui/separator";

function BotCard({
  id,
  name,
  batteryPercentage,
  batteryTemperature,
  latitude,
  longitude,
  status,
}) {
  return (
    <>
      <div
        className={`bot__card__container ${status === "Active" ? "bot__active" : "bot__inactive"}`}
      >
        <div className="bot__card__header">
          <div>
            <img src="bot-logo.png" alt="" />
          </div>
          <div>
            <div className="bot__card__id">{id}</div>
            {name}
          </div>
        </div>
        <div className="bot__card__content w-full flex">
          <div className="w-[300px] ">
            <div className="bot__card__battery mx-3 flex gap-5 ">
              <div className="bot__card__bat__per">
                <p>Percentage</p>
                <p>{batteryPercentage}%</p>
              </div>
              <div className="bot__card__bat__temp">
                <p>Temprature</p>
                <p>{batteryTemperature}</p>
              </div>
            </div>
            <div className="bot__card__location mx-3 flex justify-between">
              <div className="bot__card__loc__lat">
              <p>Latitude</p>
              <p>{latitude}</p>
              </div>
              <div className="bot__card__loc__long">
              <p>Longitude</p>
              <p>{longitude}</p>  
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="bot__card__footer flex justify-center items-center">
          <div className="text-gray-400">Last updated on 2022-01-01</div>
        </div>
      </div>
    </>
  );
}

export default BotCard;
