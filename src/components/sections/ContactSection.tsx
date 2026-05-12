import React from "react";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, Calendar } from "lucide-react";
import { siteMetadata } from "@/data/site";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <section className="py-24 md:py-36 border-t border-hairline bg-canvas relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start relative z-10">
          {/* Vertical Side Heading */}
          <div className="hidden lg:block shrink-0 pt-2">
            <div className="sticky top-32 [writing-mode:vertical-rl] rotate-180 flex items-center gap-6">
              <div className="h-12 w-[1px] bg-lavender/30" />
              <Text variant="eyebrow" className="text-lavender text-[12px] font-bold tracking-[0.4em] uppercase">
                Section / Availability
              </Text>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 max-w-4xl">
            <div className="mb-16">
              <Heading variant="display-lg" className="mb-8 text-[56px] lg:text-[72px] leading-[1.05] tracking-tight">
                Let&apos;s build something <span className="text-lavender">intentional</span> together.
              </Heading>
              <Text variant="body-lg" className="text-ink-muted leading-relaxed text-[18px] max-w-2xl">
                I&apos;m currently open to software engineering internships, technical collaborations, or research opportunities.
              </Text>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 py-12 border-y border-hairline mb-16">
              <div className="space-y-4">
                <span className="text-ink-tertiary text-[11px] font-bold uppercase tracking-[0.2em]">Location</span>
                <p className="text-ink font-medium text-[18px]">Bandung, Indonesia (GMT+7)</p>
              </div>
              <div className="space-y-4">
                <span className="text-ink-tertiary text-[11px] font-bold uppercase tracking-[0.2em]">Current Status</span>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-lavender animate-pulse" />
                  <p className="text-ink font-medium text-[18px]">Open for Internship</p>
                </div>
              </div>
              <div className="space-y-4">
                <span className="text-ink-tertiary text-[11px] font-bold uppercase tracking-[0.2em]">Core Focus</span>
                <p className="text-ink font-medium text-[18px]">Software & Systems Engineering</p>
              </div>
              <div className="space-y-4">
                <span className="text-ink-tertiary text-[11px] font-bold uppercase tracking-[0.2em]">Response Latency</span>
                <p className="text-ink font-medium text-[18px]">Typically &lt; 24 Hours</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href={`mailto:${siteMetadata.email}`}>
                <Button size="lg" className="h-14 px-10 gap-3 bg-lavender hover:bg-lavender-hover text-white rounded-md transition-all font-bold text-[15px]">
                  Get in Touch
                  <ArrowRight className="h-4.5 w-4.5" />
                </Button>
              </Link>
              <Button variant="secondary" size="lg" className="h-14 px-10 gap-3 border-hairline bg-surface-1 hover:bg-surface-2 text-ink rounded-md transition-all font-bold text-[15px]">
                <Calendar className="h-4.5 w-4.5" />
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Background visual detail */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-lavender/[0.03] to-transparent -z-10" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 bg-lavender/[0.05] blur-[100px] rounded-full -z-10" />
    </section>
  );
};

