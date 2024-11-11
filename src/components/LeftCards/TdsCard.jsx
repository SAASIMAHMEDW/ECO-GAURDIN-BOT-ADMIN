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

import { db } from "../../firebase"
import { doc, getDoc } from "firebase/firestore"


function TdsCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [tds, setTds] = useState(0);

  // Calculate marker position as a percentage
  const markerPosition = (tds / 500) * 100;

  useEffect(() => {
    const fetchTds = async () => {
      const docRef = doc(db, "INFORMATIONS", "STAR_ML");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTds(data.TDS);
        setIsLoading(false);
      }
    }
    fetchTds();
  }, [])

  if (isLoading) {
    return (<>
      <div className="flex justify-center items-center h-screen">
        <div class="flex flex-row gap-2">
          <div class="w-4 h-4 rounded-full bg-[#8411e9] animate-bounce"></div>
          <div
            class="w-4 h-4 rounded-full bg-[#8411e9] animate-bounce [animation-delay:-.3s]"
          ></div>
          <div
            class="w-4 h-4 rounded-full bg-[#8411e9] animate-bounce [animation-delay:-.5s]"
          ></div>
        </div>
      </div>
    </>
    )
  }

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
          <div className="tds__img">
            <img src="tds_chart_final.svg" alt="" />
          </div>
          <div className="tds__marker__container">
            <div className="tds__marker absolute w-[30px] h-[30px] transform -translate-y-full" style={{
              left: `${markerPosition+10}%`,
              transform: `translateX(-${markerPosition}%)`,
            }}>
              <img src="upward.svg" alt="" />
            </div>
          </div>
          <div className="tds__value__container mt-8 flex gap-3 z-[10000] px-6">
            <h1 className="text-3xl font-bold">Value: </h1>
            <p className="text-3xl font-bold">{Math.floor(tds)}</p>
          </div>
          <CardFooter>
            <p className="text-justify text-gray-400">
              Last Updated on 10-10-2022
            </p>
          </CardFooter>

          <div className="tds__card__water__wave__container mt-[-15px]">
            <div className="wave wave1 bg-[url('/wave.png')]"></div>
            <div className="wave wave2 bg-[url('/wave.png')]"></div>
            <div className="wave wave3 bg-[url('/wave.png')]"></div>
            <div className="wave wave4 bg-[url('/wave.png')]"></div>
            <div className="wave wave5 bg-[url('/wave.png')]"></div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default TdsCard;
