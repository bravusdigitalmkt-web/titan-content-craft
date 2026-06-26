export function BackgroundOrbs({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-[#2563EB]/30 blur-[120px] animate-orb" />
      <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-[#7C3AED]/25 blur-[140px] animate-orb-2" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-[#3B82F6]/20 blur-[120px] animate-orb" />
    </div>
  );
}
