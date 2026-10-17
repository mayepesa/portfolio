import { parseHighlights } from "@/lib/text";

export function RichText({ text }: { text: string }) {
  return parseHighlights(text).map((segment, i) =>
    segment.highlight ? (
      <strong key={i} className="font-medium text-highlight">
        {segment.text}
      </strong>
    ) : (
      segment.text
    ),
  );
}
