import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import ClientProfileCard from "../Components/ClientProfileCard";
import { useState } from "react";

export default function ClientProfile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#0C0B14] text-white overflow-hidden">

     <Sidebar
  isOpen={isOpen}
  setIsOpen={setIsOpen}
/>

      <div className="flex-1 flex flex-col overflow-hidden">

     <Topbar
  isOpen={isOpen}
  setIsOpen={setIsOpen}
  title="Client Profile"
 subtitle="View complete client information and engagement."
/>

        <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-8">

          <ClientProfileCard />

        </main>

      </div>

    </div>
  );
}
