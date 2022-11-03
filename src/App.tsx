import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Card1 } from "./preview-components/Card1";
import { Detractors } from "./preview-components/Detractors";
import { Passives } from "./preview-components/Passives";
import { Promoters } from "./preview-components/Promoters";
import { Thankyou } from "./preview-components/Thankyou";
import { SingleChoice } from "./preview-components/SingleChoice";
import { MultiChoice } from "./preview-components/MultiChoice";
import { LongAnswer } from "./preview-components/LongAnswer";

function App() {
  const [value, setValue] = React.useState();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Card1 value={value} setValue={setValue} />} />
        <Route path="detractors" element={<Detractors />} />
        <Route path="passives" element={<Passives />} />
        <Route path="promoters" element={<Promoters />} />
        <Route path="thankyou" element={<Thankyou />} />
        <Route path="singlechoice" element={<SingleChoice />} />
        <Route path="multichoice" element={<MultiChoice />} />
        <Route path="longanswer" element={<LongAnswer />} />
      </Routes>
    </Router>
  );
}

export default App;
