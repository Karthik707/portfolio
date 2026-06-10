import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import type { PersonalInfo, SocialLink, Award, LanguageItem } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Karthik N Kulal',
  shortName: 'Karthik',
  role: 'Full-Stack Software Engineer',
  tagline: 'I build scalable, high-performance enterprise web applications with .NET & React.',
  location: 'Mangalore, Karnataka, India',
  email: 'karthikkulal707@gmail.com',
  // NOTE: Phone number was masked in the source resume — update with your real number.
  phone: '+91 81510 58373',
  yearsOfExperience: '4+',
  summary:
    'Results-driven Full-Stack Software Engineer with 4+ years of hands-on experience designing, developing and deploying enterprise-grade web applications. Proficient in C#, .NET Framework/Core, Web APIs, MS SQL Server, JavaScript and React JS. Adept at building scalable architectures, optimizing database performance, and implementing modern UI frameworks to enhance usability.',
  highlights: [
    'Strong collaborator experienced in Agile environments, code reviews and client-facing technical discussions.',
    'Led a cross-functional team to deliver a new feature end-to-end, from design through to production.',
    'Served as interim Scrum Master, driving Agile ceremonies and delivery for the team.',
    'Passionate about continuous learning, clean code and delivering high-quality solutions that drive business success.',
  ],
  resumeUrl: '/resume.pdf',
  availableForWork: true,
};

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    // PLACEHOLDER: GitHub URL was not present in the resume — update with your profile.
    href: 'https://github.com/Karthik707',
    icon: FaGithub,
    handle: '@Karthik707',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/karthik-kulal-06777a1b3/',
    icon: FaLinkedinIn,
    handle: 'in/karthik-kulal-06777a1b3',
  },
  {
    label: 'Email',
    href: 'mailto:karthikkulal707@gmail.com',
    icon: FaEnvelope,
    handle: 'karthikkulal707@gmail.com',
  },
  {
    label: 'Phone',
    href: 'tel:+918151058373',
    icon: FaPhoneAlt,
    handle: '+91 81510 58373',
  },
];

export const awards: Award[] = [
  {
    title: 'Individual Kudos Award',
    description: 'Recognized for outstanding individual contribution and impact within the team.',
  },
  {
    title: 'Employee of the Month',
    description: 'Awarded for consistent high performance, ownership and delivery excellence.',
  },
];

export const languages: LanguageItem[] = [
  { name: 'English', level: 'Professional' },
  { name: 'Hindi', level: 'Professional' },
  { name: 'Kannada', level: 'Native' },
  { name: 'Tulu', level: 'Native' },
];
