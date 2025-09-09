// import React, { useState } from 'react';
// import ContactModal from './ContactModal';

interface ContactButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const ContactButton = ({ className, children }: ContactButtonProps) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // return (
  //   <>
  //     <button
  //       onClick={() => setIsModalOpen(true)}
  //       className={className || 'btn-primary'}
  //     >
  //       {children || 'Fale Conosco'}
  //     </button>
      
  //     <ContactModal
  //       isOpen={isModalOpen}
  //       onClose={() => setIsModalOpen(false)}
  //     />
  //   </>
  // );


  // WhatsApp number (use only digits, country code included)
  const whatsappNumber = '5514991221870';
  const defaultMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da RamosSec.');

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${defaultMessage}`,
      '_blank'
    );
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={className || 'btn-primary'}
      type="button"
    >
      {children || 'Fale Conosco'}
    </button>
  );



};

export default ContactButton;