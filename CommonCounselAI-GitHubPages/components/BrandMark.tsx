export function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-400/90 to-violet-400/70 shadow-soft ring-1 ring-white/10" />
      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-tight">CommonCounsel AI</div>
        <div className="text-xs text-neutral-300">Virginia-focused legal information</div>
      </div>
    </div>
  );
}
