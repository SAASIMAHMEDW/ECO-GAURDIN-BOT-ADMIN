import React, { useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "../ui/separator";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${latitude},${longitude}`
      );
      if (!response.ok) throw new Error("Failed to fetch weather data.");
      const data = await response.json();
      console.log(data);
      
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
        }
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
      <HoverCardContent>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : weather ? (
          <div className="weather-details">
            <h3 className="text-lg font-bold">{weather.location.name}</h3>
            <p>
              <strong>Temperature:</strong> {weather.current.temp_c}°C
            </p>
            <p>
              <strong>Condition:</strong> {weather.current.condition.text}
            </p>
            <p>
              <strong>Humidity:</strong> {weather.current.humidity}%
            </p>
            <p>
              <strong>Wind Speed:</strong> {weather.current.wind_kph} kph
            </p>
            <Separator/>
            <p className="text-gray-500">
              <strong>Last Updated:</strong> {weather.current.last_updated}
            </p>
          </div>
        ) : (
          <p>No weather data available.</p>
        )}
      </HoverCardContent>
    </HoverCard>
  );
}

export default Weather;
