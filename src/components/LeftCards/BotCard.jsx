import React from "react";
import { BatteryCharging, MapPin, Thermometer } from "lucide-react"; // Import lucide-react icons
import "./BotCard.css";
function BotCard({
  id,
  name = "star",
  batteryPercentage = "69",
  batteryTemperature = "79",
  latitude,
  longitude,
  status = "Active",
}) {

  return (
    <div
      className={`bot__card__container ${status === "Active" ? "bot__active" : "bot__inactive"} before:text-white after:text-white`}
    >
      <div className="bot__card__header border border-gray-200 bg-card">
        <div>
          <img src="bot_icons/walle-icon48.svg" alt="" />
        </div>
        <div>
          <div className="bot__card__id">{id}</div>
          {name}
        </div>
      </div>
      <div className="bot__card__content flex w-full border border-gray-200 bg-card">
        <div className="w-[300px]">
          <div className="bot__card__battery mx-3 my-3 flex gap-5">
            <div className="bot__card__bat__per">
              <BatteryCharging size={18} color="#FFD700" />{" "}
              {/* Icon for battery */}
              <p>Percentage</p>
              <p>{batteryPercentage}%</p>
            </div>
            <div className="bot__card__bat__temp">
              <Thermometer size={18} color="#FF4500" />{" "}
              {/* Icon for temperature */}
              <p>Temperature</p>
              <p>{batteryTemperature}</p>
            </div>
          </div>
          <div className="bot__card__location mx-3 my-3 flex justify-between">
            <div className="bot__card__loc__lat">
              <MapPin size={18} color="#1E90FF" /> {/* Icon for latitude */}
              <p>Latitude</p>
              <p>{latitude}</p>
            </div>
            <div className="bot__card__loc__long">
              <MapPin size={18} color="#1E90FF" /> {/* Icon for longitude */}
              <p>Longitude</p>
              <p>{longitude}</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="bot__card__footer flex justify-between border border-gray-200 bg-card"></div>
    </div>
  );
}

export default BotCard;
