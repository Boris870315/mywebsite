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
      <div className='about-content'>
        <section className='section about-me'>
          <h1>Hi! This is Boris</h1>
          <p>Hi, I’m Boris. I work at the intersection of automation engineering and software development, and I also build Unity 3D experiences across VR and AR. I enjoy turning complex ideas into systems and products that are stable, usable, and easy to maintain—whether that’s an industrial automation workflow or an immersive interactive application.</p>
          <p>On the automation side, I focus on end-to-end integration: connecting hardware, control logic, communication layers, and PC-side tools into a clean, modular architecture that can scale and be handed over smoothly. I care a lot about reliability in production, so I build with long-term maintainability in mind.</p>
          <p>I also take a data-driven approach to engineering. I’ve created high-resolution logging and lightweight analysis workflows—often using Python for basic visualization and validation—so performance issues can be diagnosed quickly and improvements can be measured, not guessed.</p>
          <p>In parallel, I use Unity 3D to create interactive and immersive experiences in VR/AR, combining real-time 3D, UI/UX, and system thinking to deliver practical, engaging solutions.</p>
          <p>If you’re interested in automation–software integration, immersive tech, or building robust systems with measurable outcomes, feel free to explore my projects.</p>
        </section>
        
        <section className="section">
  <h1>Education</h1>

  <div className="two-col-item">
    <div className="left-meta">
      <p className="meta-title">2015-2020</p>
      <p className="meta-sub">Feng Chia University (FCU)</p>
    </div>
    <div className="right-meta">
      <p className="meta-title">Bachelor of Electrical Engineering</p>
      <p className="meta-sub"></p>
    </div>
  </div>

  <div className="two-col-item">
    <div className="left-meta">
      <p className="meta-title">2022-2023</p>
      <p className="meta-sub">University of Technology, Sydney (UTS)</p>
    </div>
    <div className="right-meta">
      <p className="meta-title">Master of Information Technology</p>
      <p className="meta-sub"></p>
    </div>
  </div>
</section>

<section className="section">
  <h1>Activities</h1>

  <div className="two-col-item">
    <div className="left-meta">
      <p className="meta-title">2017-2020</p>
      <p className="meta-sub">Golf Club, FCU</p>
    </div>
    <div className="right-meta">
      <p className="meta-title">President</p>
      <p className="meta-sub">
        Organised major club events and interclub competitions, overseeing end-to-end event management.<br/><br/>
        Increased active membership by approximately 300% through recruitment, training sessions, and community-building activities.<br/><br/>
        Rebuilt the club’s competitive programme and led the team back to the University Cup intercollegiate tournament.
      </p>
    </div>
  </div>

  <div className="two-col-item">
    <div className="left-meta">
      <p className="meta-title">2017-2020</p>
      <p className="meta-sub">Martial Arts Club, FCU</p>
    </div>
    <div className="right-meta">
      <p className="meta-title">Member</p>
      <p className="meta-sub">
        Organised major martial arts events at the university.
      </p>
    </div>
  </div>
</section>

      </div>
      <Footer/>
    </div>
  );
}

export default AboutPage;
