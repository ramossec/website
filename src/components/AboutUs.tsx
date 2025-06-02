import React, { useEffect } from 'react';
import { Shield, Users, Headphones } from 'lucide-react';

const AboutUs = () => {
  useEffect(() => {
    // Animation on scroll
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', animateElements);
    // Initial check
    setTimeout(animateElements, 100);
    
    return () => window.removeEventListener('scroll', animateElements);
  }, []);

  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title-center">Quem Somos</h2>
          <p className="text-gray-600">
            A RamosSec é uma empresa especializada em tecnologia e segurança da informação, 
            fundada com a missão de fornecer soluções digitais inovadoras e seguras para empresas 
            de todos os portes. Nosso time de especialistas combina experiência técnica com uma 
            abordagem consultiva para entregar resultados excepcionais.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#002B5B]/10 text-[#002B5B] mb-6">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#002B5B]">Equipe Certificada</h3>
            <p className="text-gray-600">
              Nossos profissionais possuem certificações reconhecidas no mercado, garantindo 
              qualidade técnica e expertise nos serviços prestados.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#002B5B]/10 text-[#002B5B] mb-6">
              <Headphones size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#002B5B]">Atendimento Personalizado</h3>
            <p className="text-gray-600">
              Entendemos que cada empresa tem necessidades únicas, por isso oferecemos 
              soluções personalizadas e suporte dedicado.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#002B5B]/10 text-[#002B5B] mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#002B5B]">Foco em Segurança e Conformidade</h3>
            <p className="text-gray-600">
              Priorizamos a segurança e a conformidade com as normas e regulamentos em todos os nossos projetos 
              e serviços oferecidos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;