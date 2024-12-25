import React, { useEffect, useState } from "react";
import SoilErosionCard from "@/components/LeftCards/SoilErosionCard";
import { rdb } from "../../firebase";
import { onValue, ref, off } from "firebase/database";

function SoilErosionTab() {
  const [soilErosion, setSoilErosion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const soilRef = ref(rdb, "INFORMATIONS/SOIL_EROSION");

    onValue(soilRef, (snapshot) => {
      const data = snapshot.val(); 
      if (Array.isArray(data)) {
        // Transform array into graph-ready format
        const formattedData = data?.map((value, index) => ({
          index: index, 
          value,
        }));
        setSoilErosion(formattedData);
      }
      setLastUpdated(
        new Date().toLocaleTimeString() +
          " - " +
          new Date().toLocaleDateString()
      );
      setLoading(false);
    });

    // Cleanup function
    return () => off(soilRef);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-row gap-2">
          <div className="h-4 w-4 animate-bounce rounded-full bg-[#8411e9]"></div>
          <div className="h-4 w-4 animate-bounce rounded-full bg-[#8411e9] [animation-delay:-.3s]"></div>
          <div className="h-4 w-4 animate-bounce rounded-full bg-[#8411e9] [animation-delay:-.5s]"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SoilErosionCard soilErosion={soilErosion} date={lastUpdated} />
    </div>
  );
}

export default SoilErosionTab;
