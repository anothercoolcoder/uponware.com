import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppFloat />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </div>
  );
}