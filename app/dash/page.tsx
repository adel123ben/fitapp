"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { Area, AreaChart, Bar, ComposedChart, Line, LineChart, XAxis, YAxis } from "recharts";
import mockData from "@/data/motData.json";

interface HeartRateDataItem {
  date: string;
  time: string;
  rate: number;
}

interface RunningDataItem {
  date: string;
  startTime: string;
  endTime: string;
  distance: number;
  averageHeartRate: number;
  duration: number;
}

const timeRanges: string[] = ["Day", "Week", "6 Months", "Year"];

export default function Dashboard() {
  const [heartRateRange, setHeartRateRange] = useState<string>("Day");
  const [distanceRange, setDistanceRange] = useState<string>("Day");

  const filterData = (data: HeartRateDataItem[] | RunningDataItem[], range: string) => {
    const latestDate = new Date(Math.max(...data.map(item => new Date(item.date).getTime())));

    switch (range) {
      case "Day":
        return data.filter(item => new Date(item.date).getTime() === latestDate.getTime());
      case "Week":
        const weekAgo = new Date(latestDate);
        weekAgo.setDate(latestDate.getDate() - 6);
        return data.filter(item => new Date(item.date) >= weekAgo);
      case "6 Months":
        const sixMonthsAgo = new Date(latestDate);
        sixMonthsAgo.setMonth(latestDate.getMonth() - 6);
        return data.filter(item => new Date(item.date) >= sixMonthsAgo);
      case "Year":
        const yearAgo = new Date(latestDate);
        yearAgo.setFullYear(latestDate.getFullYear() - 1);
        return data.filter(item => new Date(item.date) >= yearAgo);
      default:
        return data;
    }
  };

  const filteredHeartRateData = useMemo(() => filterData(mockData.heartRateData, heartRateRange), [heartRateRange]);
  const filteredDistanceData = useMemo(() => filterData(mockData.runningData, distanceRange), [distanceRange]);

  return (
    <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Full Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Heart Rate</CardTitle>
            <CardDescription>Average heart rate over {heartRateRange.toLowerCase()}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex justify-center space-x-2">
              {timeRanges.map((range) => (
                <Button
                  key={range}
                  variant={heartRateRange === range ? "default" : "outline"}
                  size="sm"
                  onClick={() => setHeartRateRange(range)}
                >
                  {range}
                </Button>
              ))}
            </div>
            <ChartContainer config={{ rate: { label: "Heart Rate", color: "hsl(var(--chart-2))" } }}>
              <LineChart data={filteredHeartRateData} width={500} height={300}>
                <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} />
                <YAxis />
                <Line type="monotone" dataKey="rate" stroke="var(--color-rate)" />
                <ChartTooltip />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Distance</CardTitle>
            <CardDescription>Daily running distance over {distanceRange.toLowerCase()}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex justify-center space-x-2">
              {timeRanges.map((range) => (
                <Button
                  key={range}
                  variant={distanceRange === range ? "default" : "outline"}
                  size="sm"
                  onClick={() => setDistanceRange(range)}
                >
                  {range}
                </Button>
              ))}
            </div>
            <ChartContainer config={{ distance: { label: "Distance", color: "hsl(var(--chart-3))" } }}>
              <AreaChart data={filteredDistanceData} width={500} height={300}>
                <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} />
                <YAxis />
                <Area type="monotone" dataKey="distance" stroke="var(--color-distance)" fill="var(--color-distance)" fillOpacity={0.3} />
                <ChartTooltip />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Running Performance</CardTitle>
            <CardDescription>Distance, Heart Rate, and Duration</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                distance: { label: "Distance", color: "hsl(var(--chart-1))" },
                averageHeartRate: { label: "Avg Heart Rate", color: "hsl(var(--chart-2))" },
                duration: { label: "Duration", color: "hsl(var(--chart-3))" },
              }}
            >
              <ComposedChart width={1000} height={400} data={mockData.runningData}>
                <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Bar dataKey="distance" fill="var(--color-distance)" yAxisId="left" />
                <Line type="monotone" dataKey="averageHeartRate" stroke="var(--color-averageHeartRate)" yAxisId="right" />
                <Line type="monotone" dataKey="duration" stroke="var(--color-duration)" yAxisId="left" />
                <ChartTooltip />
              </ComposedChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 flex justify-center">
        <Button asChild>
          <Link href="/data">Go to raw data</Link>
        </Button>
      </div>
    </div>
  );
}