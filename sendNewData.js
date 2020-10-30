let { posts } = require("./db");

const sendNewData = (req, res) => {
  const newItem = req.body;
  posts.push(newItem);
  res.send(posts);
};

module.exports = { sendNewData };
