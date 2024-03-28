import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
const port = 3000;
let posts = loadPosts();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/post/new", (req, res) => {
    res.render("newpost.ejs");
});


app.get("/newpost", (req, res) => {
  res.render("newpost.ejs");
});

app.post("/post/new", (req, res) => {
  const { title, content } = req.body;
  console.log("New Post:", { title, content });
  posts.push({ title, content });
  savePosts(posts);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

function loadPosts() {
    try {
        const data = fs.readFileSync("./posts.json", "utf8");
        return JSON.parse(data);
    } catch (err) {
        console.error("Error loading posts:", err);
        return [];
    }
}

function savePosts(posts) {
    try {
        const data = JSON.stringify(posts, null, 2);
        fs.writeFileSync("./posts.json", data);
    } catch (err) {
        console.error("Error saving posts:", err);
    }
}