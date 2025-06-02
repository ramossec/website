
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#00A3FF] to-[#0057FF] text-white min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
      </div>
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl">
          <span className="inline-block bg-white text-[#00A3FF] px-4 py-1 rounded-full text-sm font-semibold mb-6">
            Especialistas em Segurança Digital
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Transforme seu negócio com soluções digitais inovadoras e seguras
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-100 mb-8">
            Especializados em Segurança da Informação, Desenvolvimento Web e Adequação à LGPD.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#servicos" className="btn-primary bg-white text-[#00A3FF] hover:bg-gray-100 text-center">
              Conheça nossos serviços
            </a>
            <a href="#contato" className="btn-secondary text-white border-white hover:bg-white/20 text-center">
              Agendar uma consulta gratuita
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0 right-0">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,256C960,245,1056,203,1152,170.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero