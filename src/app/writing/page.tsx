import React from "react";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import Link from "next/link";
import { BookOpen, Search, Calendar, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Journal",
  description: "Structured thoughts on software architecture, technical research, and the human-centered side of technology.",
};

const articles = [
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
    id: "modern-api-architecture",
    title: "Building Resilient API Architectures with Rust and Axum",
    excerpt: "A deep dive into type-safe backend development and high-performance API design using the Rust ecosystem.",
    date: "April 15, 2024",
    readTime: "12 min read",
    category: "Engineering"
  }
];

export default function WritingPage() {
  return (
    <div className="py-24 md:py-36 bg-canvas">
      <Container>
        <div className="max-w-3xl mb-20 md:mb-28">
          <Text variant="eyebrow" className="text-lavender mb-5">
            Journal
          </Text>
          <Heading variant="display-lg" className="mb-8">
            Engineering Notebook
          </Heading>
          <Text variant="body-lg" className="text-ink-muted leading-relaxed">
            Structured thoughts on software architecture, technical research, and the human-centered side of technology.
          </Text>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-12">
          <div className="relative w-full max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-tertiary group-focus-within:text-lavender transition-colors" />
            <Input 
              placeholder="Search articles..." 
              className="pl-11 h-12 bg-surface-1 border-hairline focus:border-lavender transition-all rounded-md"
            />
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {["All", "System Design", "Research", "Engineering"].map((tag) => (
              <button 
                key={tag}
                className="px-4 py-2 rounded-md border border-hairline bg-surface-1 text-xs font-medium text-ink-subtle hover:bg-surface-2 hover:text-ink transition-all whitespace-nowrap"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {articles.map((article) => (
            <Link 
              key={article.id}
              href={`/writing/${article.id}`}
              className="group p-8 md:p-10 rounded-lg border border-hairline bg-surface-1 hover:bg-surface-2 transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8"
            >
              <div className="flex-grow max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-2 py-0.5 rounded-sm bg-lavender/10 text-[10px] font-bold text-lavender uppercase tracking-[0.1em] border border-lavender/20">
                    {article.category}
                  </span>
                  <div className="h-1 w-1 rounded-full bg-hairline-strong opacity-40" />
                  <div className="flex items-center gap-1.5 text-ink-subtle text-[11px] font-medium uppercase tracking-wider">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </div>
                </div>
                
                <Heading variant="headline" as="h3" className="mb-4 group-hover:text-lavender transition-colors">
                  {article.title}
                </Heading>
                
                <Text variant="body" className="text-ink-muted line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </Text>
              </div>
              
              <div className="flex items-center gap-6 shrink-0 pt-6 md:pt-0 border-t md:border-t-0 border-hairline">
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-2 text-ink-subtle font-mono text-[11px] uppercase tracking-widest">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </div>
                </div>
                <div className="h-10 w-10 rounded-md bg-surface-3 flex items-center justify-center border border-hairline group-hover:border-lavender group-hover:text-lavender transition-all">
                  <BookOpen className="h-5 w-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-20 p-12 rounded-lg border border-hairline bg-surface-ladder-1 text-center relative overflow-hidden">
          <div className="relative z-10">
            <Heading variant="headline" className="mb-4">Stay updated</Heading>
            <Text variant="body" className="text-ink-muted mb-8 max-w-md mx-auto">
              Subscribe to get notified about new technical explorations and research notes.
            </Text>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input placeholder="email@example.com" className="bg-surface-2 border-hairline h-11" />
              <button className="h-11 px-6 rounded-md bg-lavender hover:bg-lavender-hover text-white font-semibold transition-all">
                Subscribe
              </button>
            </form>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-lavender)_0%,_transparent_70%)] opacity-[0.03]" />
        </div>
      </Container>
    </div>
  );
}
