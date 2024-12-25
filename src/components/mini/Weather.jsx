import React, { useEffect, useState, useCallback } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sun, Droplet, Wind, Calendar, Cloud } from "lucide-react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${latitude},${longitude}`
      );
      if (!response.ok) throw new Error("Failed to fetch weather data.");
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        () => {
          setError("Unable to fetch location.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, [fetchWeather]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString(); // Format to a more readable format
  };

  const badgeStyles = weather ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";

  return (
    <HoverCard>
      <Badge variant="outline" className="cursor-pointer">
        <HoverCardTrigger>Weather</HoverCardTrigger>
      </Badge>
      <HoverCardContent className="rounded-lg bg-white p-6 shadow-lg text-gray-800 w-72">
        {loading ? (
          <p className="text-center text-sm font-medium">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500 text-sm font-medium">{error}</p>
        ) : weather ? (
          <div className="space-y-4">
            {/* Location */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900">
                {weather.location.name}, {weather.location.region}
              </h3>
              <p className="text-sm text-gray-500">{weather.location.country}</p>
            </div>
            <Separator />

            {/* Weather Details */}
            <div className="grid grid-cols-2 gap-4">
              {/* Temperature */}
              <div className="flex flex-col items-center">
                <Sun className="h-8 w-8 text-yellow-500" />
                <p className="text-lg font-semibold">
                  {weather.current.temp_c}°C
                </p>
                <p className="text-xs text-gray-500">Temperature</p>
              </div>

              {/* Condition */}
              <div className="flex flex-col items-center">
                <Cloud className="h-8 w-8 text-blue-500" />
                <p className="text-lg font-semibold">
                  {weather.current.condition.text}
                </p>
                <p className="text-xs text-gray-500">Condition</p>
              </div>

              {/* Wind Speed */}
              <div className="flex flex-col items-center">
                <Wind className="h-8 w-8 text-green-500" />
                <p className="text-lg font-semibold">
                  {weather.current.wind_kph} kph
                </p>
                <p className="text-xs text-gray-500">Wind Speed</p>
              </div>

              {/* Humidity */}
              <div className="flex flex-col items-center">
                <Droplet className="h-8 w-8 text-teal-500" />
                <p className="text-lg font-semibold">
                  {weather.current.humidity}%
                </p>
                <p className="text-xs text-gray-500">Humidity</p>
              </div>
            </div>
            <Separator />

            {/* Last Updated */}
            <div className="flex flex-col items-center">
              <Calendar className="h-6 w-6 text-purple-600" />
              <p className="text-sm text-gray-700">
                Last Updated: {formatDate(weather.current.last_updated)}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-center text-sm font-medium">No weather data available.</p>
        )}
      </HoverCardContent>
    </HoverCard>
  );
}

export default Weather;
