import Image from "next/image";
import { getInitials } from "@/lib/text";

type Props = { name: string; photo: string | null };

const corners = [
  "top-0 left-0 border-t-2 border-l-2",
  "top-0 right-0 border-t-2 border-r-2",
  "bottom-0 left-0 border-b-2 border-l-2",
  "bottom-0 right-0 border-b-2 border-r-2",
];

export function Avatar({ name, photo }: Props) {
  return (
    <div className="group relative p-3">
      {corners.map((position) => (
        <span
          key={position}
          aria-hidden
          className={`absolute size-8 border-highlight transition-all duration-300 group-hover:size-10 ${position}`}
        />
      ))}
      <div className="relative overflow-hidden">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            width={320}
            height={320}
            className="aspect-square w-full object-cover grayscale-[35%] transition duration-300 group-hover:grayscale-0"
          />
        ) : (
          <div
            role="img"
            aria-label={name}
            className="flex aspect-square items-center justify-center bg-surface-2 font-mono text-6xl font-bold text-accent"
          >
            {getInitials(name)}
          </div>
        )}
        <div
          aria-hidden
          className="scanlines pointer-events-none absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
        />
      </div>
    </div>
  );
}
