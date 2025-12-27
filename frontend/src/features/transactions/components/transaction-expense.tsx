import { Card } from "@/components/ui/card";

// Mock Data
const historyData = [
  { id: 2, title: "ค่ากาแฟ", amount: -120, type: "expense", date: "27 Dec" },
  { id: 3, title: "ค่าปุฟเฟต์", amount: -599, type: "expense", date: "26 Dec" },
];

export default function TransactionList() {
  return (
    <div>
      {historyData.map((item) => (
        <Card key={item.id} className="p-4 flex justify-between items-center">
          <div>
            <p className="font-medium">{item.title}</p>
            <p className="text-sm text-gray-500">{item.date}</p>
          </div>
          <div
            className={`font-semibold ${
              item.type === "income" ? "text-green-500" : "text-red-500"
            }`}
          >
            {item.type === "income" ? "+" : "-"}
          </div>
        </Card>
      ))}
    </div>
  );
}
