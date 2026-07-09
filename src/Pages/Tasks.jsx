import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import TaskStats from "../Components/TaskStats";
import TaskList from "../Components/TaskList";
import { useState } from "react";

export default function Tasks() {
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
  title="Tasks"
 subtitle="Manage your team's tasks."
/>

       <main className="flex-1 overflow-y-auto p-4 md:p-6">

          {/* Stats */}
          <TaskStats />

          {/* Task List */}
          <div className="mt-6">
            <TaskList />
          </div>

        </main>

      </div>

    </div>
  );
}
