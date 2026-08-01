import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../data';
import ContactCTA from '../components/home/ContactCTA';

export default function BlogPostPage() {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);
  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <Helmet>
        <title>{post.title} – NetCore Solutions Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 network-grid opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6 text-sm">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/20 text-white mb-4">{post.category}</span>
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap gap-4 text-blue-200 text-sm">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime} read</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img src={post.image} alt={post.title} className="w-full h-72 object-cover rounded-3xl mb-10" loading="lazy" />
          <div className="bg-white dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-muted dark:text-slate-300 leading-relaxed mb-6">{post.excerpt}</p>
            <p className="text-muted dark:text-slate-400 leading-relaxed mb-4">
              Enterprise network infrastructure requires careful planning, precise execution, and ongoing management. In this article, we explore the key considerations and best practices that our certified engineers apply on every project.
            </p>
            <p className="text-muted dark:text-slate-400 leading-relaxed mb-4">
              Whether you're designing a new network from scratch or upgrading an existing infrastructure, the principles outlined here will help you make informed decisions and avoid common pitfalls.
            </p>
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-100 dark:border-slate-700">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
