import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

// Connect to the PostgreSQL database
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "blog",
  password: "postgres",
  port: 5432,
});
db.connect();

// Create express app and declare port
const app = express();
const port = 3000;

let posts = [];

//////////////////////////////// POSTGRES COMMANDS ////////////////////////////////

/*  1  */
//  Show all posts every time the function is executed
function viewPosts() {
  db.query("SELECT * FROM post", (err, res) => {
    if(err) {
      console.error("Error executing query", err.stack);
    } else {
      posts = res.rows;
    }
  });
}

/*  2  */
// Add new post using given params (title and content)
function addPost(params) {
  db.query("INSERT INTO post (title, content) VALUES ($1, $2)", params);
}

/*  3  */
// Change title of post
function changeTitle(title, id) {
  db.query("UPDATE post SET title = $1 WHERE id = $2", [title, id], (err, res) => {
    if(err) {
      console.error("Error executing query", err.stack);
    }
  });
}
// Change content of post
function changeContent(content, id) {
  db.query("UPDATE post SET content = $1 WHERE id = $2", [content, id], (err, res) => {
    if(err) {
      console.error("Error executing query", err.stack);
    }
  });
}

/*  4  */
// Delete post with certain id
function deletePost(id) {
  db.query("DELETE FROM post WHERE id= $1", [id], (err, res) => {
    if(err) {
      console.error("Error executing query", err.stack);
    }
  });
}

///////////////////////////////////////////////////////////////////////////////////

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// !!WE PUT THE viewPosts() AT THE END OF EACH ACTION SO THE USER DOESN'T HAVE TO REFRESH PAGE TO SEE CHANGES!!

// 1. Get all posts
app.get("/", (req, res) => {
  viewPosts();
  res.render("index.ejs", {posts: posts});
});

// Get new post form
app.get("/new", (req, res) => {
  res.render('edit.ejs');
});


// Get a post by id
app.get("/:id", (req, res) => {
  const post = posts.find((post) => post.id === parseInt(req.params.id));
  res.render('edit.ejs', {post: post});
});


// 2. Add new post
app.post("/post", (req, res) => {
  const post = [req.body.title, req.body.content];
  addPost(post);

  viewPosts();
  res.redirect("/");
});

// 3. Modify post
app.post("/edit/:id", (req, res) => {
  const post = posts.find((post) => post.id === parseInt(req.params.id));

  if(req.body.title) changeTitle(req.body.title, post.id);
  if(req.body.content) changeContent(req.body.content, post.id);

  viewPosts();
  res.redirect("/");
});

// 4. delete post
app.get("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  deletePost(id);
  
  viewPosts();
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`App is running on http://127.0.0.1:${port}`);
});