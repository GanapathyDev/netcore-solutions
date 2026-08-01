import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { SectionBadge, SectionHeading } from '../ui/SectionHeading';
import { BLOG_POSTS } from '../../data';

export default function BlogSection() {
  const posts = BLOG_POSTS.slice(0, 3);
  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <SectionBadge>Knowledge Hub</SectionBadge>
        </div>
        <SectionHeading
          title="Latest Insights & Articles"
          subtitle="Stay ahead with expert articles on enterprise networking, security, and infrastructure best practices."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 card-hover"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute top-3 left-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-primary text-white font-medium">{post.category}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-4 text-xs text-muted dark:text-slate-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={11} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime} read</span>
                </div>
                <h3 className="font-bold text-secondary dark:text-white mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                  Read More <ArrowRight size={13} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/blog" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all">
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
