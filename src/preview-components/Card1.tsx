import React from "react";
import { Link } from "react-router-dom";

type stateProps = {
  value?: number;
  // setValue?: React.Dispatch<React.SetStateAction<number>>;
  setValue?: any;
};

export const Card1 = ({ value, setValue }: stateProps) => {
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <button>
          <Link to="detractors" style={{ textDecoration: "none" }}>
            1
          </Link>
        </button>
        <button>
          <Link to="detractors" style={{ textDecoration: "none" }}>
            2
          </Link>
        </button>
        <button>
          <Link to="detractors" style={{ textDecoration: "none" }}>
            3
          </Link>
        </button>
        <button>
          <Link to="detractors" style={{ textDecoration: "none" }}>
            4
          </Link>
        </button>
        <button>
          <Link to="detractors" style={{ textDecoration: "none" }}>
            5
          </Link>
        </button>
        <button>
          <Link to="detractors" style={{ textDecoration: "none" }}>
            6
          </Link>
        </button>
        <button>
          <Link to="passives" style={{ textDecoration: "none" }}>
            7
          </Link>
        </button>
        <button>
          <Link to="passives" style={{ textDecoration: "none" }}>
            8
          </Link>
        </button>
        <button>
          <Link to="promoters" style={{ textDecoration: "none" }}>
            9
          </Link>
        </button>
        <button>
          <Link to="promoters" style={{ textDecoration: "none" }}>
            10
          </Link>
        </button>
      </div>
      <div>
        <button>
          <Link to="singlechoice" style={{ textDecoration: "none" }}>
            next
          </Link>
        </button>
      </div>
    </>
  );
};
