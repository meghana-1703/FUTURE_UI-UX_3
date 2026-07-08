import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ClientProfileCard from "../components/ClientProfileCard";

export default function ClientProfile() {
  return (
    <div className="flex h-screen bg-[#0C0B14] text-white overflow-hidden">

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">

        <Topbar
          title="Client Profile"
          subtitle="View complete client information and engagement."
        />

        <main className="flex-1 overflow-y-auto p-6">

          <ClientProfileCard />

        </main>

      </div>

    </div>
  );
}