import React from "react";
import "./Effect.css";


const Effect = (props) => {
  return (
    <div className="scrolling-image" dataSrc={`./${props.image}`} style={{backgroundImage: `url("./${props.image}")`}}></div>
  );
}

export default Effect;