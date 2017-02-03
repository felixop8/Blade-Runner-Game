function Play(feeling,tone,intensity) {
  this.feeling = feeling;
  this.tone= tone;
  this.intensity = intensity;
  this.suspicion = 0;
  this.feelingColor;
  this.toneColor;
  this.intensityColor;
}

function Question(){
  this.feelingMenu;
  this.toneMenu;
  this.intensityMenu;
  this.questionsText;
  this.followUp;
}


function Game() {
  this.difficulty = "easy";
  this.feelingMenu = ["anger","anxiety","disgust","sadness","fear"];
  this.toneMenu = ["distant","worried","rude","agitated","unsure"];
  this.intensityMenu = ["animated","focused","subdued","reserved","distracted"];
  this.correctfeeling;
  this.correcttone;
  this.correctintensity;
  this.roundSuspicion=0;
  this.totalSuspicion=0;
  this.turnCounter=0;
  this.wins=0;
  this.losses=0;
  // this.plays = [];
  this.questions = questionArray;
}


// emotion groups (Anger,Rude,Animated) (Anxiety,Worried,Distracted) (Disgust,Distant,reserved) (Fear,Agitated,Focused) (Sadness,Unsure,Subdued)
var testPlay = new Play("anxiety","worried","focused");
var turtleQuestion = new Question();
turtleQuestion = {
  feelingMenu: ["anger","disgust","sadness"],
  toneMenu: ["distant","rude","unsure"],
  intensityMenu: ["animated","subdued","reserved"],
  questionsText: ["You're in a desert walking along the sand when all of a sudden you look down and you see a tortoise. It's crawling towards you. You reach down and you flip the tortoise on it's back. The tortoise lays on it's back, it's belly baking in the hot sun, it's legs trying to turn itself over but it can't, not without your help...but you're not helping. Why is that?", "Your response was unclear, wanna try that again?", "I'm still not sure you understand the question. Please rephrase.", "You're really not getting this, are you? Try one more time.", "Okay. Don't worry, they're just questions. Give it one more shot ahd we'll move on."],
};
var calfQuestion =  new Question()
calfQuestion= {
  feelingMenu: ["disgust","sadness","fear"],
  toneMenu: ["distant","agitated","unsure"],
  intensityMenu: ["focused","subdued","reserved"],
  questionsText: ["It's your birthday. Someone gives you a calf skinned wallet. How does that make you feel?", "Your response was unclear, wanna try that again?", "I'm still not sure you understand the question. Please rephrase.", "You're really not getting this, are you? Try one more time.", "Okay. Don't worry, they're just questions. Give it one more shot ahd we'll move on."],
};
var waspQuestion =  new Question()
waspQuestion= {
  feelingMenu: ["anger","sadness","fear"],
  toneMenu: ["rude","agitated","unsure"],
  intensityMenu: ["animated","focused","subdued"],
  questionsText: ["You are watching television. You suddenly realize there's a wasp crawling up your arm. You crush it. How do you feel?", "Your response was unclear, wanna try that again?", "I'm still not sure you understand the question. Please rephrase.", "You're really not getting this, are you? Try one more time.", "Okay. Don't worry, they're just questions. Give it one more shot ahd we'll move on."],
};
var dogQuestion =  new Question()
dogQuestion= {
  feelingMenu: ["anxiety","disgust","sadness"],
  toneMenu: ["distant","worried","unsure"],
  intensityMenu: ["subdued","reserved","distracted"],
  questionsText: ["You're watching a stage play. A banquet is in progress. The guests are enjoying an appetizer of raw oysters. The entree consists of boiled dog.", "Your response was unclear, wanna try that again?", "I'm still not sure you understand the question. Please rephrase.", "You're really not getting this, are you? Try one more time.", "Okay. Don't worry, they're just questions. Give it one more shot ahd we'll move on."],
};
var butterflyQuestion =  new Question()
butterflyQuestion= {
  feelingMenu: ["anger","anxiety","sadness"],
  toneMenu: ["worried","rude","unsure"],
  intensityMenu: ["animated","subdued","distracted"],
  questionsText: ["You have a son. He shows you his butterfly collection, including the killing jar. How does this make you feel?", "Your response was unclear, wanna try that again?", "I'm still not sure you understand the question. Please rephrase.", "You're really not getting this, are you? Try one more time.", "Okay. Don't worry, they're just questions. Give it one more shot ahd we'll move on."],
};
var questionArray = [turtleQuestion,calfQuestion,waspQuestion,dogQuestion,butterflyQuestion];
var globalGame = new Game();


