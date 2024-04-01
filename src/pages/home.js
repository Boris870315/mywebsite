import React from 'react';
import './home.css'

import MenuBar from '../components/menuBar';
import RainMatrix from '../components/rainMatrix';

import  borisAvatar  from '../assets/avatar/boris.jpg';

function HomePage() {
  return (
    <div>
      <RainMatrix/>
      <MenuBar/>
      <div className='intro'>
        <div className="intro-container">
          <img className="avatar" src={borisAvatar} alt="Boris Avatar"></img>
          <h1 className='intext'>Hello, I am Boris<br/>A Software Developer<br/>Based in Sydney</h1>
        </div>
        <p className='intext'>Bridging Technology and Imagination, One Line of Code at a Time - Where Innovation Meets Practicality in the Digital World.</p>
      </div>

    </div>
  );
}

export default HomePage;
