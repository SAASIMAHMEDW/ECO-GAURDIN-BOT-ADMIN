import React from "react";
import "./BotCard.css";
import { Separator } from "@/components/ui/separator";

function BotCard({ id,name,batteryPercentage,batteryTemperature,latitude,longitude,status }) {
  return (
    <>
      <div className={`bot__card__container ${status==="Active" ? "bot__active" : "bot__inactive"}`}>
        <div className="bot__card__header">
          <div>
            <img src="bot-logo.png" alt="" />
          </div>
          <div>
            <div className="bot__card__id">{id}</div>{name}
          </div>
        </div>
        <div className="bot__card__content">
          <div>
            {/* <img src="bot-logo.png" alt="" /> */}
          </div>
        </div>
        <div className="bot__card__footer">
          <div>Last updated on 2022-01-01</div>
        </div>
      </div>
    </>
  );
}

export default BotCard;
