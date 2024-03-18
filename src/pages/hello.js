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
  // Slider 设置
  const settings = {
    dots: true, // 是否显示底部导航点
    infinite: true, // 是否无限循环
    speed: 500, // 切换速度
    slidesToShow: 3, // 同时显示的幻灯片数量
    slidesToScroll: 1, // 每次滑动的幻灯片数量
    autoplay: true, // 开启自动播放
    autoplaySpeed: 2000, // 自动播放的间隔时间
    responsive: [ // 响应式布局设置
      {
        breakpoint: 1024, // 屏幕宽度小于1024px时的设置
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
      <Footer />
    </div>
  );
}

export default HelloPage;
