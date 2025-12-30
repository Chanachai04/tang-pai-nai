import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ListProps } from "../types";

// Mock Data
const historyData = [
  { id: 1, title: "เงินเดือน", amount: 25000, type: "income", date: "27 Dec" },
  { id: 3, title: "เงินเดือน", amount: 25000, type: "income", date: "27 Dec" },
  { id: 4, title: "ค่ากาแฟ", amount: 120, type: "expense", date: "27 Dec" },
  { id: 5, title: "ค่าปุฟเฟต์", amount: 599, type: "expense", date: "26 Dec" },
];

export default function TransactionList({ filterType }: ListProps) {
  const filteredData = historyData.filter((item) => item.type === filterType);
  const total = filteredData.reduce((total, item) => total + item.amount, 0);
  const isExpense = filterType === "expense";
  const textColor = isExpense ? "text-red-500" : "text-green-500";
  const sign = isExpense ? "- " : "+ ";
  return (
    <>
      <div className=" overflow-y-auto pb-24 no-scrollbar ">
        {filteredData.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            ไม่มีรายการ{filterType === "income" ? "รายรับ" : "รายจ่าย"}ในขณะนี้
          </div>
        )}

        {filteredData.map((item) => {
          return (
            <Card key={item.id} className="mb-2">
              <div className="flex justify-between px-10">
                <div>
                  <CardTitle className="text-lg font-medium">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    {item.date}
                  </CardDescription>
                </div>
                <div className="flex items-center">
                  <div className={`font-semibold ${textColor}`}>
                    {sign}
                    {item.amount.toLocaleString()}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="fixed bottom-5 left-0 right-0 px-10">
        <Card>
          <div className="flex justify-between px-10">
            <div>
              <CardTitle className="text-lg font-medium">ยอดรวม</CardTitle>
            </div>
            <div className="flex items-center">
              <div className={`font-semibold ${textColor}`}>
                {sign} {total}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
