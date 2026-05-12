import React from "react";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";

export const metadata = {
  title: "Projects",
  description: "Technical case studies and software engineering projects.",
};

export default function ProjectsPage() {
  return (
    <div className="py-20 md:py-32">
      <Container>
        <div className="max-w-3xl mb-16 md:mb-24">
          <Text variant="eyebrow" className="text-lavender mb-4">
            Portfolio
          </Text>
          <Heading variant="display-lg" className="mb-6">
            Engineering Projects
          </Heading>
          <Text variant="body-lg" className="text-ink-muted">
            A collection of systems, tools, and research explorations. Each project represents a specific engineering challenge and a structured solution.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </div>
  );
}
