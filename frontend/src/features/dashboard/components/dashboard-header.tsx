import { Card, CardDescription, CardTitle } from "@/components/ui/card";

interface DashboardHeaderProps {
  income?: number;
  expenses?: number;
}

export default function DashboardHeader({
  income,
  expenses,
}: DashboardHeaderProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <Card className="p-6 text-right hover:shadow-lg transition-shadow">
        <CardTitle className="text-2xl">รายรับ</CardTitle>
        <CardDescription className="text-2xl text-green-500">
          {income || 0}
        </CardDescription>
      </Card>
      <Card className="p-6 text-right hover:shadow-lg transition-shadow">
        <CardTitle className="text-2xl">รายจ่าย</CardTitle>
        <CardDescription className="text-2xl text-red-500">
          {expenses || 0}
        </CardDescription>
      </Card>
    </div>
  );
}
