import{ useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import LGPDConsent from '../components/LGPDConsent';

const HomePage = () => {
  useEffect(() => {
    document.title = 'RamosSec - Especialistas em Tecnologia e Segurança da Informação';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <Services />
        <WhyChooseUs />
      </main>
      <Footer />
      <WhatsAppButton />
      <LGPDConsent />
    </div>
  );
};

export default HomePage;