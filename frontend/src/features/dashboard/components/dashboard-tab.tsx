import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnalyticsView from "@/features/analytics/components/analytics-view";

export default function DAshboardTab() {
  return (
    <div className="mt-6">
      <div className="flex justify-end items-center">
        <Button variant={"outline"} className="mb-4 hover:cursor-pointer">
          เพิ่มรายการ
        </Button>
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
          <div className="p-4">Content for รายรับ</div>
        </TabsContent>
        <TabsContent value="expense">
          <div className="p-4">Content for รายจ่าย</div>
        </TabsContent>
        <TabsContent value="stats">
          <AnalyticsView />
        </TabsContent>
      </Tabs>
    </div>
  );
}
