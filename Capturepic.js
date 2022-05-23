import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Camera } from 'react-cam';
import Axios from "axios";

function Capturepic() {
    const [image, setImage] = useState([]);
    const cam = useRef(null);

    useEffect(() => {
        Axios
            .get("http://localhost:4000")
            .then((res) => setImage(res.image))
            .catch((err) => console.log(err, "Error occured"));
    });
  
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
  
  export default Capturepic;