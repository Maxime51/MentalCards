import React, { useEffect, useState } from 'react';
import { tabScore, tabScoreChoice } from '../App';
import GoodResponse from './GoodResponse';


function Scores(props: any) {
  let name = "";let mode = "";let goodresponse = 0;let wrongresponse = 0;
  let nameChoice = ""; let modeChoice = ""; let goodresponseChoice = 0; let wrongresponseChoice = 0;

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
    name: resultFormat.name,
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
console.log(totalScore)
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">{totalScore.name}</th>
      <th scope="col">Good Response</th>
      <th scope="col">Wrong Response</th>
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
  );
}

export default Scores;
