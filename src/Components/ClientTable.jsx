import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const clients = [
  {
    initials: "ND",
    color: "bg-violet-600",
    name: "Nexus Digital",
    industry: "E-commerce",
    mrr: "$18.5K",
    health: 96,
    status: "Active",
    nextCall: "Tomorrow",
  },
  {
    initials: "AV",
    color: "bg-blue-600",
    name: "Apex Ventures",
    industry: "SaaS",
    mrr: "$24.2K",
    health: 88,
    status: "Active",
    nextCall: "Jul 8",
  },
  {
    initials: "OM",
    color: "bg-amber-600",
    name: "Orbit Media",
    industry: "Media",
    mrr: "$12.8K",
    health: 62,
    status: "At Risk",
    nextCall: "Today",
  },
  {
    initials: "LB",
    color: "bg-emerald-600",
    name: "Luminary Brands",
    industry: "Retail",
    mrr: "$31.0K",
    health: 94,
    status: "Active",
    nextCall: "Jul 9",
  },
  {
    initials: "PA",
    color: "bg-purple-700",
    name: "Prism Analytics",
    industry: "Analytics",
    mrr: "$19.6K",
    health: 82,
    status: "Active",
    nextCall: "Jul 10",
  },
  {
    initials: "VS",
    color: "bg-red-700",
    name: "Vortex Studios",
    industry: "Creative",
    mrr: "$8.9K",
    health: 41,
    status: "Churning",
    nextCall: "Overdue",
  },
  {
    initials: "ST",
    color: "bg-cyan-700",
    name: "Solaris Tech",
    industry: "Tech",
    mrr: "$27.4K",
    health: 91,
    status: "Active",
    nextCall: "Jul 11",
  },
  {
    initials: "CC",
    color: "bg-indigo-700",
    name: "Cascade Corp",
    industry: "Finance",
    mrr: "$42.1K",
    health: 97,
    status: "Active",
    nextCall: "Jul 12",
  },
];

export default function ClientTable() {
  return (
    <div className="bg-white/[0.04] border border-white/10 rounded-[30px] overflow-hidden">

      {/* Search + Filters */}

      <div className="p-5 border-b border-white/10 flex items-center justify-between gap-5">

        <div className="relative flex-1">

          <Search
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            placeholder="Search clients..."
            className="w-full pl-12 pr-5 h-12 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-gray-500 outline-none"
          />

        </div>

        <div className="flex gap-3">

          <button className="px-5 h-11 rounded-xl bg-violet-600 text-white text-sm">
            All
          </button>

          <button className="px-5 h-11 rounded-xl text-gray-400 hover:bg-white/5">
            Active
          </button>

          <button className="px-5 h-11 rounded-xl text-gray-400 hover:bg-white/5">
            At-Risk
          </button>

          <button className="px-5 h-11 rounded-xl text-gray-400 hover:bg-white/5">
            Churning
          </button>

        </div>

      </div>

      <table className="w-full">

        <thead className="text-gray-500 text-sm">

          <tr className="border-b border-white/5">

            <th className="text-left p-5">Client</th>
            <th className="text-left">Industry</th>
            <th className="text-left">MRR</th>
            <th className="text-left">Health</th>
            <th className="text-left">Status</th>
            <th className="text-left">Next Call</th>

          </tr>

        </thead>

        <tbody>

          {clients.map((client, index) => (

            <tr
              key={index}
              className="border-b border-white/5 hover:bg-white/[0.03] transition"
            >

              <td className="p-5">

                <div className="flex items-center gap-4">

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${client.color}`}
                  >
                    {client.initials}
                  </div>

                 <Link to="/client-profile">
  <span className="font-semibold text-white hover:text-violet-400 transition cursor-pointer">
    {client.name}
  </span>
</Link>
                </div>

              </td>

              <td className="text-gray-400">
                {client.industry}
              </td>

              <td className="font-semibold text-white">
                {client.mrr}
              </td>

              <td>

                <div className="flex items-center gap-3">

                  <div className="w-24 h-2 rounded-full bg-white/10 overflow-hidden">

                    <div
                      className="h-full bg-emerald-400 rounded-full"
                      style={{ width: `${client.health}%` }}
                    />

                  </div>

                  <span className="text-emerald-400 text-sm font-semibold">
                    {client.health}%
                  </span>

                </div>

              </td>

              <td>

                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    client.status === "Active"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : client.status === "At Risk"
                      ? "bg-amber-500/20 text-amber-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {client.status}
                </span>

              </td>

              <td className="text-gray-400">
                {client.nextCall}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}