export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  overview: string;
  contributions?: string[];
  topics?: string[];
  isAcademic?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    id: "uin-bandung",
    role: "Informatics Engineering Student",
    organization: "UIN Sunan Gunung Djati Bandung",
    period: "2022 — Present",
    overview: "Focusing on software engineering, backend systems, and AI-assisted development. Exploring system architecture and human-centered technology.",
    topics: ["Software Engineering", "System Architecture", "HCI", "Backend Systems"],
    isAcademic: true
  },
  {
    id: "independent-projects",
    role: "Software Developer",
    organization: "Independent Technical Projects",
    period: "Ongoing",
    overview: "Developing software projects focused on modern engineering workflows and AI-assisted development. Exploring scalable architecture and developer tooling.",
    topics: ["Full-stack", "API Development", "Developer Tooling", "Product Engineering"]
  },
  {
    id: "research-writing",
    role: "Research and Technical Writing",
    organization: "Human–Computer Interaction Research",
    period: "2024 — Present",
    overview: "Conducting academic and technical explorations related to HCI and behavioral technology. Analyzing digital behavior and system usability.",
    topics: ["Digital Behavior", "System Usability", "Behavioral Design", "HCI"]
  },
  {
    id: "organizational",
    role: "Organizational Contributor",
    organization: "Student Student Organizational Activities",
    period: "Ongoing",
    overview: "Optimizing administrative workflows and digital documentation management. improving collaborative workflows within academic environments.",
    contributions: ["System structuring", "Workflow management", "Digital coordination"]
  },
  {
    id: "teaching",
    role: "Technical Mentor",
    organization: "Digital Literacy Initiatives",
    period: "Ongoing",
    overview: "Providing guidance on website development and digital tools for non-technical audiences. Simplifying complex technical concepts.",
    topics: ["Web Development", "Digital Literacy", "UI Understanding"]
  }
];
