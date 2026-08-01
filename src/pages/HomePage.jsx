import { HelmetProvider, Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import IndustriesSection from '../components/home/IndustriesSection';
import ProcessSection from '../components/home/ProcessSection';
import ProjectsSection from '../components/home/ProjectsSection';
import TechnologiesSection from '../components/home/TechnologiesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BlogSection from '../components/home/BlogSection';
import ContactCTA from '../components/home/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>NetCore Solutions – Enterprise Network Infrastructure & IT Solutions</title>
        <meta name="description" content="NetCore Solutions delivers enterprise-grade network infrastructure including Data Centers, Structured Cabling, Routing, Switching, Firewall Security, Wi-Fi, and Fiber Optic Networks across UAE and GCC." />
        <meta property="og:title" content="NetCore Solutions – Enterprise Network Infrastructure" />
        <meta property="og:description" content="Enterprise network infrastructure specialists in UAE. Data Centers, Structured Cabling, Firewall, Wi-Fi, Fiber Optic." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <IndustriesSection />
      <ProcessSection />
      <ProjectsSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactCTA />
    </>
  );
}
