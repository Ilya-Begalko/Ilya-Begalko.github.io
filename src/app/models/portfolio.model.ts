export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  url: string;
}

export interface ExperienceItem {
  role: string;
  place: string;
  period: string;
}

export interface SocialLink {
  label: string;
  href: string;
  external: boolean;
}

export interface StackGroup {
  title: string;
  items: string;
}
