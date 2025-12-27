import DashboardHeader from "@/features/dashboard/components/dashboard-header";
import DAshboardTab from "@/features/dashboard/components/dashboard-tab";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-2xl">Tang Pai Nai</h1>
      {/* ส่วนบน: แสดงยอดเงินรวม รายรับและรายจ่าย */}
      <DashboardHeader income={100} expenses={20} />
      <DAshboardTab />
    </main>
  );
}
