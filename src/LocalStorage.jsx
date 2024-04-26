// https://www.reacterry.com/portal/challenges/local-storage-1

// QUESTION Local Storage I
// Write a simple App component that returns an input field of type text.
// Users can interact with the input field to type in any
// string they want. You’re meant to store this string in
// local storage so that every time when the page reloads
// it pre-fills the input field with the latest known
// value for the users.

import { useState, useEffect } from "react";

const App = () => {
  const [text, setText] = useState("");

  useEffect(
    function () {
      const inputIs = localStorage.getItem("inputValue");
      setText(inputIs);
    },
    [text]
  );

  function handleChange(e) {
    const inputValue = e.target.value;
    setText(inputValue);
    localStorage.setItem("inputValue", inputValue);
  }

  return (
    <div>
      <input
        data-testid="input-id"
        value={text}
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
