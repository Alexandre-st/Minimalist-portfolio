import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import Header from './layouts/Header/Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Footer from './layouts/Footer';

import './styles/index.scss';

const App = () => {
  return ( 
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}
 
export default App;