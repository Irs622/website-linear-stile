import React from "react";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, GraduationCap, Layout, Lightbulb } from "lucide-react";

export const metadata = {
  title: "About",
  description: "Learn more about Irsal Shydiq, his background, and engineering philosophy.",
};

export default function AboutPage() {
  return (
    <div className="py-20 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7">
            <Text variant="eyebrow" className="text-lavender mb-4">
              Identity
            </Text>
            <Heading variant="display-lg" className="mb-8">
              Builder of systems, interfaces, and intentional digital products.
            </Heading>
            
            <div className="space-y-6 text-ink-muted text-body-lg leading-relaxed max-w-2xl">
              <p>
                I am an Informatics Engineering student at UIN Sunan Gunung Djati Bandung with a deep focus on software engineering, system architecture, and modern product engineering.
              </p>
              <p>
                My work is driven by a commitment to technical maturity and structured thinking. I believe that engineering is not just about writing code, but about designing systems that are maintainable, scalable, and human-centered.
              </p>
              <p>
                Currently, I am exploring the intersection of distributed systems, security engineering, and AI-assisted development. I strive to build tools and experiences that prioritize technical clarity and user intentionality.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-hairline bg-surface-1">
                <div className="h-10 w-10 rounded-lg bg-surface-2 border border-hairline flex items-center justify-center mb-4 text-lavender">
                  <Code2 className="h-5 w-5" />
                </div>
                <Heading variant="card-title" as="h4" className="mb-2">Engineering-First</Heading>
                <Text variant="body-sm" className="text-ink-muted">Prioritizing structural integrity and long-term maintainability over quick hacks.</Text>
              </div>
              <div className="p-6 rounded-xl border border-hairline bg-surface-1">
                <div className="h-10 w-10 rounded-lg bg-surface-2 border border-hairline flex items-center justify-center mb-4 text-lavender">
                  <Layout className="h-5 w-5" />
                </div>
                <Heading variant="card-title" as="h4" className="mb-2">Product Thinking</Heading>
                <Text variant="body-sm" className="text-ink-muted">Designing systems with a deep understanding of user behavior and product goals.</Text>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
             <div className="relative aspect-square rounded-2xl overflow-hidden border border-hairline bg-surface-1">
               {/* Decorative background for the image placeholder */}
               <div className="absolute inset-0 bg-gradient-to-br from-lavender/10 to-transparent" />
               <div className="absolute inset-0 flex items-center justify-center text-ink-tertiary">
                 <div className="flex flex-col items-center gap-4">
                   <div className="h-20 w-20 rounded-full border border-hairline flex items-center justify-center bg-surface-2">
                     <GraduationCap className="h-10 w-10 text-lavender" />
                   </div>
                   <Text variant="caption">Informatics Engineering</Text>
                 </div>
               </div>
             </div>

             <div className="p-8 rounded-2xl border border-hairline bg-surface-1 space-y-6">
               <Heading variant="headline">Core Values</Heading>
               
               <div className="space-y-4">
                 {[
                   { title: "Structured Workflow", icon: Lightbulb },
                   { title: "Technical Clarity", icon: Code2 },
                   { title: "Intentional Design", icon: Layout }
                 ].map((value) => (
                   <div key={value.title} className="flex items-center gap-4">
                     <div className="h-8 w-8 rounded-lg bg-surface-2 border border-hairline flex items-center justify-center text-lavender shrink-0">
                       <value.icon className="h-4 w-4" />
                     </div>
                     <Text variant="body-sm" className="font-medium">{value.title}</Text>
                   </div>
                 ))}
               </div>

               <div className="pt-6 border-t border-hairline">
                 <Button className="w-full bg-lavender hover:bg-lavender-hover text-white gap-2">
                   View Experience
                   <ArrowRight className="h-4 w-4" />
                 </Button>
               </div>
             </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
