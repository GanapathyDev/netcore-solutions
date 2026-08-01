import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Tag, ArrowRight } from 'lucide-react';
import { SectionBadge, SectionHeading } from '../components/ui/SectionHeading';
import { PROJECTS } from '../data';
import ContactCTA from '../components/home/ContactCTA';

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projects – NetCore Solutions</title>
        <meta name="description" content="Explore our enterprise network infrastructure case studies across banking, healthcare, education, and manufacturing sectors." />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 network-grid opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionBadge>Our Projects</SectionBadge>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mt-4 mb-6">
            Enterprise Projects Portfolio
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Real-world deployments that demonstrate our technical capability and commitment to excellence.
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="relative h-56 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/80 text-white font-medium backdrop-blur-sm">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h2 className="text-xl font-bold font-heading text-secondary dark:text-white group-hover:text-primary transition-colors">{project.title}</h2>
                    <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full flex-shrink-0">{project.value}</span>
                  </div>
                  <p className="text-sm text-muted dark:text-slate-400 mb-4 leading-relaxed">{project.overview}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-muted dark:text-slate-500 mb-5">
                    <span className="flex items-center gap-1"><MapPin size={12} /> {project.location}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {project.duration}</span>
                    <span className="flex items-center gap-1"><Tag size={12} /> {project.industry}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {project.results.map(r => (
                      <div key={r} className="flex items-center gap-1.5 text-xs text-secondary dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
                        {r}
                      </div>
                    ))}
                  </div>
                  <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                    View Case Study <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
