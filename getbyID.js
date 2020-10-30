let { posts } = require("./db");

const getbyID = (req, res) => {
  const id = req.params.id;
  const filteredPosts = posts.filter((post) => post.id == id);
  if (!filteredPosts) return res.status(404).send("The given ID was not found");
  res.send(filteredPosts);
};

module.exports = { getbyID };
