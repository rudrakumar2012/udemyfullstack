import React from "react";
import ReactDOM from "react-dom";

const Image = "https://picsum.photos/200/300"

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img className="images" src={Image + "?grayscale"} alt="images" />
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
