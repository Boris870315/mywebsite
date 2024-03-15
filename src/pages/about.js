import React from 'react';

import MenuBar from '../components/menuBar';
import Footer from '../components/footer';
import RainMatrix from '../components/rainMatrix';
import './about.css'

function AboutPage() {
  return (
    <div>
      <RainMatrix/>
        <MenuBar/>
        <div className='intext'>
          <h1>About me </h1>
          <h2>Self Introduction</h2>
            <p>Hi</p>
          <h2>Education</h2>
          <div className='education'>
            <p>2015-2020<br/>University of Technology, Sydney (UTS)</p>
            <p>Bachelor of Electrical Engineering</p>
          </div>
           
          <div className='education'>
            <p>2022-2023<br/>Feng Chia University (FCU)</p>
            <p>Master of Information Technology</p>
          </div>
          <h2>Activities</h2>
          <div className='education'>
            <p>2017-2020<br/>Golf Club, FCU</p>
            <p>president<br/>Organised major events and competitions and supervised overall event management. </p>
          </div>
          <div className='education'>
            <p>2017-2020<br/>Martial Arts Club, FCU</p>
            <p>member<br/>Organised major martial arts events at the university. </p>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default AboutPage;
