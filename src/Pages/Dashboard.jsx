import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import StatCard from "../Components/StatCard";
import RevenueChart from "../Components/RevenueChart";
import LeadConversion from "../Components/LeadConversion";
import ClientCard from "../Components/ClientCard";
import Activity from "../Components/Activity";



import {
  DollarSign,
  Users,
  Briefcase,
  TrendingUp,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#0C0B14] text-white overflow-hidden">

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">

        <Topbar
          title="Dashboard Overview"
          subtitle="Welcome back! Here's what's happening today."
        />

        <main className="flex-1 overflow-y-auto p-6">

          {/* Stat Cards */}
          <div className="grid grid-cols-4 gap-6">

            <StatCard
              title="Revenue"
              value="$284,750"
              change="+18.6%"
              color="#8B5CF6"
              icon={<DollarSign size={24} />}
            />

            <StatCard
              title="Clients"
              value="124"
              change="+12"
              color="#06B6D4"
              icon={<Users size={24} />}
            />

            <StatCard
              title="Deals"
              value="58"
              change="+9%"
              color="#F59E0B"
              icon={<Briefcase size={24} />}
            />

            <StatCard
              title="Growth"
              value="92%"
              change="+5.1%"
              color="#10B981"
              icon={<TrendingUp size={24} />}
            />

          </div>

          {/* Charts */}
          <div className="grid grid-cols-3 gap-6 mt-6">

            <div className="col-span-2">
              <RevenueChart />
            </div>

            <div>
              <LeadConversion />
            </div>

          </div>

{/* Clients & Activity */}
<div className="grid grid-cols-3 gap-6 mt-6">

  <div className="col-span-2">
    <ClientCard />
  </div>

  <div>
    <Activity />
  </div>

</div>

        </main>

      </div>

    </div>
  );
}
