
/*
// change background color

var background = document.querySelector('.background');

var groupOfFriends;

var counter = 0;

function changeBackgroundColor() {


  (counter <= groupOfFriends){
  var newColor = Math.floor((Math.random() * 255) + 1);
  var newColor2 = Math.floor((Math.random() * 255) + 1);
  var newColor3 = Math.floor((Math.random() * 255) + 1);
  background.style.backgroundColor = 'rgb(' + newColor + ',' + newColor2 + ',' + newColor3 + ')';
  }
}

*/


// How many are you?

var groupOfFriends;

var counter = 0;

function howManyAreYou(){

groupOfFriends = prompt ("Good night, lads. How many are you?");


if (groupOfFriends == 1) {
  alert("OK, I'll need to see your ID.");
} else if (groupOfFriends == 2) {
  alert("OK, I'll need to see both your ID's.");
} else if (groupOfFriends > 2) {
  alert("OK, I'll need to see all " + groupOfFriends + "'s ID.");
}

}

// pass or not

function passOrNot(){
var randomNum =  Math.floor((Math.random() * groupOfFriends) + 1);

if (randomNum % 2 === 0){
  return "Yes";
} else {
  return "No";
}
}

// random number generator for answers
function randomNumForAnswer(){
  return Math.floor((Math.random() * groupOfFriends) + 1);
}
// positive answers

var positiveResponse = ["Okay, mate. You're good to go.", "Thanks lad, enjoy the night.", "Thanks, have a great night.", "Okay, come on in. Great shirt by the way.",
"You're all good, come on in.", "Perfect, enjoy the night friend.", "Looks good to me. Enjoy.", "Great, thanks. This way.",
"Nice picture, man. Come in.", "May I say you look way younger? Enjoy, thanks."];

// negative answers

var negativeResponse = ["Sorry mate, can't come in wearing sandals.", "We both know this is fake. Out of the line.", "No ID no party, mate. Out of the line.",
 "Do you think shorts is the etiquette of this place? Out.", "I saw you cutting the line, mate. Out.", "Not today, pal. Out.", "You look quite drunk already. Out"];


// Who goes in and who doesn't

function comeIn(){
for (let i=0; i<groupOfFriends; i++){

  passOrNot();
  if (passOrNot() === "Yes"){
    counter+=1;
    alert(positiveResponse[randomNumForAnswer()]);

  } else {
    alert(negativeResponse[randomNumForAnswer()]);
  }
}
if (counter == 0) {
  alert("Ouch, you didn't get any of your friends inside. Maybe another day.");
} else if (counter == 1) {
  alert("Nice! You got " + counter + " friend inside! Time to party!");
} else {
alert("Nice! You got " + counter + " friends inside! Time to party!");
}
}



// Timeline
//window.setTimeout(changeBackgroundColor(), 60000);
setTimeout(function() {howManyAreYou();}, 1500);
setTimeout(function() {comeIn();}, 8000);
