import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import { Zap } from "lucide-react";
import { useState } from "react";

export default function Campaigns() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#0C0B14] text-white overflow-hidden">

      <Sidebar
  isOpen={isOpen}
  setIsOpen={setIsOpen}
/>

      <div className="flex-1 flex flex-col overflow-hidden">

       <Topbar
  isOpen={isOpen}
  setIsOpen={setIsOpen}
   title="Campaigns"
 subtitle="87 campaigns active across all clients."
/>

        <main className="flex-1 flex items-center justify-center p-4 md:p-6">

          <div className="text-center">

            <div className="w-12 h-12 md:w-14 md:h-14 mx-auto rounded-2xl bg-violet-500/20 flex items-center justify-center">

              <Zap
                size={28}
                className="text-violet-400"
              />

            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-6 text-center">
              Campaign Manager
            </h2>

            <p className="text-gray-400 mt-2 text-sm md:text-base text-center">
              87 active campaigns across 32 clients.
            </p>

          </div>

        </main>

      </div>

    </div>
  );
}
