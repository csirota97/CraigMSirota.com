import React, { useEffect, useState } from 'react';
import DesktopIcon from './DesktopIcon';
import Document from './Document';
import HeaderBar from './HeaderBar';
import Contact from './Contact';
import aboutMeIcon from '../resources/images/aboutMe.png';
import resumeIcon from '../resources/images/resume.png';
import contactMeIcon from '../resources/images/contact.png';
import folderIcon from '../resources/images/folder.png'
import ProjectsFolder from './Projects';
import About from './About';
import Resume from './Resume';
import projects from '../resources/data/projects';

const Screen = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showContactMe, setShowContactMe] = useState(false);
  const [showProjectsFolder, setShowProjectsFolder] = useState(false);
  const [isDocumentShown, setIsDocumentShown] = useState(false);
  const [documentWindowZIndex, setDocumentWindowZIndex] = useState({about: 0, resume: 1, contact: 2, projects: 3});
  const [rerender, setRerender] = useState(false);
  const [aboutWidthModifier, setAboutWidthModifier] = useState(0);
  const [resumeWidthModifier, setResumeWidthModifier] = useState(0);
  const [contactWidthModifier, setContactWidthModifier] = useState(0);
  const [projectsWidthModifier, setProjectsWidthModifier] = useState(0);
  const [aboutHeightModifier, setAboutHeightModifier] = useState(0);
  const [resumeHeightModifier, setResumeHeightModifier] = useState(0);
  const [contactHeightModifier, setContactHeightModifier] = useState(0);
  const [projectsHeightModifier, setProjectsHeightModifier] = useState(0);
  const [defaultProject, setDefaultProject] = useState(null);
  const triggerRerender = () => setRerender(!rerender);

  useEffect(() => {
    if (showAboutMe || showResume || showContactMe || showProjectsFolder) {
      setIsDocumentShown(true);
    } else {
      setIsDocumentShown(false);
    }
  }, [showAboutMe, showContactMe, showResume, showProjectsFolder]);

  useEffect(() => {
    reprioritizeWindows('about');
    triggerRerender();
  }, [showAboutMe]);

  useEffect(() => {
    reprioritizeWindows('resume');
    triggerRerender();
  }, [showResume]);

  useEffect(() => {
    reprioritizeWindows('contact');
    triggerRerender();
  }, [showContactMe]);

  useEffect(() => {
    reprioritizeWindows('projects');
    triggerRerender();
  }, [showProjectsFolder]);

  
  const reprioritizeWindows = (window) => {
    const documentZIndex = documentWindowZIndex;
    Object.keys(documentZIndex).forEach(key => {
      if (key ===  window) {
        return true;
      }
      if (documentZIndex[key] > documentZIndex[window]) {
        documentZIndex[key]--;
      }
    })
    documentZIndex[window] = Object.keys(documentZIndex).length-1;
    setDocumentWindowZIndex(documentZIndex);
  }

  return (
    <>
      <HeaderBar />
      <div className='documents-wrapper'>
        {
          showAboutMe &&
          <Document
            title="About Me"
            documentBody={
              <About
                widthModifier={aboutWidthModifier}
                heightModifier={aboutHeightModifier}
                showProject={(projectLocationName) => {
                  setDefaultProject(projectLocationName);
                  setShowProjectsFolder(true);
                  reprioritizeWindows('projects');
                  triggerRerender();
                }}
                showContact={() => {
                  setShowContactMe(true);
                  reprioritizeWindows('contact');
                  triggerRerender();
                }}
              />
            }
            // documentBody={"This page is still being worked on. Please come back later."}
            onCloseHandler={()=>setShowAboutMe(false)}
            z={documentWindowZIndex['about']}
            reprioritizeWindows={() => {
              reprioritizeWindows('about');
              triggerRerender();
            }}
            widthModifier={aboutWidthModifier}
            setWidthModifier={setAboutWidthModifier}
            heightModifier={aboutHeightModifier}
            setHeightModifier={setAboutHeightModifier}
          />
        }
      </div>
      <div className='documents-wrapper'>
        {
          showResume &&
          <Document
            title="Resume"
            documentBody={
              <Resume widthModifier={resumeWidthModifier} heightModifier={resumeHeightModifier}/>
              
            }
            onCloseHandler={()=>setShowResume(false)}
            z={documentWindowZIndex['resume']}
            reprioritizeWindows={() => {
              reprioritizeWindows('resume');
              triggerRerender();
            }}
            widthModifier={resumeWidthModifier}
            setWidthModifier={setResumeWidthModifier}
            heightModifier={resumeHeightModifier}
            setHeightModifier={setResumeHeightModifier}
          />
        }
      </div>
      <div className='documents-wrapper'>
        {
          showContactMe &&
          <Document
            title="New Message"
            documentBody={<Contact onCloseHandler={() => setShowContactMe(false)} widthModifier={contactWidthModifier} heightModifier={contactHeightModifier}/>}
            onCloseHandler={()=>setShowContactMe(false)}
            z={documentWindowZIndex['contact']}
            reprioritizeWindows={() => {
              reprioritizeWindows('contact');
              triggerRerender();
            }}
            widthModifier={contactWidthModifier}
            setWidthModifier={setContactWidthModifier}
            heightModifier={contactHeightModifier}
            setHeightModifier={setContactHeightModifier}
          />
        }
      </div>
      <div className='documents-wrapper'>
        {
          showProjectsFolder &&
          <Document
            title="Projects"
            documentBody={<ProjectsFolder widthModifier={projectsWidthModifier} heightModifier={projectsHeightModifier} defaultProject={defaultProject}/>}
            onCloseHandler={()=>{setShowProjectsFolder(false); setDefaultProject(null)}}
            z={documentWindowZIndex['projects']}
            reprioritizeWindows={() => {
              reprioritizeWindows('projects');
              triggerRerender();
            }}
            widthModifier={projectsWidthModifier}
            setWidthModifier={setProjectsWidthModifier}
            heightModifier={projectsHeightModifier}
            setHeightModifier={setProjectsHeightModifier}
          />
        }
      </div>
      <div className='icons-wrapper'>
        <DesktopIcon
          iconName="About Me"
          iconUrl={aboutMeIcon}
          onSelect={()=> {
            setShowAboutMe(true);
            reprioritizeWindows('about');
            triggerRerender();
          }}
          disabled={isDocumentShown}
        />
        <DesktopIcon
          iconName="Projects"
          iconUrl={folderIcon}
          onSelect={()=> {
            setShowProjectsFolder(true);
            reprioritizeWindows('projects');
            triggerRerender();
          }}
          disabled={isDocumentShown}
        />
        <DesktopIcon
          iconName="Resume"
          iconUrl={resumeIcon}
          onSelect={()=> {
            setShowResume(true);
            reprioritizeWindows('resume');
            triggerRerender();
          }}
          disabled={isDocumentShown}
        />
        <DesktopIcon
          iconName="Contact Me"
          iconUrl={contactMeIcon}
          onSelect={()=> {
            setShowContactMe(true);
            reprioritizeWindows('contact');
            triggerRerender();
          }}
          disabled={isDocumentShown}
        />
      </div>
    </>
  );
};

export default Screen;