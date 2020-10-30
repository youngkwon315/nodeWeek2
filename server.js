const http = require("http");
const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

let { posts } = require("./db");

const { sendNewData } = require("./sendNewData");
const { getbyID } = require("./getbyID");
const { updatebyID } = require("./updatebyID");
const { deletebyID } = require("./deletebyID");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

// 전체 products 데이터 조회
app.get("/products", (req, res) => {
  res.json(posts);
});

// request 의 body 로 들어오는 post 의 데이터를 posts 배열에 추가 하는 함수
app.post("/products", sendNewData);

// post id 로 조회하는 함수
app.get("/products/:id", getbyID);

// post id 로 posts 배열중 하나의 post를 업데이트 하는 함수
app.put("/products/:id", updatebyID);

// post id 로 posts 배열중 하나의 post를 삭제하는 함수
app.delete("/products/:id", deletebyID);

const server = http.createServer(app);
server.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
