import { useState } from "react";

const InputBox = ({ showDiv }) => {
  const [inputText, updateinputText] = useState("");
  return (
    <div>
      <input
        type="text"
        data-testid="searchBar"
        placeholder="Search..."
        onChange={(obj) => updateinputText(obj.target.value)}
      />

      <h1 data-testid="displaySearch">{inputText}</h1>

      {showDiv && (
        <div data-testid="divWeWantToShow">
          Hey, I'm learning React Testing Libraries
        </div>
      )}
    </div>
  );
};

export default InputBox;
