import React from 'react';
import CamCapture from './CamCapture';


const Main = () => {
  function cam1(value){
    <CamCapture/>
  }
  return (
    <div>
      
      <button onClick={page => cam1(true)}>Camera</button>
      <button>Gallery</button>
      
    </div>
  )
}

export default Main;