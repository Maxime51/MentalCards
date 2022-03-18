import React, { useEffect, useState } from 'react';




function NotGoodResponse() {

  const url = "https://phoneky.co.uk/content/mp3tones/tone/2020/funny/wronganswer_653890e85085185.mp3";
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
