import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", revenue: 140, previous: 120 },
  { month: "Feb", revenue: 155, previous: 135 },
  { month: "Mar", revenue: 148, previous: 130 },
  { month: "Apr", revenue: 180, previous: 145 },
  { month: "May", revenue: 195, previous: 160 },
  { month: "Jun", revenue: 188, previous: 158 },
  { month: "Jul", revenue: 220, previous: 175 },
  { month: "Aug", revenue: 242, previous: 185 },
  { month: "Sep", revenue: 232, previous: 180 },
  { month: "Oct", revenue: 266, previous: 205 },
  { month: "Nov", revenue: 278, previous: 224 },
  { month: "Dec", revenue: 310, previous: 246 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[28px] p-4 md:p-6 h-[320px] md:h-[360px]">

      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">

        <div>
<h2 className="text-lg md:text-xl font-bold text-white">
            Revenue Growth
          </h2>

          <p className="text-gray-400 text-sm">
            Current vs prior year
          </p>
        </div>

      <div className="flex gap-4 text-xs md:text-sm flex-wrap">

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-violet-500"></span>
            <span className="text-gray-400">2024</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-violet-800"></span>
            <span className="text-gray-500">2023</span>
          </div>

        </div>

      </div>

      <ResponsiveContainer width="100%" height="75%">

        <AreaChart data={data}>

          <defs>

            <linearGradient id="purple" x1="0" y1="0" x2="0" y2="1">

              <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.35} />

              <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0} />

            </linearGradient>

          </defs>

          <CartesianGrid
            stroke="#2A2638"
            strokeDasharray="4 4"
            vertical={false}
          />

          <XAxis
            dataKey="month"
            stroke="#777"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            stroke="#777"
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            contentStyle={{
              background: "#181522",
              border: "1px solid #3B2D5E",
              borderRadius: 16,
            }}
          />

          <Area
            dataKey="previous"
            stroke="#5B21B6"
            fill="none"
            strokeWidth={2}
            isAnimationActive
            animationDuration={1800}
          />

          <Area
            dataKey="revenue"
            stroke="#8B5CF6"
            strokeWidth={4}
            fill="url(#purple)"
            isAnimationActive
            animationDuration={2000}
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}