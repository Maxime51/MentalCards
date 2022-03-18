import React, { useEffect, useState } from 'react';




function NotGoodResponse() {

  const url = "https://downloadwap.com/ringtones/preview/?p=preview-item&id=m640082&uid=267270861891&sid=1083305610";
  const audio = new Audio(url);

  function play() {
    audio.volume = 0.2;
    audio.play();
  }
  play();

  return (
    <div className="container" style={{ width: "20rem",marginTop:"200px"}}>
    <div className="card" style={{ backgroundColor:"red",color:"white"}}>
      <div className="card-header">
        Wrong !
      </div>
      <div className="card-body">
        <h5 className="card-title">Try Again !</h5>
      </div>
      </div>
    </div>
  );
}

export default NotGoodResponse;
