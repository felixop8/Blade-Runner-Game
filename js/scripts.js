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
  this.totalSuspicion;
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
