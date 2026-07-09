import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import { Zap } from "lucide-react";

export default function Campaigns() {
  return (
    <div className="flex h-screen bg-[#0C0B14] text-white overflow-hidden">

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">

        <Topbar
          title="Campaigns"
          subtitle="87 campaigns active across all clients."
        />

        <main className="flex-1 flex items-center justify-center">

          <div className="text-center">

            <div className="w-14 h-14 mx-auto rounded-2xl bg-violet-500/20 flex items-center justify-center">

              <Zap
                size={28}
                className="text-violet-400"
              />

            </div>

            <h2 className="text-3xl font-bold text-white mt-6">
              Campaign Manager
            </h2>

            <p className="text-gray-400 mt-2">
              87 active campaigns across 32 clients.
            </p>

          </div>

        </main>

      </div>

    </div>
  );
}
