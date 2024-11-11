import React, { useCallback } from "react";
import { TrendingDown, TrendingUp } from "lucide-react";
import { CartesianGrid, Dot, Line, LineChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

function SoilErosionCard() {
  const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
  ];
  const chartConfig = {
    visitors: {
      label: "Visitors",
      color: "hsl(var(--chart-2))",
    },
    chrome: {
      label: "Chrome",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
    firefox: {
      label: "Firefox",
      color: "hsl(var(--chart-3))",
    },
    edge: {
      label: "Edge",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
  };

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "INFORMATIONS", "STAR_ML");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists() && docSnap.data().SOIL_EROSION) {
        const soilErosionData = docSnap.data().SOIL_EROSION;
        setData(soilErosionData);
        // console.log(soilErosionData);
        setIsLoading(false);
      } else {
        console.log("No such document!");
        setError("No such document!");
      }
    };

    fetchData();
  }, []);

  



  if (error) {
    return (<>
      <div className="flex justify-center min-h-screen mt-3">
        <div
          className="relative flex w-full max-w-lg h-full overflow-hidden bg-white dark:bg-black text-black dark:text-white shadow-lg rounded-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="96" width="16">
            <path
              strokeLinecap="round"
              strokeWidth="3"
              stroke="indianred"
              fill="indianred"
              d="M 8 0 
           Q 4 4.8, 8 9.6 
           T 8 19.2 
           Q 4 24, 8 28.8 
           T 8 38.4 
           Q 4 43.2, 8 48 
           T 8 57.6 
           Q 4 62.4, 8 67.2 
           T 8 76.8 
           Q 4 81.6, 8 86.4 
           T 8 96 
           L 0 96 
           L 0 0 
           Z"
            ></path>
          </svg>
          <div className="mx-2.5 overflow-hidden w-full">
            <p
              className="mt-1.5 text-xl font-bold text-[indianred] leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap"
            >
              Error!
            </p>
            <p className="overflow-hidden leading-5 break-all text-zinc-400 max-h-10">
              Oh no!<br />
              {error}.
            </p>
          </div>
        </div>
      </div>
    </>
    )
  }

  if (isLoading) {
    return (<>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-[#8411e9] animate-bounce"></div>
          <div
            className="w-4 h-4 rounded-full bg-[#8411e9] animate-bounce [animation-delay:-.3s]"
          ></div>
          <div
            className="w-4 h-4 rounded-full bg-[#8411e9] animate-bounce [animation-delay:-.5s]"
          ></div>
        </div>
      </div>
    </>
    )
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Soil Erosion</CardTitle>
          <CardDescription>Soil erosion is the natural process in which the topsoil of a field is carried away by physical sources such as wind and water.
          </CardDescription>
          <CardDescription className=" text-sm font-bold flex items-center justify-end text-[#8411e9]">
            {/* <TrendingDown className="w-6 h-6 text-purple-500" /> */}
            {data.Last_Updated}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 24,
                left: 24,
                right: 24,
              }}
            >
              <CartesianGrid vertical={false} />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    indicator="line"
                    nameKey="visitors"
                    hideLabel
                  />
                }
              />
              <Line
                dataKey="visitors"
                type="natural"
                stroke="var(--color-visitors)"
                strokeWidth={2}
                dot={({ payload, ...props }) => {
                  return (
                    <Dot
                      key={payload.browser}
                      r={5}
                      cx={props.cx}
                      cy={props.cy}
                      fill={payload.fill}
                      stroke={payload.fill}
                    />
                  );
                }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </>
  );
}

export default SoilErosionCard;
