import HeroSection from '../components/hero/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/project/ProjectsSection';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import ContactBanner from '../components/ContactBanner';

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactBanner />
    </div>
  );
};
