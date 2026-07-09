export default function AnalyticsStats() {
  const stats = [
    {
      title: "Annual Recurring Revenue",
      value: "$3.74M",
      change: "+22.1%",
      color: "text-violet-400",
    },
    {
      title: "Avg. ROAS across clients",
      value: "4.2x",
      change: "+0.6x",
      color: "text-cyan-400",
    },
    {
      title: "New Clients (MTD)",
      value: "3",
      change: "+50%",
      color: "text-emerald-400",
    },
    {
      title: "Campaigns Active",
      value: "87",
      change: "-5 paused",
      color: "text-amber-400",
    },
  ];

  return (
 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[28px] p-6"
        >
          <p className={`text-sm font-semibold ${item.color}`}>
            {item.change}
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">
            {item.value}
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}