import React, { useState, useEffect } from 'react';

const LGPDConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('lgpdConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('lgpdConsent', 'accepted');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
      <div className="container-custom py-4 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-sm md:text-base">
            Utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência em nossos serviços, personalizar publicidade e recomendar conteúdo de seu interesse. Ao continuar navegando, você concorda com a nossa{' '}
            <a href="#" className="text-[#002B5B] hover:text-[#FF6F00] underline">
              Política de Privacidade
            </a>.
          </p>
          <button
            onClick={handleAccept}
            className="whitespace-nowrap bg-[#002B5B] hover:bg-[#001B3B] text-white px-6 py-2 rounded-md transition duration-300"
          >
            Aceitar e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LGPDConsent;