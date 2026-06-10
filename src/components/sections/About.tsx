import { motion } from 'framer-motion';
import { FaCheckCircle, FaCode, FaUsers, FaRocket, FaTrophy } from 'react-icons/fa';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { personalInfo, awards, languages } from '@/data/personal';
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/animations';

const stats = [
  { icon: FaCode, value: personalInfo.yearsOfExperience, label: 'Years of Experience' },
  { icon: FaRocket, value: 'Enterprise', label: 'Grade Applications' },
  { icon: FaUsers, value: 'Cross-Functional', label: 'Team Collaboration' },
  { icon: FaTrophy, value: 'Awarded', label: 'Recognized Performer' },
];

export function About() {
  return (
    <Section id="about" className="bg-white/40 dark:bg-white/[0.015]">
      <SectionHeading
        eyebrow="About Me"
        title="Software Engineer who Codes. Innovates. Delivers."
        description="A snapshot of who I am, what I value, and the impact I bring to every team I join."
      />

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-7"
        >
          <motion.p
            variants={fadeUp}
            className="text-lg leading-relaxed text-slate-700 dark:text-slate-300"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Career Highlights
            </h3>
            <ul className="space-y-3">
              {personalInfo.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-accent-500" />
                  <span className="text-slate-600 dark:text-slate-400">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card-surface rounded-2xl p-5">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-300">
                Recognition
              </h4>
              <ul className="space-y-2">
                {awards.map((award) => (
                  <li key={award.title} className="flex items-start gap-2 text-sm">
                    <FaTrophy className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-amber-400" />
                    <span className="text-slate-600 dark:text-slate-400">
                      <span className="font-medium text-slate-800 dark:text-slate-200">
                        {award.title}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-surface rounded-2xl p-5">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-300">
                Languages
              </h4>
              <ul className="space-y-2">
                {languages.map((language) => (
                  <li
                    key={language.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {language.name}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">{language.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4 self-start lg:col-span-5"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="card-surface group rounded-2xl p-6 hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white dark:text-brand-300">
                <stat.icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
