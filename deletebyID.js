let { posts } = require("./db");

const deletebyID = (req, res) => {
  const id = req.params.id;
  const deleteItem = posts.find((post) => post.id == id);
  if (!deleteItem) return res.status(404).send("The given ID was not found");
  const index = posts.indexOf(deleteItem);
  posts.splice(index, 1);
  res.send(posts);
};

module.exports = { deletebyID };
