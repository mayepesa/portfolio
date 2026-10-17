"use client";

import { useEffect, useRef } from "react";
import { portrait } from "@/content/portrait";
import { prefersReducedMotion } from "@/lib/motion";

const DENSITY = ".:-=+*#%@";
const GLYPHS = "01<>/\\{}[]=+*#$%&?!";
const DECODE_MS = 1400;
const HOVER_RADIUS = 7;
const FLICKER_MS = 70;

type Cell = {
  col: number;
  row: number;
  char: string;
  alpha: number;
  glyph: string;
  settleAt: number;
};

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

function createCells(): Cell[] {
  return portrait.lines.flatMap((line, row) =>
    [...line].flatMap((char, col) =>
      char === " "
        ? []
        : {
            col,
            row,
            char,
            alpha: 0.3 + (DENSITY.indexOf(char) / (DENSITY.length - 1)) * 0.7,
            glyph: randomGlyph(),
            settleAt: 0,
          },
    ),
  );
}

export function AsciiPortrait({ label, className = "" }: { label: string; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const root = getComputedStyle(document.documentElement);
    const color = root.getPropertyValue("--color-accent-soft").trim() || "#b8baff";
    const glowColor = root.getPropertyValue("--color-highlight").trim() || color;
    const fontFamily = getComputedStyle(canvas).fontFamily;
    const cells = createCells();
    const pointer = { col: 0, row: 0, active: false };

    let size = 0;
    let cell = 0;
    let frame = 0;
    let visible = false;
    let lastFlicker = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      size = canvas.clientWidth;
      cell = size / portrait.cols;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${cell * 1.5}px ${fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
    };

    const draw = (now: number) => {
      const flicker = now - lastFlicker > FLICKER_MS;
      if (flicker) lastFlicker = now;
      const rowHeight = size / portrait.rows;
      let pending = false;

      ctx.clearRect(0, 0, size, size);
      for (const c of cells) {
        const decoding = now < c.settleAt;
        let alpha = c.alpha;

        if (decoding) {
          pending = true;
          if (flicker) c.glyph = randomGlyph();
          ctx.fillStyle = glowColor;
        } else {
          ctx.fillStyle = color;
        }

        if (pointer.active) {
          const dist = Math.hypot(c.col - pointer.col, (c.row - pointer.row) * 1.6);
          if (dist < HOVER_RADIUS) {
            alpha = Math.min(1, alpha + (1 - dist / HOVER_RADIUS) * 0.6);
            if (!decoding && Math.random() < 0.08) c.settleAt = now + 150 + Math.random() * 350;
          }
        }

        ctx.globalAlpha = decoding ? alpha * 0.8 : alpha;
        ctx.fillText(decoding ? c.glyph : c.char, (c.col + 0.5) * cell, (c.row + 0.5) * rowHeight);
      }
      return pending;
    };

    const tick = (now: number) => {
      const pending = draw(now);
      frame = (pending || pointer.active) && visible ? requestAnimationFrame(tick) : 0;
    };

    const start = () => {
      if (visible && !frame) frame = requestAnimationFrame(tick);
    };

    resize();

    if (prefersReducedMotion()) {
      draw(0);
      const observer = new ResizeObserver(() => {
        resize();
        draw(0);
      });
      observer.observe(canvas);
      return () => observer.disconnect();
    }

    const t0 = performance.now();
    for (const c of cells) {
      c.settleAt = t0 + (c.row / portrait.rows) * DECODE_MS + Math.random() * 400;
    }

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.col = ((e.clientX - rect.left) / rect.width) * portrait.cols;
      pointer.row = ((e.clientY - rect.top) / rect.height) * portrait.rows;
      pointer.active = true;
      start();
    };

    const onPointerLeave = () => {
      pointer.active = false;
      start();
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw(performance.now());
      start();
    });
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    intersectionObserver.observe(canvas);

    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={label}
      className={`aspect-square w-full cursor-crosshair font-mono ${className}`}
    />
  );
}
