import React, { useEffect, useState } from 'react';

const Document = (props) => {
  const {title, documentBody, onCloseHandler, z, reprioritizeWindows, widthModifier, setWidthModifier, heightModifier, setHeightModifier} = props;
  const [initialRender, setInitialRender] = useState(true);
  const [heightAdjustment, setHeightAdjustment] = useState(0);
  const [headerClicked, setHeaderClicked] = useState(false);
  const [leftSideClicked, setLeftSideClicked] = useState(false);
  const [rightSideClicked, setRightSideClicked] = useState(false);
  const [bottomSideClicked, setBottomSideClicked] = useState(false);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [mousePosX, setMousePosX] = useState(0);
  const [mousePosY, setMousePosY] = useState(0);
  
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

  const onHeaderClick = (e) => {
    let pageX = e.pageX;
    let pageY = e.pageY;
    if (e.type === 'touchstart') {
      pageX = e.touches[0].pageX;
      pageY = e.touches[0].pageY;
    }
    setMousePosX(pageX);
    setMousePosY(pageY);
    setHeaderClicked(true);
  };

  const onHeaderClickUp = (e) => {
    setHeaderClicked(false);
  };

  const onHeaderClickMove = (e) => {
    let pageX = e.pageX;
    let pageY = e.pageY;
    if (e.type === 'touchmove') {
      pageX = e.touches[0].pageX;
      pageY = e.touches[0].pageY;
    }
    if (headerClicked) {
      setPosX(posX - (mousePosX - pageX));
      if (posY - (mousePosY - pageY) >= 0) {
        setPosY(posY - (mousePosY - pageY));
      }
      setMousePosX(pageX);
      setMousePosY(pageY);
    }
  };


  const onLeftSideClick = (e) => {
    let pageX = e.pageX;
    let pageY = e.pageY;
    if (e.type === 'touchstart') {
      pageX = e.touches[0].pageX;
      pageY = e.touches[0].pageY;
    }
    setMousePosX(pageX);
    setMousePosY(pageY);
    setLeftSideClicked(true);
  };
  const onLeftSideClickUp = (e) => {
    setLeftSideClicked(false);
  };
  const onLeftSideClickMove = (e) => {
    let pageX = e.pageX;
    if (e.type === 'touchmove') {
      pageX = e.touches[0].pageX;
    }
    if (leftSideClicked &&  mousePosX !== pageX && (widthModifier >= -400 || pageX - mousePosX < 0)) {
      setWidthModifier(widthModifier - (pageX - mousePosX));
      setPosX(posX - (mousePosX - pageX)/2);
      setMousePosX(pageX);
    }
  }

  const onRightSideClick = (e) => {
    let pageX = e.pageX;
    let pageY = e.pageY;
    if (e.type === 'touchstart') {
      pageX = e.touches[0].pageX;
      pageY = e.touches[0].pageY;
    }
    setMousePosX(pageX);
    setMousePosY(pageY);
    setRightSideClicked(true);
  };
  const onRightSideClickUp = (e) => {
    setRightSideClicked(false);
  };
  const onRightSideClickMove = (e) => {
    let pageX = e.pageX;
    if (e.type === 'touchmove') {
      pageX = e.touches[0].pageX;
    }
    if (rightSideClicked &&  mousePosX !== pageX && (widthModifier >= -400 || pageX - mousePosX > 0)) {
      setWidthModifier(widthModifier + (pageX - mousePosX));
      setMousePosX(pageX);
      setPosX(posX-(mousePosX - pageX)/2)
    }
  }


  const onBottomSideClick = (e) => {
    let pageX = e.pageX;
    let pageY = e.pageY;
    if (e.type === 'touchstart') {
      pageX = e.touches[0].pageX;
      pageY = e.touches[0].pageY;
    }
    setMousePosX(pageX);
    setMousePosY(pageY);
    setBottomSideClicked(true);
  };
  const onBottomSideClickUp = (e) => {
    setBottomSideClicked(false);
  };
  const onBottomSideClickMove = (e) => {
    let pageY = e.pageY;
    if (e.type === 'touchmove') {
      pageY = e.touches[0].pageY;
    }
    if (bottomSideClicked &&  mousePosY !== pageY && (heightModifier >= -150 || pageY - mousePosY > 0)) {
      setHeightModifier(heightModifier + (pageY - mousePosY));
      setMousePosY(pageY);
    }
  }

  return (
    <div
      className='document'
      style={{zIndex: z+5}}
      onMouseMove={onHeaderClickMove}
      onTouchMove={onHeaderClickMove}
      onMouseLeave={(e) => {
        setHeaderClicked(false);
      }}
      onMouseUp={(e) => {
        if (headerClicked) {
          setHeaderClicked(false);
        }
      }}
      onMouseDown={() => {
        reprioritizeWindows();
      }}
      onTouchStart={() => {
        reprioritizeWindows();
      }}
    >
      <div className='document-mover' style={{top: posY, left: posX}}>
        <div
          className='document-header'
          onTouchStart={onHeaderClick}
          onMouseDown={onHeaderClick}
          onMouseUp={onHeaderClickUp}
          onTouchEnd={onHeaderClickUp}

        >
          <div className='document-header-menu-title'>
            <h2 className='h2'>
              {title}
            </h2>
            <button className='document-close' onClick={onCloseHandler} aria-label={`Close ${title}`}>
              X
            </button>
          </div>
        </div>
        <div
          className='document-body'
          // style={{height: `calc(100vh - ${heightAdjustment}px)`}}
        >
          <div className='document-form'>
            {documentBody}
          </div>
        </div>
        <div
          className='document-side-left'
          onMouseDown={onLeftSideClick}
          onTouchStart={onLeftSideClick}
          onMouseUp={onLeftSideClickUp}
          onTouchEnd={onLeftSideClickUp}
          onMouseMove={onLeftSideClickMove}
          onTouchMove={onLeftSideClickMove}
        />
        <div
          className='document-side-right'
          onMouseDown={onRightSideClick}
          onTouchStart={onRightSideClick}
          onMouseUp={onRightSideClickUp}
          onTouchEnd={onRightSideClickUp}
          onMouseMove={onRightSideClickMove}
          onTouchMove={onRightSideClickMove}
        />
        <div
          className='document-side-bottom'
          onMouseDown={onBottomSideClick}
          onTouchStart={onBottomSideClick}
          onMouseUp={onBottomSideClickUp}
          onTouchEnd={onBottomSideClickUp}
          onMouseMove={onBottomSideClickMove}
          onTouchMove={onBottomSideClickMove}
        />
      </div>
    </div>
  );
};

export default Document;