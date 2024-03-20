/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}



const createTweetElement = (tweetData) => { 
  let $tweet = $( 
  `<article class="tweets-container">
    <div class="user-info">
      <div class="left-section">
        <img src=${tweetData.user.avatars} class="user-picture" alt="Profile Picture">
        <label for="user-name">${tweetData.user.name}</label>
      </div>
      <div class="right-section">
        <label class="user-handle" for="user-handle">${tweetData.user.handle}@salmon</label>
      </div>
    </div>  
    <div class="user-tweet">
      <label for="user-tweet">${tweetData.content.text}</label>
    </div>
    <br>
    <div class="tweet-footer">
      <label class="time" for="time">${tweetData.created_at}</label>
      <div class="icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </div>
  </article>
  `);

  return $tweet;
};

$(document).ready(() => {
  const createdTweet = createTweetElement(tweetData);
  //append section to the created post
  $("section").append(createdTweet)

})