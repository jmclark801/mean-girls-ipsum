var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // app.get("/", function(req, res) {
  //   db.Comment.findAll({
  //       order: [["lastName", "ASC"], ["firstName", "ASC"]]
  //   }).then(function(contacts){
  //       console.log(contacts);
  //       res.render("contacts", { contacts, name: "Jim" })
  //   })
  // });
//   Encounter.findAll({ order: Sequelize.literal('rand()'), limit: 5 }).then((encounters) => {
//     // single random encounter
// });

  app.get("/comments", function (req, res) {
    db.Comment.findAll({
      order: db.Sequelize.literal('rand()'), limit: 8
    }).then(function(comments){
      console.log(comments);
      res.render("comments", {
        comments
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

};