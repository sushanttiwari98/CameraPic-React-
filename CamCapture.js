import React, { Fragment, useRef, useState } from 'react';
import { Camera } from 'react-cam';

//import "./CamCapture.css";

function CamCapture() {
  const [image, setImage] = useState('');
  const cam = useRef(null);

  function capture(imgsrc){
    const img = imgsrc;
    console.log(img)
    setImage(img)
  };

  return (
    <Fragment>
      <Camera
        showFocus = {true}
        front = {true}
        capture = {capture}
        ref = {cam}
        width = "240"
        height = "160"
        focusWidth="300"
        focusHeight = "190"
        btnColor = "White"
      />
      <button onClick={e => cam.current.capture(image)} className="btn">Take Pic</button>
      <br /><br/>
      <img src={image} alt="Pic coming"/>
      
    </Fragment>
  );
};

export default CamCapture;