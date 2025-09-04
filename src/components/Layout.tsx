import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import LGPDConsent from "./LGPDConsent";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow pt-20">{children}</main>
    <WhatsAppButton />
    <LGPDConsent />
    <Footer />
  </div>
);

export default Layout;
