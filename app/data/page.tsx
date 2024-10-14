"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import mockData from "@/data/motData.json"

export default function DataPage() {
  return (
    <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Raw Data</h1>
      
      <div className="overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">Running Data</h2>
        <Table>
          <TableCaption>A list of your recent runs.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Start Time</TableHead>
              <TableHead>End Time</TableHead>
              <TableHead>Distance (km)</TableHead>
              <TableHead>Avg Heart Rate</TableHead>
              <TableHead>Duration (min)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockData.runningData.map((run, index) => (
              <TableRow key={index}>
                <TableCell>{run.date}</TableCell>
                <TableCell>{run.startTime}</TableCell>
                <TableCell>{run.endTime}</TableCell>
                <TableCell>{run.distance}</TableCell>
                <TableCell>{run.averageHeartRate}</TableCell>
                <TableCell>{run.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="overflow-x-auto mt-8">
        <h2 className="text-2xl font-semibold mb-4">Heart Rate Data</h2>
        <Table>
          <TableCaption>Your heart rate data sampled every 30 minutes.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Heart Rate (bpm)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockData.heartRateData.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.date}</TableCell>
                <TableCell>{data.time}</TableCell>
                <TableCell>{data.rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-8 flex justify-center">
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}