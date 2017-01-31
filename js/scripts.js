function Play(feeling,tone,intensity) {
  this.feeling = feeling;
  this.tone= tone;
  this.intensity = intensity;
  this.suspicion = 0;
  this.feelingColor;
  this.toneColor;
  this.intensityColor;
}

function Game() {
  this.feelingMenu = ["anger","anxiety","disgust","sadness","fear"];
  this.toneMenu = ["distant","worried","rude","agitated","unsure"];
  this.intensityMenu = ["animated","focused","subdued","reserved","distracted"];
  this.correctfeeling = this["feelingMenu"][Math.floor(Math.random()*5)];
  this.correcttone = this["toneMenu"][Math.floor(Math.random()*5)];
  this.correctintensity = this["intensityMenu"][Math.floor(Math.random()*5)];
  this.totalSuspicion =0;
  this.plays = [];
}
var globalGame = new Game();
var testPlay = new Play("anxiety","worried","focused");


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
  this.totalSuspicion += play.suspicion;
  this.plays.push(play);
  if (play.suspicion === 0) {
    $("#player-win-well").show();
  };
  if (this.totalSuspicion >= 20) {
    $("#player-lose-well").show();
  };
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
    $('.round-suspicion').text(thisPlay.suspicion);
    $('.total-suspicion').text(globalGame.totalSuspicion);
    $('.color-feeling').text(thisPlay.feelingColor);
    $('.color-tone').text(thisPlay.toneColor);
    $('.color-intensity').text(thisPlay.intensityColor);
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

  $('.play-again').click(function() {
    location.reload();
  });

});