Game.prototype.newQuestion = function (question) {
    this.turnCounter =0;
    this.correctfeeling = question["feelingMenu"][Math.floor(Math.random()*3)];
    this.correcttone = question["toneMenu"][Math.floor(Math.random()*3)];
    this.correctintensity= question["intensityMenu"][Math.floor(Math.random()*3)];
};


Play.prototype.scorePlay = function () {
  var categories = ["feeling","tone","intensity"];
  for (n=0;n<3;n++){
    var category = categories[n]
    var answerIndex = globalGame[category+"Menu"].indexOf(this[category]);
    var correctIndex = globalGame[category+"Menu"].indexOf(globalGame["correct"+category]);
    var difference = Math.abs(answerIndex-correctIndex);
    if (difference === 3 || difference === 2){
      this.suspicion += 2;
      this[category + "Color"] = "red"
    } else if (difference === 4 || difference === 1) {
      this.suspicion += 1;
      this[category + "Color"] = "yellow";
    } else {
      this[category + "Color"] = "green";
    };
  };
};

Game.prototype.endTurn = function(play) {
  this.roundSuspicion += play.suspicion;
  this.turnCounter +=1;
  // check round win
  if (play.suspicion === 0) {
    $("#player-win-round-well").show();
    setTimeout(function() {
      $("#player-win-round-well").fadeOut(500);
    }, 2000);
    this.wins +=1;
    this.roundSuspicion =0;
    globalGame.newQuestion(this.questions[this.wins+this.losses]);
  } else if (this.roundSuspicion >= 20) {
    $("#player-lose-round-well").show();
    setTimeout(function() {
      $("#player-lose-round-well").fadeOut(500);
    }, 2000);
    this.losses +=1;
    this.roundSuspicion =0;
    globalGame.newQuestion(this.questions[this.wins+this.losses]);
  }
  // check global win
  if (this.wins >= 3) {
    $("#player-win-game-well").show();
  } else if (this.losses >= 3) {
    $("#player-lose-game-well").show();
  }
};

Game.prototype.playDisplay = function(play) {
  $('.turn-suspicion').text(play.suspicion);
  $('.round-suspicion').text(this.roundSuspicion);
  if (this.difficulty === "easy"){
    colorTriangles(play.feelingColor,play.toneColor,play.intensityColor);
  } else if (this.difficulty === "medium") {
    var colorArray =[play.feelingColor,play.toneColor,play.intensityColor];
    colorArray = randomizeArray(colorArray);
    colorTriangles(colorArray[0],colorArray[1],colorArray[2]);
  }
  if (this.roundSuspicion === 0) {
    colorTriangles();
  }
  var turncounter = this.turnCounter;
  var roundcounter = this.wins + this.losses;
  $("#question-text-field").text(globalGame.questions[roundcounter]["questionsText"][turncounter]);
};

var randomizeArray = function(array) {
  var container =[];
  for (i=0;array.length>i;){
    var randoNumber = Math.floor(Math.random()*array.length);
    var moveElement = array[randoNumber];
    container.push(moveElement);
    array.splice(randoNumber,1);
  }
  return container;
};


