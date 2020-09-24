const Comment = require("../models/comment.model");

module.exports = {
  create: function (req, res) {
    console.log("create  method executed");
    Comment.create(req.body)
      .then((comment) => {
        res.json(comment);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  getAll(req, res) {
    console.log("getAll method executed");

    Comment.find()
      .then((comments) => {
        res.json(comments);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getOne(req, res) {
    console.log("getOne method executed", "url params:", req.params);
    Comment.findById(req.params.id)
      .then((comment) => {
        res.json(comment);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  delete(req, res) {
    console.log("delete method executed", "url params:", req.params);

    Comment.findByIdAndDelete(req.params.id)
      .then((comment) => {
        res.json(comment);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  update(req, res) {
    console.log("update method executed", "url params:", req.params);

    Comment.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      // return the updated object rather than the old info
      new: true,
    })
      .then((comment) => {
        console.log("update method .then");
        res.json(comment);
      })
      .catch((err) => {
        console.log("update method .catch");
        res.status(400).json(err);
      });
  }
};
