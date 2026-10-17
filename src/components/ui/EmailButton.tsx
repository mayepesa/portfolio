"use client";

import { useEffect, useState } from "react";
import { getMailtoHref } from "@/lib/text";
import { MailIcon } from "./Icons";

const FEEDBACK_MS = 2500;

type Props = {
  email: string;
  subject: string;
  label: string;
  copiedLabel: string;
  variant?: "button" | "icon";
};

export function EmailButton({ email, subject, label, copiedLabel, variant = "button" }: Props) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), FEEDBACK_MS);
    return () => window.clearTimeout(id);
  }, [copied]);

  const copyEmail = () => {
    navigator.clipboard
      ?.writeText(email)
      .then(() => setCopied(true))
      .catch(() => {});
  };

  const href = getMailtoHref(email, subject);

  if (variant === "icon") {
    return (
      <a
        href={href}
        onClick={copyEmail}
        aria-label={label}
        title={email}
        className="relative block p-2 text-muted transition-colors hover:text-highlight"
      >
        <MailIcon />
        <span
          aria-live="polite"
          className={`pointer-events-none absolute top-full right-0 mt-2 rounded-md border border-highlight/40 bg-surface px-2 py-1 font-mono text-xs whitespace-nowrap text-highlight transition-opacity ${copied ? "opacity-100" : "opacity-0"}`}
        >
          {copied ? copiedLabel : ""}
        </span>
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={copyEmail}
      className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-sm font-medium text-bg transition-colors hover:bg-accent-soft"
    >
      <MailIcon className="size-4" />
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </a>
  );
}
