import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Process from './pages/Process';
import Contact from './pages/Contact';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import PrivateVersicherungen from './pages/Privateversicherungen';
import PrivateCheck from './pages/PrivateCheck';
import BusinessServices from './pages/BusinessServices';
import BusinessCheck from './pages/BusinessCheck';
import TargetAudience from './pages/TargetAudience';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="arbeitsweise" element={<Process />} />
        <Route path="fuer-wen" element={<TargetAudience />} />
        <Route path="services">
          <Route path="private">
            <Route index element={<PrivateVersicherungen />} />
            <Route path="check" element={<PrivateCheck />} />
          </Route>
          <Route path="business">
            <Route index element={<BusinessServices />} />
            <Route path="check" element={<BusinessCheck />} />
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