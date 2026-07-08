import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  change,
  icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
      relative
      overflow-hidden
      rounded-[28px]
      border
      border-white/10
      bg-white/[0.04]
      backdrop-blur-2xl
      p-6
      shadow-[0_8px_40px_rgba(0,0,0,0.35)]
      "
    >
      {/* Glow */}

      <div
        className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-3xl opacity-25"
        style={{
          background: color,
        }}
      />

      <div className="relative flex justify-between items-start">

        <div>

          <p className="text-gray-400 text-sm">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            {value}
          </h2>

          <p
            className="mt-3 text-sm font-semibold"
            style={{
              color,
            }}
          >
            {change}
          </p>

        </div>

        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{
            background: `${color}20`,
            color,
          }}
        >
          {icon}
        </div>

      </div>
    </motion.div>
  );
}