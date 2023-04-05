import { DashboardBalance, DashboardTransactions, DashboardReminders } from "@/components";
export default function Home() {
  return (
    <>
    <DashboardBalance></DashboardBalance>
    <DashboardTransactions></DashboardTransactions>
    <DashboardReminders></DashboardReminders>
    </>
  );
}
