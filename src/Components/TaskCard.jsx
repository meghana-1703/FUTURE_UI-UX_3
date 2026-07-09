export default function TaskCard({
  title,
  client,
  category,
  priority,
  due,
  completed = false,
}) {
  return (
    <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[24px] p-4 md:p-5 hover:border-violet-500/30 transition">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

        <div className="flex items-start gap-4">

          {/* Status */}
          <div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${
              completed
                ? "bg-emerald-500 border-emerald-500 text-white"
                : "border-gray-500"
            }`}
          >
            {completed && "✓"}
          </div>

          <div>

            <h3
             className={`font-semibold text-base md:text-lg ${
                completed
                  ? "text-gray-500 line-through"
                  : "text-white"
              }`}
            >
              {title}
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              {client}
            </p>

          </div>

        </div>

      </div>

      <div className="flex items-center gap-3 mt-5 flex-wrap">

        <span className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs">
          {category}
        </span>

        <span
          className={`px-3 py-1 rounded-full text-xs ${
            priority === "High"
              ? "bg-red-500/20 text-red-400"
              : priority === "Medium"
              ? "bg-amber-500/20 text-amber-400"
              : "bg-emerald-500/20 text-emerald-400"
          }`}
        >
          {priority}
        </span>

        <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-400 text-xs">
          {due}
        </span>

      </div>

    </div>
  );
}