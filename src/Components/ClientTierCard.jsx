export default function ClientTierCard() {
  const tiers = [
    {
      name: "Enterprise ($25K+ MRR)",
      clients: "8 clients",
      revenue: "$252K",
    },
    {
      name: "Growth ($10K–25K MRR)",
      clients: "14 clients",
      revenue: "$89K",
    },
    {
      name: "Starter (<$10K MRR)",
      clients: "10 clients",
      revenue: "$30K",
    },
  ];

  return (
    <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[28px] p-6 h-full">

      <div className="mb-6">

        <h2 className="text-2xl md:text-xl font-bold text-white">
          Revenue by Client Tier
        </h2>

      </div>

      <div className="space-y-5">

        {tiers.map((tier, index) => (

          <div
            key={index}
            className="border-b border-white/5 pb-4 last:border-0 last:pb-0"
          >

            <h3 className="text-white font-medium">
              {tier.name}
            </h3>

            <div className="flex justify-between items-center mt-2">

              <span className="text-gray-400 text-sm">
                {tier.clients}
              </span>

              <span className="text-violet-400 font-bold">
                {tier.revenue}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}