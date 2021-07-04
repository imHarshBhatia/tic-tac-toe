//adding event listeners

const gridElems = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let player1 = 'X';
let player2 = '0';

let currentPlayer = player1;

gridElems.forEach(elem => {
  let cell = document.getElementById(`${elem}`);
  cell.onclick = function() {
    cell.innerHTML = currentPlayer;
    if (currentPlayer === 'X') {
      cell.classList.add('x');
      cell.classList.remove('o');
    } else {
      cell.classList.add('o');
      cell.classList.remove('x');
    }
    changePlayer();
  }
});

function changePlayer() {
  currentPlayer = currentPlayer === 'X' ? player2 : player1;
}