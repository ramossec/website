
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TrayVarejoPage from './pages/TrayVarejoPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiesPage from './pages/CookiesPage';
import SuccessCasesPage from './pages/SuccessCasesPage';
import NuvemShopPage from './pages/NuvemShopPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/parceiros/tray-varejo" element={<TrayVarejoPage />} />
        <Route path="/parceiros/nuvemshop" element={<NuvemShopPage />} />
        <Route path="/termos-de-uso" element={<TermsPage />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPage />} />
        <Route path="/politica-de-cookies" element={<CookiesPage />} />
        <Route path="/casos-de-sucesso" element={<SuccessCasesPage />} />
      </Routes>
    </Router>
  );
}

export default App;