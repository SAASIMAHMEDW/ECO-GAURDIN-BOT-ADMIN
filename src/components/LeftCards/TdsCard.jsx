import React, { useEffect, useState } from "react";
import "./TdsCard.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { rdb } from "../../firebase";
import { onValue, ref, off } from "firebase/database";

function TdsCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [showDescription, setShowDescription] = useState(true);
  const [tds, setTds] = useState(0);
  const [date, setDate] = useState(null);

  // Calculate marker position as a percentage
  const markerPosition = Math.min((tds / 500) * 100, 100);

  useEffect(() => {
    const phRef = ref(rdb, "INFORMATIONS/TDS");

    onValue(phRef, (snapshot) => {
      const data = snapshot.val();
      setTds(data);
      setDate(
        new Date().toLocaleTimeString() +
          " - " +
          new Date().toLocaleDateString(),
      );
    });
    setIsLoading(false);

    // Cleanup function
    return () => off(phRef);
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex space-x-2">
          <div className="h-4 w-4 animate-bounce rounded-full bg-[#8411e9]"></div>
          <div className="h-4 w-4 animate-bounce rounded-full bg-[#8411e9] delay-150"></div>
          <div className="h-4 w-4 animate-bounce rounded-full bg-[#8411e9] delay-300"></div>
        </div>
      </div>
    );
  }

  return (
    <>
    <Card className="mx-auto mt-5 max-w-md">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">
          Total Dissolved Solids
        </CardTitle>
        {showDescription && (
          <CardDescription className="text-justify">
            Total dissolved solids represent the total concentration of
            dissolved substances in water.
          </CardDescription>
        )}
        
      </CardHeader>
      <CardContent className="relative p-0">
        {/* Image Container */}
        <div className="tds__img relative w-full">
          <img src="tds_chart_final.svg" alt="TDS Chart" className="w-full" />
          {/* Marker or Too High Label */}
          {tds <= 500 ? (
            <div
              className="marker absolute"
              style={{
                bottom: "-20px",
                left: `${markerPosition}%`,
                transform: "translateX(-50%)",
              }}
            >
              <img src="upward.svg" alt="marker" className="h-6 w-6" />
            </div>
          ) : (
            <div
              className="too-high-label absolute font-bold text-red-600"
              style={{
                bottom: "-30px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              Too High
            </div>
          )}
        </div>

        {/* TDS Value */}
        <div className="z-[10000] mt-8 flex items-center gap-3 px-6">
          <h1 className="text-3xl font-bold">Value:</h1>
          <p
            className={`text-3xl font-bold ${tds > 500 ? "text-red-600" : ""}`}
          >
            {Math.floor(tds)}
          </p>
        </div>

        {/* Footer */}
        <CardFooter>
          <p className="text-justify text-gray-400">Last Updated on {date}</p>
        </CardFooter>

        {/* Water Wave Animation */}
        <div className="relative mt-[-15px] h-[100px] w-full overflow-hidden rounded-lg">
          <div className="animate-wave1 absolute bottom-0 left-0 h-[80px] w-full bg-[url('/wave.png')] bg-[length:1300px_100px] opacity-100"></div>
          <div className="animate-wave2 absolute bottom-0 left-0 h-[80px] w-full bg-[url('/wave.png')] bg-cover opacity-50"></div>
          <div className="animate-wave3 absolute bottom-0 left-0 h-[80px] w-full bg-[length:1300px_100px] opacity-20"></div>
          <div className="animate-wave4 absolute bottom-0 left-0 h-[80px] w-full bg-[length:1300px_100px] opacity-70"></div>
          <div className="animate-wave5 absolute bottom-0 left-0 h-[80px] w-full bg-[length:1300px_100px] opacity-40"></div>
        </div>
      </CardContent>
    </Card>
    <Button
    variant="ghost"
    className="mt-2 bg-none m-[-10px] text-sm text-gray-500 underline hover:bg-transparent"
    onClick={() => setShowDescription((prev) => !prev)}
  >
    {showDescription ? "Hide Description" : "Show Description"}
  </Button>
  </>
  );
}

export default TdsCard;
