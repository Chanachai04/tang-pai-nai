import ActionMenu from "@/features/dashboard/components/action-menu";
import SummaryCards from "@/features/dashboard/components/sumary-cards";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-2xl">Tang Pai Nai</h1>
      <SummaryCards income={100} expenses={20} />
      <ActionMenu />
    </main>
  );
}
