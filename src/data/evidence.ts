import hematologyAcknowledgementUrl from "../assets/documents/hematology-volunteering-acknowledgement.pdf";
import cvUrl from "../assets/documents/nguyen-tuan-gia-linh-cv.pdf";
import researchAwardCertificateUrl from "../assets/documents/research-gold-medal-certificate.pdf";
import innoverseCatalogUrl from "../assets/documents/innoverse-2026-catalog.pdf";
import type { EvidenceDocument } from "../types/medical";

const documents = (
  [
    {
      id: "innoverse-catalog",
      significanceRank: 2,
      title: "Innoverse 2026 official project catalog",
      category: "Research publication",
      summary:
        "Our four-person team’s Cordyceps militaris project is listed as VN.4 in the official Idea & Invention project booklet.",
      sourceNote:
        "Find our entry on printed page 73 (PDF page 77). Preview the cover and project page, or download the full 79-page catalog.",
      availability: "preview-and-download",
      sourceType: "Official project booklet",
      publicationState: "public-sanitized-evidence",
      provenance:
        "Owner-supplied Innoverse 2026 catalog; VN.4 title and all four inventors visually cross-checked on PDF page 77.",
      redactionNote:
        "The catalog title says Cordyceps militaris, but its abstract says Ganoderma lucidum. The source wording is preserved here; the project description follows the matching title and research records.",
      pageCount: 79,
      previewScope: "selected-pages",
      pages: [
        {
          id: "innoverse-catalog-cover",
          pdfPageNumber: 1,
          label: "Cover",
          imageUrl: "/documents/pages/innoverse-catalog-cover.webp",
          alt: "Cover of the Innoverse 2026 official Idea & Invention project booklet",
        },
        {
          id: "innoverse-catalog-project",
          pdfPageNumber: 77,
          label: "VN.4 · printed page 73",
          imageUrl: "/documents/pages/innoverse-catalog-project.webp",
          alt: "Printed page 73 of the Innoverse 2026 catalog listing Nguyen Tuan Gia Linh and the four-person Cordyceps militaris project team as VN.4",
        },
      ],
      downloadPolicy: "download",
      assetUrl: innoverseCatalogUrl,
      downloadName: "innoverse-2026-catalog.pdf",
      thumbnailUrl: "/documents/pages/innoverse-catalog-cover.webp",
      thumbnailAlt: "Cover of the Innoverse 2026 official project catalog",
    },
    {
      id: "curriculum-vitae",
      significanceRank: 7,
      title: "Curriculum Vitae",
      category: "Profile",
      summary:
        "Two-page overview of education, research, service, and extracurricular experience.",
      sourceNote:
        "My CV covers my education, research, volunteering, and other activities.",
      availability: "preview-and-download",
      sourceType: "Owner-supplied curriculum vitae",
      publicationState: "public-sanitized-evidence",
      provenance:
        "Reviewed two-page CV supplied separately by the portfolio owner.",
      redactionNote:
        "Reviewed public copy; no private contact details are exposed.",
      pageCount: 2,
      pages: [
        {
          id: "cv-page-1",
          label: "Page 1",
          imageUrl: "/documents/pages/cv-01.webp",
          alt: "Page 1 of Nguyễn Tuấn Gia Linh's curriculum vitae",
        },
        {
          id: "cv-page-2",
          label: "Page 2",
          imageUrl: "/documents/pages/cv-02.webp",
          alt: "Page 2 of Nguyễn Tuấn Gia Linh's curriculum vitae",
        },
      ],
      downloadPolicy: "download",
      assetUrl: cvUrl,
      downloadName: "nguyen-tuan-gia-linh-cv.pdf",
      thumbnailUrl: "/documents/pages/cv-01.webp",
      thumbnailAlt:
        "First page preview of Nguyễn Tuấn Gia Linh's curriculum vitae",
    },
    {
      id: "hematology-acknowledgement",
      significanceRank: 9,
      title: "Hematology volunteering acknowledgement",
      category: "Community service",
      summary:
        "Acknowledgement of the 30 July 2026 pediatric gift-giving activity.",
      sourceNote:
        "A letter acknowledging our group’s visit and gifts to children receiving treatment.",
      availability: "preview-and-download",
      sourceType: "Institutional acknowledgement",
      publicationState: "public-sanitized-evidence",
      provenance:
        "Sanitized derivative of the acknowledgement supplied in the hematology activity folder.",
      redactionNote:
        "External action link removed; substantive acknowledgement preserved.",
      pageCount: 1,
      pages: [
        {
          id: "hematology-page-1",
          label: "Page 1",
          imageUrl: "/documents/pages/hematology-01.jpg",
          alt: "Sanitized hematology volunteering acknowledgement page",
        },
      ],
      downloadPolicy: "download",
      assetUrl: hematologyAcknowledgementUrl,
      downloadName: "hematology-volunteering-acknowledgement.pdf",
      thumbnailUrl: "/documents/pages/hematology-01.jpg",
      thumbnailAlt:
        "First page preview of the hematology volunteering acknowledgement letter",
    },
    {
      id: "school-record",
      significanceRank: 6,
      title: "Upper-secondary academic record",
      category: "Academic record",
      summary:
        "Verified Grade 10–12 GPA, recognition, and subject-result highlights.",
      sourceNote:
        "A summary of my school results. The original record is kept private because it includes personal details.",
      availability: "preview-only",
      sourceType: "Private school record",
      publicationState: "verified-summary",
      provenance:
        "Values cross-checked against the supplied Grade 10–12 record.",
      redactionNote:
        "This summary shares my results without my photo or personal identifiers.",
      pageCount: 2,
      pages: [
        {
          id: "school-record-summary-1",
          label: "Summary 1",
          imageUrl: "/documents/pages/school-record-summary-01.svg",
          alt: "Verified summary of Grade 10 to 12 GPA and excellent-student recognition",
        },
        {
          id: "school-record-summary-2",
          label: "Summary 2",
          imageUrl: "/documents/pages/school-record-summary-02.svg",
          alt: "Verified summary of Grade 12 subject highlights",
        },
      ],
      downloadPolicy: "none",
      thumbnailUrl: "/documents/pages/school-record-summary-01.svg",
      thumbnailAlt: "Verified upper-secondary academic record summary",
    },
    {
      id: "igcse-statement",
      significanceRank: 5,
      title: "Cambridge IGCSE statement",
      category: "Qualification",
      summary:
        "Verified five subject grades and percentage uniform marks from June 2024.",
      sourceNote:
        "My grades and marks from the June 2024 exams, with personal details kept private.",
      availability: "preview-only",
      sourceType: "Private official result statement",
      publicationState: "verified-summary",
      provenance:
        "Grades and percentage uniform marks cross-checked against the supplied statement.",
      redactionNote: "My date of birth and candidate details are kept private.",
      pageCount: 1,
      pages: [
        {
          id: "igcse-summary",
          label: "Summary",
          imageUrl: "/documents/pages/igcse-summary.svg",
          alt: "Verified Cambridge IGCSE grade and percentage uniform mark summary",
        },
      ],
      downloadPolicy: "none",
      thumbnailUrl: "/documents/pages/igcse-summary.svg",
      thumbnailAlt: "Verified Cambridge IGCSE result summary",
    },
    {
      id: "ielts-result",
      significanceRank: 4,
      title: "IELTS Academic result",
      category: "Qualification",
      summary:
        "Official overall band 7.5 with Listening 8.5, Reading 8.0, Writing 7.0, Speaking 6.5, and CEFR C1.",
      sourceNote:
        "These scores are from my official IELTS report. My photo and candidate details are kept private.",
      availability: "preview-only",
      sourceType: "Private official IELTS report",
      publicationState: "verified-summary",
      provenance:
        "Scores cross-checked against the owner-supplied official result document dated 14 August 2026.",
      redactionNote: "My photo and candidate details are kept private.",
      pageCount: 1,
      pages: [
        {
          id: "ielts-summary",
          label: "Summary",
          imageUrl: "/documents/pages/ielts-summary.svg",
          alt: "Verified IELTS Academic overall and component score summary",
        },
      ],
      downloadPolicy: "none",
      thumbnailUrl: "/documents/pages/ielts-summary.svg",
      thumbnailAlt: "Verified IELTS Academic result summary",
    },
    {
      id: "research-gold-medal",
      significanceRank: 1,
      title: "Research project Gold Medal certificate",
      category: "Research recognition",
      summary:
        "Gold Medal awarded to the four-person project team for the nanoformulated Cordyceps militaris research project at the Innoverse Invention & Innovation Expo.",
      sourceNote: "Our team’s certificate, dated 24 August 2026.",
      availability: "preview-and-download",
      sourceType: "Research award certificate",
      publicationState: "public-sanitized-evidence",
      provenance:
        "Owner-supplied one-page certificate reviewed visually against the existing research project title.",
      redactionNote:
        "This copy shows the award, our team names, and the certificate’s verification mark.",
      pageCount: 1,
      pages: [
        {
          id: "research-gold-medal-page-1",
          label: "Page 1",
          imageUrl: "/documents/pages/research-gold-medal-certificate.jpg",
          alt: "Gold Medal certificate for the nanoformulated Cordyceps militaris research project",
        },
      ],
      downloadPolicy: "download",
      assetUrl: researchAwardCertificateUrl,
      downloadName: "research-gold-medal-certificate.pdf",
      thumbnailUrl: "/documents/pages/research-gold-medal-certificate.jpg",
      thumbnailAlt: "Preview of the research project Gold Medal certificate",
    },
    {
      id: "admission-and-graduation",
      significanceRank: 3,
      title: "Admission and graduation records",
      category: "Milestones",
      summary:
        "Verified 2026 upper-secondary completion and Medicine program admission with a score of 27.20.",
      sourceNote:
        "Summaries of my graduation and admission records, with personal details kept private.",
      availability: "preview-only",
      sourceType: "Private diploma and admission notice",
      publicationState: "verified-summary",
      provenance:
        "Milestones cross-checked against the supplied diploma and admission notice.",
      redactionNote:
        "These summaries share the key milestones while keeping personal details private.",
      pageCount: 2,
      pages: [
        {
          id: "admission-summary",
          label: "Admission",
          imageUrl: "/documents/pages/admission-summary.svg",
          alt: "Verified summary of 2026 Medicine program admission and score 27.20",
        },
        {
          id: "graduation-summary",
          label: "Graduation",
          imageUrl: "/documents/pages/graduation-summary.svg",
          alt: "Verified summary of 2026 upper-secondary school completion",
        },
      ],
      downloadPolicy: "none",
      thumbnailUrl: "/documents/pages/admission-summary.svg",
      thumbnailAlt: "Verified Medicine program admission summary",
    },
    {
      id: "community-project-records",
      significanceRank: 8,
      title: "Community project records",
      category: "Community service",
      summary:
        "Verified collective outcomes from the multi-year school project and 2025 Lunar New Year support program.",
      sourceNote:
        "Summaries of the projects I joined. Contact information and other people’s personal details are kept private.",
      availability: "preview-only",
      sourceType: "Private DOCX records and documentary screenshots",
      publicationState: "verified-summary",
      provenance:
        "Facts cross-checked against both project documents, supporting screenshots, and the formal thank-you record.",
      redactionNote:
        "Bank details, contact information, and donor details are kept private.",
      pageCount: 3,
      pages: [
        {
          id: "community-project-summary-1",
          label: "Project 1",
          imageUrl: "/documents/pages/community-project-summary-01.svg",
          alt: "Verified summary of the Walking With You to School project and support for 50 children",
        },
        {
          id: "community-project-summary-2",
          label: "Project 2",
          imageUrl: "/documents/pages/community-project-summary-02.svg",
          alt: "Verified summary of collective school and wider community project outcomes",
        },
        {
          id: "lunar-new-year-summary",
          label: "Lunar New Year",
          imageUrl: "/documents/pages/lunar-new-year-summary.svg",
          alt: "Verified summary of the 2025 Lunar New Year support program and 165 gifts",
        },
      ],
      downloadPolicy: "none",
      thumbnailUrl: "/documents/pages/community-project-summary-01.svg",
      thumbnailAlt: "Verified community project records summary",
    },
  ] satisfies EvidenceDocument[]
).sort((first, second) => first.significanceRank - second.significanceRank);

const curriculumVitaeDocument = documents.find(
  (document) => document.id === "curriculum-vitae",
);

if (!curriculumVitaeDocument) {
  throw new Error("Curriculum vitae evidence document is required");
}

export const cvDocument = curriculumVitaeDocument;

const catalogDocument = documents.find(
  (document) => document.id === "innoverse-catalog",
);

if (!catalogDocument) {
  throw new Error("Innoverse catalog document is required");
}

export const researchCatalogDocument = catalogDocument;

// The CV is available in the introduction; the library contains supporting records.
export const evidenceDocuments = documents.filter(
  (document) => document.id !== "curriculum-vitae",
);
