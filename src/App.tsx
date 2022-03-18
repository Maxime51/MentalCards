import React, { useEffect, useState } from 'react';
import './App.css';
import MentalCard from './components/MentalCard';
import MentalCardInput from './components/MentalCardInput';
import MentalMultipleChoice from './components/MentalMultipleChoice';
import Scores from './components/Scores';

export type Score = {
  name: string,
  mode: string,
  goodesponse: number,
  wrongreponse: number,
}

type ScoreTotal = {
    name: string,
    gameInput: {
      mode: string,
      goodresponse: number,
      wrongresponse: number
    },
    gameChoice: {
      mode: string,
      goodresponse: number,
      wrongresponse: number
    }
}

export let tabScore: Score[] = [];
export let tabScoreChoice: Score[] = [];

function App() {
  const [showElementSelect, setshowElementSelect] = useState(<></>);
  const [userName, setuserName] = useState("");

  function resetTab(event: any) {
    tabScore = [];
    tabScoreChoice = [];
    setuserName(event);
}
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" onClick={() => setshowElementSelect(<MentalCard nameUser="max"/>)}>Mental Card <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setshowElementSelect(<MentalCardInput nameUser={userName}/>)}>FlashCard Input</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={()=>setshowElementSelect(<MentalMultipleChoice nameUser={userName}/>)}>FlashCard Choice</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" onClick={()=>setshowElementSelect(<Scores nameUser={userName}/>)}>Score<span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" id="nameInput" onChange={(event)=>resetTab(event.target.value)}type="search" placeholder="Name" aria-label="Name" />
          </form>
        </div>
      </nav>
      <div>
        {showElementSelect}
      </div>
    </div>
  );
}

export default App;
