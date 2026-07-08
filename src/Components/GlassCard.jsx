export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.07] ${className}`}
      style={{
        background: "rgba(22, 20, 38, 0.75)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow:
          "0 4px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {children}
    </div>
  );
}