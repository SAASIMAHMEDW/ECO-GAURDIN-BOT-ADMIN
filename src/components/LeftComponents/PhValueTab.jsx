import React, { useEffect, useState } from "react";
import PhValue from "@/components/LeftCards/PhValue";

import { rdb } from "../../firebase";
import { onValue, ref, off } from "firebase/database";
import { Loader1 } from "../magics/Loader";

function PhValueTab() {
  const [phValue, setPhValue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState(null);

  useEffect(() => {
      const phRef = ref(rdb, "INFORMATIONS/PH");
  
      onValue(phRef, (snapshot) => {
        const data = snapshot.val();
        setPhValue(data);
        setDate(new Date().toLocaleTimeString() + " - " + new Date().toLocaleDateString());
      });
      setIsLoading(false);
  
      // Cleanup function
      return () => off(phRef);
    }, []);

  return (
    <div>
      <PhValue value={phValue} date={date} />
    </div>
  );
}

export default PhValueTab;
