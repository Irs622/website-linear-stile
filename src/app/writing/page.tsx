import React from "react";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import Link from "next/link";
import { BookOpen, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Writing",
  description: "Technical articles, research notes, and engineering journals.",
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
    <div className="py-20 md:py-32">
      <Container>
        <div className="max-w-3xl mb-16">
          <Text variant="eyebrow" className="text-lavender mb-4">
            Journal
          </Text>
          <Heading variant="display-lg" className="mb-6">
            Engineering Notebook
          </Heading>
          <Text variant="body-lg" className="text-ink-muted">
            Structured thoughts on software architecture, technical research, and the human-centered side of technology.
          </Text>
        </div>

        <div className="relative mb-12 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-tertiary" />
          <Input 
            placeholder="Search articles..." 
            className="pl-10 bg-surface-1 border-hairline focus:border-lavender transition-all"
          />
        </div>

        <div className="grid grid-cols-1 gap-4">
          {articles.map((article) => (
            <Link 
              key={article.id}
              href={`/writing/${article.id}`}
              className="group p-6 rounded-xl border border-hairline bg-surface-1 hover:bg-surface-2 transition-all hover:border-hairline-strong flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex-grow max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <Text variant="caption" className="text-lavender font-semibold uppercase tracking-wider">
                    {article.category}
                  </Text>
                  <div className="h-1 w-1 rounded-full bg-hairline-strong" />
                  <Text variant="caption" className="text-ink-subtle italic">
                    {article.date}
                  </Text>
                </div>
                <Heading variant="card-title" as="h3" className="mb-2 group-hover:text-lavender transition-colors">
                  {article.title}
                </Heading>
                <Text variant="body-sm" className="text-ink-muted line-clamp-2">
                  {article.excerpt}
                </Text>
              </div>
              
              <div className="flex items-center gap-4 shrink-0">
                <Text variant="caption" className="text-ink-tertiary">
                  {article.readTime}
                </Text>
                <div className="h-8 w-8 rounded-full bg-surface-2 flex items-center justify-center border border-hairline group-hover:border-lavender group-hover:text-lavender transition-all">
                  <BookOpen className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
