import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MenuBar from '../components/menuBar';
import Footer from '../components/footer';
import RainMatrix from '../components/rainMatrix';
import SkillPiece from '../components/SkillPiece';
import skillsData from '../assets/skill.json';

function HelloPage() {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 2000, 
    responsive: [ 
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600, // 屏幕宽度小于600px时的设置
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className='container'>
      <RainMatrix />
      <MenuBar />
      <div className='intext'>
        <h1> Skills </h1>
        <div className="slider-container">
      <Slider {...settings}>
        {skillsData.map((skill) => (
            <div key={skill.id}>
              <SkillPiece 
                skills={skill.skills} 
                imgPath={require(`../assets/skillsImg/${skill.skills}.png`)} 
                imgAlt={skill.imgAlt} 
              />
            </div>
          ))}
      </Slider>
    </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default HelloPage;
