import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import ContactButton from './ContactButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          {window.location.pathname === '/' && !isScrolled ? (
            <img 
              src="/logo.png" 
              alt="RamosSec Logo" 
              className="h-16 w-auto transition-all duration-300"
            />
          ) : (
            <span 
              className={`transition-all duration-300 text-base md:text-lg text-[#00A3FF]`}
            >
              RamosSec
            </span>
          )}
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="text-[#00A3FF] hover:text-[#0082CC] font-medium transition duration-300">Início</Link>
          <a href="#servicos" className="text-[#00A3FF] hover:text-[#0082CC] font-medium transition duration-300">Serviços</a>
          {/* <Link to="/casos-de-sucesso" className="text-[#00A3FF] hover:text-[#0082CC] font-medium transition duration-300">Cases</Link> */}
          <a href="#sobre" className="text-[#00A3FF] hover:text-[#0082CC] font-medium transition duration-300">Sobre Nós</a>
          
          <div 
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="text-[#00A3FF] hover:text-[#0082CC] font-medium transition duration-300 flex items-center">
              Parceiros <ChevronDown size={16} className="ml-1" />
            </button>
            <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <Link to="/parceiros/tray-varejo" className="block px-4 py-3 hover:bg-gray-100 text-[#00A3FF] transition duration-300">Tray Varejo</Link>
            </div>
          </div>
        </nav>

        <div className="hidden lg:block">
          <ContactButton />
        </div>

        <button onClick={toggleMobileMenu} className="lg:hidden text-[#00A3FF] p-2">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="text-[#00A3FF] hover:text-[#0082CC] font-medium transition duration-300 py-2">Início</Link>
            <a href="#servicos" className="text-[#00A3FF] hover:text-[#0082CC] font-medium transition duration-300 py-2">Serviços</a>
            {/* <Link to="/casos-de-sucesso" className="text-[#00A3FF] hover:text-[#0082CC] font-medium transition duration-300 py-2">Cases</Link> */}
            <a href="#sobre" className="text-[#00A3FF] hover:text-[#0082CC] font-medium transition duration-300 py-2">Sobre Nós</a>
            
            <div className="py-2">
              <div className="text-[#00A3FF] font-medium mb-2">Parceiros</div>
              <div className="pl-4 flex flex-col space-y-2">
                <Link to="/parceiros/tray-varejo" className="text-[#00A3FF] hover:text-[#0082CC] transition duration-300">Tray Varejo</Link>
              </div>
            </div>
            
            <ContactButton className="btn-primary text-center" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;