import React, { useEffect, useState } from "react";
import "./PhValue.css";
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


function PhValue() {
  const [phValue, setPhValue] = useState(8);
  const [isLoading, setIsLoading] = useState(true);

  // Calculate marker position as a percentage
  const markerPosition = (phValue / 14) * 100;


  useEffect(() => {
    // Fetch pH value from Firebase
    const fetchPhValue = async () => {
      const docRef = doc(db, "INFORMATIONS", "STAR_ML");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setPhValue(data.PH);
        setIsLoading(false);
      }
    }
    fetchPhValue();
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
      <Card className="mt-5 w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Ph Value</CardTitle>
          <CardDescription className="text-justify">
            A pH scale is a tool for measuring acids and bases. The scale ranges from 0-14. Litmus paper is an indicator used to tell if a substance is an acid or a base.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          {/* PH Value Display Container */}
          <div className="phvalue__container w-full px-6 h-[150px]">
            {/* PH Number Scale */}
            <div className="phvalueNumbers w-full h-[30px] flex justify-between text-sm">
              {[...Array(14).keys()].map((num) => (
                <p key={num + 1}>{num + 1}</p>
              ))}
            </div>

            {/* Gradient Background Container for pH values */}
            <div
              className="phvalue__color relative grid grid-cols-14 h-[80px] mt-2 rounded-md"
              style={{
                background: 'linear-gradient(to right, #ff0000, #ffa500, #ffff00, #008000, #0000ff, #4b0082, #8b00ff)',
              }}
            >
              {/* Marker */}
              <div
                className="phvalue__marker absolute bottom-0 transform -translate-y-full"
                style={{
                  left: `${markerPosition}%`,
                  transform: `translateX(-${markerPosition}%)`,
                }}
              >
                <img src="upward.svg" alt="marker" className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Display pH Value */}
          <div className="phvalue__value__container mt-8 flex gap-3 items-center z-[10000] px-6">
            <h1 className="text-3xl font-bold">Value:</h1>
            <p className="text-3xl font-bold">{Math.floor(phValue)}</p>
          </div>
        </CardContent>

        <CardFooter>
          <p className="text-justify text-sm mt-2 text-gray-400">Last Updated on 10-10-2022</p>
        </CardFooter>
      </Card>
    </>
  );
}

export default PhValue;
