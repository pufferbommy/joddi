"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "An expense tracking chart"

const chartData = [
  { date: "2024-04-01", expenses: 45, food: 120 },
  { date: "2024-04-02", expenses: 52, food: 80 },
  { date: "2024-04-03", expenses: 38, food: 90 },
  { date: "2024-04-04", expenses: 65, food: 150 },
  { date: "2024-04-05", expenses: 48, food: 200 },
  { date: "2024-04-06", expenses: 35, food: 75 },
  { date: "2024-04-07", expenses: 92, food: 180 },
  { date: "2024-04-08", expenses: 55, food: 95 },
  { date: "2024-04-09", expenses: 42, food: 110 },
  { date: "2024-04-10", expenses: 60, food: 85 },
  { date: "2024-04-11", expenses: 78, food: 140 },
  { date: "2024-04-12", expenses: 45, food: 120 },
  { date: "2024-04-13", expenses: 38, food: 90 },
  { date: "2024-04-14", expenses: 82, food: 175 },
  { date: "2024-04-15", expenses: 55, food: 130 },
  { date: "2024-04-16", expenses: 48, food: 95 },
  { date: "2024-04-17", expenses: 65, food: 145 },
  { date: "2024-04-18", expenses: 72, food: 160 },
  { date: "2024-04-19", expenses: 58, food: 125 },
  { date: "2024-04-20", expenses: 42, food: 80 },
  { date: "2024-04-21", expenses: 35, food: 70 },
  { date: "2024-04-22", expenses: 88, food: 195 },
  { date: "2024-04-23", expenses: 45, food: 110 },
  { date: "2024-04-24", expenses: 62, food: 140 },
  { date: "2024-04-25", expenses: 55, food: 125 },
  { date: "2024-04-26", expenses: 48, food: 100 },
  { date: "2024-04-27", expenses: 72, food: 165 },
  { date: "2024-04-28", expenses: 38, food: 85 },
  { date: "2024-04-29", expenses: 65, food: 150 },
  { date: "2024-04-30", expenses: 52, food: 115 },
  { date: "2024-05-01", expenses: 45, food: 95 },
  { date: "2024-05-02", expenses: 78, food: 170 },
  { date: "2024-05-03", expenses: 55, food: 130 },
  { date: "2024-05-04", expenses: 68, food: 155 },
  { date: "2024-05-05", expenses: 42, food: 90 },
  { date: "2024-05-06", expenses: 35, food: 75 },
  { date: "2024-05-07", expenses: 82, food: 185 },
  { date: "2024-05-08", expenses: 58, food: 120 },
  { date: "2024-05-09", expenses: 45, food: 105 },
  { date: "2024-05-10", expenses: 72, food: 160 },
  { date: "2024-05-11", expenses: 65, food: 145 },
  { date: "2024-05-12", expenses: 48, food: 110 },
  { date: "2024-05-13", expenses: 38, food: 85 },
  { date: "2024-05-14", expenses: 88, food: 195 },
  { date: "2024-05-15", expenses: 55, food: 125 },
  { date: "2024-05-16", expenses: 62, food: 140 },
  { date: "2024-05-17", expenses: 75, food: 170 },
  { date: "2024-05-18", expenses: 42, food: 95 },
  { date: "2024-05-19", expenses: 35, food: 80 },
  { date: "2024-05-20", expenses: 58, food: 135 },
  { date: "2024-05-21", expenses: 45, food: 100 },
  { date: "2024-05-22", expenses: 52, food: 115 },
  { date: "2024-05-23", expenses: 68, food: 155 },
  { date: "2024-05-24", expenses: 82, food: 180 },
  { date: "2024-05-25", expenses: 55, food: 125 },
  { date: "2024-05-26", expenses: 48, food: 105 },
  { date: "2024-05-27", expenses: 72, food: 165 },
  { date: "2024-05-28", expenses: 38, food: 90 },
  { date: "2024-05-29", expenses: 65, food: 145 },
  { date: "2024-05-30", expenses: 58, food: 130 },
  { date: "2024-05-31", expenses: 45, food: 100 },
  { date: "2024-06-01", expenses: 52, food: 115 },
  { date: "2024-06-02", expenses: 78, food: 175 },
  { date: "2024-06-03", expenses: 42, food: 95 },
  { date: "2024-06-04", expenses: 88, food: 190 },
  { date: "2024-06-05", expenses: 35, food: 80 },
  { date: "2024-06-06", expenses: 65, food: 145 },
  { date: "2024-06-07", expenses: 72, food: 160 },
  { date: "2024-06-08", expenses: 55, food: 125 },
  { date: "2024-06-09", expenses: 62, food: 140 },
  { date: "2024-06-10", expenses: 48, food: 110 },
  { date: "2024-06-11", expenses: 38, food: 85 },
  { date: "2024-06-12", expenses: 82, food: 180 },
  { date: "2024-06-13", expenses: 45, food: 100 },
  { date: "2024-06-14", expenses: 68, food: 155 },
  { date: "2024-06-15", expenses: 55, food: 130 },
  { date: "2024-06-16", expenses: 58, food: 135 },
  { date: "2024-06-17", expenses: 75, food: 170 },
  { date: "2024-06-18", expenses: 42, food: 95 },
  { date: "2024-06-19", expenses: 35, food: 80 },
  { date: "2024-06-20", expenses: 65, food: 150 },
  { date: "2024-06-21", expenses: 52, food: 120 },
  { date: "2024-06-22", expenses: 48, food: 105 },
  { date: "2024-06-23", expenses: 88, food: 195 },
  { date: "2024-06-24", expenses: 38, food: 90 },
  { date: "2024-06-25", expenses: 72, food: 165 },
  { date: "2024-06-26", expenses: 55, food: 125 },
  { date: "2024-06-27", expenses: 62, food: 140 },
  { date: "2024-06-28", expenses: 45, food: 100 },
  { date: "2024-06-29", expenses: 35, food: 75 },
  { date: "2024-06-30", expenses: 78, food: 175 },
]

const chartConfig = {
  expenses: {
    label: "Expenses",
  },
  food: {
    label: "Food",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Expenses Overview</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Daily expenses for the selected period
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            multiple={false}
            value={timeRange ? [timeRange] : []}
            onValueChange={(value) => {
              setTimeRange(value[0] ?? "90d")
            }}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:px-4! @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select
            value={timeRange}
            onValueChange={(value) => {
              if (value !== null) {
                setTimeRange(value)
              }
            }}
          >
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-expenses)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-expenses)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillFood" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-food)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-food)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="expenses"
              type="natural"
              fill="url(#fillExpenses)"
              stroke="var(--color-expenses)"
              stackId="a"
            />
            <Area
              dataKey="food"
              type="natural"
              fill="url(#fillFood)"
              stroke="var(--color-food)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
