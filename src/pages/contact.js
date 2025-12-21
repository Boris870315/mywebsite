import React from 'react';

import MenuBar from '../components/menuBar';
import Footer from '../components/footer';
import RainMatrix from '../components/rainMatrix';
import './contact.css'
import phoneImg from '../assets/icon/phone.png'
import emailImg from '../assets/icon/email.png';

function ContactPage() {
  return (
    <div>
      <RainMatrix/>
        <MenuBar/>
        <div className='intext'><h1>Contact</h1></div>
        <p className='intext'>How to Contact with me?</p>
        <div className='contact-container'>
          <div className='contact'>
            <img src={phoneImg} alt='phone imgge'/>
            <h2>Phone</h2>
            <p><a href="tel:+886928603599">+886 928 603 599</a></p>
            <p></p>
          </div>
          <div className='contact'>
          <img src={emailImg} alt='email imgge'/>
            <h2>Email</h2>
            <a href="chenbaihan97@gmail.com">chenbaihan97@gmail.com</a>
          </div>
        </div>
        <Footer/>

    </div>
  );
}

export default ContactPage;
