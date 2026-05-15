interface TerminalLine {
  prefix?: string;
  text: string;
  tone?: "green" | "amber" | "red" | "muted";
}

interface TerminalProps {
  title?: string;
  lines: TerminalLine[];
  typingSpeed?: number;
  showCursor?: boolean;
}

export function Terminal({ title, lines, typingSpeed = 24, showCursor = true }: TerminalProps) {
  const getToneColor = (tone?: string) => {
    switch (tone) {
      case "green":
        return "text-[var(--accent-green)]";
      case "amber":
        return "text-[var(--accent-amber)]";
      case "red":
        return "text-[var(--accent-red)]";
      case "muted":
        return "text-[var(--text-tertiary)]";
      default:
        return "text-[var(--text-primary)]";
    }
  };

  return (
    <div 
      className="overflow-hidden rounded border border-[rgba(255,255,255,0.1)] bg-[var(--bg-surface)] font-body shadow-lg"
      data-typing-speed={typingSpeed}
    >
      {title && (
        <div className="flex items-center gap-2 border-b border-[rgba(255,255,255,0.1)] bg-[var(--bg-secondary)] px-4 py-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[var(--accent-red)]" />
            <div className="h-3 w-3 rounded-full bg-[var(--accent-amber)]" />
            <div className="h-3 w-3 rounded-full bg-[var(--accent-green)]" />
          </div>
          <span className="ml-2 text-sm text-[var(--text-secondary)]">{title}</span>
        </div>
      )}
      <div 
        className="p-4"
        role="log"
        aria-label={title || "Terminal output"}
      >
        {lines.map((line, index) => (
          <div key={index} className="flex font-mono text-sm leading-relaxed">
            {line.prefix && (
              <span className="mr-2 select-none text-[var(--text-tertiary)]">{line.prefix}</span>
            )}
            <span className={getToneColor(line.tone)}>{line.text}</span>
            {showCursor && index === lines.length - 1 && (
              <span className="terminal-cursor ml-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
