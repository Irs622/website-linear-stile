import React from "react";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { experience } from "@/data/experience";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Experience",
  description: "Professional and academic background in engineering.",
};

export default function ExperiencePage() {
  return (
    <div className="py-20 md:py-32">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16 md:mb-24">
          <div className="max-w-3xl">
            <Text variant="eyebrow" className="text-lavender mb-4">
              Background
            </Text>
            <Heading variant="display-lg" className="mb-6">
              Professional Timeline
            </Heading>
            <Text variant="body-lg" className="text-ink-muted">
              Focused on building technical maturity through academic discipline, independent research, and structured software engineering projects.
            </Text>
          </div>
          
          <Button variant="secondary" className="gap-2 border-hairline mt-4">
            <FileText className="h-4 w-4" />
            Download Resume
          </Button>
        </div>

        <div className="space-y-12 max-w-5xl">
          {experience.map((item) => (
            <div key={item.id} className="relative pl-8 md:pl-0">
              {/* Timeline line for mobile */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-hairline md:hidden" />
              <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-lavender md:hidden" />
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12">
                <div className="md:col-span-3">
                  <Text variant="body-sm" className="font-mono text-ink-subtle">
                    {item.period}
                  </Text>
                  {item.isAcademic && (
                    <Text variant="caption" className="text-lavender mt-1 font-medium">
                      ACADEMIC FOCUS
                    </Text>
                  )}
                </div>
                
                <div className="md:col-span-9">
                  <Heading variant="headline" as="h3" className="mb-1">
                    {item.role}
                  </Heading>
                  <Text variant="body-lg" className="text-ink-muted mb-6 italic">
                    {item.organization}
                  </Text>

                  
                  <div className="bg-surface-1 border border-hairline rounded-xl p-6 mb-6">
                    <Text variant="body" className="text-ink-muted leading-relaxed">
                      {item.overview}
                    </Text>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.topics && (
                      <div className="space-y-3">
                        <Text variant="caption" className="font-semibold text-ink-tertiary uppercase tracking-widest">Focus Areas</Text>
                        <ul className="space-y-2">
                          {item.topics.map((topic) => (
                            <li key={topic} className="flex items-center gap-2 text-body-sm text-ink-muted">
                              <div className="h-1 w-1 rounded-full bg-lavender" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {item.contributions && (
                      <div className="space-y-3">
                        <Text variant="caption" className="font-semibold text-ink-tertiary uppercase tracking-widest">Key Contributions</Text>
                        <ul className="space-y-2">
                          {item.contributions.map((contribution) => (
                            <li key={contribution} className="flex items-center gap-2 text-body-sm text-ink-muted">
                              <div className="h-1 w-1 rounded-full bg-lavender" />
                              {contribution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 p-8 rounded-xl border border-hairline bg-surface-1 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Heading variant="card-title" className="mb-2">Interested in collaboration?</Heading>
            <Text variant="body-sm" className="text-ink-muted">I'm always open to discussing new technical projects or research opportunities.</Text>
          </div>
          <Button className="bg-lavender hover:bg-lavender-hover text-white gap-2">
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </div>
  );
}
