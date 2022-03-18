import React, { useEffect, useState } from 'react';
import { tabScore } from '../App';
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


function MentalCardInput(props: any) {
  const [dataTheme, setdataTheme] = useState<string[]>([]);
  const [data, setData] = useState<Data[]>([]);
  const [themeSelected, setThemeSelected] = useState("aleatoire");
  const [randomNumber, setRandomNumber] = useState(0);
  const [question, setQuestion] = useState('Write start');
  const [response, setResponse] = useState("start");
  const [affichage, setAffichage] = useState(question);
  const [image, setImage] = useState("");
  const [affichageImage, setAffichageImage] = useState(image);

  const [responseInput, setResponseInput] = useState("");
  const [validResponse, setvalidResponse] = useState(false);
  const [show, setshow] = useState(0);

  function valideResponse() {

    if ((responseInput === response)) {
      if (question === 'Write start') {
        setvalidResponse(true);
        setRandomNumber(Math.floor(Math.random() * 10));
        setQuestion(data[randomNumber].question);
        if (data[randomNumber].image !== "") {
        setImage(data[randomNumber].image);
        }
        setAffichageImage(image);
        setshow(1)
      }
      else {
        tabScore.push({
          name: `${props.nameUser}`,
          mode: "MentalInput",
          goodesponse: 1,
          wrongreponse: 0
        });
        setvalidResponse(true);
        setRandomNumber(Math.floor(Math.random() * 10));
        setshow(1)
      }
    } else {
      setvalidResponse(false);
      tabScore.push({
          name: `${props.nameUser}`,
          mode: "MentalInput",
          goodesponse: 0,
          wrongreponse: 1
        });
      setshow(2)
    }
  }

  useEffect(() => {
    if (question !== 'Write start') {
        setQuestion(data[randomNumber].question);
        setResponse(data[randomNumber].reponse);
        if (data[randomNumber].image !== "") {
          setImage(data[randomNumber].image);
          setAffichageImage(image);
        }
        setAffichage(question)

    } else {
      setImage("");
      setAffichageImage("null");
      setAffichage(question);
      setResponse("start");
    }
  }, [show]);

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
    setData(filteredData);
  }, [themeSelected]);

  function changeSelect(event: any) {
    setThemeSelected(event)
    setQuestion("Write start");
    setAffichage(question);
    setResponse("start");
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
      <div className="container" style={{ width: "20rem", marginTop: "200px" }}>
        <div className="card">
          <div className="card-header">
            Question
            </div>
             {affichageImage === "null" ? <p></p> : <img src={affichageImage} className="card-img-top" />}
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

export default MentalCardInput;

