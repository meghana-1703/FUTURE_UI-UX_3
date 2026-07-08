export default function PipelineCard({
  initials,
  color,
  company,
  industry,
  value,
  stage,
}) {
  return (
    <div className="bg-[#171625] border border-white/10 rounded-2xl p-4 hover:border-violet-500/40 transition">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${color}`}
          >
            {initials}
          </div>

          <div>
            <h3 className="text-white font-semibold">
              {company}
            </h3>

            <p className="text-gray-500 text-sm">
              {industry}
            </p>
          </div>

        </div>

      </div>


      <div className="flex justify-between items-center mt-5">

        <div>
          <p className="text-gray-500 text-xs">
            Deal Value
          </p>

          <h4 className="text-white font-bold text-lg">
            {value}
          </h4>
        </div>


        <span className="px-3 py-1 rounded-full text-xs bg-violet-500/20 text-violet-400">
          {stage}
        </span>

      </div>

    </div>
  );
}