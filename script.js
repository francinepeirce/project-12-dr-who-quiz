$(document).ready(function() {
  $("#submit").click(function() {
    // Disable options after submission
    $("input[name='answer']").attr("disabled", true);

    // Get the selected answer
    var selectedAnswer = $("input[name='answer']:checked").val();

    // Check if the answer is correct
    if (selectedAnswer === "Eccleston") {
      $("#feedback").text("Fantastic!").addClass("correct");
    } else {
      $("#feedback").text("Incorrect. You will be exterminated.").addClass("incorrect");
    }
  });
});
