import DealCard from "./DealCard";


export default function PipelineColumn({
  title,
  count,
  value,
  deals,
}) {
  return (
   <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[28px] p-5 w-[300px] shrink-0">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-white font-bold text-lg">
            {title}
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            {count} Deals
          </p>

        </div>

        <span className="text-violet-400 font-bold">
          {value}
        </span>

      </div>

      {/* Cards */}

      <div className="space-y-4 mt-6">

        {deals.map((deal, index) => (

          <DealCard
            key={index}
            initials={deal.initials}
            color={deal.color}
            company={deal.company}
            organization={deal.organization}
            value={deal.value}
            source={deal.source}
            days={deal.days}
          />

        ))}

      </div>

      {/* Add Button */}

      <button
        className="
        w-full
        mt-5
        py-3
        rounded-xl
        border
        border-dashed
        border-white/10
        text-gray-400
        hover:border-violet-500/40
        hover:text-violet-400
        transition
        "
      >
        + Add Lead
      </button>

    </div>
  );
}