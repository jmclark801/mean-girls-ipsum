$("#submit").on("click", function(event){
  event.preventDefault();
  var newComment = {
    comment: $("#comment").val().trim(),
    email: $("#email").val().trim()
  };
  $.post("/api/comments", newComment).then(function(response){
    console.log(response);
    location.href = "/comments";
  });
});


$("#butt").on("click", function(event) {
  event.preventDefault();
  var numberOfParagraphs = $("#para").val().trim();

  $.post(`/results/${numberOfParagraphs}`).then(function(response) {
    location.href = "/results/:paragraphNumbers";
  });
});
