import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddOrders from "./add-orders";
import AddSlips from "./add-slips";
import AddAndShow from "@/features/infobox/components/add-and-show";
import { TabProps } from "../types";

export default function TransactionTab({ onClose }: TabProps) {
  return (
    <Tabs defaultValue="income" className="w-full">
      <TabsList className="w-full flex justify-around">
        <TabsTrigger value="form" className="text-lg hover:cursor-pointer">
          เพิ่มรายการ
        </TabsTrigger>
        <TabsTrigger value="slip" className="text-lg hover:cursor-pointer">
          สลิปโอนเงิน
        </TabsTrigger>
      </TabsList>
      <TabsContent value="form">
        <AddAndShow title="กรอกข้อมูลด้วยตนเอง" variant="gray">
          ใช้สำหรับรายการทั่วไปที่คุณต้องการระบุรายละเอียด ยอดเงิน
          และหมวดหมู่เองอย่างละเอียด แล้วกดบันทึก
        </AddAndShow>
        {/* ui form เพิ่มรายการ */}
        <AddOrders onClose={onClose} />
      </TabsContent>
      <TabsContent value="slip">
        <AddAndShow title="กรอกข้อมูลด้วยสลิปโอนเงิน" variant="gray">
          เพียงอัปโหลดรูปสลิปโอนเงิน ระบบจะดึงยอดเงิน วันที่ และข้อมูลอื่นๆ
          จากสลิปมาให้ทันที (ไม่ต้องพิมพ์เอง)
        </AddAndShow>
        {/* ui upload สลิป */}
        <AddSlips onClose={onClose} />
      </TabsContent>
    </Tabs>
  );
}
