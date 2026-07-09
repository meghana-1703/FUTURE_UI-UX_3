import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import TaskStats from "../Components/TaskStats";
import TaskList from "../Components/TaskList";

export default function Tasks() {
  return (
    <div className="flex h-screen bg-[#0C0B14] text-white overflow-hidden">

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">

        <Topbar
          title="Task Manager"
          subtitle="7 tasks — 2 due today, 1 overdue."
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
