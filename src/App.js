import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/home'
import ContactPage from './pages/contact'
import ResumePage from'./pages/resume'
import AboutPage from './pages/about';
import HelloPage from './pages/hello';
import NotFoundPage from './pages/notfound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="contact" element={<ContactPage/>}/>
          <Route path="resume" element={<ResumePage/>}/>
          <Route path="hello" element={<HelloPage/>}/>
          <Route path="about" element={<AboutPage/>}/>
          <Route path="/*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;