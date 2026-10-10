import { fireEvent, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { evidenceDocuments } from "../../data/evidence";
import { renderAndCheckA11y } from "../../test/a11y-helpers";
import { MedicalEvidence } from "./MedicalEvidence";

describe("MedicalEvidence", () => {
  it("renders every evidence group with honest publication states and page previews", async () => {
    await renderAndCheckA11y(<MedicalEvidence />);

    expect(evidenceDocuments).toHaveLength(8);
    expect(evidenceDocuments.map((document) => document.id)).toEqual([
      "research-gold-medal",
      "innoverse-catalog",
      "admission-and-graduation",
      "ielts-result",
      "igcse-statement",
      "school-record",
      "community-project-records",
      "hematology-acknowledgement",
    ]);
    expect(
      evidenceDocuments.filter(
        (document) => document.publicationState === "public-sanitized-evidence",
      ),
    ).toHaveLength(3);
    expect(
      evidenceDocuments.filter(
        (document) => document.publicationState === "verified-summary",
      ),
    ).toHaveLength(5);
    expect(screen.getAllByText("Verified summary")).toHaveLength(5);
    expect(screen.getAllByTestId(/^preview-thumbnail-/)).toHaveLength(8);
    expect(
      screen.queryByTestId("evidence-curriculum-vitae"),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("preview-curriculum-vitae"),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: "Download Research project Gold Medal certificate",
      }),
    ).toHaveAttribute("download", "research-gold-medal-certificate.pdf");
  });

  it("opens verified-summary pages without exposing a raw PDF", async () => {
    await renderAndCheckA11y(<MedicalEvidence />);
    fireEvent.click(screen.getByTestId("preview-school-record"));

    const dialog = await screen.findByRole("dialog");
    expect(
      within(dialog).getByText(/private original retained/i),
    ).toBeInTheDocument();
    expect(
      within(dialog).getByTestId("document-page-position"),
    ).toHaveTextContent("Page 1 of 2");
    expect(
      within(dialog).queryByTestId("document-open-pdf"),
    ).not.toBeInTheDocument();
    expect(
      within(dialog).queryByTestId("document-download-pdf"),
    ).not.toBeInTheDocument();

    fireEvent.click(
      within(dialog).getByRole("button", {
        name: "View Summary 2 of Upper-secondary academic record",
      }),
    );
    expect(
      within(dialog).getByTestId("document-page-position"),
    ).toHaveTextContent("Page 2 of 2");
  });

  it("reviews and downloads the research Gold Medal certificate", async () => {
    await renderAndCheckA11y(<MedicalEvidence />);
    fireEvent.click(screen.getByTestId("preview-research-gold-medal"));

    const dialog = await screen.findByRole("dialog");
    expect(
      within(dialog).getByRole("img", {
        name: "Gold Medal certificate for the nanoformulated Cordyceps militaris research project",
      }),
    ).toBeInTheDocument();
    expect(within(dialog).getByTestId("document-open-pdf")).toBeInTheDocument();
    expect(within(dialog).getByTestId("document-download-pdf")).toHaveAttribute(
      "download",
      "research-gold-medal-certificate.pdf",
    );
  });

  it("previews the catalog cover and project page while offering all 79 pages", async () => {
    await renderAndCheckA11y(<MedicalEvidence />);
    fireEvent.click(screen.getByTestId("preview-innoverse-catalog"));
    const dialog = await screen.findByRole("dialog");
    expect(
      within(dialog).getByText(/Official project booklet · 79 pages/),
    ).toBeInTheDocument();
    expect(within(dialog).getByText("Selected pages")).toBeInTheDocument();
    expect(
      within(dialog).getByTestId("document-page-position"),
    ).toHaveTextContent("Preview 1 of 2");
    fireEvent.click(within(dialog).getByTestId("document-page-next"));
    expect(
      within(dialog).getByTestId("document-selected-page"),
    ).toHaveAttribute("src", "/documents/pages/innoverse-catalog-project.webp");
    expect(within(dialog).getByTestId("document-download-pdf")).toHaveAttribute(
      "download",
      "innoverse-2026-catalog.pdf",
    );
    expect(
      within(dialog).getByTestId("document-open-pdf").getAttribute("href"),
    ).toMatch(/#page=77$/);
  });
});
