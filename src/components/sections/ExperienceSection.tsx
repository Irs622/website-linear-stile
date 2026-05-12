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
          <Text variant="eyebrow" className="text-lavender mb-5 text-[12px]">
            Background
          </Text>
          <Heading variant="display-lg" className="mb-6 text-[56px] lg:text-[72px] leading-[1.1] tracking-tight">
            Technical Growth
          </Heading>
          <Text variant="body-lg" className="text-ink-muted leading-relaxed text-[18px]">
            A structured timeline of academic focus, independent projects, and organizational contributions.
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
          {experience.map((item) => (
            <div 
              key={item.id}
              className="group relative flex flex-col gap-6 p-8 md:p-10 rounded-lg border border-hairline bg-[#080809] transition-all duration-300 h-full"
            >
              {/* Top Row: Period and Organization */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-ink-subtle font-mono text-[12px] uppercase tracking-[0.2em] font-medium">
                    {item.period}
                  </span>
                  {item.isAcademic && (
                    <div className="inline-flex px-2 py-0.5 rounded-sm border border-lavender/30 bg-lavender/5 w-fit">
                      <span className="text-[10px] font-bold text-lavender uppercase tracking-[0.1em]">
                        Academic
                      </span>
                    </div>
                  )}
                </div>
                <span className="text-ink-subtle italic font-medium text-[14px] opacity-70">
                  {item.organization}
                </span>
              </div>
              
              {/* Content Row */}
              <div className="flex flex-col flex-1">
                <h3 className="text-[18px] font-medium text-ink group-hover:text-lavender transition-colors tracking-tight mb-4">
                  {item.role}
                </h3>
                
                <p className="text-ink-muted mb-8 leading-relaxed text-[16px] font-normal line-clamp-3">
                  {item.overview}
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-3 mt-auto">
                  {(item.topics || item.contributions)?.map((tag) => (
                    <span key={tag} className="text-ink-subtle text-[10px] font-medium uppercase tracking-[0.12em] font-mono opacity-50">
                      {tag}
                    </span>
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

