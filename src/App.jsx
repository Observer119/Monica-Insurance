import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Process from './pages/Process';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import PrivateCheck from './pages/PrivateCheck';
import Businesskunden from './pages/Businesskunden';
import Businesscheck from './pages/Businesscheck';
import Privatkunden from './pages/Privatkunden';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="ueber-mich" element={<About />} />
        <Route path="arbeitsweise" element={<Process />} />
       <Route path="services">
        <Route path="Privatkunden" element={<Privatkunden />}>
          <Route path="check" element={<PrivateCheck />} />
      </Route>
      <Route path="Businesskunden" element={<Businesskunden />}>
      <Route path="Businesscheck" element={<Businesscheck />} />
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
