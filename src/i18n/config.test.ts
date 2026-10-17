import { describe, expect, it } from "vitest";
import { getAlternateLocale, hasLocale } from "./config";

describe("hasLocale", () => {
  it("accepts supported locales", () => {
    expect(hasLocale("en")).toBe(true);
    expect(hasLocale("es")).toBe(true);
  });

  it("rejects anything else", () => {
    expect(hasLocale("fr")).toBe(false);
    expect(hasLocale("")).toBe(false);
  });
});

describe("getAlternateLocale", () => {
  it("toggles between English and Spanish", () => {
    expect(getAlternateLocale("en")).toBe("es");
    expect(getAlternateLocale("es")).toBe("en");
  });
});
