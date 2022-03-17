import React, { useEffect, useState } from 'react';




function NotGoodResponse() {
  return (
    <div className="container" style={{ width: "20rem",marginTop:"200px"}}>
    <div className="card" style={{ backgroundColor:"red",color:"white"}}>
      <div className="card-header">
        Wrong !
      </div>
      <div className="card-body">
        <h5 className="card-title">Try Again !</h5>
      </div>
      </div>
    </div>
  );
}

export default NotGoodResponse;
