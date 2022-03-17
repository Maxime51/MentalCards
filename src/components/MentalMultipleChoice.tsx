import React, { useEffect, useState } from 'react';
import { questionData } from '../dataQuestion';
import GoodResponse from './GoodResponse';
import NotGoodResponse from './NotGoodResponse';



function MentalMultipleChoice() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [question, setQuestion] = useState(questionData[0].question);
  const [response, setResponse] = useState([questionData[0].reponse,questionData[0].response2,questionData[0].response3]);
  const [affichage, setAffichage] = useState(question);
  const [responseInput, setResponseInput] = useState("");
  const [validResponse, setvalidResponse] = useState(false);
  const [show, setshow] = useState(0);

  function valideResponse() {
    if ((responseInput === response[0]) ) {
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
    setResponse([questionData[randomNumber].reponse,questionData[randomNumber].response2,questionData[randomNumber].response3]);
    setAffichage(question);

  }, [show]);


  if (show === 0) {
    return (
      <div>
        <form onSubmit={valideResponse}>
          <label>{affichage}</label>
          {response.map((element) => {
            return (
              <div className="form-check" key={element}>
              <input className="form-check-input" type="radio" onClick={() => setResponseInput(`${element}`)} name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" >
                {element}
              </label>
            </div>);
          })}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  } else if (show === 1) {
    return <div onClick={() =>setshow(0)}><GoodResponse/></div>
  } else {
    return <div onClick={()=>setshow(0)}><NotGoodResponse/></div>
  }
}

export default MentalMultipleChoice;
