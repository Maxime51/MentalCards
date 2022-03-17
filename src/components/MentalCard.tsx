import React, { useEffect, useState } from 'react';
import { questionData } from '../dataQuestion';

type Data = {
  id: number,
  question: string,
  reponse: string,
  response2: string,
  response3: string,
  theme: string,
  image:string
}

function MentalCard(props: any) {
  const [dataTheme, setdataTheme] = useState<string[]>([]);
  const [data, setData] = useState<Data[]>([]);
  const [themeSelected, setThemeSelected] = useState("aleatoire");
  const [question, setQuestion] = useState("Welcome Click here");
  const [response, setResponse] = useState("Start");
  const [affichage, setAffichage] = useState(question);
  const [image, setImage] = useState("");
  const [affichageImage, setAffichageImage] = useState(image);
  const [topCard, settopCard] = useState("");
  const [click, setclick] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);

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

  useEffect(() => {
    if (click === false) {
      setAffichage(question);
      setAffichageImage(image);
      settopCard("Question");
    } else {
      setAffichage(response);
      settopCard("Reponse");
      setRandomNumber(Math.floor(Math.random() * 10));
      setQuestion(data[randomNumber].question);
      setResponse(data[randomNumber].reponse);
      if (data[randomNumber].image !== "") {
        setImage(data[randomNumber].image);
      }
    }
  }, [click]);

  //change data when change select
  useEffect(() => {
    const filteredData = questionData.filter((element) => element.theme === themeSelected);
    setData(filteredData)
  }, [themeSelected]);

  function changeSelect(event: any) {
    setThemeSelected(event)
    setclick(true);
    setclick(false);
    setResponse("Start");
    setAffichage(event);
    setImage("");
    setAffichageImage("null");
}
  return (
    <div>
      <select onChange={(event)=>changeSelect(event.target.value)}>
        {dataTheme.map((theme) => {
          return <option key={theme}>{theme}</option>
        })}
      </select>
    <div className="container" style={{ width: "20rem",marginTop:"200px" }}>
    <div className="card" onClick={() => setclick(!click)}>
      <div className="card-header">
        {topCard}
          </div>
          {affichageImage === "null" ? <p></p> : <img src={affichageImage} className="card-img-top" />}
        <div className="card-body">
          <h5 className="card-title">{affichage}</h5>
      </div>
      </div>
    </div>
    </div>
  );
}

export default MentalCard;
