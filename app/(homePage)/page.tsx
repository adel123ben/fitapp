"use client"

import Link from "next/link"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
// import { Bar, BarChart, ReferenceLine, XAxis, YAxis } from "recharts"
// import mockData from "@/data/motData.json"
import { MyCharts } from "@/components/mychart"

export default function Home() {
  return (
    // <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
    //   <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Fitness Dashboard</h1>
    //   <Card className="w-full mb-8">
    //     <CardHeader className="space-y-0 pb-2">
    //       <CardDescription>This Week</CardDescription>
    //       <CardTitle className="text-2xl sm:text-3xl">Steps Overview</CardTitle>
    //     </CardHeader>
    //     <CardContent>
    //       <ChartContainer
    //         config={{
    //           steps: {
    //             label: "Steps",
    //             color: "hsl(var(--chart-1))",
    //           },
    //         }}
    //       >
    //         <BarChart
    //           data={mockData.stepsData}
    //           margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
    //           width={600}
    //           height={300}
    //         >
    //           <XAxis
    //             dataKey="date"
    //             tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { weekday: 'short' })}
    //           />
    //           <YAxis />
    //           <Bar
    //             dataKey="steps"
    //             fill="var(--color-steps)"
    //             radius={[4, 4, 0, 0]}
    //             maxBarSize={50}
    //           />
    //           <ReferenceLine y={10000} stroke="hsl(var(--muted-foreground))" strokeDasharray="3 3" />
    //           <ChartTooltip
    //             content={({ active, payload }) => {
    //               if (active && payload && payload.length) {
    //                 return (
    //                   <div className="rounded-lg border bg-background p-2 shadow-sm">
    //                     <div className="grid grid-cols-2 gap-2">
    //                       <div className="flex flex-col">
    //                         <span className="text-[0.70rem] uppercase text-muted-foreground">
    //                           Date
    //                         </span>
    //                         <span className="font-bold text-muted-foreground">
    //                           {new Date(payload[0].payload.date).toLocaleDateString()}
    //                         </span>
    //                       </div>
    //                       <div className="flex flex-col">
    //                         <span className="text-[0.70rem] uppercase text-muted-foreground">
    //                           Steps
    //                         </span>
    //                         <span className="font-bold">
    //                           {payload[0].value}
    //                         </span>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 )
    //               }
    //               return null;
    //             }}
    //           />
    //         </BarChart>
    //       </ChartContainer>
    //     </CardContent>
    //   </Card>
    //   <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
    //     <Button asChild className="w-full sm:w-auto">
    //       <Link href="/dash">View Full Dashboard</Link>
    //     </Button>
    //     <Button asChild className="w-full sm:w-auto">
    //       <Link href="/data">View Raw Data</Link>
    //     </Button>
    //   </div>
    // </div>
    <div>
      <MyCharts />

      <Button asChild variant="default" size="lg">
      <Link href="/dash">
      Mor options...
      </Link>
      </Button>
    </div>
  )
}