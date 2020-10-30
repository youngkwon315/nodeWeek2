let { posts } = require("./db");

const updatebyID = (req, res) => {
  const id = req.params.id;
  const updateItem = posts.find((post) => post.id == id);
  if (!updateItem) return res.status(404).send("The given ID was not found");
  updateItem.username = req.body.username;
  res.send(posts);
};

module.exports = { updatebyID };
