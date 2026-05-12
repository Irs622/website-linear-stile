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
  },
  {
    id: "api-rust",
    title: "Building Resilient API Architectures with Rust and Axum",
    excerpt: "A deep dive into type-safe backend development and high-performance API design using the Rust ecosystem.",
    date: "April 15, 2024",
    readTime: "7 min read",
    category: "Engineering"
  }
];

export const WritingSection = () => {
  return (
    <section className="py-24 md:py-36 border-t border-hairline bg-canvas">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <Text variant="eyebrow" className="text-lavender mb-5 text-[12px] font-bold uppercase tracking-widest">
              Journal
            </Text>
            <Heading variant="display-lg" className="mb-6 text-[56px] lg:text-[72px] leading-[1.05] tracking-tight">
              Engineering Notebook
            </Heading>
            <Text variant="body-lg" className="text-ink-muted leading-relaxed text-[18px]">
              Structured thoughts on software architecture, technical research, and the human-centered side of technology.
            </Text>
          </div>
          
          <Link href="/writing">
            <Button variant="secondary" className="gap-2 group border-hairline h-12 px-6 text-[14px] font-semibold bg-surface-1 hover:bg-surface-2 transition-all">
              Read all articles
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredArticles.map((article) => (
            <Link 
              key={article.id} 
              href={`/writing/${article.id}`}
              className="group flex flex-col p-8 md:p-10 rounded-xl border border-hairline bg-surface-1 hover:bg-surface-2 transition-all duration-500 relative overflow-hidden h-full"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-lavender font-bold tracking-widest uppercase text-[12px]">
                  {article.category}
                </span>
                <div className="h-1 w-1 rounded-full bg-hairline-strong opacity-40" />
                <span className="text-ink-subtle text-[12px] uppercase tracking-wider font-medium">
                  {article.date}
                </span>
              </div>

              <h3 className="text-[20px] font-semibold text-ink mb-6 group-hover:text-lavender transition-colors leading-snug tracking-tight">
                {article.title}
              </h3>
              
              <p className="text-ink-muted mb-12 leading-relaxed line-clamp-3 text-[18px] font-normal">
                {article.excerpt}
              </p>
              
              <div className="flex items-center text-ink-subtle gap-2 font-mono text-[11px] uppercase tracking-widest pt-6 border-t border-hairline/50 mt-auto opacity-60">
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

