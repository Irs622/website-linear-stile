import React from "react";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Get in touch for technical collaborations or research opportunities.",
};

export default function ContactPage() {
  return (
    <div className="py-20 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <Text variant="eyebrow" className="text-lavender mb-4">
              Connect
            </Text>
            <Heading variant="display-lg" className="mb-8">
              Let's discuss your next project.
            </Heading>
            <Text variant="body-lg" className="text-ink-muted mb-12">
              I'm open to discussing technical architecture, software development, research, or structured engineering collaborations.
            </Text>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-surface-1 border border-hairline flex items-center justify-center text-lavender shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <Text variant="caption" className="uppercase tracking-widest text-ink-tertiary mb-1 font-semibold">Email</Text>
                  <Text variant="body" className="font-medium">hello@example.com</Text>
                </div>
              </div>
              
              <div className="space-y-4">
                <Text variant="caption" className="uppercase tracking-widest text-ink-tertiary font-semibold">Socials</Text>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <Link 
                      key={link.label}
                      href={link.href}
                      className="h-10 w-10 rounded-lg bg-surface-1 border border-hairline flex items-center justify-center text-ink-subtle hover:text-lavender hover:border-lavender transition-all"
                      target="_blank"
                    >
                      {link.label === "GitHub" ? <Github className="h-5 w-5" /> : <Linkedin className="h-5 w-5" />}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-2xl border border-hairline bg-surface-1">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Text variant="caption" className="font-medium text-ink-muted ml-1">Full Name</Text>
                    <Input placeholder="John Doe" className="bg-surface-2 border-hairline focus:border-lavender transition-all h-12" />
                  </div>
                  <div className="space-y-2">
                    <Text variant="caption" className="font-medium text-ink-muted ml-1">Email Address</Text>
                    <Input type="email" placeholder="john@example.com" className="bg-surface-2 border-hairline focus:border-lavender transition-all h-12" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Text variant="caption" className="font-medium text-ink-muted ml-1">Subject</Text>
                  <Input placeholder="Project Inquiry" className="bg-surface-2 border-hairline focus:border-lavender transition-all h-12" />
                </div>

                <div className="space-y-2">
                  <Text variant="caption" className="font-medium text-ink-muted ml-1">Message</Text>
                  <Textarea 
                    placeholder="Tell me about your project or inquiry..." 
                    className="bg-surface-2 border-hairline focus:border-lavender transition-all min-h-[160px] resize-none"
                  />
                </div>

                <Button className="w-full h-12 bg-lavender hover:bg-lavender-hover text-white gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
