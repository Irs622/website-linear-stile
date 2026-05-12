import React from "react";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Cpu, Globe, Layout, Shield, Terminal, Zap } from "lucide-react";

const focusAreas = [
  {
    icon: Terminal,
    title: "Software Engineering",
    description: "Building robust, maintainable systems with a focus on clean architecture and performance."
  },
  {
    icon: Cpu,
    title: "AI-Assisted Development",
    description: "Leveraging AI tools to accelerate the engineering process without compromising structural integrity."
  },
  {
    icon: Shield,
    title: "System Architecture",
    description: "Designing scalable and secure digital infrastructures that solve real-world problems."
  },
  {
    icon: Layout,
    title: "Product Engineering",
    description: "Bridging the gap between technical requirements and human-centered design principles."
  },
  {
    icon: Globe,
    title: "Web Systems",
    description: "Creating modern, responsive web applications using industry-leading frameworks."
  },
  {
    icon: Zap,
    title: "Technical Writing",
    description: "Distilling complex engineering concepts into clear, actionable documentation and research."
  }
];

export const TechnicalFocus = () => {
  return (
    <section className="py-24 md:py-36 bg-canvas border-t border-hairline">
      <Container>
        <div className="max-w-3xl mb-20">
          <Text variant="eyebrow" className="text-lavender mb-5">
            Specialization
          </Text>
          <Heading variant="display-lg" className="mb-6">
            Engineering Discipline
          </Heading>
          <Text variant="body-lg" className="text-ink-muted leading-relaxed">
            My approach is grounded in structured thinking and a commitment to technical maturity. I prioritize systems that are both powerful and intentional.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {focusAreas.map((area) => (
            <div 
              key={area.title}
              className="p-8 rounded-lg border border-hairline bg-surface-1 hover:bg-surface-2 transition-all duration-300 group"
            >
              <div className="h-10 w-10 rounded-md bg-[#080809] border border-hairline flex items-center justify-center mb-8 group-hover:border-lavender/40 group-hover:text-lavender transition-all">
                <area.icon className="h-5 w-5" />
              </div>
              <Heading variant="card-title" as="h3" className="mb-4">
                {area.title}
              </Heading>
              <Text variant="body-sm" className="text-ink-muted leading-relaxed">
                {area.description}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

