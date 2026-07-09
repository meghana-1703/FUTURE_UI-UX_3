import {
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";

export default function ClientDetailsCard() {
  return (
    <div className="bg-white/[0.04] border border-white/10 rounded-[30px] p-6">

      <div className="flex justify-between items-start">

        <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center text-lg font-bold">
          ND
        </div>

        <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm">
          Active
        </span>

      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-6">
        Nexus Digital
      </h2>

      <p className="text-gray-400">
        E-commerce
      </p>

      <div className="mt-8 space-y-5">

        <div className="flex justify-between">
          <span className="text-gray-400">Monthly Revenue</span>
          <span className="text-white font-semibold">$18,500</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Health Score</span>
          <span className="text-emerald-400 font-semibold">96%</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Account Manager</span>
          <span className="text-white">Sarah K.</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Active Campaigns</span>
          <span className="text-white">4</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Next Call</span>
          <span className="text-violet-400">Tomorrow</span>
        </div>

      </div>

      <div className="border-t border-white/10 my-6"></div>

      <div className="grid grid-cols-3 text-center">

        <button className="flex flex-col items-center gap-2 text-gray-400 hover:text-white">
          <Mail size={20} />
          <span className="text-sm">Email</span>
        </button>

        <button className="flex flex-col items-center gap-2 text-gray-400 hover:text-white">
          <Phone size={20} />
          <span className="text-sm">Call</span>
        </button>

        <button className="flex flex-col items-center gap-2 text-gray-400 hover:text-white">
          <ExternalLink size={20} />
          <span className="text-sm">Portal</span>
        </button>

      </div>

    </div>
  );
}