"use client";

import { CodeBlock } from "./helper/CodeBlock";

export function Code({ compact = false }: { compact?: boolean }) {
  const code = `import { useState } from "react";

export function PortfolioStats() {
  const [p, setP] = useState(12);
  const a = 5;
  const y = new Date().getFullYear() - 2021;

  return (
    <div className="rounded-lg border border-white/10 bg-[#141021] p-4">
      <h3 className="text-sm font-semibold text-white tracking-wide">Snapshot</h3>
      <ul className="mt-3 text-xs text-neutral-300 space-y-1">
        <li>Projects: <span className="text-fuchsia-400">{p}</span></li>
        <li>Awards: <span className="text-fuchsia-400">{a}</span></li>
        <li>Years: <span className="text-fuchsia-400">{y}+</span></li>
      </ul>
      <button
        onClick={() => setP(v => v + 1)}
        className="mt-4 w-full rounded-md bg-gradient-to-r from-indigo-500 to-fuchsia-500 py-1.5 text-[11px] font-medium text-white hover:opacity-90 transition"
      >
        Add Project
      </button>
    </div>
  );
}`;

  return (
    <div className={`w-full ${compact ? "text-[12.5px]" : "text-[13px]"}`}>
      <CodeBlock
        language="tsx"
        filename="PortfolioStats.tsx"
        highlightLines={[3, 5, 12, 16, 22]}
        code={code}
      />
    </div>
  );
}
