import React from 'react';
import resume from '../resources/ResumeLateMarch2023.pdf';


const Resume = (props) => {
  const { widthModifier, heightModifier } = props;

  return (
    <div id='resume-wrapper' style={{ height: `calc(75vh + ${heightModifier}px)`, width: `calc(75vw + ${widthModifier}px)`}}>
      <div id='resume-content'>
        <br/>
        <iframe height='100%' width='100%' title='Resume' src={resume}/>
        <br/>
      </div>
    </div>
  );
};

export default Resume;