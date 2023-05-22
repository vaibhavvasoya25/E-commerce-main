import React from "react";

const Symbol = () => {
  return (
    <>
      <div>
        <a style={{ textDecoration: "none" }} href="/">
          <div className="symbol">
            <h1>
              <img
                className="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHgungjpNLQ-C1VEiIzJfly1FNMzp4ygt9k5cCeNgddg&usqp=CAU&ec=48600113"
                alt="img not found"
              />{" "}
              Shoppi <b style={{ color: "red" }}>5</b>
            </h1>
          </div>
        </a>
      </div>
    </>
  );
};

export default Symbol;
