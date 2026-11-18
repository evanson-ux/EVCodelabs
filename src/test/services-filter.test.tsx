import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { FilterValue } from "@/components/brand/services";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ to, params, children, ...rest }: {
    to: string;
    params?: { slug?: string };
    children: React.ReactNode;
  }) => {
    const href = to === "/services/$slug" && params?.slug ? `/services/${params.slug}` : to;
    return <a href={href} {...rest}>{children}</a>;
  },
}));

import { ServicesOverview } from "@/components/brand/services";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

function FilterHarness() {
  const [filter, setFilter] = useState<FilterValue>("all");
  return <ServicesOverview filter={filter} onFilterChange={setFilter} />;
}

describe("services category filters", () => {
  let scrollIntoView: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    scrollIntoView = vi.fn();
    Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
      configurable: true,
      value: scrollIntoView,
    });
  });

  it("shows and scrolls to the selected category, and ALL returns to every service", async () => {
    const { container } = render(<FilterHarness />);

    fireEvent.click(screen.getByRole("button", { name: "GROW" }));

    await waitFor(() => expect(container.querySelectorAll(".service-summary")).toHaveLength(3));
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth", block: "start" });
    expect(scrollIntoView.mock.contexts[0]).toBe(container.querySelector("#pillar-group-grow"));

    fireEvent.click(screen.getByRole("button", { name: "ALL" }));

    await waitFor(() => expect(container.querySelectorAll(".service-summary")).toHaveLength(13));
    expect(scrollIntoView.mock.contexts[1]).toBe(container.querySelector("#service-groups"));
  });

  it("uses non-animated scrolling when reduced motion is preferred", async () => {
    vi.spyOn(window, "matchMedia").mockReturnValue({ matches: true } as MediaQueryList);
    const { container } = render(<FilterHarness />);

    fireEvent.click(screen.getByRole("button", { name: "SCALE" }));

    await waitFor(() => expect(container.querySelectorAll(".service-summary")).toHaveLength(3));
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "auto", block: "start" });
  });
});