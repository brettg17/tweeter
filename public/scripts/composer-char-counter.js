$(document).ready(function() {
  $("#tweet-text").on("input", function(event) {
      const currentLength = $(this).val().length;
      const remaining = 140 - currentLength;
      $(".counter").text(remaining);

      if (remaining < 0) {
          $(".counter").addClass("negative");
      } else {
          $(".counter").removeClass("negative");
      }
  });
});