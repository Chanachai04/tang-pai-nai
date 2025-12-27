import { Card, CardDescription, CardTitle } from "@/components/ui/card";

// Mock Data
const historyData = [
  { id: 2, title: "ค่ากาแฟ", amount: 120, type: "expense", date: "27 Dec" },
  { id: 3, title: "ค่าปุฟเฟต์", amount: 599, type: "expense", date: "26 Dec" },
];

export default function TransactionExpense() {
  const total = historyData.reduce((total, item) => total + item.amount, 0);

  return (
    <>
      <div className="h-[50vh] overflow-y-auto pb-24 no-scrollbar ">
        {historyData.map((item) => (
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
                <div className="font-semibold text-red-500">
                  - {item.amount}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="fixed bottom-5 left-0 right-0 px-10">
        <Card>
          <div className="flex justify-between px-10">
            <div>
              <CardTitle className="text-lg font-medium">ยอดรวม</CardTitle>
            </div>
            <div className="flex items-center">
              <div className="font-semibold text-red-500">- {total}</div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
