import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import ClientTable from "../Components/ClientTable";
import CampaignPerformanceCard from "../Components/CampaignPerformanceCard";

export default function Clients() {
  return (
    <div className="flex h-screen bg-[#0C0B14] text-white overflow-hidden">

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">

        <Topbar
          title="Clients"
          subtitle="Manage your clients and relationships."
        />

<main className="flex-1 overflow-y-auto p-4 md:p-6">

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

            {/* Left Side */}

           <div className="xl:col-span-8">

              <ClientTable />

            </div>

            {/* Right Side */}

           <div className="xl:col-span-4 space-y-6">

              <CampaignPerformanceCard />

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}
