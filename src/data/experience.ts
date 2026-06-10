import type { ExperienceItem } from '@/types';

// Date ranges below are inferred where the source resume had them masked.
// Update start/end values to match your exact employment dates.
export const experiences: ExperienceItem[] = [
  {
    id: 'software-engineer',
    role: 'Software Engineer',
    company: 'TietoEvry',
    location: 'India',
    start: 'May 2024',
    end: 'Present',
    current: true,
    summary:
      'Contributing to full-stack development for enterprise web applications using .NET Core and React JS, partnering closely with cross-functional teams.',
    achievements: [
      'Implementing new product features while optimizing existing APIs for performance and reliability.',
      'Collaborating with cross-functional teams to ensure seamless integration and smooth delivery.',
      'Driving clean, maintainable code through reviews and modern engineering practices.',
    ],
    technologies: ['.NET Core', 'C#', 'React JS', 'Web API', 'MS SQL Server', 'REST'],
  },
  {
    id: 'associate-software-engineer',
    role: 'Associate Software Engineer',
    company: 'TietoEvry',
    location: 'India',
    start: 'Oct 2022',
    end: 'Apr 2024',
    summary:
      'Built and delivered RESTful Web APIs and modern UIs for a large-scale US-based pest control client, owning features from design to production.',
    achievements: [
      'Developed and deployed RESTful Web APIs for a large-scale US-based pest control client using .NET Core.',
      'Modernized the application UI with HTML & CSS, improving responsiveness and user experience.',
      'Created a proof of concept (POC) and led a cross-functional team to deliver a new feature from design to production.',
      'Performed comprehensive code reviews and authored numerous unit tests to ensure code reliability.',
      'Contributed to Agile processes, including serving as an interim Scrum Master when required.',
      'Designed complex reports using DevExpress Reporting Tools, improving data accessibility for client stakeholders.',
      'Authored SQL scripts for data migration and optimization, ensuring data consistency across multiple environments.',
      'Delivered multiple client demos and presentations explaining feature design and technical implementation.',
    ],
    technologies: ['.NET Core', 'Web API', 'HTML', 'CSS', 'MS SQL Server', 'DevExpress', 'Agile'],
  },
  {
    id: 'trainee-software-engineer',
    role: 'Trainee Software Engineer',
    company: 'TietoEvry',
    location: 'India',
    start: 'Aug 2021',
    end: 'Sep 2022',
    summary:
      'Completed intensive technical training across the .NET and front-end stack while contributing to prototypes and client support.',
    achievements: [
      'Completed extensive technical training in .NET Core, Angular, React JS, SQL and JavaScript frameworks.',
      'Developed prototype applications integrating front-end frameworks with .NET backend services.',
      'Gained hands-on exposure to ASP.NET MVC, .NET Core and SQL Server through sample and proof-of-concept projects.',
      'Supported API maintenance and debugging efforts for existing client applications.',
    ],
    technologies: ['.NET Core', 'ASP.NET MVC', 'Angular', 'React JS', 'SQL Server', 'JavaScript'],
  },
];
