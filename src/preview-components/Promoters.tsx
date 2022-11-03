import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Promoters = () => {
  let navigate = useNavigate();
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>you are a promoter</h1>
        <input
          type="textarea"
          placeholder="please type something here..."
          style={{ height: "100px", width: "500px" }}
        />
      </div>
      <div>
        <button>
          <Link to="/">prev</Link>
        </button>
        <button
          onClick={() => {
            navigate("/singlechoice");
          }}
        >
          next
        </button>
      </div>
    </>
  );
};
