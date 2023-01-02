import { useState } from "react";

function Usestate() {
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState(0);
  return (
    <div>
      <input
        type="text"
        value={message}
        placeholder="Enter a message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>Message:</p>
      <p>{message}</p>
      <div>
        <p>Number: {number}</p>
        <div>
          <button onClick={() => setNumber(number + 1)}>Add</button>
          <button onClick={() => setNumber(number - 1)}>Sub</button>
        </div>
      </div>
    </div>
  );
}

export default Usestate;