var colorTriangles = function(feelingColor,toneColor,intensityColor) {
  // remove classes
  var classesToRemove = "triangle-bottom-red triangle-bottom-yellow triangle-bottom-green triangle-top-green triangle-top-yellow triangle-top-red "
  $(".triangle-bottom").removeClass(classesToRemove);
  $(".triangle-top-left").removeClass(classesToRemove);
  $(".triangle-top-right").removeClass(classesToRemove);
  $(".triangle-bottom-left").removeClass(classesToRemove);
  $(".triangle-bottom-right").removeClass(classesToRemove);
  // color feeling pentagon
  $("#feelingPentagon .triangle-bottom").addClass("triangle-bottom-" +feelingColor);
  $("#feelingPentagon .triangle-bottom-left").addClass("triangle-top-" +feelingColor);
  $("#feelingPentagon .triangle-bottom-right").addClass("triangle-top-" +feelingColor);
  $("#feelingPentagon .triangle-top-right").addClass("triangle-bottom-" +feelingColor);
  $("#feelingPentagon .triangle-top-left").addClass("triangle-bottom-" +feelingColor);
  // color tone pentagon
  $("#tonePentagon .triangle-bottom").addClass("triangle-bottom-" +toneColor);
  $("#tonePentagon .triangle-bottom-left").addClass("triangle-top-" +toneColor);
  $("#tonePentagon .triangle-bottom-right").addClass("triangle-top-" +toneColor);
  $("#tonePentagon .triangle-top-right").addClass("triangle-bottom-" +toneColor);
  $("#tonePentagon .triangle-top-left").addClass("triangle-bottom-" +toneColor);
  // color intensity pentagon
  $("#intensityPentagon .triangle-bottom").addClass("triangle-bottom-" +intensityColor);
  $("#intensityPentagon .triangle-bottom-left").addClass("triangle-top-" +intensityColor);
  $("#intensityPentagon .triangle-bottom-right").addClass("triangle-top-" +intensityColor);
  $("#intensityPentagon .triangle-top-right").addClass("triangle-bottom-" +intensityColor);
  $("#intensityPentagon .triangle-top-left").addClass("triangle-bottom-" +intensityColor);

};



globalGame.questions = randomizeArray(globalGame.questions);
globalGame.newQuestion(globalGame.questions[0]);

$(document).ready(function(){
  $("form#user-input-form").submit(function(event){
    event.preventDefault();
    var feeling = $("input:radio[name=feeling-group]:checked").val();
    var tone = $("input:radio[name=tone-group]:checked").val();
    var intensity = $("input:radio[name=intensity-group]:checked").val();
    var thisPlay = new Play(feeling,tone,intensity);
    thisPlay.scorePlay();
    globalGame.endTurn(thisPlay);
    console.log(thisPlay);
    globalGame.playDisplay(thisPlay);
  });

  $("#easy-button").click(function(){
    globalGame.difficulty = "easy";

  });
  $("#medium-button").click(function(){
    globalGame.difficulty = "medium";
  });
  $("#hard-button").click(function(){
    globalGame.difficulty = "hard";

  });

  $("#showTutorial").click(function(){
    console.log("hello");
    $("#tutorial").toggle();
    $("#tutorial").addClass("tutorial-visible");

  });

  $("#show-tutorial-initiate-well").click(function(){
    console.log("hello");
    $("#tutorial").toggle();
    $("#tutorial").addClass("tutorial-visible");

  });

  $("#hideTutorial").click(function(){
    console.log("hello");
    $("#tutorial").toggle();

  });




  $("#new-game-button").click(function() {
    $("#initiate-game").hide();
    $("#interviewer-question-well").show();
    $("#user-input-row").show();
    $("#restart-game").show();
    $(".submit-button").show();
    $("#answer-well").show();
    $("#tutorial-reset").show();
    globalGame.questions = randomizeArray(globalGame.questions);
    $("#question-text-field").append(globalGame.questions[0]["questionsText"][0]);
  });

  $('.play-again').click(function() {
    location.reload();
  });


});
