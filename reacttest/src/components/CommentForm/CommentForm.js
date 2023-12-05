import React, { useState } from "react";

export default function CommentForm({ setComments }) {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);

  const addComments = () => {
    setComments((prev) => [...prev, { id: Date.now(), text: text }]);
    setText("");
  };

  return (
    <div>
      <h2>Comment Form</h2>
      <input
        placeholder="write your comment here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="checkbox"
        id="checkbox"
        defaultChecked={checked}
        onClick={() => setChecked(!checked)}
      />
      <label htmlFor="checkbox">I agree to terms and conditions</label>

      <button disabled={!checked || !text} onClick={addComments}>
        comment
      </button>
    </div>
  );
}
