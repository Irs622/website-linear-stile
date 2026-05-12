import React from "react";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

const featuredArticles = [
  {
    id: "distributed-logging",
    title: "Principles of Immutable Audit Logging in Distributed Systems",
    excerpt: "Exploring the intersection of cryptographic verification and distributed log architecture for high-security environments.",
    date: "May 12, 2024",
    readTime: "8 min read",
    category: "System Design"
  },
  {
    id: "hci-behavioral",
    title: "HCI Foundations: Designing for Behavioral Change",
    excerpt: "Analyzing how digital interfaces can influence user habits through intentional behavioral design patterns.",
    date: "April 28, 2024",
    readTime: "6 min read",
    category: "Research"
  }
];

export const WritingSection = () => {
  return (
    <section className="py-24 md:py-36 border-t border-hairline bg-canvas">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <Text variant="eyebrow" className="text-lavender mb-5 text-[12px]">
              Journal
            </Text>
            <Heading variant="display-lg" className="mb-6 text-[56px] lg:text-[72px] leading-[1.1] tracking-tight">
              Engineering Notes
            </Heading>
            <Text variant="body-lg" className="text-ink-muted leading-relaxed text-[18px]">
              Technical articles, research notes, and development journals focused on software systems and HCI.
            </Text>
          </div>
          
          <Link href="/writing">
            <Button variant="secondary" className="gap-2 group border-hairline h-10 px-5 text-[14px] font-medium">
              Read all articles
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredArticles.map((article) => (
            <Link 
              key={article.id} 
              href={`/writing/${article.id}`}
              className="group block p-8 md:p-10 rounded-lg border border-hairline bg-surface-1 hover:bg-surface-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6">
                <Text variant="caption" className="text-lavender font-semibold tracking-widest uppercase text-[12px]">
                  {article.category}
                </Text>
                <div className="h-1 w-1 rounded-full bg-hairline-strong opacity-40" />
                <Text variant="caption" className="text-ink-subtle text-[12px] uppercase tracking-wider">
                  {article.date}
                </Text>
              </div>

              <Heading variant="card-title" as="h3" className="mb-5 group-hover:text-lavender transition-colors">
                {article.title}
              </Heading>
              
              <Text variant="body-sm" className="text-ink-muted mb-10 leading-relaxed line-clamp-2 text-[18px]">
                {article.excerpt}
              </Text>
              
              <div className="flex items-center text-caption text-ink-subtle gap-2 font-mono text-[12px] uppercase tracking-widest pt-6 border-t border-hairline/50">
                <BookOpen className="h-3.5 w-3.5" />
                {article.readTime}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

