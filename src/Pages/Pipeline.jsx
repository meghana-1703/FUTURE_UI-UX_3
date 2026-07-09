import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import PipelineBoard from "../Components/PipelineBoard";
import StatCard from "../Components/StatCard";

import {
  DollarSign,
  Briefcase,
  TrendingUp,
  Clock3,
} from "lucide-react";

export default function Pipeline() {
  return (
    <div className="flex h-screen bg-[#0C0B14] text-white overflow-hidden">

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">

        <Topbar
          title="Pipeline"
          subtitle="$267K in active opportunities."
        />

      <main className="flex-1 overflow-y-auto p-4 md:p-6">

         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatCard
              title="Total Pipeline Value"
              value="$288K"
              change="+18.4%"
              color="#8B5CF6"
              icon={<DollarSign size={24} />}
            />

            <StatCard
              title="Deals in Progress"
              value="10"
              change="+4 this week"
              color="#06B6D4"
              icon={<Briefcase size={24} />}
            />

            <StatCard
              title="Win Rate (30d)"
              value="42.6%"
              change="+5.1%"
              color="#10B981"
              icon={<TrendingUp size={24} />}
            />

            <StatCard
              title="Avg. Cycle Length"
              value="28 days"
              change="-3 days"
              color="#F59E0B"
              icon={<Clock3 size={24} />}
            />

          </div>


          <div className="mt-6">
            <PipelineBoard />
          </div>


        </main>

      </div>

    </div>
  );
}
