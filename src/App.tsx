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
export const tabScore: Score[] = [];
export const tabScoreChoice: Score[] = [];

function App() {
  const [showElementSelect, setshowElementSelect] = useState(<></>);

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
              <a className="nav-link" onClick={()=>setshowElementSelect(<MentalCardInput nameUser="max"/>)}>FlashCard Input</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={()=>setshowElementSelect(<MentalMultipleChoice nameUser="max"/>)}>FlashCard Choice</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" onClick={()=>setshowElementSelect(<Scores nameUser="max"/>)}>Score<span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        {showElementSelect}
      </div>
    </div>
  );
}

export default App;
