import React from "react";
import { CardTitle } from "reactstrap";

const Title = (props) => {
  return (
    <div>
      <div className="cardTitle">
        <div style={{ marginTop: "10px" }}>
          <CardTitle tag="h5">
            <span>{props.value}</span>
          </CardTitle>
        </div>
      </div>
    </div>
  );
};

export default Title;
