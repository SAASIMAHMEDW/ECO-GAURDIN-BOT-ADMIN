import React, { useCallback, useEffect, useState } from "react";
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

let chartData = [
  { browser: "chrome", value: 0, fill: "var(--color-chrome)" },
  { browser: "safari", value: 0, fill: "var(--color-safari)" },
  { browser: "firefox", value: 0, fill: "var(--color-firefox)" },
  { browser: "edge", value: 0, fill: "var(--color-edge)" },
  { browser: "other", value: 0, fill: "var(--color-other)" },
];

let chartConfig = {
  visitors: {
    label: "TDS 1",
    color: "hsl(var(--chart-2))",
  },
  chrome: {
    label: "TDS 2",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "TDS 3",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "TDS 4",
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

function SoilErosionCard({ soilErosion, lastUpdated }) {
  const [trend, setTrend] = useState("neutral");
  const [percentageChange, setPercentageChange] = useState(0);
  useEffect(() => {

    const updateChartData = () => {
      soilErosion?.forEach((item) => {
        chartData[item.index].value = item.value;
      });
    };
    const calculateTrendAndPercentage = () => {
      if (soilErosion?.length > 1) {
        const latestValue = soilErosion[soilErosion.length - 1];
        const previousValue = soilErosion[soilErosion.length - 2];

        if (latestValue > previousValue) {
          setTrend("up");
          const percentage = ((latestValue - previousValue) / previousValue) * 100;
          setPercentageChange(percentage.toFixed(2)); // Limit to 2 decimal places
        } else if (latestValue < previousValue) {
          setTrend("down");
          const percentage = ((previousValue - latestValue) / previousValue) * 100;
          setPercentageChange(percentage.toFixed(2));
        } else {
          setTrend("neutral");
          setPercentageChange(0);
        }
      }
    };

    calculateTrendAndPercentage();
    updateChartData();
  }, [soilErosion]);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Soil Erosion</CardTitle>
          <CardDescription>
            Soil erosion is the natural process in which the topsoil of a field
            is carried away by physical sources such as wind and water.
          </CardDescription>
          <CardDescription className="flex items-center justify-end text-sm font-bold text-[#8411e9]">
            {/* <TrendingDown className="w-6 h-6 text-purple-500" /> */}
            {lastUpdated}
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
                    nameKey="value"
                    hideLabel
                  />
                }
              />
              <Line
                dataKey="value"
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
            {trend === "up" && (
              <>
                Trending up by <span className="text-green-400">{percentageChange}%</span> this month{" "}
                <TrendingUp className="h-4 w-4" />
              </>
            )}
            {trend === "down" && (
              <>
                Trending down by <span className="text-green-400">{percentageChange}%</span> this month{" "}
                <TrendingDown className="h-4 w-4" />
              </>
            )}
            {trend === "neutral" && <span>No significant change <span className="text-green-400">{trend}</span></span>}

            {/* Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            <TrendingDown className="h-4 w-4" /> */}
          </div>
          <div className="leading-none text-muted-foreground">
            Showing last five soil erosion data
          </div>
        </CardFooter>
      </Card>
    </>
  );
}

export default SoilErosionCard;
