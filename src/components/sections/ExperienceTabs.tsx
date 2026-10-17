"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { Job } from "@/content/types";
import type { Locale } from "@/i18n/config";

type Props = { jobs: Job[]; locale: Locale; label: string };

const NEXT_KEYS = ["ArrowDown", "ArrowRight"];
const PREV_KEYS = ["ArrowUp", "ArrowLeft"];

export function ExperienceTabs({ jobs, locale, label }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const tabId = (i: number) => `${baseId}-tab-${i}`;
  const panelId = (i: number) => `${baseId}-panel-${i}`;

  const selectTab = (index: number) => {
    setActiveIndex(index);
    tabRefs.current[index]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const last = jobs.length - 1;
    let next: number | null = null;

    if (NEXT_KEYS.includes(e.key)) next = activeIndex === last ? 0 : activeIndex + 1;
    else if (PREV_KEYS.includes(e.key)) next = activeIndex === 0 ? last : activeIndex - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;

    if (next === null) return;
    e.preventDefault();
    selectTab(next);
  };

  const job = jobs[activeIndex];

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div
        role="tablist"
        aria-label={label}
        onKeyDown={onKeyDown}
        className="flex shrink-0 overflow-x-auto border-b border-line md:flex-col md:border-b-0 md:border-l"
      >
        {jobs.map((j, i) => {
          const selected = i === activeIndex;
          return (
            <button
              key={j.company}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={tabId(i)}
              aria-selected={selected}
              aria-controls={panelId(i)}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveIndex(i)}
              className={`-mb-px border-b-2 px-5 py-3 text-left font-mono text-sm whitespace-nowrap transition-colors md:mb-0 md:-ml-px md:border-b-0 md:border-l-2 ${
                selected
                  ? "border-highlight bg-surface text-highlight"
                  : "border-transparent text-muted hover:bg-surface hover:text-ink"
              }`}
            >
              <span aria-hidden className={selected ? "text-highlight" : "opacity-0"}>
                &gt;{" "}
              </span>
              {j.company}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={panelId(activeIndex)}
        aria-labelledby={tabId(activeIndex)}
        tabIndex={0}
        className="min-h-80"
      >
        <h3 className="text-xl font-medium sm:text-2xl">{job.title[locale]}</h3>
        <p className="mt-1 mb-6 font-mono text-sm text-muted">
          <span className="text-accent-soft">{job.company}</span> · {job.period[locale]}
        </p>
        <ul className="space-y-4">
          {job.bullets[locale].map((bullet) => (
            <li key={bullet} className="relative pl-6 leading-relaxed text-muted">
              <span aria-hidden className="absolute left-0 font-mono text-highlight">
                &gt;
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
