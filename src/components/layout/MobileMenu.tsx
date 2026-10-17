"use client";

import { useEffect, useId, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { NavLinks } from "./NavLinks";

export function MobileMenu({ t }: { t: Pick<Dictionary, "menu" | "nav"> }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className="rounded-md px-2 py-1 font-mono text-sm text-ink hover:text-accent aria-expanded:text-accent"
      >
        {t.menu}
      </button>
      {open && (
        <div
          id={menuId}
          className="absolute right-0 mt-3 w-44 rounded-lg border border-line bg-surface p-2 shadow-xl"
        >
          <NavLinks
            t={t}
            onNavigate={() => setOpen(false)}
            linkClassName="block rounded-md px-3 py-2 hover:bg-surface-2"
          />
        </div>
      )}
    </div>
  );
}
