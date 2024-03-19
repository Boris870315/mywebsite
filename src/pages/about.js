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
        <section className='section about-me'>
          <h1>About Me</h1>
          <p>
  As a dynamic and innovative Software Engineer, I bring a blend of rigorous technical skills, creative problem-solving abilities, and a passion for developing cutting-edge software solutions. My journey in the field has been marked by hands-on experiences in a variety of projects ranging from self-driving vehicle technology to immersive augmented and virtual reality exhibitions. With a strong foundation in programming languages such as Java, C#, JavaScript, and others, coupled with my expertise in database technologies and development platforms like AWS and Unity, I am well-equipped to tackle complex challenges.
</p>
<p>
  My academic background, with a Bachelor's in Electrical Engineering from Feng Chia University and a Master's in Information Technology from the University of Technology Sydney, has provided me with a solid theoretical understanding and practical application of advanced technology concepts. Through projects like the award-winning Elevator with Brushless Motor and Regenerative Braking and the innovative Brain Computer Interface System, I have demonstrated my ability to lead and contribute to technologically sophisticated projects.
</p>
<p>
  Beyond technical prowess, my roles in web development and maintenance, coupled with my engagement in extracurricular leadership as the President of the Golf Club and an active member of the Martial Arts club at Feng Chia University, showcase my versatility, team spirit, and leadership skills. I am excited about the opportunity to leverage my diverse skill set and experiences to contribute to innovative software solutions and drive technological advancements.
</p>

        </section>
        
        <section className='section'>
          <h2>Education</h2>
          <div className='education'>
            <p>2015-2020<br/>Feng Chia University (FCU)</p>
            <p>Bachelor of Electrical Engineering</p>
          </div>
          <div className='education'>
            <p>2022-2023<br/>University of Technology, Sydney (UTS)</p>
            <p>Master of Information Technology</p>
          </div>
        </section>
        
        <section className='section'>
          <h2>Activities</h2>
          <div className='activity'>
            <p>2017-2020<br/>Golf Club, FCU</p>
            <p>President<br/>Organised major events and competitions and supervised overall event management.</p>
          </div>
          <div className='activity'>
            <p>2017-2020<br/>Martial Arts Club, FCU</p>
            <p>Member<br/>Organised major martial arts events at the university.</p>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutPage;
