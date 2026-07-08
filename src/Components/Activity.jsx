const activities = [
  {
    title: "New deal closed",
    description: "Acme Corporation signed a new contract",
    time: "2 min ago",
    icon: "💼",
  },
  {
    title: "Payment received",
    description: "Received payment from Nova Technologies",
    time: "1 hour ago",
    icon: "💰",
  },
  {
    title: "New client added",
    description: "Vertex Solutions joined your platform",
    time: "3 hours ago",
    icon: "👤",
  },
  {
    title: "Project completed",
    description: "Mobile App development completed",
    time: "Yesterday",
    icon: "✅",
  },
];

export default function Activity() {
  return (
    <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[28px] p-6">

      <div className="flex justify-between mb-6">

        <div>
          <h2 className="text-xl font-bold text-white">
            Activity Feed
          </h2>

          <p className="text-gray-400 text-sm">
            Latest updates
          </p>
        </div>

        <button className="text-violet-400 text-sm">
          View All
        </button>

      </div>

      <div className="space-y-5">

        {activities.map((item, index) => (

          <div
            key={index}
            className="flex gap-4 items-start"
          >

            <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-lg">
              {item.icon}
            </div>

            <div className="flex-1">

              <h3 className="text-white font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.description}
              </p>

              <p className="text-gray-500 text-xs mt-1">
                {item.time}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}