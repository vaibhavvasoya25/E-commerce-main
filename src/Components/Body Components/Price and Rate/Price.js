import React from "react";
import Rate from "./Rate";
import { CardSubtitle, CardText } from "reactstrap";

const Price = (props) => {
  return (
    <div>
      <CardSubtitle className="mb-2" tag="h5">
        <span style={{ color: "red" }}>Price: ${props.value1}</span>
      </CardSubtitle>
      <CardText tag="h5">
        <Rate value={props.value2} />
      </CardText>
    </div>
  );
};

export default Price;
