import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { HeaderProps } from "../types";

export default function Header({ income, expenses, balance }: HeaderProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
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
      <Card className="p-6 text-right hover:shadow-lg transition-shadow">
        <CardTitle className="text-2xl">คงเหลือ</CardTitle>
        <CardDescription className="text-2xl text-blue-500">
          {balance || 0}
        </CardDescription>
      </Card>
    </div>
  );
}
