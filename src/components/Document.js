import React, { useEffect, useState } from 'react';

const Document = (props) => {
  const {title, documentBody, onCloseHandler} = props;
  const [initialRender, setInitialRender] = useState(true);
  const [heightAdjustment, setHeightAdjustment] = useState(0);
  
  useEffect(() => {
    const height = document.getElementsByClassName('document-body')[0]?.getBoundingClientRect().y + 10;
    if (height !== heightAdjustment) {
      setHeightAdjustment(height);
    }
  }, [heightAdjustment])

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      document.getElementsByClassName('document-close')[0].focus();
    }
  })

  return (
    <div className='document'>
      <div className='document-header'>
        <div className='document-header-menu-title'>
          <h2>
            {title}
          </h2>
          <button className='document-close' onClick={onCloseHandler} ariaLabel={`Close ${title}`}>
            X
          </button>
        </div>
      </div>
      <div
        className='document-body'
        style={{height: `calc(100vh - ${heightAdjustment}px)`}}
      >
        {documentBody}
      </div>
    </div>
  );
};

export default Document;