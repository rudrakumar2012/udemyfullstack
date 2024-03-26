import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h2>Contact</h2>");
});

app.get("/about", (req, res) => {
    res.send("<h2>About</h2>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})