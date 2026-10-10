import {
  fireEvent,
  screen,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderAndCheckA11y } from "../../test/a11y-helpers";
import { MedicalResearch } from "./MedicalResearch";

describe("MedicalResearch", () => {
  it("presents the award, methods, and reported measurements", async () => {
    await renderAndCheckA11y(<MedicalResearch />);

    expect(
      screen.getByRole("heading", { name: "Research" }),
    ).toBeInTheDocument();
    expect(screen.getByText("325 nm")).toBeInTheDocument();
    expect(screen.getByText("119.85 µg/mL")).toBeInTheDocument();
    expect(screen.getByTestId("research-recognition")).toHaveTextContent(
      "Gold Medal · Innoverse Invention & Innovation Expo",
    );
    expect(
      screen.getByText(/awarded jointly to the four-person project team/i),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("editorial-figure-research-nanoformulation-collage"),
    ).toBeInTheDocument();
    expect(screen.queryByText(/AI-generated/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/scope and limitation/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/clinical efficacy/i)).not.toBeInTheDocument();
  });

  it("opens the catalog directly at VN.4 and offers the full download", async () => {
    await renderAndCheckA11y(<MedicalResearch />);
    expect(screen.getByTestId("research-download-catalog")).toHaveAttribute(
      "download",
      "innoverse-2026-catalog.pdf",
    );
    fireEvent.click(screen.getByTestId("research-preview-catalog"));
    const dialog = await screen.findByRole("dialog");
    expect(
      within(dialog).getByTestId("document-page-position"),
    ).toHaveTextContent("Preview 2 of 2");
    expect(
      within(dialog).getByTestId("document-selected-page"),
    ).toHaveAttribute("src", "/documents/pages/innoverse-catalog-project.webp");
    expect(
      within(dialog).getByTestId("document-open-pdf").getAttribute("href"),
    ).toMatch(/#page=77$/);
    expect(
      within(dialog).getByText(/abstract says Ganoderma lucidum/),
    ).toBeInTheDocument();
    fireEvent.click(within(dialog).getByTestId("document-preview-close"));
    await waitForElementToBeRemoved(() => screen.queryByRole("dialog"));
  });
});
