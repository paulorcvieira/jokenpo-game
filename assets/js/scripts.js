var playerName = "";
var cpuName = "CPU";
var playerPoints = 0;
var playerChoice = 0;
var cpuPoints = 0;
var cpuChoice = 0;

playerName = prompt('What`s your name?');
document.getElementById('message').innerHTML = 'Welcome ' + playerName + ', are you ready? choose an option above!';
definePlayerName(playerName);

function definePlayerName(name) {
  document.getElementById('player-name').innerHTML = name;
}

document.getElementById('player-points').innerHTML = playerPoints;
document.getElementById('cpu-name').innerHTML = cpuName;
document.getElementById('cpu-points').innerHTML = cpuPoints;

function message(text) {
  document.getElementById('message').innerHTML = text;
}

// Draw between two numbers
function draw(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 0 -> Tied
// 1 -> Player
// 2 -> CPU
function calcWinner(player, cpu) {

  if(player == 1 && cpu ==1){
    return 0;
  }
  else if(player == 1 && cpu == 2) {
    return 2;
  }
  else if(player == 1 && cpu == 3) {
    return 1;
  }
  else if(player == 2 && cpu == 1) {
    return 1;
  }
  else if(player == 2 && cpu == 2) {
    return 0;
  }
  else if(player == 2 && cpu == 3) {
    return 2;
  }
  else if(player == 3 && cpu == 1) {
    return 1;
  }
  else if(player == 3 && cpu == 2) {
    return 0;
  }
  else if(player == 3 && cpu == 3) {
    return 0;
  }

}

function playerScore() {
  playerPoints++;
  document.getElementById('player-points').innerHTML = playerPoints;
}

function cpuScore() {
  cpuPoints++;
  document.getElementById('cpu-points').innerHTML = cpuPoints;
}

function selected(type, option) {
  document.getElementById(type + '-choice-' + option).classList.add('selected');
}

function unselected(type, option) {
  document.getElementById(type + '-choice-' + option).classList.remove('selected');
}

// Choice
//  1 -> Rock
//  2 -> Paper
//  3 -> Scissors
function play(choice) {
  playerChoice = choice;
  selected('player', playerChoice)

  cpuChoice = draw(1, 3);
  selected('cpu', cpuChoice)

  var winner = calcWinner(playerChoice, cpuChoice);

  if(winner == 0) {
    message('*** Tied! Try again! 😒 ***');
  }
  else if(winner == 1) {
    message('*** '+ playerName +' is winner! 😎 ***');
    playerScore();
  }
  else if(winner == 2) {
    message('*** CPU is winner! 😥 ***');
    cpuScore();
  }

  setTimeout(() => {
    unselected('player', playerChoice);
    unselected('cpu', cpuChoice);
    message(playerName + '! try your luck again!')
  }, 3000)

}

document.getElementById('player-choice-1').onclick = function() {
  play(1);
};
document.getElementById('player-choice-2').onclick = function() {
  play(2);
};
document.getElementById('player-choice-3').onclick = function() {
  play(3);
};