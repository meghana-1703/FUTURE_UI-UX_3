export default function TaskStats() {
  const stats = [
    {
      title: "Total Tasks",
      value: "7",
      color: "text-violet-400",
    },
    {
      title: "Completed",
      value: "1",
      color: "text-emerald-400",
    },
    {
      title: "Overdue",
      value: "1",
      color: "text-red-400",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6">

      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[28px] p-6"
        >

          <p className="text-gray-400 text-sm">
            {item.title}
          </p>

          <h2 className={`text-4xl font-bold mt-3 ${item.color}`}>
            {item.value}
          </h2>

        </div>
      ))}

    </div>
  );
}