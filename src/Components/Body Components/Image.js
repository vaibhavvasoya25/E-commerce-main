import React from "react";

const Image = (props) => {
  return (
    <div>
      <a href={props.value}>
        <img className="cardImage" alt="Sample" src={props.value} />
      </a>
    </div>
  );
};

export default Image;
