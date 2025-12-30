"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", income: 186, expenses: 80 },
  { month: "February", income: 305, expenses: 200 },
  { month: "March", income: 237, expenses: 120 },
  { month: "April", income: 73, expenses: 190 },
  { month: "May", income: 209, expenses: 130 },
  { month: "June", income: 214, expenses: 140 },
];

const chartConfig = {
  income: {
    label: "รายรับ",
    color: "#008000",
  },
  expenses: {
    label: "รายจ่าย",
    color: "#A30000",
  },
} satisfies ChartConfig;

export function AnalyticsChart() {
  return (
    <ChartContainer config={chartConfig} className="max-h-[40vh] w-full">
      <LineChart
        data={chartData}
        margin={{ left: 20, right: 20, top: 5, bottom: 5 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          interval={0}
          tickFormatter={(value) => value.slice(0, 3)}
        />

        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          tickFormatter={(value) => `฿ ${value}`}
          domain={["auto"]}
        />

        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          dataKey="income"
          type="natural"
          stroke="var(--color-income)"
          strokeWidth={1}
        />
        <Line
          dataKey="expenses"
          type="natural"
          stroke="var(--color-expenses)"
          strokeWidth={1}
        />
        <ChartLegend content={<ChartLegendContent />} />
      </LineChart>
    </ChartContainer>
  );
}
