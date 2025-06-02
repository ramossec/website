import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import LGPDConsent from '../components/LGPDConsent';

const TermsPage = () => {
  useEffect(() => {
    document.title = 'Termos de Uso - RamosSec';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="container-custom py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#002B5B] mb-8">Termos de Uso</h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002B5B] mb-4">1. Aceitação dos Termos</h2>
              <p className="text-gray-700 mb-4">
                Ao acessar e usar o site da RamosSec, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá usar nosso site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002B5B] mb-4">2. Uso do Site</h2>
              <p className="text-gray-700 mb-4">
                O conteúdo deste site é apenas para fins informativos. A RamosSec reserva-se o direito de modificar, suspender ou descontinuar qualquer aspecto do site a qualquer momento.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002B5B] mb-4">3. Propriedade Intelectual</h2>
              <p className="text-gray-700 mb-4">
                Todo o conteúdo presente neste site, incluindo textos, gráficos, logos, ícones, imagens, clips de áudio, downloads digitais e compilações de dados, é de propriedade da RamosSec ou de seus fornecedores de conteúdo e está protegido por leis brasileiras e internacionais de direitos autorais.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002B5B] mb-4">4. Limitação de Responsabilidade</h2>
              <p className="text-gray-700 mb-4">
                A RamosSec não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do acesso ou uso deste site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002B5B] mb-4">5. Links para Terceiros</h2>
              <p className="text-gray-700 mb-4">
                Nosso site pode conter links para sites de terceiros. A RamosSec não é responsável pelo conteúdo ou práticas de privacidade desses sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002B5B] mb-4">6. Modificações dos Termos</h2>
              <p className="text-gray-700 mb-4">
                A RamosSec reserva-se o direito de modificar estes termos a qualquer momento. As modificações entram em vigor imediatamente após sua publicação no site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#002B5B] mb-4">7. Lei Aplicável</h2>
              <p className="text-gray-700 mb-4">
                Estes termos são regidos pelas leis do Brasil. Qualquer disputa relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
      <LGPDConsent />
    </div>
  );
};

export default TermsPage;