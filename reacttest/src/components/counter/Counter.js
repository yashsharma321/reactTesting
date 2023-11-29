import { useState } from "react";

const Counter = ({ initialCount }) => {
  const [counter, setCounter] = useState(initialCount);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };
  const restart = () => {
    setCounter(0);
  };

  const switchSigns = () => {
    setCounter((prev) => prev * -1);
  };

  return (
    <div>
      <h1>
        Count: <h3>{counter}</h3>
      </h1>
      <div>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <button onClick={restart}>Restart</button>
        <button onClick={switchSigns}>Switch Sign</button>
      </div>
    </div>
  );
};

export default Counter;
