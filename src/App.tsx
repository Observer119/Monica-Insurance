import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Process from './pages/Process';
import Contact from './pages/Contact';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Privatkunden from './pages/Privatkunden';
import PrivateCheck from './pages/PrivateCheck';
import Businesskunden from './pages/Businesskunden';
import BusinessCheck from './pages/BusinessCheck';
import TargetAudience from './pages/TargetAudience';
import Services from './pages/Services';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="arbeitsweise" element={<Process />} />
        <Route path="fuer-wen" element={<TargetAudience />} />

        {/* Services Section */}
        <Route path="services">
          <Route index element={<Services />} />
          <Route path="privatkunden">
            <Route index element={<Privatkunden />} />
            <Route path="private-check" element={<PrivateCheck />} />
          </Route>
          <Route path="businesskunden">
            <Route index element={<Businesskunden />} />
            <Route path="business-check" element={<BusinessCheck />} />
          </Route>
        </Route>

        {/* Legal and Contact Pages */}
        <Route path="kontakt" element={<Contact />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="datenschutz" element={<Datenschutz />} />
      </Route>
    </Routes>
  );
}

export default App;