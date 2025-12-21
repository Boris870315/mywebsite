import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';

import HomePage from './pages/home'
import ContactPage from './pages/contact'
import AboutPage from './pages/about';
import HelloPage from './pages/hello';
import NotFoundPage from './pages/notfound';

function App() {
    useEffect(() => {
      document.title = 'Boris';
      document.body.setAttribute('data-theme', 'dark');
    }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="contact" element={<ContactPage/>}/>
          <Route path="hello" element={<HelloPage/>}/>  {/*this is work page*/}
          <Route path="about" element={<AboutPage/>}/>
          <Route path="/*" element={<NotFoundPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;