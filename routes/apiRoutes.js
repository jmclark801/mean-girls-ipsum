var db = require("../models");

module.exports = function (app) {
  // Get all quotes for display at /api/quotes
  app.get("/api/quotes", function (req, res) {
    db.Quotes.findAll({}).then(function (quotes) {
      console.log(quotes);
      res.json(quotes);
    });
  });

  // Comments API Routes:
  // Get all comments for display at /api/comments
  app.get("/api/comments", function (req, res) {
    db.Comment.findAll({}).then(function (comments) {
      res.json(comments);
    });
  });

  app.post("/api/comments", function (req, res) {
    // Object destructuring creates two variables such as req.body.comment
    var {
      comment,
      email
    } = req.body;
    var newComment = {
      comment,
      email
    };
    console.log(newComment);
    db.Comment.create(
      newComment
    ).then(function (comment) {
      console.log(`Added comment "${comment.comment}" from email ${comment.email} under ID ${comment.id}`);
      res.json(comment.id);
    });
  });

};