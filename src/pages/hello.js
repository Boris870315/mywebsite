import React from 'react';

import MenuBar from '../components/menuBar';
import Footer from '../components/footer';

function HelloPage() {
  return (
    <div className='container'>
        <MenuBar/>
        <div className='intext'>
        <h1> Work</h1>
        </div>
        <Footer/>
    </div>
  );
}

export default HelloPage;
