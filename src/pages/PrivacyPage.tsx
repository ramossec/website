import{ useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import LGPDConsent from '../components/LGPDConsent';

const PrivacyPage = () => {
  useEffect(() => {
    document.title = 'Política de Privacidade - RamosSec';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="container-custom py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#002B5B] mb-8">Política de Privacidade</h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002B5B] mb-4">1. Introdução</h2>
              <p className="text-gray-700 mb-4">
                A RamosSec está comprometida em proteger sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais quando você utiliza nosso site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002B5B] mb-4">2. Coleta de Informações</h2>
              <p className="text-gray-700 mb-4">
                Coletamos informações que você nos fornece diretamente, como:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Nome</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone</li>
                <li>Informações da empresa</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Também coletamos automaticamente certas informações sobre seu dispositivo, incluindo:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Endereço IP</li>
                <li>Tipo de navegador</li>
                <li>Páginas visitadas</li>
                <li>Tempo de permanência no site</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002B5B] mb-4">3. Uso das Informações</h2>
              <p className="text-gray-700 mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Comunicar-nos com você sobre nossos serviços</li>
                <li>Enviar informações sobre atualizações e ofertas</li>
                <li>Personalizar sua experiência no site</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002B5B] mb-4">4. Proteção de Dados</h2>
              <p className="text-gray-700 mb-4">
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002B5B] mb-4">5. Seus Direitos</h2>
              <p className="text-gray-700 mb-4">
                De acordo com a LGPD, você tem direito a:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou inexatos</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar seu consentimento</li>
                <li>Solicitar a portabilidade dos dados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002B5B] mb-4">6. Cookies</h2>
              <p className="text-gray-700 mb-4">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site. Você pode controlar o uso de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#002B5B] mb-4">7. Contato</h2>
              <p className="text-gray-700 mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos, entre em contato conosco através do e-mail: privacidade@ramossec.com.br
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

export default PrivacyPage;