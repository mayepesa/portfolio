import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RichText } from "./RichText";

describe("RichText", () => {
  it("renders highlighted words as <strong> without raw HTML", () => {
    render(
      <p>
        <RichText text="Looking for **challenging projects** <b>now</b>" />
      </p>,
    );
    expect(screen.getByText("challenging projects").tagName).toBe("STRONG");
    expect(screen.getByText(/<b>now<\/b>/)).toBeInTheDocument();
  });
});
