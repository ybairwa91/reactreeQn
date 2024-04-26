/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Accordian.module.css"

export default function App() {
  return (
    <div className="app">
      <h1>Frequently asked questions</h1>
      <Accordian />
    </div>
  );
}

function Accordian() {
  return (
    <div className="accordian">
      <Question
        qn="This is our first question"
        answer="This is first question answer"
      />
      <Question
        qn="This is our Second question"
        answer="This is second question answer"
      />
      <Question
        qn="This is our third question"
        answer="This is third question answer"
      />
      <Question
        qn="This is our fourth question"
        answer="This is fourth question answer"
      />
    </div>
  );
}

function Question({ qn, answer }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked((isClicked) => !isClicked);
  }

  return (
    <>
      <div className="question">
        <h3
          className={`${"heading"} ${isClicked ? "clicked" : ""}`}
          onClick={handleClick}
        >
          {qn}
        </h3>
        {isClicked && <p>{answer}</p>}
      </div>
      <hr />
    </>
  );
}
