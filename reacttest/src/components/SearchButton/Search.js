import { useState } from "react";

const SearchBox = () => {
  const [inputvalue, setInputvalue] = useState("");
  const handleChange = (event) => {
    setInputvalue(event.target.value);
  };
  return (
    <input
      type="text"
      onChange={handleChange}
      title="dummySearch"
      value={inputvalue}
    />
  );
};

export default SearchBox;
