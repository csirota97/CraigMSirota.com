/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const DesktopIcon = (props) => {
  const { iconUrl, iconName, onSelect, disabled} = props; 
  return (
    <div className='desktop-icon-wrapper'>
      <img src={iconUrl} width={64} height={64} alt={iconName} className='desktop-icon' onClick={onSelect}/>
      <div className='desktop-icon-label-wrapper'>
        <a
          className='desktop-icon-label'
          tabIndex={disabled ? -1 : 0}
          onClick={onSelect}
          onKeyDown={(event) => {
            if (['Enter', ' '].includes(event.key)) {
              onSelect();
            }
          }}
        >{iconName}</a>
      </div>
    </ div>
  );
};

export default DesktopIcon;