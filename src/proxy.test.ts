// @vitest-environment node
import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";
import { proxy } from "./proxy";

const request = (path: string, acceptLanguage?: string) =>
  new NextRequest(`https://example.com${path}`, {
    headers: acceptLanguage ? { "accept-language": acceptLanguage } : {},
  });

describe("proxy", () => {
  it("redirects Spanish browsers to /es", () => {
    const res = proxy(request("/", "es-CO,es;q=0.9,en;q=0.8"));
    expect(res?.headers.get("location")).toBe("https://example.com/es");
  });

  it("redirects everyone else to the default locale", () => {
    const res = proxy(request("/", "fr-FR"));
    expect(res?.headers.get("location")).toBe("https://example.com/en");
  });

  it("keeps the rest of the path", () => {
    const res = proxy(request("/projects", "en-US"));
    expect(res?.headers.get("location")).toBe("https://example.com/en/projects");
  });

  it("leaves localized paths alone", () => {
    expect(proxy(request("/es"))).toBeUndefined();
    expect(proxy(request("/en/anything"))).toBeUndefined();
  });
});
