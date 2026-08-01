import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { SectionBadge, SectionHeading } from '../components/ui/SectionHeading';
import { INDUSTRIES } from '../data';
import * as LucideIcons from 'lucide-react';
import ContactCTA from '../components/home/ContactCTA';

export default function IndustriesPage() {
  return (
    <>
      <Helmet>
        <title>Industries – NetCore Solutions</title>
        <meta name="description" content="NetCore Solutions serves enterprises across banking, healthcare, hospitality, education, manufacturing, retail, and government sectors." />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 network-grid opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionBadge>Industries We Serve</SectionBadge>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mt-4 mb-6">
            Trusted Across Every Industry
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Tailored network infrastructure solutions for the unique demands of each sector.
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((ind, i) => {
              const Icon = LucideIcons[ind.icon] || LucideIcons.Building2;
              return (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="group bg-white dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 card-hover"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                    <Icon size={26} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h2 className="text-xl font-bold font-heading text-secondary dark:text-white mb-3">{ind.name}</h2>
                  <p className="text-muted dark:text-slate-400 text-sm leading-relaxed">{ind.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
