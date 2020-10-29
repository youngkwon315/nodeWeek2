const http = require("http");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const url = require("url");

let { posts } = require("./db");

const { sendNewData } = require("./sendNewData");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// request 의 body 로 들어오는 post 의 데이터를 posts 배열에 추가 하는 함수
app.post("/products", (req, res) => {
  const newItem = req.body;
  posts.push(newItem);
  res.send(posts);
});

app.get("/products", (req, res) => {
  res.json(posts);
});

// post id 로 조회하는 함수
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const filteredPosts = posts.filter((post) => post.id == id);
  res.send(filteredPosts);
});

// post id 로 posts 배열중 하나의 post를 업데이트 하는 함수
app.put("/products/:id", (req, res) => {
  const id = req.params.id;
  const updateItem = posts.find((post) => post.id == id);
  updateItem.username = req.body.username;
  res.send(posts);
});

// post id 로 posts 배열중 하나의 post를 삭제하는 함수
app.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  const deleteItem = posts.find((post) => post.id == id);
  const index = posts.indexOf(deleteItem);
  posts.splice(index, 1);
  res.send(posts);
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
