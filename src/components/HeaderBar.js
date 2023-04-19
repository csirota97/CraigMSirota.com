import React from 'react';
import { useClock } from 'react-use-clock';

const HeaderBar = () => {
  const clock = useClock();

  let hour = clock.hours;
  let amPm = 'AM';
  if (hour > 12) {
    hour -= 12;
    amPm = 'PM';
  } else if (hour === 12 && clock.minutes !== 0) {
    amPm = 'PM';
  } else if (hour === 0) {
    hour = 12;
  }

  return (
    <div id='screen-header'>
      <div className='screen-header-menu-title'>
        <h1 className='h1'>
          Craig M Sirota
        </h1>
        <p className='clock'>
          {`${hour}:${clock.minutes.toString().padStart(2, '0')} ${amPm}`}

        </p>
      </div>
    </div>
  );
};

export default HeaderBar;