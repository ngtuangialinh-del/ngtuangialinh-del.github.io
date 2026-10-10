import type { Identity } from "../types/medical";

export const identity = {
  name: "Nguyễn Tuấn Gia Linh",
  statusStatement:
    "Incoming medical student, admitted to the Medicine program at the University of Medicine and Pharmacy, Thai Nguyen University.",
  valueStatement:
    "Hi, I’m Linh, a Nguyễn Siêu School graduate excited to study medicine. Take a look around to explore my schoolwork, our Cordyceps research project, and volunteering with my classmates.",
  profileImage: {
    src: "/profile/gia-linh-profile.jpg",
    alt: "Portrait of Nguyễn Tuấn Gia Linh in Nguyễn Siêu School uniform",
    objectPosition: "50% 30%",
  },
  primaryCtas: [
    {
      label: "My Medical Journey",
      targetSectionId: "medical-journey",
      ariaLabel: "Scroll to the Medical Journey section",
    },
    {
      label: "Community Care",
      targetSectionId: "community-care",
      ariaLabel: "Scroll to the Community Care section",
    },
  ],
} satisfies Identity;
