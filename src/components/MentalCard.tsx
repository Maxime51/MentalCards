import React, { useEffect, useState } from 'react';
import { questionData } from '../dataQuestion';



function MentalCard() {

  const initRandom = Math.floor(Math.random() * 10);
  const [question, setQuestion] = useState(questionData[0].question);
  const [response, setResponse] = useState(questionData[0].reponse);
  const [affichage, setAffichage] = useState(question);
  const [topCard, settopCard] = useState("");
  const [click, setclick] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    if (click === false) {
      setAffichage(question);
      settopCard("Question");
    } else {
      setAffichage(response);
      settopCard("Reponse");
      setRandomNumber(Math.floor(Math.random() * 10));
      setQuestion(questionData[randomNumber].question);
      setResponse(questionData[randomNumber].reponse);
    }
  }, [click]);

  return (
    <div className="container" style={{ width: "20rem",marginTop:"200px" }}>
    <div className="card" onClick={() => setclick(!click)}>
      <div className="card-header">
        {topCard}
      </div>
      <div className="card-body">
        <h5 className="card-title">{affichage}</h5>
      </div>
      </div>
    </div>
  );
}

export default MentalCard;
