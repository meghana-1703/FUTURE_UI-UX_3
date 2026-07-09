import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  CheckSquare,
  BarChart3,
  Megaphone,
  Settings,
  HelpCircle,
  Sparkles,
} from "lucide-react";

const menu = [
{ icon: LayoutDashboard, label: "Overview" },
  { icon: Users, label: "Clients" },
  { icon: Briefcase, label: "Pipeline" },
  { icon: CheckSquare, label: "Tasks" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Megaphone, label: "Campaigns" },
];

const bottomMenu = [
  { icon: Settings, label: "Settings" },
  { icon: HelpCircle, label: "Help Center" },
];

export default function Sidebar({
  isOpen,
  setIsOpen,
}) {
  console.log("Sidebar props:", isOpen, setIsOpen);
    const location = useLocation();
return (
<>
    <aside
  className={`
    fixed lg:static
    top-0 left-0
    z-50
    h-screen
    w-[270px]
    border-r border-white/5
    flex flex-col
    transition-transform duration-300 ease-in-out
    ${
      isOpen
        ? "translate-x-0"
        : "-translate-x-full lg:translate-x-0"
    }
  `}
    >
      {/* Logo */}

      <div className="px-6 pt-7 pb-6 border-b border-white/5">
        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-violet-500/30">

            <Sparkles size={22} className="text-white" />

          </div>

          <div>
            <h1 className="text-white font-bold text-lg">
              Prism CRM
            </h1>

            <p className="text-gray-400 text-xs">
              Enterprise Suite
            </p>
          </div>

        </div>
      </div>

      {/* Menu */}

      <div className="flex-1 px-4 py-6 space-y-2">

        {menu.map((item) => {
          const Icon = item.icon;

         return (
<Link
  onClick={() => setIsOpen(false)}
  to={
      item.label === "Overview"
        ? "/"
        :
      item.label === "Clients"
        ? "/clients"
        : item.label === "Pipeline"
        ? "/pipeline"
        : item.label === "Tasks"
        ? "/tasks"
        : item.label === "Analytics"
        ? "/analytics"
        : item.label === "Campaigns"
        ? "/campaigns"
      : "#"
    }
    key={item.label}
  >

<motion.div
  whileHover={{ x: 4 }}
  whileTap={{ scale: 0.98 }}
  className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all cursor-pointer ${
    location.pathname ===
    (
      item.label === "Overview"
        ? "/"
        : item.label === "Clients"
        ? "/clients"
        : item.label === "Pipeline"
        ? "/pipeline"
        : item.label === "Tasks"
        ? "/tasks"
        : item.label === "Analytics"
        ? "/analytics"
        : item.label === "Campaigns"
        ? "/campaigns"
        : ""
    )
      ? "bg-violet-600 text-white shadow-lg shadow-violet-500/30"
      : "text-gray-400 hover:bg-white/5 hover:text-white"
  }`}
>

  <Icon size={20} />

  <span className="text-sm font-medium">
    {item.label}
  </span>

</motion.div>

  </Link>
);
        })}

      </div>

      {/* Bottom */}

      <div className="px-4 pb-5 space-y-2">

        {bottomMenu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-gray-400 hover:text-white hover:bg-white/5 transition"
            >
              <Icon size={20} />

              <span className="text-sm">
                {item.label}
              </span>
            </button>
          );
        })}

      </div>

      {/* User */}

      <div className="border-t border-white/5 p-5">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold">
            M
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold">
              Meghana
            </h4>

            <p className="text-xs text-gray-400">
              Administrator
            </p>
          </div>

        </div>

      </div>
      </aside>


    {isOpen && (
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={() => setIsOpen(false)}
      />
    )}

</>
  );
}
