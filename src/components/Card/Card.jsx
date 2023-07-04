import React from "react";
import Graph from "../Graph/Graph";

const Card = () => {
  return (
    <div className="card-container" style={{
        width:'19rem',
        padding:'1.25rem',
        backgroundColor:'white',
        borderRadius:'10px'
    }}>
      <h4>Heading</h4>
      <div className="card-body" style={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <div className="card-left">
          <h3>3,354</h3>
          <div>chip number</div>
        </div>
        <div className="card-graph">
          <Graph />
        </div>
      </div>
    </div>
  );
};

export default Card;
