import React, { useEffect, useState } from 'react';




function GoodResponse() {
  return (
    <div className="container" style={{ width: "20rem",marginTop:"200px"}}>
    <div className="card" style={{ backgroundColor:"green",color:"white"}}>
      <div className="card-header">
        Good !
      </div>
      <div className="card-body">
        <h5 className="card-title">Next Question !</h5>
      </div>
      </div>
    </div>
  );
}

export default GoodResponse;
