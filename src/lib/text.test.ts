import { describe, expect, it } from "vitest";
import { getHandle, getInitials, getMailtoHref, parseHighlights } from "./text";

describe("getInitials", () => {
  it("takes the first letter of the first two words", () => {
    expect(getInitials("Maria Alejandra Yepes")).toBe("MA");
  });

  it("ignores extra spaces and uppercases", () => {
    expect(getInitials("  ana   lopez ")).toBe("AL");
  });
});

describe("getHandle", () => {
  it("joins first and last name in lowercase", () => {
    expect(getHandle("Maria Alejandra Yepes")).toBe("maria.yepes");
  });

  it("returns the single word when there is only one", () => {
    expect(getHandle("Maria")).toBe("maria");
  });
});

describe("getMailtoHref", () => {
  it("adds an encoded subject", () => {
    expect(getMailtoHref("ana@mail.com", "Hola, Ana")).toBe(
      "mailto:ana@mail.com?subject=Hola%2C%20Ana",
    );
  });

  it("works without a subject", () => {
    expect(getMailtoHref("ana@mail.com")).toBe("mailto:ana@mail.com");
  });
});

describe("parseHighlights", () => {
  it("splits plain and highlighted segments", () => {
    expect(parseHighlights("I want **creative projects** next.")).toEqual([
      { text: "I want ", highlight: false },
      { text: "creative projects", highlight: true },
      { text: " next.", highlight: false },
    ]);
  });

  it("returns one plain segment when there are no markers", () => {
    expect(parseHighlights("Plain text")).toEqual([{ text: "Plain text", highlight: false }]);
  });
});
