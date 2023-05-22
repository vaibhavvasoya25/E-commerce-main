import React from "react";

const Image = (props) => {
  return (
    <div>
      <img className="cardImage" alt="Sample" src={props.value} />
    </div>
  );
};

export default Image;
