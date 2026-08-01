import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, Tag, CheckCircle, DollarSign } from 'lucide-react';
import { PROJECTS } from '../data';
import ContactCTA from '../components/home/ContactCTA';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);
  if (!project) return <Navigate to="/projects" replace />;

  return (
    <>
      <Helmet>
        <title>{project.title} – NetCore Solutions</title>
        <meta name="description" content={project.overview} />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 network-grid opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projects" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6 text-sm">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/20 text-white">{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-6 text-blue-200 text-sm">
            <span className="flex items-center gap-1.5"><MapPin size={14} /> {project.location}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> {project.duration}</span>
            <span className="flex items-center gap-1.5"><Tag size={14} /> {project.industry}</span>
            <span className="flex items-center gap-1.5"><DollarSign size={14} /> {project.value}</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <img src={project.image} alt={project.title} className="w-full h-72 object-cover rounded-3xl" loading="lazy" />

              {[
                { title: 'Project Overview', content: project.overview },
                { title: 'The Challenge', content: project.problem },
                { title: 'Our Solution', content: project.solution },
              ].map(section => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-700"
                >
                  <h2 className="text-xl font-bold font-heading text-secondary dark:text-white mb-4">{section.title}</h2>
                  <p className="text-muted dark:text-slate-400 leading-relaxed">{section.content}</p>
                </motion.div>
              ))}

              {/* Technologies */}
              <div className="bg-white dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-700">
                <h2 className="text-xl font-bold font-heading text-secondary dark:text-white mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-medium">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800/50 rounded-3xl p-6 border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-secondary dark:text-white mb-4">Project Results</h3>
                <div className="space-y-3">
                  {project.results.map(r => (
                    <div key={r} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-success flex-shrink-0" />
                      <span className="text-sm text-secondary dark:text-slate-300">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-6 text-white">
                <h3 className="font-bold mb-3">Start a Similar Project</h3>
                <p className="text-blue-100 text-sm mb-4">Get a free consultation for your network infrastructure project.</p>
                <Link to="/contact" className="block text-center py-3 rounded-xl bg-white text-primary font-semibold hover:bg-blue-50 transition-colors">
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
