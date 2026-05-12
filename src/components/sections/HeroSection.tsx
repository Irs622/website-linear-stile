"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-hairline bg-surface-1 mb-10 group cursor-default transition-colors hover:border-hairline-strong">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lavender opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lavender"></span>
              </span>
              <Text variant="eyebrow" className="text-[12px] text-ink-muted group-hover:text-ink transition-colors">
                Available for software engineering roles
              </Text>
            </div>

            <Heading variant="display-xl" as="h1" className="mb-8 balance text-[56px] lg:text-[72px] leading-[1.1] tracking-tight">
              Building modern systems and digital products with an <span className="text-lavender">engineering-first</span> approach.
            </Heading>

            <Text variant="body-lg" className="text-ink-muted max-w-2xl mb-12 leading-relaxed text-[18px]">
              Informatics Engineering student specializing in scalable architectures, AI-assisted development, and human-centered technical solutions.
            </Text>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full sm:w-auto">
              <Button size="lg" className="h-11 px-6 gap-2 bg-lavender hover:bg-lavender-hover text-white rounded-md transition-all shadow-lg shadow-lavender/10 w-full sm:w-auto text-[15px]">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="lg" className="h-11 px-6 gap-2 border-hairline bg-surface-1 hover:bg-surface-2 text-ink rounded-md transition-all w-full sm:w-auto text-[15px]">
                Read Journal
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/5] w-full max-w-[440px] mx-auto lg:ml-auto group">
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-lavender/20 to-lavender/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image Frame */}
              <div className="relative h-full w-full rounded-2xl border border-hairline bg-surface-1 overflow-hidden shadow-2xl shadow-lavender/5">
                <Image
                  src="/images/me.png"
                  alt="Irsyad"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 440px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                  priority
                />
                {/* Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-1/40 to-transparent pointer-events-none" />
                
                {/* Technical corner accents */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/20 rounded-tr-sm" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-white/20 rounded-bl-sm" />
              </div>
              
              {/* Decorative elements behind */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-lavender/10 blur-3xl rounded-full -z-10" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-lavender/5 blur-[80px] rounded-full -z-10" />
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

