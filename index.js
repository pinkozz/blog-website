import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let posts = []

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let currentId = 0;

// get all posts
app.get("/", (req, res) => {
  res.render("index.ejs", {posts: posts});
});

// 
app.get("/new", (req, res) => {
  res.render('edit.ejs');
});

// get a post by id
app.get("/:id", (req, res) => {
  const post = posts.find((post) => post.id === parseInt(req.params.id));
  res.render('edit.ejs', {post: post});
});

// add new post
app.post("/post", (req, res) => {
  const newId = currentId+=1;

  const post = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(post);

  res.redirect("/");
});

// modify post
app.post("/edit/:id", (req, res) => {
  const post = posts.find((post) => post.id === parseInt(req.params.id));

  if(req.body.title) post.title = req.body.title;
  if(req.body.content) post.content = req.body.content;

  res.redirect("/");
});

// delete post
app.get("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const searchIndex = posts.findIndex((post) => post.id === id);

  posts.splice(searchIndex, 1);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`App is running on http://127.0.0.1:${port}`);
});