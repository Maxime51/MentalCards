
import React, { useEffect, useState } from 'react';
import { tabScore, tabScoreChoice } from '../App';

let tabResult:any = [];
function Scores(props: any) {
  let name = "";let mode = "";let goodresponse = 0;let wrongresponse = 0;
  let nameChoice = ""; let modeChoice = ""; let goodresponseChoice = 0; let wrongresponseChoice = 0;
console.log(tabResult)
  tabScore.forEach(element => {
    name = element.name;
    mode = element.mode;
    goodresponse += element.goodesponse;
    wrongresponse += element.wrongreponse;
  });

  const resultFormat = {
    name : name,
    mode : mode,
    goodresponse : goodresponse,
    wrongresponse : wrongresponse
  }

  tabScoreChoice.forEach(element => {
    nameChoice = element.name;
    modeChoice = element.mode;
    goodresponseChoice += element.goodesponse;
    wrongresponseChoice += element.wrongreponse;
  });

  const resultChoiceFormat = {
    name : nameChoice,
    mode : modeChoice,
    goodresponse : goodresponseChoice,
    wrongresponse : wrongresponseChoice
  }
  const totalScore = {
    name: props.nameUser,
    gameInput: {
      mode: resultFormat.mode,
      goodresponse: resultFormat.goodresponse,
      wrongresponse: resultFormat.wrongresponse
    },
    gameChoice: {
      mode: resultChoiceFormat.mode,
      goodresponse: resultChoiceFormat.goodresponse,
      wrongresponse: resultChoiceFormat.wrongresponse
    }
  };
  function save() {
    if (tabResult.length !== 0) {
      console.log("coucu")
      tabResult.forEach((element: any, index: number) => {
        if (element.name === props.nameUser) {
          tabResult[index] = totalScore;
        } else {
          tabResult.push(totalScore);
        }
      })
    } else {
      tabResult.push(totalScore);
    }
  };

  return (
    <div>
      <h3>Score</h3>
      <br></br>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">{totalScore.name}</th>
      <th scope="col">Good Responses</th>
      <th scope="col">Wrong Responses</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Mental Input</th>
      <td>{totalScore.gameInput.goodresponse}</td>
      <td>{totalScore.gameInput.wrongresponse}</td>
    </tr>
    <tr>
      <th scope="row">Mental Choice</th>
      <td>{totalScore.gameChoice.goodresponse}</td>
      <td>{totalScore.gameChoice.wrongresponse}</td>
    </tr>
      </tbody>
      </table>
      <form onSubmit={save} >
        <button >Save Scores</button>
      </form>
      <div>
        <br></br>
        <h3>Tableau Des Scores</h3>
      <br></br>
      {tabResult.map((element:any) => {
        return (

        <table className="table" key={element.name}>
        <thead>
          <tr>
            <th scope="col">{element.name}</th>
            <th scope="col">Good Responses</th>
            <th scope="col">Wrong Responses</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Mental Input</th>
            <td>{element.gameInput.goodresponse}</td>
            <td>{element.gameInput.wrongresponse}</td>
          </tr>
          <tr>
            <th scope="row">Mental Choice</th>
            <td>{element.gameChoice.goodresponse}</td>
            <td>{element.gameChoice.wrongresponse}</td>
          </tr>
      </tbody>
      </table>);
      })}
        </div>
      </div>
  );
}

export default Scores;
