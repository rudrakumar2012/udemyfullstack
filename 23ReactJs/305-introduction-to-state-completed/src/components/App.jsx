import React, { useState } from "react";

function App() {
  const [isDone, setIsDone] = useState(false);

  function strike() {
    setIsDone(true);
  }

  function unStrike() {
    setIsDone(false);
  }

  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
