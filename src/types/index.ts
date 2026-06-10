import type { IconType } from 'react-icons';

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
  handle?: string;
}

export interface PersonalInfo {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  yearsOfExperience: string;
  summary: string;
  highlights: string[];
  resumeUrl: string;
  availableForWork: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0 - 100 proficiency
  icon?: IconType;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: IconType;
  description: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  contributions: string[];
  technologies: string[];
  github: string;
  demo: string;
  featured?: boolean;
  isPlaceholderLink?: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  isPlaceholder?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  start: string;
  end: string;
  details?: string;
}

export interface Award {
  title: string;
  description: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}
