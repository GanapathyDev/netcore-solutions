import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../../data';
import { SectionBadge, SectionHeading } from '../ui/SectionHeading';
import * as LucideIcons from 'lucide-react';

function ServiceCard({ service, index }) {
  const Icon = LucideIcons[service.icon] || LucideIcons.Server;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="group bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 card-hover cursor-pointer"
    >
      <Link to={`/services/${service.id}`} className="block h-full">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
          style={{ backgroundColor: `${service.color}15` }}
        >
          <Icon size={22} style={{ color: service.color }} />
        </div>
        <h3 className="text-lg font-bold font-heading text-secondary dark:text-white mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-muted dark:text-slate-400 leading-relaxed mb-4">
          {service.shortDesc}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {service.features.slice(0, 3).map(f => (
            <span key={f} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-muted dark:text-slate-400">
              {f}
            </span>
          ))}
          {service.features.length > 3 && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-muted dark:text-slate-400">
              +{service.features.length - 3} more
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
          Learn More <ArrowRight size={14} />
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section className="section-padding bg-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <SectionBadge>Our Services</SectionBadge>
        </div>
        <SectionHeading
          title="Complete Network Infrastructure Services"
          subtitle="From initial design to ongoing maintenance — we deliver end-to-end enterprise networking solutions tailored to your business."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
          >
            Explore All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
