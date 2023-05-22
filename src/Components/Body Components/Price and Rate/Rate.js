import { Rating } from "@mui/material";
import React from "react";

const Rate = (props) => {
  return (
    <div>
      <Rating
        name="half-rating-read"
        sx={{
          "& .MuiRating-iconFilled": {
            color: "yellow",
          },
        }}
        defaultValue={props.value}
        readOnly
      />
    </div>
  );
};

export default Rate;
