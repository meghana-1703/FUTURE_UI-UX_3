import { Search, Bell, Plus, Menu } from "lucide-react";

export default function Topbar({
  title,
  subtitle,
  isOpen,
  setIsOpen,
}) {
  return (
    
    <header
    className="flex-shrink-0 flex items-center gap-3 px-4 md:px-6 py-4 border-b z-10"
      style={{
        background: "rgba(12, 11, 20, 0.8)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderColor: "rgba(255,255,255,0.05)",
      }}
    >
      <button
  onClick={() => {
    if (setIsOpen) {
      setIsOpen(!isOpen);
    }
  }}
  className="lg:hidden p-2 rounded-lg hover:bg-white/10"
>
  <Menu size={22} />
</button>

      {/* Title */}
      <div className="flex-1">

        <h1
         className="text-lg md:text-2xl font-bold text-white"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {title}
        </h1>

        <p className="text-xs text-gray-400 truncate max-w-[180px] md:max-w-none">
          {subtitle}
        </p>

      </div>


      {/* Search */}
      <div className="relative hidden md:block w-64">

        <Search
          size={13}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          placeholder="Search everything..."
          className="
          w-full
          pl-8
          pr-3
          py-2
          rounded-xl
          text-xs
          bg-white/[0.05]
          border
          border-white/[0.07]
          text-white
          placeholder:text-gray-500
          focus:outline-none
          focus:border-violet-500/40
          transition-colors
          "
        />

        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 bg-white/[0.05] px-1.5 py-0.5 rounded font-mono">
          ⌘K
        </kbd>

      </div>


      {/* Button */}
      <button className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-violet-600 text-white hover:bg-violet-500 transition-colors">

        <Plus size={13} />

        New Client

      </button>


      {/* Notification */}
      <button className="relative w-9 h-9 rounded-xl flex items-center justify-center hover:bg-white/[0.06] transition-colors text-gray-400 hover:text-white">

        <Bell size={15} />

        <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-violet-500" />

      </button>


    </header>
  );
}