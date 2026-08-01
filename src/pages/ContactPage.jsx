import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { SectionBadge } from '../components/ui/SectionHeading';
import { COMPANY, FAQS } from '../data';

// Fix leaflet marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(7, 'Enter a valid phone number'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const SERVICES_LIST = [
  'Data Center Setup', 'Structured Cabling', 'Network Cable Laying',
  'Switch Configuration', 'Router Configuration', 'Firewall & Security',
  'Wireless Solutions', 'Fiber Optic Solutions', 'Rack Installation',
  'Annual Maintenance', 'Free Site Survey', 'Other',
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-100 dark:border-slate-700 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between p-5 text-left bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
      >
        <span className="font-semibold text-secondary dark:text-white text-sm pr-4">{q}</span>
        <span className={`text-primary text-xl flex-shrink-0 transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="px-5 pb-5 bg-white dark:bg-slate-800/50 text-sm text-muted dark:text-slate-400 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    await new Promise(r => setTimeout(r, 1000));
    console.log('Form data:', data);
    setSubmitted(true);
    reset();
  };

  const POSITION = [25.1972, 55.2744]; // Dubai Business Bay

  return (
    <>
      <Helmet>
        <title>Contact Us – NetCore Solutions</title>
        <meta name="description" content="Contact NetCore Solutions for enterprise network infrastructure services. Get a free site survey and consultation." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 network-grid opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionBadge>Get In Touch</SectionBadge>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mt-4 mb-6">
            Let's Build Something Great Together
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Request a free site survey, get a consultation, or simply ask us a question. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding bg-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info */}
            <div className="space-y-6">
              {[
                { Icon: Phone, label: 'Phone', value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
                { Icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                { Icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: `https://wa.me/${COMPANY.whatsapp}` },
                { Icon: MapPin, label: 'Address', value: COMPANY.address, href: null },
                { Icon: Clock, label: 'Business Hours', value: 'Sun–Thu: 8AM–6PM\nEmergency: 24/7', href: null },
              ].map(({ Icon, label, value, href }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-5 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted dark:text-slate-500 uppercase tracking-wider mb-1">{label}</div>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-sm text-secondary dark:text-white hover:text-primary transition-colors font-medium">
                        {value}
                      </a>
                    ) : (
                      <div className="text-sm text-secondary dark:text-white font-medium whitespace-pre-line">{value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-700"
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-success" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-muted dark:text-slate-400 mb-6">We'll get back to you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-colors">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold font-heading text-secondary dark:text-white mb-6">Request Free Site Survey</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-secondary dark:text-white mb-1.5">Full Name *</label>
                          <input
                            {...register('name')}
                            placeholder="John Smith"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-secondary dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors text-sm"
                          />
                          {errors.name && <p className="text-danger text-xs mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-secondary dark:text-white mb-1.5">Email Address *</label>
                          <input
                            {...register('email')}
                            type="email"
                            placeholder="john@company.com"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-secondary dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors text-sm"
                          />
                          {errors.email && <p className="text-danger text-xs mt-1">{errors.email.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-secondary dark:text-white mb-1.5">Phone Number *</label>
                          <input
                            {...register('phone')}
                            placeholder="+971 50 123 4567"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-secondary dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors text-sm"
                          />
                          {errors.phone && <p className="text-danger text-xs mt-1">{errors.phone.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-secondary dark:text-white mb-1.5">Company Name</label>
                          <input
                            {...register('company')}
                            placeholder="Your Company"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-secondary dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary dark:text-white mb-1.5">Service Required *</label>
                        <select
                          {...register('service')}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-secondary dark:text-white focus:outline-none focus:border-primary transition-colors text-sm"
                        >
                          <option value="">Select a service...</option>
                          {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        {errors.service && <p className="text-danger text-xs mt-1">{errors.service.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary dark:text-white mb-1.5">Project Details *</label>
                        <textarea
                          {...register('message')}
                          rows={4}
                          placeholder="Describe your project requirements, site details, and any specific needs..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-secondary dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                        />
                        {errors.message && <p className="text-danger text-xs mt-1">{errors.message.message}</p>}
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 disabled:opacity-60"
                      >
                        {isSubmitting ? 'Sending...' : (<><Send size={16} /> Send Message</>)}
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-80 relative">
        <MapContainer center={POSITION} zoom={14} className="w-full h-full" scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={POSITION}>
            <Popup>
              <strong>NetCore Solutions</strong><br />
              {COMPANY.address}
            </Popup>
          </Marker>
        </MapContainer>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-bg dark:bg-dark-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <SectionBadge>FAQ</SectionBadge>
          </div>
          <h2 className="text-3xl font-bold font-heading text-secondary dark:text-white text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQS.map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>
    </>
  );
}
