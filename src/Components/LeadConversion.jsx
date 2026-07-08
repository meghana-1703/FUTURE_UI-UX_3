import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Week 1", leads: 40 },
  { name: "Week 2", leads: 65 },
  { name: "Week 3", leads: 52 },
  { name: "Week 4", leads: 85 },
  { name: "Week 5", leads: 72 },
  { name: "Week 6", leads: 95 },
];

export default function LeadConversion() {
  return (
    <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[28px] p-6 h-[360px]">

      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">
          Lead Conversion
        </h2>

        <p className="text-gray-400 text-sm">
          Weekly conversion performance
        </p>
      </div>


     <ResponsiveContainer width="100%" height="180">

        <BarChart data={data}>

          <CartesianGrid
            stroke="#2A2638"
            strokeDasharray="4 4"
            vertical={false}
          />

          <XAxis
            dataKey="name"
            stroke="#777"
            tickLine={false}
            axisLine={false}
            fontSize={12}
          />

          <YAxis
            stroke="#777"
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            contentStyle={{
              background:"#181522",
              border:"1px solid #3B2D5E",
              borderRadius:"16px",
              color:"#fff"
            }}
          />


          <Bar
            dataKey="leads"
            fill="#8B5CF6"
            radius={[8,8,0,0]}
            barSize={22}
          />

        </BarChart>

      </ResponsiveContainer>


      <div className="flex justify-between mt-2">

        <div>
          <p className="text-gray-400 text-xs">
            Conversion Rate
          </p>

          <h3 className="text-white text-2xl font-bold">
            68%
          </h3>
        </div>


        <div>
          <p className="text-gray-400 text-xs">
            Total Leads
          </p>

          <h3 className="text-white text-2xl font-bold">
            409
          </h3>
        </div>

      </div>

    </div>
  );
}