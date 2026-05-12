import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "verilog",
    title: "VeriLog Audit Engine",
    category: "Distributed Systems · Security Engineering",
    status: "In Development",
    overview: "A decentralized and tamper-evident audit logging system designed for distributed and microservice-based environments. Focuses on preserving log integrity using cryptographic verification.",
    technicalFocus: [
      "Distributed systems",
      "Cryptographic verification",
      "Audit architecture",
      "High-performance backend",
      "Concurrent processing"
    ],
    stack: ["Rust", "Axum", "PostgreSQL", "Docker", "Blockchain"],
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    id: "sleeptrack",
    title: "SleepTrack",
    category: "Human–Computer Interaction · Behavioral Technology",
    status: "Research Concept",
    overview: "A behavioral design application focused on improving sleep quality by analyzing digital habits and screen-time behavior. Combines HCI principles with behavioral change methodologies.",
    technicalFocus: [
      "Human–Computer Interaction",
      "Behavioral Change Design",
      "UX Research",
      "Data Visualization"
    ],
    stack: ["Figma", "React", "Firebase", "D3.js"],
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    id: "academic-systems",
    title: "Academic & Organizational Systems",
    category: "Information Systems · Administration",
    status: "Completed",
    overview: "A collection of smaller systems and organizational digital workflows developed for academic and student organizational activities.",
    technicalFocus: [
      "Administrative systems",
      "Digital workflow organization",
      "Documentation systems",
      "Student information flow"
    ],
    stack: ["Laravel", "MySQL", "TailwindCSS", "PHP"],
    links: {
      github: "#"
    }
  }
];
