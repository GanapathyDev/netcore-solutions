import { motion } from 'framer-motion';
import { SectionBadge, SectionHeading } from '../ui/SectionHeading';
import { PROCESS_STEPS } from '../../data';

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <SectionBadge>Our Process</SectionBadge>
        </div>
        <SectionHeading
          title="How We Deliver Excellence"
          subtitle="A proven, structured approach that ensures every project is delivered on time, within budget, and to the highest standards."
        />
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-6">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow inline-block w-full md:max-w-sm">
                    <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Step {step.step}</div>
                    <div className="font-bold text-secondary dark:text-white mb-1">{step.title}</div>
                    <div className="text-sm text-muted dark:text-slate-400 leading-relaxed">{step.desc}</div>
                  </div>
                </div>

                {/* Node */}
                <div className="relative z-10 flex-shrink-0 hidden sm:flex">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/30">
                    {step.step}
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
