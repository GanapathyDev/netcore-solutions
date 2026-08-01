import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Tag } from 'lucide-react';
import { SectionBadge, SectionHeading } from '../ui/SectionHeading';
import { PROJECTS } from '../../data';

export default function ProjectsSection() {
  return (
    <section className="section-padding bg-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <SectionBadge>Featured Projects</SectionBadge>
        </div>
        <SectionHeading
          title="Our Work Speaks for Itself"
          subtitle="Real-world enterprise deployments that demonstrate our technical capability and commitment to excellence."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white dark:bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 card-hover"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/80 text-white font-medium backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold font-heading text-secondary dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full flex-shrink-0">
                    {project.value}
                  </span>
                </div>
                <p className="text-sm text-muted dark:text-slate-400 mb-4 leading-relaxed">{project.overview}</p>
                <div className="flex flex-wrap gap-4 text-xs text-muted dark:text-slate-500 mb-5">
                  <span className="flex items-center gap-1"><MapPin size={12} /> {project.location}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {project.duration}</span>
                  <span className="flex items-center gap-1"><Tag size={12} /> {project.industry}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {project.results.slice(0, 4).map(r => (
                    <div key={r} className="flex items-center gap-1.5 text-xs text-secondary dark:text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
                      {r}
                    </div>
                  ))}
                </div>
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  View Case Study <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
