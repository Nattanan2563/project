"use client";

import React, { useState, useEffect } from 'react'

function cursoranimationimage(props) {
    const [windowPos, setWindowPos] = useState({});
    const [mousePos, setMousePos] = useState({});
    const [imgPos, setImgPos] = useState({});

    useEffect(() => {
      const substringpos = props.pos.indexOf(",");
      setWindowPos({ x: window.innerWidth / 2, y: window.innerHeight / 2});
      //console.log(props.pos.substring(0,substringpos))
      //console.log(props.pos.substring(substringpos+1,props.pos.length))
      //setImgPos({ x: props.pos.substring(0,substringpos), y: props.pos.substring(substringpos+1,props.pos.length) });
      //console.log(imgPos)

      const handleMouseMove = (event) => {
        setMousePos({ x: event.clientX, y: event.clientY });
        //setImgPos({ x: event.clientX+parseFloat(props.pos.substring(0,substringpos)), y: event.clientY+parseFloat(props.pos.substring(substringpos+1,props.pos.length)) });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener(
          'mousemove',
          handleMouseMove
        );
      };
    }, []);
    
    return (
      <>
        {/* <img src={props.src} style={{position: "absolute",left: imgPos.x,top: imgPos.y}}></img> */}
          <div>
              The mouse is at position{' '}
              <b>
                  ({mousePos.x}, {mousePos.y}, {imgPos.x}, {imgPos.y}, {windowPos.x}, {windowPos.y})
              </b>
          </div>
      </>
    );
}

export default cursoranimationimage