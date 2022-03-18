import React, { useEffect, useState } from 'react';


function GoodResponse() {

  const url = "https://downloadwap.com/content2/mp3-ringtones/tone/2020/alert/correctansw_73e68e4c5140893.mp3";
  const audio = new Audio(url);

  function play() {
    audio.volume = 0.2;
    audio.play();
  }
  play();
  return (
    <div className="container" style={{ width: "20rem", marginTop: "200px" }}>
      <div className="card" style={{ backgroundColor: "green", color: "white" }}>
        <div className="card-header">
        Good !
      </div>
      <div className="card-body">
        <h5 className="card-title">Next Question !</h5>
      </div>
      </div>
    </div>
  );
}

export default GoodResponse;
