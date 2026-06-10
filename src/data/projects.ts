import type { Project } from '@/types';

// These projects are derived from the responsibilities described in the resume.
// GitHub and live-demo links are placeholders — replace them with real URLs.
export const projects: Project[] = [
  {
    id: 'pest-control-platform',
    title: 'Pest Control Service Platform',
    category: 'Enterprise Web Application',
    description:
      'A large-scale web platform for a US-based pest control client, powered by RESTful Web APIs built on .NET Core with a modernized, responsive UI.',
    challenge:
      'Legacy screens were slow and not responsive, and stakeholders lacked clear reporting. The system needed scalable APIs and a modern UI without disrupting existing clients.',
    contributions: [
      'Designed and deployed RESTful Web APIs with .NET Core powering core business workflows.',
      'Modernized the UI with HTML & CSS, improving responsiveness across devices.',
      'Built complex DevExpress reports that improved data accessibility for client stakeholders.',
      'Authored SQL scripts for data migration and optimization across multiple environments.',
    ],
    technologies: ['.NET Core', 'Web API', 'C#', 'MS SQL Server', 'DevExpress', 'HTML', 'CSS'],
    github: 'https://github.com/karthikkulal',
    demo: '#',
    featured: true,
    isPlaceholderLink: true,
  },
  {
    id: 'feature-delivery-poc',
    title: 'New Feature POC & Delivery',
    category: 'Full-Stack Feature',
    description:
      'An end-to-end feature delivered from a proof of concept through to production, leading a cross-functional team across design, build and release.',
    challenge:
      'A new client-requested capability had to be validated quickly and then hardened for production while coordinating multiple disciplines.',
    contributions: [
      'Created a proof of concept (POC) to validate the approach with stakeholders.',
      'Led a cross-functional team through design, development and delivery.',
      'Performed comprehensive code reviews and authored unit tests to ensure reliability.',
      'Served as interim Scrum Master to keep Agile delivery on track.',
    ],
    technologies: ['.NET Core', 'React JS', 'Web API', 'Agile', 'Unit Testing'],
    github: 'https://github.com/karthikkulal',
    demo: '#',
    featured: true,
    isPlaceholderLink: true,
  },
  {
    id: 'enterprise-reporting-suite',
    title: 'Enterprise Reporting Suite',
    category: 'Data & Reporting',
    description:
      'A suite of complex business reports built with DevExpress Reporting Tools, giving client stakeholders fast, accurate access to operational data.',
    challenge:
      'Stakeholders needed rich, exportable reports over large datasets with consistent data across environments.',
    contributions: [
      'Designed and implemented complex reports with DevExpress Reporting Tools.',
      'Optimized underlying SQL queries for performance over large datasets.',
      'Ensured data consistency across multiple environments via migration scripts.',
    ],
    technologies: ['DevExpress', 'MS SQL Server', 'T-SQL', '.NET'],
    github: 'https://github.com/karthikkulal',
    demo: '#',
    isPlaceholderLink: true,
  },
  {
    id: 'react-dotnet-prototypes',
    title: 'React + .NET Integration Prototypes',
    category: 'Prototyping',
    description:
      'A set of prototype applications integrating modern front-end frameworks with .NET backend services, exploring patterns for production adoption.',
    challenge:
      'The team needed validated patterns for connecting React/Angular front-ends to .NET services before committing to production builds.',
    contributions: [
      'Built prototypes integrating React and Angular with .NET backend services.',
      'Gained hands-on experience with ASP.NET MVC, .NET Core and SQL Server.',
      'Supported API maintenance and debugging for existing client applications.',
    ],
    technologies: ['React JS', 'Angular', 'ASP.NET MVC', '.NET Core', 'SQL Server'],
    github: 'https://github.com/karthikkulal',
    demo: '#',
    isPlaceholderLink: true,
  },
];
