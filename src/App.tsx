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
import BusinessCheck from './pages/Businesscheck';
import TargetAudience from './pages/TargetAudience';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="arbeitsweise" element={<Process />} />
        <Route path="fuer-wen" element={<TargetAudience />} />
        <Route path="services">
          <Route path="Privatkunden">
            <Route index element={<Privatkunden />} />
            <Route path="check" element={<Privatecheck />} />
          </Route>
          <Route path="business">
            <Route index element={<Businesskunden />} />
            <Route path="check" element={<BusinessCheckheck />} />
          </Route>
        </Route>
        <Route path="kontakt" element={<Contact />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="datenschutz" element={<Datenschutz />} />
      </Route>
    </Routes>
  );
}

export default App;
