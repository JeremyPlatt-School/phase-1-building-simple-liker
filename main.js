// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let heart = document.querySelectorAll(".like-glyph");



for (const icon of heart) {
  icon.addEventListener("click", likeButton);
 }


function likeButton(heart){
  let icon = heart.target;
  mimicServerCall()
    .then(function(serverMessage){
      if(icon.classList.contains("activated-heart")) {
        icon.classList.remove("activated-heart");
        console.log("heart TURNED OFF")
    } else(icon.classList.add("activated-heart"));
      console.log(serverMessage);
    })


    .catch(function(error) {
      document.getElementById("modal").classList.remove("hidden");
      setTimeout(function(){
        console.log("TimeOutReached")
        document.getElementById("modal").classList.add("hidden");
    }, 3000);
      console.log(error);
    });
  
}

// let par = document.createElement("p");
// par.textContent = error;
// document.getElementById("modal").appendChild(par);

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
