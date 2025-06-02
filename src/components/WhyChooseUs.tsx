import { useEffect } from 'react';
import { Check } from 'lucide-react';

const WhyChooseUs = () => {
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

  const advantages = [
    "Equipe com mais de 10 anos de experiência no mercado",
    "Projetos entregues dentro do prazo e orçamento estimados",
    "Suporte técnico dedicado e rápido atendimento",
    "Soluções escaláveis que crescem com o seu negócio",
    "Metodologias ágeis para garantir resultados rápidos",
    "Foco em segurança desde o início do desenvolvimento"
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image column */}
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FF6F00] opacity-10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#002B5B] opacity-10 rounded-lg"></div>
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg relative z-10 w-full"
              />
            </div>
          </div>
          
          {/* Text column */}
          <div className="lg:w-1/2 animate-on-scroll">
            <h2 className="section-title">Por que escolher a RamosSec?</h2>
            <p className="text-gray-600 mb-8">
              Escolher o parceiro certo para suas necessidades de tecnologia e segurança é fundamental. 
              Aqui estão algumas razões pelas quais empresas confiam na RamosSec:
            </p>
            
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-[#FF6F00]" />
                  </div>
                  <p className="ml-3 text-gray-700">{advantage}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a href="#contato" className="btn-primary">
                Solicitar proposta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;