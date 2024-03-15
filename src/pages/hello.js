import React from 'react';
import Slider from "react-slick"

import MenuBar from '../components/menuBar';
import Footer from '../components/footer';
import RainMatrix from '../components/rainMatrix';

import SkillPiece from '../components/SkillPiece';
import skillsData from '../assets/skill.json';

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 4000,
  cssEase: "linear",
};

function HelloPage() {

  return (
    <div className='container'>
      <RainMatrix/>
        <MenuBar/>
        <div className='intext'>
        <h1> Skills </h1>
        <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
 
          {skillsData.map((skill) => (
            <SkillPiece key={skill.id} 
              skills={skill.skills} 
              imgPath={require('../assets/skillsImg/' + skill.skills + '.png')} 
              imgAlt={skill.imgAlt}  />
          ))}

      
        </div>
        <Footer/>
    </div>
  );
}

export default HelloPage;
