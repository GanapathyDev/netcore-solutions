import { motion } from 'framer-motion';
import { SectionBadge, SectionHeading } from '../ui/SectionHeading';
import { TECHNOLOGIES } from '../../data';

const CATEGORIES = ['All', 'Networking', 'Security', 'Wireless', 'Cloud', 'Virtualization', 'Servers'];

export default function TechnologiesSection() {
  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <SectionBadge>Technology Partners</SectionBadge>
        </div>
        <SectionHeading
          title="Technologies We Work With"
          subtitle="We are vendor-certified and experienced with the world's leading network infrastructure brands."
        />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {TECHNOLOGIES.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-2">{tech.logo}</div>
              <div className="text-xs font-semibold text-secondary dark:text-white text-center">{tech.name}</div>
              <div className="text-xs text-muted dark:text-slate-500 mt-0.5">{tech.category}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
