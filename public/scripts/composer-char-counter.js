$(document).ready(function() {
  $("#tweet-text").on("input", function(event) {
      const currentLength = $(this).val().length;
      const remaining = 140 - currentLength;
      const counter = $(this).closest('form').find('.counter');
      counter.text(remaining);

      if (remaining < 0) {
          counter.addClass("negative");
      } else {
          counter.removeClass("negative");
      }
  });
});
