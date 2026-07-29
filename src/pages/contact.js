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
        <div className='contact-heading'><h1>Contact</h1></div>
        <p className='contact-intro'>How to contact me</p>
        <div className='contact-grid'>
          <div className='contact-card'>
            <img className="contact-icon" src={phoneImg} alt='Phone'/>
            <h2>Phone</h2>
            <p><a href="tel:+886928603599">+886 928 603 599</a></p>
          </div>
          <div className='contact-card'>
            <img className="contact-icon" src={emailImg} alt='Email'/>
            <h2>Email</h2>
            <a href="mailto:chenbaihan97@gmail.com">chenbaihan97@gmail.com</a>
          </div>
        </div>
        <Footer/>

    </div>
  );
}

export default ContactPage;
