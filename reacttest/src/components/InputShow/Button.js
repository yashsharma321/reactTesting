import { useState } from "react";

const Button = () => {
  const [clickbtn, updateClickbtn] = useState(false);
  return (
    <div>
      <button data-testid="button" onClick={() => updateClickbtn(true)}>
        Click Hereeeeeee
      </button>

      {clickbtn && <button data-testid="button">Click HEREEE</button>}
    </div>
  );
};

export default Button;
