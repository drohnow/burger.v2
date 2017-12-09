$(function() {
  $(".change-eat").on("click", function(event) {
 
    console.log("button clicked");

    var id = $(this).data("id");
    var newEat = $(this).data("devoured");
    console.log(id);
    console.log(newEat);

    var newEatState = {
      "devoured": 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        console.log("changed Eat State", newEatState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  });




  