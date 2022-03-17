import React, { useEffect, useState } from 'react';




function ChangeTheme(props: any) {
  return (
    <div className="container" style={{ width: "20rem",marginTop:"200px"}}>
    <div className="card" style={{ backgroundColor:"gray",color:"white"}}>
      <div className="card-header">
        Change mode !
      </div>
      <div className="card-body">
          <h5 className="card-title">{props.mode}</h5>
      </div>
      </div>
    </div>
  );
}

export default ChangeTheme;
