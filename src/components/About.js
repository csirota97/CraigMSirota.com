import React, { useEffect, useRef, useState } from 'react';
import headshot from '../resources/images/headshot.jpg'


const About = (props) => {
  const {showProject, showContact, widthModifier, heightModifier } = props;

  const showProjectParams = [[['My Projects', 0], ['Personal', 1]], 'ALVAN'];


  return (
    <div id='about-wrapper' style={{ height: `calc(75vh + ${heightModifier}px)`, width: `calc(75vw + ${widthModifier}px)`}}>
      <div id='about-content'>
        <br/>
        <img src={headshot} alt='Craig Sirota headshot' height={'300px'} className='headshot'/>

        <p>hi, I'm</p>
        <h2>Craig Michael Sirota</h2>
        <p>
          Since June 2020, I've been a Philadelphia-based software engineer for Cerner/Oracle, working on Revenue Cycle Management, within Oracle Health (formerly Cerner).
        </p>
        <p>
          Before joining Cerner, I graduated from Rutgers University with a B.S. in Computer Science. Aside from work, my hobbies include making music and working on my passion project, <a onClick={(e) => {e.preventDefault();showProject(showProjectParams)}} href='/'>ALVAN</a>.
        </p>
        <hr style={{width: '50%'}}/>
        <div id='contact-info'>
          <p className='contact-info'>Contact Me</p>
          <p className='contact-info'>(908) 894-8339</p>
          <p className='contact-info'><a onClick={(e) => {e.preventDefault();showContact()}} href='/'>CraigMSirota@gmail.com</a></p>
        </div>
        <br/>
      </div>
    </div>
  );
};

export default About;