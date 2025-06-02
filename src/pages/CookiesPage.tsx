import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import LGPDConsent from '../components/LGPDConsent';

const CookiesPage = () => {
  useEffect(() => {
    document.title = 'Política de Cookies - RamosSec';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="container-custom py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#002B5B] mb-8">Política de Cookies</h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002B5B] mb-4">1. O que são Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies são pequenos arquivos de texto que são armazenados no seu computador ou dispositivo móvel quando você visita nosso site. Eles permitem que o site lembre suas ações e preferências por um determinado período, para que você não precise inserir essas informações novamente quando retornar ao site ou navegar de uma página para outra.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002B5B] mb-4">2. Como Utilizamos os Cookies</h2>
              <p className="text-gray-700 mb-4">
                Utilizamos cookies para diversos propósitos, incluindo:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Cookies essenciais: necessários para o funcionamento básico do site</li>
                <li>Cookies de desempenho: para analisar como os visitantes usam nosso site</li>
                <li>Cookies de funcionalidade: para lembrar suas preferências e escolhas</li>
                <li>Cookies de publicidade: para fornecer anúncios mais relevantes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002B5B] mb-4">3. Tipos de Cookies que Utilizamos</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#002B5B] mb-2">Cookies Essenciais</h3>
                  <p className="text-gray-700">
                    São necessários para o funcionamento básico do site. Incluem cookies que permitem que você faça login em áreas seguras do site, use um carrinho de compras ou utilize serviços de pagamento eletrônico.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#002B5B] mb-2">Cookies de Desempenho</h3>
                  <p className="text-gray-700">
                    Nos ajudam a entender como os visitantes interagem com o site, fornecendo informações sobre as áreas visitadas, o tempo de visita e quaisquer problemas encontrados.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#002B5B] mb-2">Cookies de Funcionalidade</h3>
                  <p className="text-gray-700">
                    Permitem que o site lembre suas escolhas (como seu nome de usuário, idioma ou região) e forneça recursos aprimorados e mais pessoais.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#002B5B] mb-2">Cookies de Publicidade</h3>
                  <p className="text-gray-700">
                    São usados para fornecer anúncios mais relevantes para você e seus interesses. Também são usados para limitar o número de vezes que você vê um anúncio e ajudar a medir a eficácia das campanhas publicitárias.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002B5B] mb-4">4. Controle de Cookies</h2>
              <p className="text-gray-700 mb-4">
                Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies que já estão no seu computador e pode configurar a maioria dos navegadores para impedir que eles sejam colocados.
              </p>
              <p className="text-gray-700 mb-4">
                Para saber mais sobre como gerenciar cookies, visite:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Google Chrome: chrome://settings/cookies</li>
                <li>Mozilla Firefox: about:preferences#privacy</li>
                <li>Safari: Preferências &gt; Privacidade</li>
                <li>Microsoft Edge: edge://settings/privacy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002B5B] mb-4">5. Atualizações na Política de Cookies</h2>
              <p className="text-gray-700 mb-4">
                Podemos atualizar nossa Política de Cookies periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre quaisquer mudanças.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#002B5B] mb-4">6. Contato</h2>
              <p className="text-gray-700 mb-4">
                Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato conosco através do e-mail: privacidade@ramossec.com.br
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

export default CookiesPage;