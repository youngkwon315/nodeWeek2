const http = require('http');
const express = require('express');
let { posts } = require('./db');
const app = express();

app.get('/products', (req, res) => {
  res.json(posts);
});

app.post('/products', (req, res) => {
  // request 의 body 로 들어오는 post 의 데이터를 posts 배열에 추가 하는 함수
});

app.get('', (req, res) => {
  // post id 로 조회하는 함수
});

app.put('', (req, res) => {
  // post id 로 posts 배열중 하나의 post를 업데이트 하는 함수
});

app.delete('/products/:id', (req, res) => {
  // post id 로 posts 배열중 하나의 post를 삭제하는 함수
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
