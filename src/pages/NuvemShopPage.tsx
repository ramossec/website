import { useEffect } from "react";
import Layout from "../components/Layout";
import { CheckCircle, ShoppingBag } from "lucide-react";

const features = [
  "Criação e desenvolvimento de lojas personalizadas na Nuvemshop",
  "Customização de temas e integrações com aplicativos",
  "Migração de outras plataformas para a Nuvemshop",
  "Suporte contínuo e otimização de loja",
];

const reasons = [
  "Plataforma líder na América Latina, confiada por mais de 100.000 empresas",
  "Recursos robustos e ferramentas fáceis de usar",
  "Integrações perfeitas com meios de pagamento e logística",
  "Ambiente seguro e escalável para o seu negócio crescer",
];

const NuvemShopPage = () => {
  useEffect(() => {
    document.title = "Nuvemshop - RamosSec";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Partner Badge */}
      <div className="absolute top-24 right-4 md:right-8 z-10">
        <img
          src="/nuvemshop_partner.png"
          alt="Nuvemshop Partner"
          className="w-24 h-auto"
        />
      </div>

      <section className="relative bg-gradient-to-r from-[#1A2980] to-[#26D0CE] text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#2D9CDB] text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Nuvemshop
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Potencialize seu e-commerce com a Nuvemshop
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Temos orgulho em ser um <strong>Parceiro Nuvemshop</strong>! Ajudamos empreendedores e empresas a crescerem sua presença online com a plataforma de e-commerce líder na América Latina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5514991221870?text=Olá!%20Gostaria%20de%20criar%20ou%20migrar%20minha%20loja%20para%20a%20Nuvemshop."
                className="btn-primary"
              >
                Começar agora
              </a>
              <a
                href="#features"
                className="btn-secondary text-white border-white hover:bg-white/20"
              >
                Conhecer recursos
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title-center">O que oferecemos</h2>
            <p className="text-gray-600">
              Soluções completas para sua loja Nuvemshop, desde a criação até a otimização contínua.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-white rounded-lg shadow-md"
              >
                <CheckCircle className="h-6 w-6 text-[#2D9CDB] mr-3 flex-shrink-0" />
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
              <h2 className="section-title">Por que escolher a Nuvemshop?</h2>
              <p className="text-gray-600 mb-8">
                A Nuvemshop é a principal plataforma de e-commerce da América Latina, oferecendo recursos avançados e facilidade de uso para impulsionar seu negócio.
              </p>
              <ul className="space-y-4">
                {reasons.map((reason, idx) => (
                  <li className="flex items-start" key={idx}>
                    <CheckCircle className="h-5 w-5 text-[#2D9CDB] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{reason}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#2D9CDB] opacity-10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#1A2980] opacity-10 rounded-lg"></div>
              <img
                src="/nuvemshop_dash.png"
                alt="Nuvemshop Dashboard"
                className="rounded-lg shadow-lg relative z-10 bg-white p-6"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1A2980] text-white py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
              <p className="text-gray-300">
                Entre em contato conosco e descubra como a Nuvemshop pode transformar seu negócio online.
              </p>
            </div>
            <a
              href="https://wa.me/5514991221870?text=Olá!%20Gostaria%20de%20criar%20ou%20migrar%20minha%20loja%20para%20a%20Nuvemshop."
              className="btn-primary"
            >
              <span className="flex items-center">
                <ShoppingBag size={20} className="mr-2" />
                Falar com especialista
              </span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NuvemShopPage;
