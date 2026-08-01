import { motion } from 'framer-motion';
import { SectionBadge, SectionHeading } from '../ui/SectionHeading';
import { INDUSTRIES } from '../../data';
import * as LucideIcons from 'lucide-react';

export default function IndustriesSection() {
  return (
    <section className="section-padding bg-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <SectionBadge>Industries We Serve</SectionBadge>
        </div>
        <SectionHeading
          title="Trusted Across Every Industry"
          subtitle="Our enterprise networking expertise spans diverse sectors, delivering tailored solutions for each industry's unique requirements."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {INDUSTRIES.map((ind, i) => {
            const Icon = LucideIcons[ind.icon] || LucideIcons.Building2;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col items-center text-center p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Icon size={22} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="text-sm font-semibold text-secondary dark:text-white leading-tight">{ind.name}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
