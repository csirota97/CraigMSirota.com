/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from 'react';
import projects from '../resources/data/projects';
import folderIcon from '../resources/images/folder.png';
import filesIcon from '../resources/images/files.png';
import backIcon from '../resources/images/backArrow.png';

const ProjectsFolder = (props) => {
  const {widthModifier, heightModifier, defaultProject} = props;
  const projectStructure = projects.projectsStructure;

  const defaultActiveChildren = defaultProject ? projectStructure.filter((item) => {
    if (defaultProject[0][1][0] === item.name) {
      return true
    }
  })[0].children : undefined;

  const [activeChildren, setActiveChildren] = useState(defaultProject ? defaultActiveChildren : projectStructure);
  const [activeProject, setActiveProject] = useState(defaultProject ? defaultActiveChildren.filter(project=>project.name===defaultProject[1])[0] : {});
  const [breadcrumb, setBreadcrumb] = useState(defaultProject ? defaultProject[0] : [['My Projects',0]]);
  const [rerender, setRerender] = useState(true);
  const [initialRender, setInitialRender] = useState(true);
  const projectDescriptionRef = useRef({current: {innerHTML: ''}});

  const triggerRerender = () => setRerender(!rerender);
  useEffect(() => {
    triggerRerender();
  }, [activeProject]);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);

    }
  })

  return (
    <div id='projects-list-wrapper' style={{width: `calc(75vw + ${widthModifier}px`, height: `calc(75vh + ${heightModifier}px`}}>
      <div className='project-list-row background1 project-list-url-bar flex1'>
        {`"${breadcrumb.map(bc=>bc[0]).join('"->"')}"`}
      </div>
      <ul className={`project-list ${Object.keys(activeProject).length > 0 ? 'project-list-max-height' : ''}`}>
        {breadcrumb.length > 1 ? (
            <li>
              <a
                key='back'
                onClick={()=>{
                  const slicedBreadcrumb = breadcrumb.slice(0, breadcrumb.length-1);
                  setBreadcrumb(slicedBreadcrumb);
                  let child = JSON.parse(JSON.stringify(projectStructure));

                  slicedBreadcrumb.slice(1).forEach((crumb, index) => {
                    if(index === 0) {
                      child = child[crumb[1]];
                    } else {
                      child = child.children[crumb[1]];
                    }
                  })
                  setActiveChildren(child.children || child);
                }}

                onKeyDown={(event) => {
                  if (['Enter', ' '].includes(event.key)) {
                    const slicedBreadcrumb = breadcrumb.slice(0, breadcrumb.length-1);
                    setBreadcrumb(slicedBreadcrumb);
                    let child = JSON.parse(JSON.stringify(projectStructure));

                    slicedBreadcrumb.slice(1).forEach((crumb, index) => {
                      if(index === 0) {
                        child = child[crumb[1]];
                      } else {
                        child = child.children[crumb[1]];
                      }
                    })
                    setActiveChildren(child.children || child);
                  }
                }}
                tabIndex={0}
              >
                <div className={`project-list-row background2`}>
                  <img width='16' height='16' className='project-row-icon' src={backIcon} />
                  Back to "{breadcrumb[breadcrumb.length-2][0]}"
                </div>
              </a>
            </li>
        ) : null}
        {activeChildren.map((child, index) => {
          return (
            <li><a
              key={child.name}
              onClick={() => {
                if (child.type === 'directory') {
                  setBreadcrumb(breadcrumb.concat([[child.name, index]]))
                  setActiveChildren(child.children);
                } else {
                  setActiveProject(child);
                }
              }}
              onKeyDown={(event) => {
                if (['Enter', ' '].includes(event.key)) {
                  if (child.type === 'directory') {
                    setBreadcrumb(breadcrumb.concat([[child.name, index]]))
                    setActiveChildren(child.children);
                  } else {
                    setActiveProject(child);
                  }
                }
              }}
              tabIndex={0}
            >
              <div className={`project-list-row background${index%2===0 ? 1 : 2}`}>
                <img width='16' height='16' className='project-row-icon' src={child.type==='project'?filesIcon:folderIcon} />
                <div className='flex4'>
                  {child.name}
                </div>
                <div className='vertical-divider'/>
                {
                  !!child.languages &&
                  <div className='flex2 project-list-dates '>
                    {`${child.languages}`}
                  </div>
                }
                <div className='flex3 project-list-dates '>
                  {`${child.startDate || ''}${!child.startDate || child.endDate === child.startDate ? '' : child.endDate ? `-${child.endDate}` : '-Present' }`}
                </div>
              </div>
            </a></li>
          );
        })}
      </ul>
      {
        Object.keys(activeProject).length > 0 &&
        <div className='flex6 project-info-section'>
          <h3 className='vertical-margin-small'>{activeProject.name}</h3>
          <hr className='project-info-divider'/>
          {
            activeProject.role && <h4 className='vertical-margin-small'>Roles: {activeProject.role}</h4>
          }
          {
            activeProject.languages &&
            <h4 className='vertical-margin-small'>Technologies Used: {activeProject.languages}</h4>
          }
          <h4 className='vertical-margin-small'>Date Range: {activeProject.startDate}{activeProject.startDate === activeProject.endDate ? '' : `-${activeProject.endDate ? activeProject.endDate : 'Present'}`}</h4>
          <p ref={projectDescriptionRef}>{projectDescriptionRef.current.innerHTML = activeProject.description}</p>
          {activeProject.links && activeProject.links.map(link => <a href={link[0]} target="_blank" rel="noopener noreferrer">{link[1]}</a>)}
          {activeProject.links && <br/>}
        </div>
      }
    </div>
  );
};

export default ProjectsFolder;