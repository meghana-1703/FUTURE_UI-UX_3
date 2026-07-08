import TaskCard from "./TaskCard";

const tasks = [
  {
    title: "Prepare Q3 performance report for Cascade Corp",
    client: "Cascade Corp",
    category: "Report",
    priority: "High",
    due: "Today",
    completed: false,
  },
  {
    title: "Review creative brief from Luminary Brands",
    client: "Luminary Brands",
    category: "Creative",
    priority: "High",
    due: "Today",
    completed: false,
  },
  {
    title: "Schedule QBR call with Apex Ventures",
    client: "Apex Ventures",
    category: "Call",
    priority: "Medium",
    due: "Tomorrow",
    completed: false,
  },
  {
    title: "Update keyword strategy for Solaris Tech",
    client: "Solaris Tech",
    category: "SEO",
    priority: "Medium",
    due: "Jul 8",
    completed: true,
  },
  {
    title: "Send contract renewal to Orbit Media",
    client: "Orbit Media",
    category: "Contract",
    priority: "High",
    due: "Overdue",
    completed: false,
  },
];

export default function TaskList() {
  return (
    <div className="space-y-4">
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          title={task.title}
          client={task.client}
          category={task.category}
          priority={task.priority}
          due={task.due}
          completed={task.completed}
        />
      ))}
    </div>
  );
}