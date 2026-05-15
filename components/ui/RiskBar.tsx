interface RiskBarProps {
  value: number;
  label: string;
}

export function RiskBar({ value, label }: RiskBarProps) {
  const clampedValue = Math.max(0, Math.min(100, value));

  const getColor = (val: number) => {
    if (val >= 75) return "bg-[var(--accent-red)]";
    if (val >= 50) return "bg-[var(--accent-amber)]";
    return "bg-[var(--accent-green)]";
  };

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-sm text-[var(--text-secondary)]">{label}</span>
        <span className="font-mono text-sm font-bold text-[var(--text-primary)]">{clampedValue}%</span>
      </div>
      <div 
        className="h-2 w-full overflow-hidden rounded-sm bg-[var(--bg-secondary)]"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={clampedValue}
        aria-label={label}
      >
        <div 
          className={`h-full transition-all duration-300 ${getColor(clampedValue)}`}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
}
