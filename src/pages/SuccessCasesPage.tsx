import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import LGPDConsent from '../components/LGPDConsent';
import ContactFormSection from '../components/ContactFormSection';
import { Users, ShieldCheck, BarChart, Globe, Award, TrendingUp } from 'lucide-react';

const SuccessCasesPage = () => {
  useEffect(() => {
    document.title = 'Casos de Sucesso - RamosSec';
    window.scrollTo(0, 0);
  }, []);

  const successCases = [
    {
      client: "E-commerce Fashion",
      industry: "Moda",
      challenge: "Vulnerabilidades de segurança e baixa performance do site",
      solution: "Implementação de protocolo HTTPS, WAF e otimização de performance",
      results: [
        "Redução de 60% no tempo de carregamento",
        "Zero incidentes de segurança em 12 meses",
        "Aumento de 40% na taxa de conversão"
      ],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      client: "Tech Solutions",
      industry: "Tecnologia",
      challenge: "Necessidade de adequação à LGPD",
      solution: "Consultoria completa e implementação de políticas de privacidade",
      results: [
        "100% de conformidade com a LGPD",
        "Implementação de gestão de consentimento",
        "Treinamento de 50 funcionários"
      ],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      client: "Indústria Connect",
      industry: "Indústria",
      challenge: "Infraestrutura de TI obsoleta e vulnerável",
      solution: "Modernização da infraestrutura e implementação de segurança",
      results: [
        "Redução de 80% em downtime",
        "Economia de 45% em custos operacionais",
        "Aumento de 70% na produtividade"
      ],
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const metrics = [
    {
      icon: <Users className="h-8 w-8" />,
      value: "100+",
      label: "Clientes Atendidos"
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      value: "500+",
      label: "Projetos Entregues"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      value: "99.9%",
      label: "Satisfação dos Clientes"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      value: "10+",
      label: "Anos de Experiência"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#001B3B] to-[#002B5B] text-white py-24">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Histórias de Sucesso
              </h1>
              <p className="text-xl text-gray-300">
                Conheça alguns dos projetos que transformaram a segurança e 
                eficiência digital de nossos clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#002B5B]/10 text-[#002B5B] mb-4">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold text-[#002B5B] mb-2">{metric.value}</div>
                  <div className="text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Cases Section */}
        <section className="py-16 bg-[#f5f7fa]">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] mb-6">
                Casos de Sucesso
              </h2>
              <p className="text-gray-600">
                Descubra como ajudamos empresas a superarem seus desafios de 
                segurança e tecnologia.
              </p>
            </div>

            <div className="space-y-16">
              {successCases.map((case_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="order-2 md:order-1 p-8">
                      <div className="flex items-center mb-4">
                        <Award className="h-6 w-6 text-[#FF6F00] mr-2" />
                        <h3 className="text-2xl font-semibold text-[#002B5B]">{case_.client}</h3>
                      </div>
                      <p className="text-gray-500 mb-4">Setor: {case_.industry}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-[#002B5B] mb-2">Desafio</h4>
                        <p className="text-gray-600">{case_.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-[#002B5B] mb-2">Solução</h4>
                        <p className="text-gray-600">{case_.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-[#002B5B] mb-2">Resultados</h4>
                        <ul className="space-y-2">
                          {case_.results.map((result, idx) => (
                            <li key={idx} className="flex items-start">
                              <TrendingUp className="h-5 w-5 text-[#FF6F00] mr-2 flex-shrink-0 mt-1" />
                              <span className="text-gray-600">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="order-1 md:order-2">
                      <img 
                        src={case_.image} 
                        alt={`${case_.client} Case Study`}
                        className="w-full h-full object-cover"
                        style={{ minHeight: '400px' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactFormSection />
      </main>
      
      <Footer />
      <WhatsAppButton />
      <LGPDConsent />
    </div>
  );
};

export default SuccessCasesPage;