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
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="h-12 w-12 rounded-xl bg-lavender/10 border border-lavender/20 flex items-center justify-center text-lavender mb-8 mx-auto">
            <Mail className="h-5 w-5" />
          </div>
          
          <Text variant="eyebrow" className="text-lavender mb-5">
            Availability
          </Text>
          <Heading variant="display-lg" className="mb-8">
            Let's build something <span className="text-lavender">intentional</span> together.
          </Heading>
          <Text variant="body-lg" className="text-ink-muted mb-12 leading-relaxed">
            I'm currently open to software engineering internships, technical collaborations, or research opportunities.
          </Text>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href={`mailto:${siteMetadata.email}`} className="w-full sm:w-auto">
              <Button size="lg" className="w-full h-12 px-10 gap-3 bg-lavender hover:bg-lavender-hover text-white rounded-md transition-all shadow-lg shadow-lavender/10 font-semibold">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button variant="secondary" size="lg" className="h-12 px-10 gap-3 border-hairline bg-surface-1 hover:bg-surface-2 text-ink rounded-md transition-all font-semibold">
              <Calendar className="h-4 w-4" />
              Schedule a Call
            </Button>
          </div>
          
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-12 w-full pt-12 border-t border-hairline text-center sm:text-left">
            <div className="space-y-3">
              <Text variant="caption" className="uppercase tracking-[0.2em] font-bold text-ink-tertiary">Location</Text>
              <Text variant="body-sm" className="font-medium">Bandung, ID (GMT+7)</Text>
            </div>
            <div className="space-y-3">
              <Text variant="caption" className="uppercase tracking-[0.2em] font-bold text-ink-tertiary">Current Status</Text>
              <Text variant="body-sm" className="font-medium">Open for Internship</Text>
            </div>
            <div className="space-y-3">
              <Text variant="caption" className="uppercase tracking-[0.2em] font-bold text-ink-tertiary">Focus</Text>
              <Text variant="body-sm" className="font-medium">Software & Systems</Text>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Background visual element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[800px] bg-lavender/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] -z-10 h-64 w-64 bg-lavender/10 blur-[80px] rounded-full pointer-events-none animate-pulse" />
    </section>
  );
};

