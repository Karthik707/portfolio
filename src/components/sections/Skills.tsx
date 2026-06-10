import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillCategories } from '@/data/skills';
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/animations';

function ProficiencyBar({ level }: { level: number }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/10">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
      />
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills & Expertise"
        title="A versatile, full-stack toolkit"
        description="Technologies and practices I use to design, build, ship and maintain production software."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {skillCategories.map((category) => (
          <motion.article
            key={category.id}
            variants={fadeUp}
            className="card-surface group flex flex-col rounded-2xl p-6 hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white dark:text-brand-300">
                <category.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {category.description}
            </p>

            <ul className="mt-auto space-y-3.5">
              {category.skills.map((skill) => (
                <li key={skill.name}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-slate-400">{skill.level}%</span>
                  </div>
                  <ProficiencyBar level={skill.level} />
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
