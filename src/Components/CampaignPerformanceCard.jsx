export default function CampaignPerformanceCard() {
  const campaigns = [
    { name: "SEO / Organic", value: 78 },
    { name: "Paid Social", value: 91 },
    { name: "Google Ads", value: 63 },
    { name: "Email Drip", value: 85 },
  ];

  return (
    <div className="bg-white/[0.04] border border-white/10 rounded-[30px] p-6">

      <h2 className="text-gray-400 uppercase tracking-wider text-sm mb-6">
        Campaign Performance
      </h2>

      <div className="space-y-6">

        {campaigns.map((item, index) => (

          <div key={index}>

            <div className="flex justify-between text-sm mb-2">

              <span className="text-gray-400">
                {item.name}
              </span>

              <span className="text-white font-semibold">
                {item.value}%
              </span>

            </div>

            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">

              <div
                className="h-full rounded-full bg-violet-500"
                style={{ width: `${item.value}%` }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}