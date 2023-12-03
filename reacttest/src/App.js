import "./App.css";
import Counter from "../src/components/counter/Counter";
import Button from "./components/InputShow/Button";
import InputBox from "./components/InputShow/InputBox";
import PressHere from "./components/SearchButton/Button";
import SearchBox from "./components/SearchButton/Search";
import List from "./components/ListItems/List";

import { useState } from "react";

function App() {
  const [showDiv] = useState(true);
  return (
    <div className="App">
      <div className="separator">
        <List />
      </div>
      <div className="separator">
        <PressHere />
        <SearchBox />
      </div>
      <div className="separator">
        <InputBox showDiv={showDiv} />
        <Button />
      </div>
      <div className="separator">
        <Counter initialCount={0} />
      </div>
    </div>
  );
}

export default App;
