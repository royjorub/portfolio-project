const commentController = require("../controllers/comment.controller");

module.exports = (app) => {
  app.post("/api/comments/new", commentController.create);
  app.get("/api/comments", commentController.getAll);
  app.get("/api/comments/:id", commentController.getOne);
  app.delete("/api/comments/:id/delete", commentController.delete);
  app.put("/api/comments/:id/edit", commentController.update);
};
