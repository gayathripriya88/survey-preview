import React from "react";
import { useNavigate } from "react-router-dom";

export const LongAnswer = () => {
  let navigate = useNavigate();

  return (
    <>
      <div>
        <h3>This is a long answer question.</h3>
      </div>
      <div>
        <div>
          <input type="textbox" style={{ height: "200px", width: "600px" }} />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => navigate("/multichoice")}>prev</button>
        <button onClick={() => navigate("/thankyou")}>submit</button>
      </div>
    </>
  );
};
