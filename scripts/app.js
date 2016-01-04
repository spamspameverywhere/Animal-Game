"use strict";

/**********
Constructor
**********/

function Animal(aquatic, mammalia, chordata, carnivore, likeliness, animalName) {
  this.aquatic = aquatic;
  this.mammalia = mammalia;
  this.chordata = chordata;
  this.carnivore = carnivore;
  this.likeliness = likeliness;
  this.animalName = animalName
};

/**********
Global variables
**********/

var animalArr = [];

var jellyfish = new Animal(true, false, false, false, 0, "jellyfish");

var octopus = new Animal(true, false, false, true, 0, "octopus");

var shark = new Animal(true, false, true, true, 0, "shark");

var whale = new Animal(true, true, true, false, 0, "whale");

var worm = new Animal(false, false, false, false, 0, "worm");

var alligator = new Animal(false, false, true, true, 0, "alligator");

var deer = new Animal(false, true, true, false, 0, "deer");

var dog = new Animal(false, true, true, true, 0, "dog");

var computerQBank = [
  "Does the animal live in the sea?",
  "Is the animal a mammal?",
  "Is the animal chordate?",
  "Is the animal a carnivore?"
];

var qTicker = 0;

var computerAnswer = "";

/**********
Functionality
**********/

function startGame(onclick) {
  $("#startGame").hide();
  var fullArray = animalArr.push(jellyfish, octopus, shark, whale, worm, alligator, deer, dog);
  $("#reader").append("Player, choose an animal: <br>");
  for (var i = 0; i < animalArr.length; i++) {
    $("#reader").append(animalArr[i].animalName + "<br>");
  }
  $("#reader").show();
  $("#gotIt").show();
};

function animalChosen(onclick) {
  $("#reader").detach();
  $("#gotIt").detach();
  computerAsks();
};

function computerAsks() {
  $("#computerQs").append(computerQBank[qTicker]);
  $("#playerAs").show();
};

$("#isTrue").click(function() {
  switch(qTicker) {
    case 0: for (var i = 0; i < animalArr.length; i++) {
      if (animalArr[i].aquatic === true) {
        animalArr[i].likeliness += 1;
      } else {
        animalArr[i].likeliness -= 1;
      }
    };
    break;

    case 1: for (var i = 0; i < animalArr.length; i++) {
      if (animalArr[i].mammalia === true) {
        animalArr[i].likeliness += 1;
      } else {
        animalArr[i].likeliness -= 1;
      }
    };
    break;

    case 2: for (var i = 0; i < animalArr.length; i++) {
      if (animalArr[i].chordata === true) {
        animalArr[i].likeliness += 1;
      } else {
        animalArr[i].likeliness -= 1;
      }
    };
    break;

    case 3: for (var i = 0; i < animalArr.length; i++) {
      if (animalArr[i].carnivore === true) {
        animalArr[i].likeliness += 1;
      } else {
        animalArr[i].likeliness -= 1;
      }
    };
    break;

    default: console.log("problems");
  };
  qTicker++;
  $("#computerQs").text("");
  if (qTicker === computerQBank.length) {
    gameEnd();
  } else {
    computerAsks();
  }
});


$("#isFalse").click(function() {
  switch(qTicker) {
    case 0: for (var i = 0; i < animalArr.length; i++) {
      if (animalArr[i].aquatic === false) {
        animalArr[i].likeliness += 1;
      } else {
        animalArr[i].likeliness -= 1;
      }
    };
    break;

    case 1: for (var i = 0; i < animalArr.length; i++) {
      if (animalArr[i].mammalia === false) {
        animalArr[i].likeliness += 1;
      } else {
        animalArr[i].likeliness -= 1;
      }
    };
    break;

    case 2: for (var i = 0; i < animalArr.length; i++) {
      if (animalArr[i].chordata === false) {
        animalArr[i].likeliness += 1;
      } else {
        animalArr[i].likeliness -= 1;
      }
    };
    break;

    case 3: for (var i = 0; i < animalArr.length; i++) {
      if (animalArr[i].carnivore === false) {
        animalArr[i].likeliness += 1;
      } else {
        animalArr[i].likeliness -= 1;
      }
    };
    break;

    default: console.log("problems");
  };
  qTicker++;
  $("#computerQs").text("");
  if (qTicker === computerQBank.length) {
    gameEnd();
  } else {
    computerAsks();
  }
});

function gameEnd() {
  var sortAnimals = animalArr.sort(function(a, b) {
    if (a.likeliness < b.likeliness) return -1;
    if (a.likeliness > b.likeliness) return 1;
    return 0;
  });
  computerAnswer += sortAnimals[sortAnimals.length - 1].animalName;
  $("#computerQs").append(computerAnswer);
};
