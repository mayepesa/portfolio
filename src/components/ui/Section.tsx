import type { ReactNode } from "react";
import { getSectionNumber, type SectionId } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";

type Props = { id: SectionId; title: string; children: ReactNode };

export function Section({ id, title, children }: Props) {
  const headingId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={headingId} className="py-24">
      <FadeIn>
        <h2
          id={headingId}
          className="mb-10 flex items-center gap-4 text-3xl font-semibold sm:text-4xl"
        >
          <span aria-hidden className="font-mono text-base font-normal text-highlight">
            [{getSectionNumber(id)}]
          </span>
          {title}
          <span aria-hidden className="h-px max-w-xs flex-1 bg-line" />
        </h2>
      </FadeIn>
      {children}
    </section>
  );
}
