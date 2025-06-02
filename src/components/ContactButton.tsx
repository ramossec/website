import React, { useState } from 'react';
import ContactModal from './ContactModal';

interface ContactButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const ContactButton = ({ className, children }: ContactButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={className || 'btn-primary'}
      >
        {children || 'Fale Conosco'}
      </button>
      
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ContactButton;