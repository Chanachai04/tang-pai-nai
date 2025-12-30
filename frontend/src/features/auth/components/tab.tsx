import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./login";
import Register from "./register";
import { TabProps } from "../types";

export default function Tab({ onClose }: TabProps) {
  return (
    <div>
      <Tabs defaultValue="income" className="w-full">
        <TabsList className="w-full flex justify-around">
          <TabsTrigger value="form" className="text-lg hover:cursor-pointer">
            เข้าสู่ระบบ
          </TabsTrigger>
          <TabsTrigger value="slip" className="text-lg hover:cursor-pointer">
            สมัครสมาชิกใหม่
          </TabsTrigger>
        </TabsList>
        <TabsContent value="form">
          {/* ui form เพิ่มรายการ */}
          <Login onClose={onClose} />
        </TabsContent>
        <TabsContent value="slip">
          {/* ui upload สลิป */}
          <Register onClose={onClose} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
