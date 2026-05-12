import React from "react";
import { Container } from "@/components/layout/Container";
import { Text } from "@/components/typography/Text";
import { siteMetadata, navItems, socialLinks } from "@/data/site";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-hairline bg-canvas relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-1.5 mb-6 group w-fit font-mono text-[18px] font-bold tracking-tight">
              <span className="text-lavender transition-colors group-hover:text-lavender-hover">Irsal</span>
              <span className="text-ink-tertiary">Shydiq</span>
            </Link>
            <Text variant="body-sm" className="text-ink-muted max-w-xs leading-relaxed">
              Software engineering student focused on building modern systems and digital products with technical maturity.
            </Text>
          </div>

          <div className="md:col-span-3">
            <Text variant="caption" className="text-ink font-semibold uppercase tracking-widest mb-6">
              Navigation
            </Text>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-body-sm text-ink-muted hover:text-lavender transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <Text variant="caption" className="text-ink font-semibold uppercase tracking-widest mb-6">
              Connect
            </Text>
            <div className="flex flex-col gap-4">
              <Link href={`mailto:${siteMetadata.email}`} className="text-body-sm text-ink-muted hover:text-ink transition-colors flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" />
                {siteMetadata.email}
              </Link>
              <div className="flex gap-4 pt-2">
                {socialLinks.map((link) => (
                  <Link 
                    key={link.label}
                    href={link.href}
                    className="h-8 w-8 rounded border border-hairline bg-surface-1 flex items-center justify-center text-ink-subtle hover:text-lavender hover:border-lavender transition-all"
                    target="_blank"
                  >
                    {link.label === "GitHub" ? <Github className="h-4 w-4" /> : <Linkedin className="h-4 w-4" />}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-hairline flex flex-col md:flex-row justify-between items-center gap-4">
          <Text variant="caption" className="text-ink-tertiary font-mono tracking-tighter">
            © {currentYear} {siteMetadata.name}. All rights reserved.
          </Text>
          <Text variant="caption" className="text-ink-tertiary italic">
            Built with Next.js, TailwindCSS & Engineering Discipline.
          </Text>
        </div>
      </Container>
      
      {/* Footer glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 h-64 w-full max-w-4xl bg-lavender/5 blur-[100px] rounded-full pointer-events-none" />
    </footer>
  );
};
