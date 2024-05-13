import React from "react";

function App() {
  const [headingText, setHeadingText] = React.useState("Hello");
  const [ishandler1, setHandler1] = React.useState(false);
  const handler = () => {
    setHeadingText("Submitted");
  };

  const handler1 = () => {
    setHandler1(true);
  };

  const handler2 = () => {
    setHandler1(false);
  };

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
        style={{backgroundColor: ishandler1 ? "black" : "white"}}
        onClick={handler} 
        onMouseOver={handler1} 
        onMouseOut={handler2}>
        Submit
      </button>
    </div>
  );
}

export default App;
