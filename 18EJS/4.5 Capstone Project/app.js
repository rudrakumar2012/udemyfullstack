import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
let posts = loadPosts();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/post", (req, res) => {
    res.render("post.ejs", { posts });
});

app.get("/post/new", (req, res) => {
    res.render("newpost.ejs");
});

app.get("/post/:id/edit", (req, res) => {
    const postId = req.params.id;
    const post = posts.find(post => post.id === postId);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("editpost.ejs", { post });
});

app.post("/post/new", (req, res) => {
    const { title, content } = req.body;
    const postId = generateUniqueId();
    posts.push({ id: postId, title, content });
    savePosts(posts);
    res.redirect("/post");
});

app.post("/post/:id/edit", (req, res) => {
    const postId = req.params.id;
    const { title, content } = req.body;
    const postIndex = posts.findIndex(post => post.id === postId);
    if (postIndex === -1) {
        return res.status(404).send("Post not found");
    }
    posts[postIndex].title = title;
    posts[postIndex].content = content;
    savePosts(posts);
    res.redirect("/post");
});

app.post("/post/:id/delete", (req, res) => {
    const postId = req.params.id;
    const postIndex = posts.findIndex(post => post.id === postId);
    if (postIndex === -1) {
        return res.status(404).send("Post not found");
    }
    posts.splice(postIndex, 1);
    savePosts(posts);
    res.redirect("/post");
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

function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}