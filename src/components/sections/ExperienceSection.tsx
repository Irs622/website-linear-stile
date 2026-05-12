import React from "react";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { experience } from "@/data/experience";

export const ExperienceSection = () => {
  return (
    <section className="py-24 md:py-36 border-t border-hairline bg-canvas">
      <Container>
        <div className="max-w-3xl mb-20">
          <Text variant="eyebrow" className="text-lavender mb-5">
            Background
          </Text>
          <Heading variant="display-lg" className="mb-6">
            Technical Growth
          </Heading>
          <Text variant="body-lg" className="text-ink-muted leading-relaxed">
            A structured timeline of academic focus, independent projects, and organizational contributions.
          </Text>
        </div>

        <div className="space-y-4 max-w-5xl">
          {experience.map((item) => (
            <div 
              key={item.id}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 p-8 rounded-lg border border-hairline bg-surface-1 hover:bg-surface-2 transition-all duration-300"
            >
              <div className="md:col-span-3">
                <Text variant="caption" className="text-ink-subtle font-mono text-[11px] mb-2 uppercase tracking-widest">
                  {item.period}
                </Text>
                {item.isAcademic && (
                  <span className="inline-block px-2 py-0.5 rounded-sm bg-lavender/10 text-[9px] font-semibold text-lavender uppercase tracking-[0.1em] border border-lavender/20">
                    Academic
                  </span>
                )}
              </div>
              
              <div className="md:col-span-9">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 gap-2">
                  <Heading variant="card-title" as="h3" className="group-hover:text-lavender transition-colors">
                    {item.role}
                  </Heading>
                  <Text variant="body-sm" className="text-ink-subtle italic font-medium">
                    {item.organization}
                  </Text>
                </div>
                
                <Text variant="body-sm" className="text-ink-muted mb-8 leading-relaxed max-w-2xl">
                  {item.overview}
                </Text>

                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {(item.topics || item.contributions)?.map((tag) => (
                    <div key={tag} className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-hairline-strong group-hover:bg-lavender transition-colors" />
                      <Text variant="caption" className="text-ink-subtle text-[11px] font-medium tracking-wide">
                        {tag}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

