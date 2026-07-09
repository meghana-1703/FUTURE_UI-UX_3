import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import AnalyticsStats from "../Components/AnalyticsStats";
import ClientTierCard from "../Components/ClientTierCard";
import ChannelAttributionCard from "../Components/ChannelAttributionCard";
import RevenueChart from "../Components/RevenueChart";

export default function Analytics() {
  return (
    <div className="flex h-screen bg-[#0C0B14] text-white overflow-hidden">

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">

        <Topbar
          title="Analytics"
          subtitle="Performance insights across all clients."
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">

          {/* KPI Cards */}
          <AnalyticsStats />

          {/* Client Tier & Channel Attribution */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">

            <div>
              <ClientTierCard />
            </div>

            <div className="xl:col-span-2">
              <ChannelAttributionCard />
            </div>

          </div>

          {/* Revenue Trend */}
          <div className="mt-6">
            <RevenueChart />
          </div>

        </main>

      </div>

    </div>
  );
}