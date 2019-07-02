var db = require("../models");

module.exports = function(app) {
  // Get all quotes for display at /api/quotes
  app.get("/api/quotes", function(req, res) {
    db.Quotes.findAll({}).then(function(quotes) {
      console.log(quotes);
      res.json(quotes);
    });
  });

  // Comments API Routes:

  // Get all comments for display at /api/comments
  app.get("/api/comments", function(req, res){
    db.Comment.findAll({}).then(function(comments){
      console.log(comments);
      res.json(comments);
    });
  });

  // app.post("/api/comments/seed/:seedComment", function(req, res){
  //   let newComment = {
  //     comment: (req.params.seedComment).toString(),
  //     email: "test@testemail.com"
  //   };
  //   db.Comment.create(newComment).then(function(comment){
  //     console.log(comment);
  //     res.json({id: comment.id})
  //   })
  // })

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

};
