$("#submit").on("click", function(event) {
  event.preventDefault();
  var newComment = {
    comment: $("#comment")
      .val()
      .trim(),
    email: $("#email")
      .val()
      .trim()
  };
  $.post("/api/comments", newComment).then(function(response) {
    console.log(response);
    location.href = "/comments";
  });
});

// get the modal
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];


// Execute a function when the user releases a key on the keyboard
document.addEventListener("keydown", function(event) {
  console.log("event fired");
  // Number 13 is the “Enter” key on the keyboard
  if (event.keyCode === 13) {
    console.log("correct key");
    // Cancel the default action, if needed
    
    event.preventDefault();
    var paragraphNumbers = $("#para").val().trim();
    if (paragraphNumbers > 10) {
      modal.style.display = "block";
    } else { location.href = `/results/${paragraphNumbers}`;
    }
        
  }
});

$("#butt").on("click", function(event) {
  event.preventDefault();
  var paragraphNumbers = $("#para").val().trim();
  if (paragraphNumbers > 10) {
    modal.style.display = "block";
  } else { location.href = `/results/${paragraphNumbers}`;
  }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function copyToClipboard(elementToCopy) {
  console.log("In copyToClipboard");
  var $temp = $("<input>");
  $(".copyable").append($temp);
  $temp.val($(elementToCopy).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
