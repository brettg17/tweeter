/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const createTweetElement = (tweetData) => { 
  const timeAgoString = timeago.format(tweetData.created_at);
  let $tweet = $( 
  `<div class="tweet-container">
    <div class="user-info">
      <div class="left-section">
        <img src=${tweetData.user.avatars} class="user-picture" alt="Profile Picture">
        <label for="user-name">${tweetData.user.name}</label>
      </div>
      <div class="right-section">
        <label class="user-handle" for="user-handle">${tweetData.user.handle}</label>
      </div>
    </div>  
    <div class="user-tweet">
      <label for="user-tweet">${$("<div>").text(tweetData.content.text).html()}</label>
    </div>
    <br>
    <div class="tweet-footer">
      <label class="timeago" for="timeago">${timeAgoString}</label>
     <div class="icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </div>
    </div>
  `);

  return $tweet;
};

const renderTweets = (tweets) => tweets.map(tweet => createTweetElement(tweet));
 
$(document).ready(() => {

  $("form").submit(function(event){
    event.preventDefault();

    const $text = $("#tweet-text").val().trim();
    const textLength = $text.length

    if (textLength === 0){
      alert("Do you have nothing to say??"); // Show an alert if there is no text
    }
    else if (textLength > 140) {
      alert("That was a bit much..."); // Show an alert if the text length is too long
    }
    else{
    const formData = $(this).serialize();
    console.log(formData)
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: formData
    })
  
    .then((res) => {
      loadTweets();
      $("#tweet-text").val("");
 
    })
    .catch((err) =>console.log(err))
  }
  });

  function loadTweets() {
  $.ajax({
    method: "GET",
    url: "/tweets",
  })

  .then((res) => {
    $(".tweets-container").empty(); // Clear the section
    const tweets = renderTweets(res); 
    for (const tweet of tweets) {
      $(".tweets-container").prepend(tweet); 
    }
    console.log(res)
  
  })
  .catch((err) =>console.log(err))
  };
loadTweets();
 
});


