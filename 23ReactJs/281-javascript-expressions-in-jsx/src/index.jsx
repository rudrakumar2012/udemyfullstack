import React from "react";
import ReactDOM from "react-dom";

const fName = "Rudra";
const lName = "Kumar";
const variable = Math.floor(Math.random() * 10) + 1;

ReactDOM.render(
    <div>
        <h1>Hello {fName + " " + lName}!</h1>
        <p>Your lucky number is {variable}</p>
    </div>,

document.getElementById("root"));

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
