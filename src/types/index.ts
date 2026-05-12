export interface Project {
  id: string;
  title: string;
  category: string;
  status: string;
  overview: string;
  technicalFocus: string[];
  stack: string[];
  links?: {
    github?: string;
    demo?: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon?: string;
}
