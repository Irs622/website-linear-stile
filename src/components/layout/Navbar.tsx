"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems, socialLinks, siteMetadata } from "@/data/site";
import { Github, Linkedin, Menu, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-hairline bg-canvas/80 backdrop-blur-md h-20">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="h-6 w-6 rounded bg-lavender flex items-center justify-center text-white font-bold text-[10px] group-hover:bg-lavender-hover transition-colors">
              IS
            </div>
            <span className="text-[18px] font-medium tracking-tight text-ink hidden sm:block">
              {siteMetadata.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[18px] transition-colors hover:text-ink font-medium tracking-tight",
                  pathname === item.href ? "text-ink" : "text-ink-subtle"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4 mr-2">
            <Link
              href={socialLinks.find((s) => s.label === "GitHub")?.href || "#"}
              target="_blank"
              className="text-ink-subtle hover:text-ink transition-colors"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href={socialLinks.find((s) => s.label === "LinkedIn")?.href || "#"}
              target="_blank"
              className="text-ink-subtle hover:text-ink transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
          
          <Link href="/resume.pdf" target="_blank">
            <Button variant="secondary" className="h-10 gap-2 px-4 text-[14px] font-semibold border-hairline bg-surface-1 hover:bg-surface-2 hidden sm:flex rounded-md">
              <FileText className="h-3.5 w-3.5" />
              Resume
            </Button>
          </Link>

          <button
            className="md:hidden text-ink-subtle hover:text-ink p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 w-full border-b border-hairline bg-canvas/95 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[18px] font-medium p-4 rounded-md transition-all active:bg-surface-2",
                    pathname === item.href ? "text-lavender bg-lavender/5" : "text-ink-muted hover:text-ink hover:bg-surface-1"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 mt-2 border-t border-hairline px-3">
                <Link href="#" className="text-ink-subtle hover:text-ink">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-ink-subtle hover:text-ink">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Button variant="secondary" size="sm" className="ml-auto h-10 text-[14px] border-hairline px-4">
                  Resume
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

