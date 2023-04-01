import React, { useEffect, useState } from 'react';
import DesktopIcon from './DesktopIcon';
import Document from './Document';
import HeaderBar from './HeaderBar';
import logo from '../logo.svg';
import aboutMeIcon from '../resources/images/aboutMe.png'
import resumeIcon from '../resources/images/resume.png'
import resume from '../resources/ResumeLateMarch2023.pdf';

const Screen = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showDoc, setShowDoc] = useState(false);
  const [isDocumentShown, setIsDocumentShown] = useState(false);

  useEffect(() => {
    if (showAboutMe || showResume || showDoc) {
      setIsDocumentShown(true);
    } else {
      setIsDocumentShown(false);
    }
  }, [showAboutMe, showDoc, showResume]);

  return (
    <>
      <HeaderBar />
      <div className='documents-wrapper'>
        {
          showAboutMe &&
          <Document title="About Me" documentBody={"Hello World"} onCloseHandler={()=>setShowAboutMe(false)}/>
        }
        {
          showResume &&
          <Document title="Resume" documentBody={<iframe height='100%' width='100%' title='Resume' src={resume}/>} onCloseHandler={()=>setShowResume(false)}/>
        }
        {
          showDoc &&
          <Document title="Test Document" documentBody={"Hello World"} onCloseHandler={()=>setShowDoc(false)}/>
        }
      </div>
      <div className='icons-wrapper'>
        <DesktopIcon iconName="About Me" iconUrl={aboutMeIcon} onSelect={()=>setShowAboutMe(true)} disabled={isDocumentShown}/>
        <DesktopIcon iconName="Resume" iconUrl={resumeIcon} onSelect={()=>setShowResume(true)} disabled={isDocumentShown}/>
        <DesktopIcon iconName="Long Test 3" iconUrl={logo} onSelect={()=>setShowDoc(true)} disabled={isDocumentShown}/>
      </div>
    </>
  );
};

export default Screen;