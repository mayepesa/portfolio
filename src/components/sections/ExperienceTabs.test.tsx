import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import type { Job } from "@/content/types";
import { ExperienceTabs } from "./ExperienceTabs";

const job = (company: string): Job => ({
  company,
  title: { en: `Dev at ${company}`, es: `Dev en ${company}` },
  period: { en: "2024", es: "2024" },
  bullets: { en: [`Built things at ${company}`], es: [`Construí cosas en ${company}`] },
});

const jobs = [job("Acme"), job("Globex"), job("Initech")];

const renderTabs = (locale: "en" | "es" = "en") =>
  render(<ExperienceTabs jobs={jobs} locale={locale} label="Companies" />);

describe("ExperienceTabs", () => {
  it("shows the first job by default", () => {
    renderTabs();
    expect(screen.getByRole("tab", { name: "Acme" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Built things at Acme");
  });

  it("switches job on click", async () => {
    renderTabs();
    await userEvent.click(screen.getByRole("tab", { name: "Globex" }));
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Built things at Globex");
  });

  it("moves with arrow keys and wraps around", async () => {
    renderTabs();
    await userEvent.click(screen.getByRole("tab", { name: "Acme" }));
    await userEvent.keyboard("{ArrowUp}");
    expect(screen.getByRole("tab", { name: "Initech" })).toHaveFocus();
    await userEvent.keyboard("{Home}");
    expect(screen.getByRole("tab", { name: "Acme" })).toHaveAttribute("aria-selected", "true");
  });

  it("renders the selected language", () => {
    renderTabs("es");
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Construí cosas en Acme");
  });
});
