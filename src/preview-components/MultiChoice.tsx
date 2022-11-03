import React from "react";
import { useNavigate } from "react-router-dom";

export const MultiChoice = () => {
  let navigate = useNavigate();

  return (
    <>
      <div>
        <h3>
          This is a multiple choice question you can select any number of
          answers.
        </h3>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <input type="checkbox" name="option" />
          <label>option 1</label>
        </div>
        <div>
          <input type="checkbox" name="option" />
          <label>option 2</label>
        </div>
        <div>
          <input type="checkbox" name="option" />
          <label>option 3</label>
        </div>
        <div>
          <input type="checkbox" name="option" />
          <label>option 4</label>
        </div>
      </div>
      <div>
        <button onClick={() => navigate("/singlechoice")}>prev</button>
        <button onClick={() => navigate("/longanswer")}>next</button>
        <button onClick={() => navigate("/longanswer")}>skip</button>
      </div>
    </>
  );
};
