var audioRight = new Audio('assets/right.wav');
var audioWrong = new Audio('assets/wrong.wav');
const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const timestamps = [];
timestamps.unshift(getTimestamp());
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomKey() {
  return keys[getRandomNumber(0, keys.length-1)]
}
function targetRandomKey() {
  const key = document.getElementById(getRandomKey());
  key.classList.add("selected");
  let start = Date.now()
}
function getTimestamp() {
  return Math.floor(Date.now() / 1000)
}
document.addEventListener("keyup", event => {
  const keyPressed = String.fromCharCode(event.keyCode);
  const keyElement = document.getElementById(keyPressed);
  const highlightedKey = document.querySelector(".selected");
  keyElement.classList.add("hit")
  keyElement.addEventListener('animationend', () => {
    keyElement.classList.remove("hit")
  })
  if (keyPressed === highlightedKey.innerHTML) {
    timestamps.unshift(getTimestamp());
    const elapsedTime = timestamps[0] - timestamps[1];
    console.log(`Character per minute ${60/elapsedTime}`)
    highlightedKey.classList.remove("selected");
    targetRandomKey();


    window.onload = function(){
      count = 0;
    var btn = document.getElementById("myBtn");
    myBtn.onclick = function(){
        count++;
          if(count == 10){
            window.open("congrats.html", null, "width=400,height=300");
          }}};

    audioRight.play();
  } 
  else
  {
    audioWrong.play();
  }
})
 const stars = document.querySelectorAll(".stars i");
 stars.forEach((star, index1) => {
   star.addEventListener("click", () => {
     stars.forEach((star, index2) => {
       index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
     });
   });
 });
 