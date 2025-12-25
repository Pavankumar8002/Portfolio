import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './portfolio/Portfolio';  
import Header from './components/Header';

function RoutesConfig() {
    return (
        <Router> 
          <div className="routes-config">
            <Header />
            <Routes>
              <Route path="/" element={<Portfolio />} />  {/* Home Route */}
             
            </Routes>
          </div>
        </Router>  
    );
}

export default RoutesConfig;
