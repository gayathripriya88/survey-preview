import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const SingleChoice = () => {
  let navigate = useNavigate();

  return (
    <>
      <div>
        <h3>
          This is a single choice question you can select only one answer.
        </h3>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <input type="radio" name="option" />
          <label>option 1</label>
        </div>
        <div>
          <input type="radio" name="option" />
          <label>option 2</label>
        </div>
        <div>
          <input type="radio" name="option" />
          <label>option 3</label>
        </div>
        <div>
          <input type="radio" name="option" />
          <label>option 4</label>
        </div>
      </div>
      <div>
        <button>
          <Link to="/" style={{ textDecoration: "none" }}>
            prev
          </Link>
        </button>
        <button onClick={() => navigate("/multichoice")}>next</button>
        <button onClick={() => navigate("/multichoice")}>skip</button>
      </div>
    </>
  );
};
