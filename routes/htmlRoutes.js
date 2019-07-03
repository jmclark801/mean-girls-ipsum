var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Quotes.findAll({}).then(function(dbQuotes) {
      res.render("index", {
        // msg: "Welcome!",
        // examples: dbQuotes
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/results/:paragraphNumbers", function(req, res) {
    db.Quotes.findAll({raw: true}).then(function(
      dbQuotes

    ) {
      // our quote to display follow how may par user want
      // console.log(dbQuotes);
      var ipsum = [];
      var newQuote = dbQuotes;
      for (var i= 0; i < req.params.paragraphNumbers; i++) {
        // determine number of sentences 
        var randomNumberOfSentences = Math.floor(Math.random() * 5) + 3; 
        
        var paragraph = "";
        for (var j=0; j < randomNumberOfSentences; j++) {
          var numberToSelectSentences = Math.floor(Math.random() * newQuote.length);
          paragraph += newQuote[numberToSelectSentences].quote;
          newQuote.splice(numberToSelectSentences, 1);
          // console.log(newQuote);
          paragraph += " ";
          // get ride of newQuote[numberToSelectSentences] now
          // paragraph to to go to ipsum!!!
        }
        ipsum.push(paragraph);
      }
      
      console.log(ipsum);
      
      res.render("index", {
        ipsum: ipsum
      });
    });
  });

  app.get("/comments", function (req, res) {
    db.Comment.findAll({
      order: db.Sequelize.literal("rand()"),
      limit: 8
    }).then(function (comments) {
      res.render("comments", { comments });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

};