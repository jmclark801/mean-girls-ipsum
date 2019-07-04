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
  var paragraphNumbers = $("#para").val().trim();
  location.href = `/results/${paragraphNumbers}`;
});
                   
function copyToClipboard(elementToCopy){
  console.log("In copyToClipboard");
  var $temp = $("<input>");
  $(".copyable").append($temp);
  $temp.val($(elementToCopy).text()).select();
  document.execCommand("copy");
  $temp.remove();
}


