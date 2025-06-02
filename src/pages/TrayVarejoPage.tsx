import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import LGPDConsent from '../components/LGPDConsent';
import { CheckCircle, ShoppingBag } from 'lucide-react';

const TrayVarejoPage = () => {
  useEffect(() => {
    document.title = 'Tray Varejo - RamosSec';
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "Gestão completa de produtos e estoque",
    "Integração com marketplaces",
    "Sistema de pagamento integrado",
    "Relatórios e análises avançadas",
    "Automação de processos",
    "Suporte técnico especializado"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Partner Badge */}
        <div className="absolute top-24 right-4 md:right-8 z-10">
          <img 
            src="/tray_bronze.png"
            alt="Tray Bronze Partner"
            className="w-24 h-auto"
          />
        </div>

        <section className="relative bg-gradient-to-r from-[#001B3B] to-[#002B5B] text-white py-24 md:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block bg-[#FF6F00] text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
                Tray Varejo
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Potencialize seu e-commerce com a Tray Varejo
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Uma plataforma completa para gerenciar seu negócio online, com recursos avançados 
                e integração com os principais marketplaces do Brasil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/5514991221870?text=Olá!%20Gostaria%20de%20ativar%20a%20minha%20loja%20na%20Tray%20Varejo." className="btn-primary">
                  Começar agora
                </a>
                <a href="#features" className="btn-secondary text-white border-white hover:bg-white/20">
                  Conhecer recursos
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title-center">Recursos Principais</h2>
              <p className="text-gray-600">
                Descubra todas as ferramentas e funcionalidades que a Tray Varejo oferece para 
                impulsionar seu e-commerce.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-md">
                  <CheckCircle className="h-6 w-6 text-[#FF6F00] mr-3 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#f5f7fa]">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Por que escolher a Tray Varejo?</h2>
                <p className="text-gray-600 mb-8">
                  A Tray Varejo é uma das principais plataformas de e-commerce do Brasil, oferecendo 
                  uma solução completa para quem quer vender online.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6F00] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Plataforma estável e segura com mais de 15 anos de mercado</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6F00] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Integração nativa com os principais marketplaces</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6F00] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Suporte técnico especializado 24/7</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6F00] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Ferramentas avançadas de marketing e vendas</p>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FF6F00] opacity-10 rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#002B5B] opacity-10 rounded-lg"></div>
                <img 
                  src="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Tray Varejo Dashboard" 
                  className="rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#002B5B] text-white py-16">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:w-2/3">
                <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
                <p className="text-gray-300">
                  Entre em contato conosco e descubra como a Tray Varejo pode transformar seu negócio online.
                </p>
              </div>
              <a href="https://wa.me/5514991221870?text=Olá!%20Gostaria%20de%20ativar%20a%20minha%20loja%20na%20Tray%20Varejo." className="btn-primary">
                <span className="flex items-center">
                  <ShoppingBag size={20} className="mr-2" />
                  Falar com especialista
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
      <LGPDConsent />
    </div>
  );
};

export default TrayVarejoPage;