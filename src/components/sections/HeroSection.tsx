"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-hairline bg-surface-1 mb-10 group cursor-default transition-colors hover:border-hairline-strong">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lavender opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lavender"></span>
              </span>
              <Text variant="eyebrow" className="text-[11px] text-ink-muted group-hover:text-ink transition-colors">
                Available for software engineering roles
              </Text>
            </div>

            <Heading variant="display-xl" as="h1" className="mb-8 balance">
              Building modern systems and digital products with an <span className="text-lavender">engineering-first</span> approach.
            </Heading>

            <Text variant="body-lg" className="text-ink-muted max-w-2xl mx-auto mb-12 leading-relaxed">
              Informatics Engineering student specializing in scalable architectures, AI-assisted development, and human-centered technical solutions.
            </Text>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-11 px-6 gap-2 bg-lavender hover:bg-lavender-hover text-white rounded-md transition-all shadow-lg shadow-lavender/10">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="lg" className="h-11 px-6 gap-2 border-hairline bg-surface-1 hover:bg-surface-2 text-ink rounded-md transition-all">
                Read Journal
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
      
      {/* Visual background depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[800px] w-full max-w-7xl bg-[radial-gradient(ellipse_at_top,_var(--color-lavender)_0%,_transparent_60%)] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 -z-10 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />
    </section>
  );
};

