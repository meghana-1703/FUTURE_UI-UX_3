export default function ChannelAttributionCard() {
  const channels = [
    {
      name: "Paid Search",
      leads: "142 leads",
      conversions: "58 conv.",
      roas: "4.8x",
    },
    {
      name: "Paid Social",
      leads: "97 leads",
      conversions: "31 conv.",
      roas: "3.2x",
    },
    {
      name: "Organic SEO",
      leads: "84 leads",
      conversions: "44 conv.",
      roas: "N/A",
    },
    {
      name: "Email Campaigns",
      leads: "63 leads",
      conversions: "28 conv.",
      roas: "N/A",
    },
    {
      name: "Referral",
      leads: "41 leads",
      conversions: "22 conv.",
      roas: "N/A",
    },
  ];

  return (
    <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[28px] p-6 h-full">

      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">
          Channel Attribution (30d)
        </h2>
      </div>

      <div className="space-y-5">

        {channels.map((channel, index) => (

          <div
            key={index}
            className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0"
          >

            <div>

              <h3 className="text-white font-medium">
                {channel.name}
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                {channel.leads}
              </p>

            </div>

            <div className="text-right">

              <p className="text-gray-300 text-sm">
                {channel.conversions}
              </p>

              <p className="text-violet-400 font-semibold mt-1">
                {channel.roas}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}