import React, { useEffect, useState } from 'react';
import { questionData } from '../dataQuestion';
import GoodResponse from './GoodResponse';
import NotGoodResponse from './NotGoodResponse';




function MentalCardInput() {

  const [randomNumber, setRandomNumber] = useState(0);
  const [question, setQuestion] = useState(questionData[0].question);
  const [response, setResponse] = useState(questionData[0].reponse);
  const [affichage, setAffichage] = useState(question);

  const [responseInput, setResponseInput] = useState("");
  const [validResponse, setvalidResponse] = useState(false);
  const [show, setshow] = useState(0);

  function valideResponse() {
    if ((responseInput === response) ) {
      setvalidResponse(true);
      setRandomNumber(Math.floor(Math.random() * 10));

      setshow(1)
    } else {
      setvalidResponse(false);
      setshow(2)
    }
  }

  useEffect(() => {

    setQuestion(questionData[randomNumber].question);
    setResponse(questionData[randomNumber].reponse);
    setAffichage(question);

  }, [show]);

  if (show === 0) {
    return (
      <div className="container" style={{ width: "20rem", marginTop: "200px" }}>
        <div className="card">
          <div className="card-header">
            Question
          </div>
          <div className="card-body">
        <form onSubmit={valideResponse}>
          <div className="form-group">
            <h5 className="card-title">{affichage}</h5>
            <input type="text" onChange={(event) => setResponseInput(event.target.value)} className="form-control" id="response" aria-describedby="response" placeholder="Your Response" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          </div>
        </div>
      </div>
    );
  } else if (show === 1) {
    return <div onClick={() =>setshow(0)}><GoodResponse/></div>
  } else {
    return <div onClick={()=>setshow(0)}><NotGoodResponse/></div>
  }
}

export default MentalCardInput;

