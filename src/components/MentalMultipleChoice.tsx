import React, { useEffect, useState } from 'react';
import { tabScoreChoice } from '../App';
import { questionData } from '../dataQuestion';
import ChangeTheme from './ChangeTheme';
import GoodResponse from './GoodResponse';
import NotGoodResponse from './NotGoodResponse';


type Data = {
  id: number,
  question: string,
  reponse: string,
  response2: string,
  response3: string,
  theme: string,
  image:string
}

function MentalMultipleChoice(props: any) {
  const [dataTheme, setdataTheme] = useState<string[]>([]);
  const [data, setData] = useState<Data[]>([]);
  const [themeSelected, setThemeSelected] = useState("aleatoire");
  const [randomNumber, setRandomNumber] = useState(0);
  const [question, setQuestion] = useState(questionData[0].question);
  const [response, setResponse] = useState([questionData[0].reponse,questionData[0].response2,questionData[0].response3]);
  const [affichage, setAffichage] = useState(question);
  const [responseInput, setResponseInput] = useState("");
  const [validResponse, setvalidResponse] = useState(false);
  const [show, setshow] = useState(0);
   const [image, setImage] = useState("");
  const [affichageImage, setAffichageImage] = useState(image);

  function valideResponse() {
    if ((responseInput === response[0]) ) {
      setvalidResponse(true);
      tabScoreChoice.push({
          name: `${props.nameUser}`,
          mode: "MentalChoice",
          goodesponse: 1,
          wrongreponse: 0
        });
      setRandomNumber(Math.floor(Math.random() * 10));
      setshow(1)
    } else {
      setvalidResponse(false);
      tabScoreChoice.push({
          name: `${props.nameUser}`,
          mode: "MentalChoice",
          goodesponse: 0,
          wrongreponse: 1
        });
      setshow(2)
    }
  }

  //load data theme into <select>
  useEffect(() => {
    const datas = questionData.map((element) => {
      return element.theme;
    })
    const filteredData = datas.filter(function (ele, pos) {
      return datas.indexOf(ele) === pos;
    })
    setdataTheme(filteredData);

  }, []);

  //change data when change select
  useEffect(() => {
    const filteredData = questionData.filter((element) => element.theme === themeSelected);
    setData(filteredData)
  }, [themeSelected]);

  useEffect(() => {
    if (data.length === 0) {
      setQuestion(questionData[randomNumber].question);
      setResponse([questionData[randomNumber].reponse, questionData[randomNumber].response2, questionData[randomNumber].response3]);
      setAffichage(question);
    } else {
      setResponse([data[randomNumber].reponse, data[randomNumber].response2, data[randomNumber].response3]);
      setAffichage(question);
    }

  }, [show]);

  useEffect(() => {
    if (data.length === 0) {
      setQuestion(questionData[randomNumber].question);
      if (questionData[randomNumber].image !== "") {
        setImage(questionData[randomNumber].image);
      }
      setAffichageImage(image);
    } else {
      setQuestion(data[randomNumber].question);
      if (data[randomNumber].image !== "") {
        setImage(data[randomNumber].image);
      }
      setAffichageImage(image);
    }
  }, [response]);

function changeSelect(event: any) {
  setThemeSelected(event)
  setAffichage(question);
    setshow(3);
}

  if (show === 0) {
    return (
      <div>
        <select className="form-select" onChange={(event)=>changeSelect(event.target.value)}>
        {dataTheme.map((theme) => {
          return <option key={theme}>{theme}</option>
        })}
      </select>
        <div>
          <div className="container" style={{ width: "20rem",marginTop:"200px" }}>
        <div className="card">
          <div className="card-header">
            {affichage}
              </div>
            {affichageImage === "null" ? <p></p> : <img src={affichageImage} className="card-img-top" />}
            <div className="card-body">
              <form onSubmit={valideResponse}>
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
          </div>
        </div>

        </div>
      </div>
    );
  } else if (show === 1) {
    return <div onClick={() =>setshow(0)}><GoodResponse/></div>
  }else if (show === 3) {
    return <div onClick={() => setshow(0)}><ChangeTheme mode={themeSelected}/></div>
  } else {
    return <div onClick={()=>setshow(0)}><NotGoodResponse/></div>
  }
}

export default MentalMultipleChoice;
