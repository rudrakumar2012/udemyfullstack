import React from "react";

function App() {
  const [inputText, setInputText] = React.useState("");
  const [items, setItems] = React.useState([]);

  function handleClick() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
