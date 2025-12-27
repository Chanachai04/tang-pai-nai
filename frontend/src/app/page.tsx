import DashboardHeader from "@/features/dashboard/components/dashboard-header";
import DAshboardTab from "@/features/dashboard/components/dashboard-tab";

export default function Home() {
  return (
    <main className="container mx-auto px-5 sm:px-0">
      <h1 className="text-center text-2xl mt-5">Tang Pai Nai</h1>
      {/* ส่วนบน: แสดงยอดเงินรวม รายรับและรายจ่าย */}
      <DashboardHeader income={100} expenses={20} />
      <DAshboardTab />
    </main>
  );
}
