import type { EducationItem } from '@/types';

// Graduation years were masked in the source resume — these are typical
// values for a 4-year Bachelor of Engineering. Update with your real dates.
export const education: EducationItem[] = [
  {
    id: 'be-cse',
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'Mangalore Institute of Technology and Engineering',
    location: 'Moodbidri, Karnataka, India',
    start: 'Aug 2018',
    end: 'Jul 2022',
    details:
      'Studied core computer science fundamentals including data structures, algorithms, databases, web technologies and software engineering.',
  },
];
