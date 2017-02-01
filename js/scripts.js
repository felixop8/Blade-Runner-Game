var calfQuestion = new Question();

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
  this.feelingMenu = ["anger","anxiety","disgust","sadness","fear"];
  this.toneMenu = ["distant","worried","rude","agitated","unsure"];
  this.intensityMenu = ["animated","focused","subdued","reserved","distracted"];
  this.correctfeeling;
  this.correcttone;
  this.correctintensity;
  this.roundSuspicion =0;
  this.totalSuspicion =0;
  this.turnCounter =0;
  // this.plays = [];
  this.questions = [turtleQuestion];
}


var testPlay = new Play("anxiety","worried","focused");
var turtleQuestion = new Question();
turtleQuestion = {
  feelingMenu: ["anger","anxiety","disgust"],
  toneMenu: ["distant","worried","rude"],
  intensityMenu: ["animated","focused","subdued"],
  questionsText: ["You're in a desert walking along the sand when all of a sudden you look down and you see a tortoise. It's crawling towards you. You reach down and you flip the tortoise on it's back. The tortoise lays on it's back, it's belly baking in the hot sun, it's legs trying to turn itself over but it can't, not without your help...but you're not helping. Why is that?", "Your response was unclear, wanna try that again?", "I'm still not sure you understand the question. Please rephrase.", "You're really not getting this, are you? Try one more time.", "Okay. Don't worry, they're just questions. Give it one more shot ahd we'll move on."],
};
var globalGame = new Game();




Game.prototype.newQuestion = function (question) {
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
  // this.plays.push(play);
  if (play.suspicion === 0) {
    $("#player-win-well").show();
  };
  if (this.roundSuspicion >= 20) {
    $("#player-lose-well").show();
  };
  this.turnCounter +=1;
};

Game.prototype.playDisplay = function(play) {
  $('#feeling-answer-group').removeClass("pulse-green pulse-yellow pulse-red");
  $('#tone-answer-group').removeClass("pulse-green pulse-yellow pulse-red");
  $('#intensity-answer-group').removeClass("pulse-green pulse-yellow pulse-red");
  $('.turn-suspicion').text(play.suspicion);
  $('.round-suspicion').text(this.roundSuspicion);
  $('.color-feeling').text(play.feelingColor);
  $('.color-tone').text(play.toneColor);
  $('.color-intensity').text(play.intensityColor);
  var counter = this.turnCounter;
  console.log(counter);
  $("#question-text-field").text(globalGame.questions[0]["questionsText"][counter]);
  // $('#feeling-answer-group').addClass("pulse-"+play["feelingColor"]);
  // $('#tone-answer-group').addClass("pulse-"+play["toneColor"]);
  // $('#intensity-answer-group').addClass("pulse-"+play["intensityColor"]);
};

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
    $("#answer-well-easy").show();
    $("#answer-well-medium").hide();
    $("#answer-well-hard").hide();
  });
  $("#medium-button").click(function(){
    $("#answer-well-easy").hide();
    $("#answer-well-medium").show();
    $("#answer-well-hard").hide();
  });
  $("#hard-button").click(function(){
    $("#answer-well-easy").hide();
    $("#answer-well-medium").hide();
    $("#answer-well-hard").show();
  });

  $("#new-game-button").click(function() {
    $("#question-text-field").append(globalGame.questions[0]["questionsText"][0]);

    console.log(globalGame.questions[0]["questionsText"][0])
  });

  $('.play-again').click(function() {
    location.reload();
  });

});
