export function Footer({ credits }: { credits: string }) {
  return (
    <footer className="py-10 text-center font-mono text-xs text-muted">
      © {new Date().getFullYear()} · {credits}
    </footer>
  );
}
