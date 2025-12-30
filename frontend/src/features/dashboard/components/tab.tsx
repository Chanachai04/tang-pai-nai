import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnalyticsView from "@/features/analytics/components/analytics-view";
import TransactionForm from "@/features/transactions/components/form";
import TransactionList from "@/features/transactions/components/list";

export default function Tab() {
  return (
    <div className="mt-6">
      <div className="flex justify-end items-center mb-2">
        <TransactionForm />
      </div>

      {/* เลือกแท็บ รายรับ, รายจ่าย, สถิติ */}
      <Tabs defaultValue="income" className="w-full">
        <TabsList className="w-full flex justify-around">
          <TabsTrigger value="income" className="text-lg hover:cursor-pointer">
            รายรับ
          </TabsTrigger>
          <TabsTrigger value="expense" className="text-lg hover:cursor-pointer">
            รายจ่าย
          </TabsTrigger>
          <TabsTrigger value="stats" className="text-lg hover:cursor-pointer">
            สถิติ
          </TabsTrigger>
        </TabsList>
        <TabsContent value="income">
          <TransactionList filterType="income" />
        </TabsContent>
        <TabsContent value="expense">
          <TransactionList filterType="expense" />
        </TabsContent>
        <TabsContent value="stats">
          <AnalyticsView />
        </TabsContent>
      </Tabs>
    </div>
  );
}
