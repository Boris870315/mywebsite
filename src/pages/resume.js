import React from 'react';

import './resume.css'
import MenuBar from '../components/menuBar';
import Footer from '../components/footer';
import RainMatrix from '../components/rainMatrix';

function ResumePage() {
  return (
    <div >
      <RainMatrix/>
      <MenuBar/>
      <div className='intext'>
        <h1 >Resume</h1>
      </div>
      <Footer/>

    </div>
  );
}

export default ResumePage;
