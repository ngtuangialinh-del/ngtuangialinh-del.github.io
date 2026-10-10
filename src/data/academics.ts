import type { AcademicsContent, JourneyMilestone } from "../types/medical";

export const academics = {
  igcse: {
    label: "Cambridge IGCSE — June 2024",
    scaleDescription: "Cambridge IGCSE grade and percentage uniform mark",
    entries: [
      { subjectOrLabel: "Mathematics", value: "A*", scaleNote: "92%" },
      {
        subjectOrLabel: "English as a Second Language",
        value: "A",
        scaleNote: "88%",
      },
      { subjectOrLabel: "Physics", value: "A", scaleNote: "88%" },
      { subjectOrLabel: "Biology", value: "A", scaleNote: "83%" },
      { subjectOrLabel: "Chemistry", value: "A", scaleNote: "83%" },
    ],
  },
  aLevels: {
    label: "A Level Results — CV-listed",
    scaleDescription: "Subject grades reported in the student CV",
    entries: [
      { subjectOrLabel: "Biology", value: "A" },
      { subjectOrLabel: "Mathematics", value: "A" },
      { subjectOrLabel: "Chemistry", value: "B" },
    ],
  },
  ielts: {
    label: "IELTS Academic",
    scaleDescription: "IELTS band score (0–9 scale), CEFR C1",
    entries: [
      { subjectOrLabel: "Overall", value: "7.5", scaleNote: "CEFR C1" },
      { subjectOrLabel: "Listening", value: "8.5" },
      { subjectOrLabel: "Reading", value: "8.0" },
      { subjectOrLabel: "Writing", value: "7.0" },
      { subjectOrLabel: "Speaking", value: "6.5" },
    ],
  },
  gpaSummary: {
    label: "Upper-secondary GPA",
    scaleDescription: "Annual average on Vietnam's 10-point school scale",
    entries: [
      { subjectOrLabel: "Grade 10", value: "9.0", scaleNote: "out of 10" },
      { subjectOrLabel: "Grade 11", value: "9.2", scaleNote: "out of 10" },
      { subjectOrLabel: "Grade 12", value: "9.4", scaleNote: "out of 10" },
    ],
  },
  grade12: {
    label: "Grade 12 Results",
    scaleDescription: "Annual average on Vietnam's 10-point school scale",
    entries: [
      { subjectOrLabel: "English", value: "9.8" },
      { subjectOrLabel: "Biology", value: "9.8" },
      { subjectOrLabel: "History", value: "9.8" },
      { subjectOrLabel: "Computer Science", value: "9.8" },
      { subjectOrLabel: "Chemistry", value: "9.4" },
      { subjectOrLabel: "Mathematics", value: "8.6" },
      { subjectOrLabel: "Literature", value: "7.8" },
    ],
  },
  recognitions: [
    "Recognized as an Excellent Student in Grade 10",
    "Recognized as an Excellent Student in Grade 11",
    "Recognized as an Excellent Student in Grade 12",
  ],
  admissionScore: {
    subjectOrLabel: "Medicine program admission score",
    value: "27.20",
    scaleNote:
      "University of Medicine and Pharmacy, Thai Nguyen University — 2026 admission notice",
  },
} satisfies AcademicsContent;

export const journeyMilestones = [
  {
    id: "school",
    label: "Nguyễn Siêu School",
    description:
      "I studied at Nguyễn Siêu School in Hanoi, where I focused on science and English during Grades 10–12.",
    period: "2023–2026",
  },
  {
    id: "strengths",
    label: "Strength in Science and English",
    description:
      "Mathematics, science, and English were my strongest subjects. I also took Cambridge IGCSE exams and IELTS Academic.",
  },
  {
    id: "service",
    label: "Volunteering with Classmates",
    description:
      "During secondary school, I joined my classmates in volunteer projects supporting children and families.",
  },
  {
    id: "admission",
    label: "Medicine Program Admission",
    description:
      "I was admitted to the Medicine program at the University of Medicine and Pharmacy, Thai Nguyen University, based on my school results.",
    period: "2026",
  },
] satisfies JourneyMilestone[];
