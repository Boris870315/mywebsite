import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';

import HomePage from './pages/home'
import ContactPage from './pages/contact'
import AboutPage from './pages/about';
import WorksPage from './pages/works';
import NotFoundPage from './pages/notfound';

function App() {
    useEffect(() => {
      document.title = 'Boris';
    }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="contact" element={<ContactPage/>}/>
          <Route path="works" element={<WorksPage/>}/>
          <Route path="hello" element={<WorksPage/>}/>
          <Route path="about" element={<AboutPage/>}/>
          <Route path="/*" element={<NotFoundPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
