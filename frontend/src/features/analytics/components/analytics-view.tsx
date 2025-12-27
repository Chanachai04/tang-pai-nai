"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import ItemFilter from "./item-filter";
import { AnalyticsChart } from "./analytics-chart";

function MockChart({ period }: { period: string }) {
  return (
    <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
      <p className="text-gray-500">[Chart for period: {period}]</p>
    </div>
  );
}

export default function AnalyticsView() {
  const [period, setPeriod] = useState<string>("1W");

  return (
    <div className="space-y-4">
      {/* กราฟหรือข้อมูลวิเคราะห์อื่น ๆ */}
      <Card className="p-4">
        <div className="flex justify-between items-center ">
          <h1 className="font-semibold text-center">สรุปรายรับ-รายจ่าย</h1>
          {/* ปุ่มเลือกช่วงเวลา */}
          <ItemFilter />
        </div>
        <AnalyticsChart />
      </Card>
    </div>
  );
}
