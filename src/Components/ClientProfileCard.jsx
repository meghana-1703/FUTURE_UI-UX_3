import {
  Mail,
  Phone,
  Globe,
  User,
  DollarSign,
  Briefcase,
  Activity,
} from "lucide-react";

export default function ClientProfileCard() {
  return (
    <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[28px] p-4 md:p-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">

        <div className="w-20 h-20 rounded-full bg-violet-500/20 flex items-center justify-center text-3xl font-bold text-violet-400">
          ND
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Nexus Digital
          </h2>

          <p className="text-gray-400 mt-1">
            Digital Marketing Agency
          </p>

          <span className="inline-block mt-3 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm">
            Active Client
          </span>
        </div>

      </div>

      {/* Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-10">

       <div className="flex items-start gap-3 min-w-0">
          <Mail className="text-violet-400" size={20} />
          <div>
            <p className="text-gray-500 text-sm">Email</p>
            <p className="text-white">
              contact@nexusdigital.com
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 min-w-0">
          <Phone className="text-violet-400" size={20} />
          <div>
            <p className="text-gray-500 text-sm">Phone</p>
            <p className="text-white">
              +1 234 567 890
            </p>
          </div>
        </div>

       <div className="flex items-start gap-3 min-w-0">
          <Globe className="text-violet-400" size={20} />
          <div>
            <p className="text-gray-500 text-sm">Website</p>
<p className="text-white break-all">
  contact@nexusdigital.com
</p>
          </div>
        </div>

       <div className="flex items-start gap-3 min-w-0">
          <User className="text-violet-400" size={20} />
          <div>
            <p className="text-gray-500 text-sm">Account Manager</p>
            <p className="text-white">
                Riya sharma
            </p>
          </div>
        </div>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mt-10">

        <div className="bg-[#171625] rounded-2xl p-5">
          <DollarSign className="text-violet-400 mb-3" />
          <p className="text-gray-400 text-sm">
            Revenue
          </p>
          <h3 className="text-2xl font-bold text-white">
            $18.5K
          </h3>
        </div>

        <div className="bg-[#171625] rounded-2xl p-5">
          <Briefcase className="text-cyan-400 mb-3" />
          <p className="text-gray-400 text-sm">
            Campaigns
          </p>
          <h3 className="text-2xl font-bold text-white">
            4
          </h3>
        </div>

        <div className="bg-[#171625] rounded-2xl p-5">
          <Activity className="text-emerald-400 mb-3" />
          <p className="text-gray-400 text-sm">
            Health Score
          </p>
          <h3 className="text-2xl font-bold text-white">
            96%
          </h3>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="mt-10">

        <h3 className="text-xl font-semibold text-white mb-5">
          Recent Activity
        </h3>

        <div className="space-y-4">

          <div className="bg-[#171625] rounded-xl p-4">
            ✅ Campaign approved by client
          </div>

          <div className="bg-[#171625] rounded-xl p-4">
            📞 Follow-up meeting completed
          </div>

          <div className="bg-[#171625] rounded-xl p-4">
            💳 Monthly invoice paid
          </div>

        </div>

      </div>

    </div>
  );
}