//adding event listeners

const gridElemIds = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const gridElemValues = new Array(9);

const winningComnbinations = [
  //horizontals
  [0,1,2],
  [3,4,5],
  [6,7,8],

  //verticals
  [0,3,6],
  [1,4,7],
  [2,5,8],

  //diagonals
  [0,4,8],
  [2,4,6]
]
const minChanceCountForResult = 5;
const maxChanceCount = 9;

const players = {
  player1: {
    name: 'Player 1',
    value: 'X'
  },
  player2: {
    name: 'Player 2',
    value: 'O'
  }
};

let currentPlayer = players.player1;
let isGameActive = true;
let chanceCount = 0;
let winner = undefined;

gridElemIds.forEach(elem => {
  let cell = document.getElementById(`${elem}`);
  cell.onclick = function() {
    if (!isGameActive) {
      return;
    }
    if (isCellOccupied(cell.id)) {
      console.log(`Cell is already occupied with value ${gridElemValues[cell.id]}`);
      return;
    }
    cell.innerHTML = currentPlayer.value;
    if (currentPlayer === players.player1) {
      cell.classList.add('x');
      cell.classList.remove('o');
    } else {
      cell.classList.add('o');
      cell.classList.remove('x');
    }
    gridElemValues[cell.id] = currentPlayer.value;
    if (++chanceCount >= minChanceCountForResult && isWinner(currentPlayer)) {
      isGameActive = false;
      return;
    }
    if (chanceCount === maxChanceCount) {
      setTimeout(() => {
        window.alert(`Game tied. Reload page to start new game`);
      });
      isGameActive = false;
      return;
    }
    changePlayer();
  }
});

function changePlayer() {
  currentPlayer = currentPlayer === players.player1 ? players.player2 : players.player1;
}

function isCellOccupied(cellId) {
  return gridElemValues[cellId];
}

function isWinner(player) {
  playerWin = false;
  winningComnbinations.forEach((combination) => {
    if (playerWin) {
      return;
    }
    playerWin = true;
    combination.forEach(elemVal => {
      playerWin = playerWin && gridElemValues[elemVal] === player.value;
    });
  });
  if (playerWin) {
    setTimeout(() => {
      window.alert(`${player.name} wins!!. Reload page to start new game.`);
    });
  }
  return playerWin;
}