import React from 'react';

import MenuBar from '../components/menuBar';
import Footer from '../components/footer';
import RainMatrix from '../components/rainMatrix';

function ContactPage() {
  return (
    <div>
      <RainMatrix/>
        <MenuBar/>
        <div className='intext'><h1>Contact</h1></div>
        <Footer/>

    </div>
  );
}

export default ContactPage;
