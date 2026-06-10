import {
  FaServer,
  FaReact,
  FaDatabase,
  FaCloud,
  FaTools,
  FaRobot,
  FaLayerGroup,
} from 'react-icons/fa';
import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend',
    icon: FaServer,
    description: 'Robust, scalable services and APIs built on the .NET ecosystem.',
    skills: [
      { name: 'C#', level: 92 },
      { name: '.NET Core', level: 90 },
      { name: '.NET Framework', level: 88 },
      { name: 'ASP.NET MVC', level: 85 },
      { name: 'Web API', level: 90 },
      { name: 'RESTful API Design', level: 88 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: FaReact,
    description: 'Responsive, accessible and modern user interfaces.',
    skills: [
      { name: 'React JS', level: 86 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 90 },
      { name: 'jQuery', level: 82 },
      { name: 'Angular', level: 70 },
      { name: 'Classic ASP', level: 65 },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: FaDatabase,
    description: 'Relational data design, optimization and migration.',
    skills: [
      { name: 'MS SQL Server', level: 88 },
      { name: 'T-SQL', level: 85 },
      { name: 'Query Optimization', level: 82 },
      { name: 'Data Migration', level: 80 },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    icon: FaCloud,
    description: 'Serverless compute and cloud-hosted application delivery.',
    skills: [
      { name: 'AWS Lambda', level: 72 },
      { name: 'Cloud Deployments', level: 70 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: FaTools,
    description: 'Everyday tools that power a productive engineering workflow.',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'Visual Studio', level: 90 },
      { name: 'VS Code', level: 88 },
      { name: 'Postman', level: 85 },
      { name: 'DevExpress', level: 80 },
      { name: 'MS Excel', level: 82 },
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    icon: FaRobot,
    description: 'Leveraging AI tooling and automation to ship faster.',
    skills: [
      { name: 'AI-Assisted Development', level: 78 },
      { name: 'Automated Reporting', level: 80 },
      { name: 'Unit Testing', level: 84 },
      { name: 'CI/CD Workflows', level: 72 },
    ],
  },
  {
    id: 'other',
    title: 'Other Technologies',
    icon: FaLayerGroup,
    description: 'Engineering practices that keep delivery healthy.',
    skills: [
      { name: 'Agile / Scrum', level: 86 },
      { name: 'Code Review', level: 88 },
      { name: 'Performance Optimization', level: 84 },
      { name: 'DevExpress Reporting', level: 80 },
    ],
  },
];
