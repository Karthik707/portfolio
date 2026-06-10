import { lazy, Suspense } from 'react';
import { SEO } from '@/components/seo/SEO';
import { Hero } from '@/components/sections/Hero';

// Below-the-fold sections are code-split and lazy-loaded for performance.
const About = lazy(() =>
  import('@/components/sections/About').then((m) => ({ default: m.About })),
);
const Skills = lazy(() =>
  import('@/components/sections/Skills').then((m) => ({ default: m.Skills })),
);
const Experience = lazy(() =>
  import('@/components/sections/Experience').then((m) => ({ default: m.Experience })),
);
const Projects = lazy(() =>
  import('@/components/sections/Projects').then((m) => ({ default: m.Projects })),
);
const Certifications = lazy(() =>
  import('@/components/sections/Certifications').then((m) => ({ default: m.Certifications })),
);
const Education = lazy(() =>
  import('@/components/sections/Education').then((m) => ({ default: m.Education })),
);
const Contact = lazy(() =>
  import('@/components/sections/Contact').then((m) => ({ default: m.Contact })),
);

function SectionFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center" aria-hidden="true">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-brand-500/30 border-t-brand-500" />
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <SEO />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </Suspense>
    </>
  );
}
