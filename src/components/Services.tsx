import { useEffect } from 'react';
import { Globe, Smartphone, Shield, Laptop, MessageSquare, PenTool, ShoppingBag, ScrollText } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: <Globe size={32} />,
      title: "Desenvolvimento Web",
      description: "Criamos sites e aplicações web modernas e responsivas, utilizando as mais recentes tecnologias do mercado."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Desenvolvimento Mobile",
      description: "Criamos aplicativos móveis intuitivos e eficientes para iOS e Android, impulsionando sua presença no mercado mobile."
    },
    {
      icon: <Shield size={32} />,
      title: "Segurança da Informação",
      description: "Oferecemos soluções de segurança robustas para proteger seus dados e sistemas contra ameaças cibernéticas."
    },
    {
      icon: <Laptop size={32} />,
      title: "Consultoria em TI",
      description: "Fornecemos orientação especializada para otimizar seus processos de TI e impulsionar a eficiência do seu negócio."
    },
    {
      icon: <ShoppingBag size={32} />,
      title: "Google Ads, Meta Ads e TikTok Ads",
      description: "Gerenciamos campanhas de publicidade online nas principais plataformas para maximizar seu alcance e retorno sobre investimento."
    },
    {
      icon: <MessageSquare size={32} />,
      title: "Social Media",
      description: "Desenvolvemos estratégias de mídia social personalizadas para aumentar o engajamento, a visibilidade da marca e o crescimento da comunidade online."
    },
    {
      icon: <PenTool size={32} />,
      title: "Design",
      description: "Criamos designs visuais impactantes para sua marca, incluindo logotipos, materiais de marketing e interfaces de usuário para web e aplicativos móveis."
    },
    {
      icon: <ScrollText size={32} />,
      title: "Adequação à LGPD",
      description: "Auxiliamos empresas na adequação à Lei Geral de Proteção de Dados, garantindo conformidade legal e proteção efetiva dos dados pessoais."
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-[#f5f7fa]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title-center">Nossos Serviços</h2>
          <p className="text-gray-600">
            Oferecemos um conjunto completo de soluções digitais para ajudar sua empresa a 
            prosperar no ambiente online, desde desenvolvimento até marketing digital.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="animate-on-scroll bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col h-full"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#002B5B]/10 text-[#002B5B] mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#002B5B]">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <a 
                href="#contato" 
                className="mt-6 text-[#FF6F00] font-semibold hover:text-[#E56200] inline-flex items-center transition duration-300"
              >
                Saber mais
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;