import type { CommunityStory } from "../types/medical";

export const communityStories = [
  {
    id: "pediatric-hematology",
    title: "Pediatric Hematology Support",
    date: "2026-07-30",
    summary:
      "I joined a gift-giving activity at the National Institute of Hematology and Blood Transfusion. Together, our group delivered 100 gifts to children receiving treatment.",
    attribution: "collective",
    relatedImageIds: ["hematology-1"],
  },
  {
    id: "cung-em-vung-buoc",
    title: "“Cùng em vững bước tới trường” Class Project",
    date: "2022 – 2025",
    summary:
      "Over three school years, my classmates and I helped support 50 preschool children in Bát Xát, Lào Cai. Our class contributed school supplies, warm clothing, meals, and improvements to school and community facilities.",
    attribution: "collective",
    relatedImageIds: ["cung-em-1", "cung-em-2"],
  },
  {
    id: "lunar-new-year-2025",
    title: "2025 Lunar New Year Support Program",
    date: "2025-01-05",
    summary:
      "I joined my Nguyễn Siêu classmates in a Lunar New Year program for visually impaired people in Ý Yên and families affected by Agent Orange in Thái Bình. Together, we distributed 165 gifts.",
    attribution: "collective",
    relatedImageIds: ["tet-1", "tet-2"],
  },
  {
    id: "the-will-and-the-way",
    title: "“The Will & The Way” Ceremony",
    date: "2023",
    summary:
      "I performed in “The Will & The Way” ceremony and helped with event operations as part of the production team.",
    attribution: "collective",
  },
] satisfies CommunityStory[];
