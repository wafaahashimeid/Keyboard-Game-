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
var count=0;

document.addEventListener("keyup", event => {
  const keyPressed = String.fromCharCode(event.keyCode);
  const keyElement = document.getElementById(keyPressed);
  const highlightedKey = document.querySelector(".selected");
  
  keyElement.classList.add("hit")
  keyElement.addEventListener('animationend', () => {
    keyElement.classList.remove("hit")
  }) 
  var audioRight = new Audio('audio/fainalright.mp3');
  var audioWrong = new Audio('audio/fainalwrong.mp3');
  if (keyPressed === highlightedKey.innerHTML) {
    timestamps.unshift(getTimestamp());
    const elapsedTime = timestamps[0] - timestamps[1];
    console.log(`Character per minute ${60/elapsedTime}`)
    highlightedKey.classList.remove("selected");
    targetRandomKey();
    audioRight.play();
    count++;
    console.log(`counts are : ${count}`);
    if(count === 10){
      window.open("congrats.html", null, "width=400,height=300");
      count = 0;
    }
  } 
  else
  {
    audioWrong.play();

  }
})
targetRandomKey();
