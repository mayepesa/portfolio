"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

type Props = { text: string; speedMs?: number };

export function Typewriter({ text, speedMs = 110 }: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const instant = prefersReducedMotion();
    let typed = 0;

    const id = window.setInterval(
      () => {
        typed = instant ? text.length : typed + 1;
        setCount(typed);
        if (typed >= text.length) window.clearInterval(id);
      },
      instant ? 0 : speedMs,
    );
    return () => window.clearInterval(id);
  }, [text, speedMs]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden>{text.slice(0, count)}</span>
      <span aria-hidden className="cursor">
        _
      </span>
    </>
  );
}
