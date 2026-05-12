import React from "react";
import { Project } from "@/types";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard = ({ project, featured }: ProjectCardProps) => {
  return (
    <div className={cn(
      "group relative flex flex-col h-full rounded-lg border border-hairline bg-surface-1 overflow-hidden transition-all duration-300 hover:border-hairline-strong hover:bg-surface-2",
      featured && "md:col-span-2 md:flex-row"
    )}>
      <div className={cn(
        "flex flex-col p-8 sm:p-10",
        featured ? "md:w-1/2" : "w-full"
      )}>
        <div className="flex items-center justify-between mb-6">
          <Text variant="eyebrow" className="text-lavender">
            {project.category}
          </Text>
          <div className="flex items-center gap-2">
             <div className="h-1.5 w-1.5 rounded-full bg-semantic-success" />
             <Text variant="caption" className="text-ink-subtle uppercase tracking-wider text-[10px]">
               {project.status}
             </Text>
          </div>
        </div>

        <Heading variant="card-title" as="h3" className="mb-4 group-hover:text-lavender transition-colors">
          {project.title}
        </Heading>

        <Text variant="body-sm" className="text-ink-muted mb-8 leading-relaxed line-clamp-3">
          {project.overview}
        </Text>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.slice(0, 5).map((tech) => (
              <span key={tech} className="px-2 py-1 rounded-sm border border-hairline bg-surface-3 text-[10px] font-mono text-ink-subtle uppercase tracking-widest">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-5">
            {project.links?.github && (
              <Link href={project.links.github} className="text-ink-subtle hover:text-ink transition-colors flex items-center gap-2 text-xs font-medium">
                <Github className="h-4 w-4" />
                <span>Source</span>
              </Link>
            )}
            {project.links?.demo && (
              <Link href={project.links.demo} className="text-ink-subtle hover:text-ink transition-colors flex items-center gap-2 text-xs font-medium">
                <ArrowUpRight className="h-4 w-4" />
                <span>Documentation</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className={cn(
        "relative bg-[#080809] border-t md:border-t-0 md:border-l border-hairline overflow-hidden",
        featured ? "md:w-1/2 min-h-[400px]" : "w-full aspect-[4/3]"
      )}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--color-lavender)_0%,_transparent_50%)] opacity-[0.03]" />
        
        {/* Screenshot Mockup Container */}
        <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
           <div className="w-full h-full rounded-xl border border-hairline bg-surface-1 shadow-2xl overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
              <div className="h-7 w-full bg-surface-2 border-b border-hairline flex items-center px-4 gap-2">
                <div className="h-2 w-2 rounded-full bg-hairline-strong" />
                <div className="h-2 w-2 rounded-full bg-hairline-strong" />
                <div className="h-2 w-2 rounded-full bg-hairline-strong" />
              </div>
              <div className="p-6 space-y-4">
                <div className="h-4 w-1/3 bg-surface-2 rounded-sm" />
                <div className="space-y-2">
                  <div className="h-2 w-full bg-surface-3 rounded-sm opacity-50" />
                  <div className="h-2 w-5/6 bg-surface-3 rounded-sm opacity-50" />
                  <div className="h-2 w-4/6 bg-surface-3 rounded-sm opacity-50" />
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                   <div className="aspect-video bg-surface-2 rounded-md border border-hairline" />
                   <div className="aspect-video bg-surface-2 rounded-md border border-hairline" />
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

