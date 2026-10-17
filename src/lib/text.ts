export function getInitials(name: string, max = 2): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, max)
    .map((word) => word[0].toUpperCase())
    .join("");
}

export type TextSegment = { text: string; highlight: boolean };

export function parseHighlights(text: string): TextSegment[] {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((part) =>
      part.startsWith("**") && part.endsWith("**")
        ? { text: part.slice(2, -2), highlight: true }
        : { text: part, highlight: false },
    );
}

export function getMailtoHref(email: string, subject?: string): string {
  return subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`;
}

export function getHandle(name: string): string {
  const words = name.toLowerCase().split(/\s+/).filter(Boolean);
  return words.length > 1 ? `${words[0]}.${words.at(-1)}` : (words[0] ?? "");
}
