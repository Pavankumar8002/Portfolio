import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './portfolio/Portfolio';  
import Contacts from './portfolio/Contacts';
import Header from './components/Header';

function RoutesConfig() {
    return (
        <Router> 
          <div className="routes-config">
            <Header />
            <Routes>
              <Route path="/" element={<Portfolio />} />  {/* Home Route */}
              <Route path="/contacts" element={<Contacts />} />  {/* New Contacts Route */}
            </Routes>
          </div>
        </Router>  
    );
}

export default RoutesConfig;
