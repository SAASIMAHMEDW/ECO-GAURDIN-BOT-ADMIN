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
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

function TdsCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [tds, setTds] = useState(0);

  // Calculate marker position as a percentage
  const markerPosition = Math.min((tds / 500) * 100, 100);

  useEffect(() => {
    const fetchTds = async () => {
      const docRef = doc(db, "INFORMATIONS", "STAR_ML");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTds(data.TDS);
        setIsLoading(false);
      }
    };
    fetchTds();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-[#8411e9] rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-[#8411e9] rounded-full animate-bounce delay-150"></div>
          <div className="w-4 h-4 bg-[#8411e9] rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    );
  }

  return (
    <Card className="mt-5 max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Total Dissolved Solids</CardTitle>
        <CardDescription className="text-justify">
          Total dissolved solids represent the total concentration of dissolved substances in water.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 relative">
        {/* Image Container */}
        <div className="tds__img w-full">
          <img src="tds_chart_final.svg" alt="TDS Chart" className="w-full" />
        </div>

        {/* Marker */}
        <div className="absolute top-0 w-full flex justify-center mt-[-20px] z-10">
          <div
            className="relative w-[30px] h-[30px] transform -translate-y-full"
            style={{
              left: `calc(${markerPosition}% - 15px)`, // Centering marker at position
            }}
          >
            <img src="upward.svg" alt="marker" className="w-full h-full" />
          </div>
        </div>

        {/* TDS Value */}
        <div className="flex gap-3 mt-8 px-6 items-center z-[10000]">
          <h1 className="text-3xl font-bold">Value:</h1>
          <p className="text-3xl font-bold">{Math.floor(tds)}</p>
        </div>

        {/* Footer */}
        <CardFooter>
          <p className="text-justify text-gray-400">Last Updated on 10-10-2022</p>
        </CardFooter>

        {/* Water Wave Animation */}
        <div className="relative w-full h-[100px] overflow-hidden rounded-lg mt-[-15px]">
          <div className="absolute bottom-0 left-0 w-full h-[80px] bg-[url('/wave.png')] bg-[length:1300px_100px] opacity-100 animate-wave1"></div>
          <div className="absolute bottom-0 left-0 w-full h-[80px] bg-[url('/wave.png')] bg-cover opacity-50 animate-wave2"></div>
          <div className="absolute bottom-0 left-0 w-full h-[80px] bg-[url('/wave.png')] bg-[length:1300px_100px] opacity-20 animate-wave3"></div>
          <div className="absolute bottom-0 left-0 w-full h-[80px] bg-[url('/wave.png')] bg-[length:1300px_100px] opacity-70 animate-wave4"></div>
          <div className="absolute bottom-0 left-0 w-full h-[80px] bg-[url('/wave.png')] bg-[length:1300px_100px] opacity-40 animate-wave5"></div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TdsCard;
