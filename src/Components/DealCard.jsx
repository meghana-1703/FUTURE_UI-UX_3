export default function DealCard({
  initials,
  color,
  company,
  organization,
  value,
  source,
  days,
}) {
  return (
    <div className="bg-[#171625] border border-white/5 rounded-2xl p-4 hover:border-violet-500/30 transition">

      <div className="flex justify-between items-start">

        <div className="flex gap-3">

          <div
            className={`w-11 h-11 rounded-full flex items-center justify-center font-bold ${color}`}
          >
            {initials}
          </div>

          <div>

            <h3 className="text-white font-semibold">
              {company}
            </h3>

            <p className="text-gray-500 text-sm">
              {organization}
            </p>

          </div>

        </div>

        <span className="text-white font-bold">
          {value}
        </span>

      </div>

      <div className="flex justify-between mt-4 text-xs text-gray-500">

        <span>{source}</span>

        <span>{days}</span>

      </div>

    </div>
  );
}