import React from 'react';

import './resume.css'
import MenuBar from '../components/menuBar';
import Footer from '../components/footer';

function ResumePage() {
  return (
    <div >
      <MenuBar/>
      <div className='intext'>
        <h1 >Resume</h1>
      </div>
      <Footer/>

    </div>
  );
}

export default ResumePage;
