import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Process from './pages/Process';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import PrivateCheck from './pages/PrivateCheck';
import Businesskunden from "./pages/Businesskunden";
import BusinessCheck from "./pages/BusinessCheck";
import Privatkunden from './pages/Privatkunden';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ueber-mich" element={<About />} />
          <Route path="arbeitsweise" element={<Process />} />

          {/* Services Section - Parent Routes */}
          <Route path="services" element={<Services />} />
          
          {/* Privatkunden Parent with Nested Route */}
          <Route path="services/Privatkunden" element={<Privatkunden />}>
            <Route path="PrivateCheck" element={<PrivateCheck />} />
          </Route>
          
          {/* Businesskunden Parent with Nested Route */}
          <Route path="services/Businesskunden" element={<Businesskunden />}>
            <Route path="BusinessCheck" element={<BusinessCheck />} />
          </Route>

          {/* Other Pages */}
          <Route path="kontakt" element={<Contact />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="datenschutz" element={<Datenschutz />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
