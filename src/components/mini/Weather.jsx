import React, { useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sun, Droplet, Wind, Calendar,Cloud } from "lucide-react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${latitude},${longitude}`,
      );
      if (!response.ok) throw new Error("Failed to fetch weather data.");
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        (err) => {
          setError("Unable to fetch location.");
          setLoading(false);
        },
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, []);

  return (
    <HoverCard>
      <Badge variant="weather">
        <HoverCardTrigger>Weather</HoverCardTrigger>
      </Badge>
      <HoverCardContent className="rounded-lg p-4 shadow-md">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : weather ? (
          <div className="weather-details space-y-4">
            {/* Location */}
            <h3 className="text-center text-xl font-bold">
              {weather.location.name}, {weather.location.region}
            </h3>
            <p className="text-center text-gray-500">
              {weather.location.country}
            </p>
            <Separator />

            {/* Weather Info with Icons */}
            <div className="flex items-center justify-between space-x-6">
              {/* Temperature */}
              <div className="flex flex-col items-center">
                <HoverCard>
                  <HoverCardTrigger>
                    <Sun className="h-8 w-8 text-yellow-500 transition hover:scale-110" />
                  </HoverCardTrigger>
                  <HoverCardContent className="w-24 p-2 text-sm">
                    Temperature
                  </HoverCardContent>
                </HoverCard>
                <p className="text-lg font-semibold">
                  {weather.current.temp_c}°C
                </p>
              </div>

              {/* Condition */}
              <div className="flex flex-col items-center">
                <HoverCard>
                  <HoverCardTrigger>
                    <Droplet className="h-8 w-8 text-blue-500 transition hover:scale-110" />
                  </HoverCardTrigger>
                  <HoverCardContent className="w-24 p-2 text-sm">
                    Condition
                  </HoverCardContent>
                </HoverCard>
                <p className="text-lg font-semibold">
                  {weather.current.condition.text}
                </p>
              </div>

              {/* Wind Speed */}
              <div className="flex flex-col items-center">
                <HoverCard>
                  <HoverCardTrigger>
                    <Wind className="h-8 w-8 text-green-500 transition hover:scale-110" />
                  </HoverCardTrigger>
                  <HoverCardContent className="w-24 p-2 text-sm">
                    Wind Speed
                  </HoverCardContent>
                </HoverCard>
                <p className="text-lg font-semibold">
                  {weather.current.wind_kph} kph
                </p>
              </div>
            </div>

            <Separator />

            {/* Additional Info */}
            <div className="flex items-center justify-between space-x-6">
              {/* Humidity */}
              <div className="flex flex-col items-center">
                <HoverCard>
                  <HoverCardTrigger>
                    <Droplet className="h-8 w-8 text-teal-500 transition hover:scale-110" />
                  </HoverCardTrigger>
                  <HoverCardContent className="w-24 p-2 text-sm">
                    Humidity
                  </HoverCardContent>
                </HoverCard>
                <p className="text-lg font-semibold">
                  {weather.current.humidity}%
                </p>
              </div>

              {/* Last Updated */}
              <div className="flex flex-col items-center">
                <HoverCard>
                  <HoverCardTrigger>
                    <Calendar className="h-8 w-8 text-purple-600 transition hover:scale-110" />
                  </HoverCardTrigger>
                  <HoverCardContent className="p-2 text-sm w-24">
                    Last Updated
                  </HoverCardContent>
                </HoverCard>
                <p className="text-sm text-gray-500">
                  {weather.current.last_updated}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>No weather data available.</p>
        )}
      </HoverCardContent>
    </HoverCard>
  );
}

export default Weather;





