import React from 'react';
import './home.css'

import MenuBar from '../components/menuBar';
import Footer from '../components/footer';
import RainMatrix from '../components/rainMatrix';

function HomePage() {
  return (
    <div>
      <RainMatrix/>
      <MenuBar/>
      <div>
        <h1 className='intro'>Hello, This is Boris</h1>
      </div>

      <Footer/>
    </div>
  );
}

export default HomePage;
