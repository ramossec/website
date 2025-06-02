import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { CheckCircle, ShoppingBag } from 'lucide-react';

const PartnersPage = () => {
  useEffect(() => {
    document.title = 'Integrações E-commerce - RamosSec';
    window.scrollTo(0, 0);
    
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
    setTimeout(animateElements, 100);
    
    return () => window.removeEventListener('scroll', animateElements);
  }, []);

  const platforms = [
    {
      name: "Shopify",
      logo: "https://cdn.shopify.com/s/files/1/0557/9535/9804/files/shopify-logo.png",
      description: "Integração completa com a plataforma Shopify, permitindo sincronização de produtos, pedidos e clientes."
    },
    {
      name: "VTEX",
      logo: "https://vtex.com/wp-content/uploads/2021/04/VTEX_pink_RGB.png",
      description: "Conexão direta com a VTEX para gerenciamento unificado do seu e-commerce."
    },
    {
      name: "Nuvemshop",
      logo: "https://d2r9epyceweg5n.cloudfront.net/stores/001/842/169/themes/common/logo-1851615059-1626227095-d9b637848984de4d11f71d6b7ed0b0241626227095.png",
      description: "Integração com a Nuvemshop para automatizar processos e melhorar a gestão do seu negócio."
    },
    {
      name: "Magento",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magento_Logo.svg/2560px-Magento_Logo.svg.png",
      description: "Soluções personalizadas para Magento, com foco em performance e escalabilidade."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="relative bg-gradient-to-r from-[#001B3B] to-[#002B5B] text-white py-24 md:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block bg-[#FF6F00] text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
                Integrações E-commerce
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Conecte sua loja com as principais plataformas
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Oferecemos integrações robustas e seguras com as principais plataformas de e-commerce do mercado, 
                garantindo uma gestão eficiente do seu negócio online.
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0 right-0">
              <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,256C960,245,1056,203,1152,170.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>
        
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title-center">Plataformas Integradas</h2>
              <p className="text-gray-600">
                Conectamos seu negócio com as principais plataformas de e-commerce, oferecendo uma 
                experiência unificada e eficiente para sua operação online.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="animate-on-scroll bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <div className="h-20 flex items-center justify-center mb-6">
                    <img 
                      src={platform.logo} 
                      alt={`Logo ${platform.name}`} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#002B5B] text-center">{platform.name}</h3>
                  <p className="text-gray-600 text-center">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="section-padding bg-[#f5f7fa]">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title-center">Benefícios das Integrações</h2>
              <p className="text-gray-600">
                Nossas integrações oferecem diversos benefícios para otimizar a gestão do seu e-commerce
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#002B5B]">Gestão Centralizada</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6F00] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Controle de estoque unificado</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6F00] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sincronização automática de pedidos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6F00] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Gestão de clientes centralizada</span>
                  </li>
                </ul>
              </div>
              
              <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#002B5B]">Automação de Processos</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6F00] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Atualização automática de preços</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6F00] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sincronização de promoções</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6F00] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Gestão automatizada de entregas</span>
                  </li>
                </ul>
              </div>
              
              <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#002B5B]">Análise e Relatórios</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6F00] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Relatórios consolidados de vendas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6F00] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Análise de desempenho por canal</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6F00] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Insights para tomada de decisão</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-[#002B5B] text-white py-16">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:w-2/3">
                <h2 className="text-3xl font-bold mb-4">Pronto para integrar sua loja?</h2>
                <p className="text-gray-300">
                  Entre em contato conosco e descubra como nossas integrações podem 
                  otimizar a gestão do seu e-commerce.
                </p>
              </div>
              <a href="#contato" className="btn-primary">
                <span className="flex items-center">
                  <ShoppingBag size={20} className="mr-2" />
                  Falar com um especialista
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PartnersPage;