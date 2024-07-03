const cells = document.querySelectorAll('.cell');
const restartButton = document.querySelector('.restart').addEventListener('click', restartGame);
const winCombinations = [
    [1,2,3],[4,5,6],[7,8,9],    // row
    [1,4,7],[2,5,8],[3,6,9],    // column
    [1,5,9],[3,5,7]             // diagonal

];

let currentPlayer = 'X';
let moves = 0;

let cellIdX = [];
let cellIdO = [];

cells.forEach((e) => e.addEventListener('click', () => {
    if (e.classList.contains('X') || e.classList.contains('O')) {
        alert('Сell occupied')
        currentPlayer === 'X'
        ? currentPlayer = 'O'
        : currentPlayer = 'X';
    }
    else {
        e.classList.add(currentPlayer);
        moves++
        currentPlayer === 'X' ? cellIdX.push(parseInt(e.id)) : cellIdO.push(parseInt(e.id))
    };

    
    currentPlayer === 'X'
    ? currentPlayer = 'O'
    : currentPlayer = 'X';
    if (moves === 9) {
        setTimeout(function() {
            alert('Draw')
            restartGame();
            document.querySelector('#statD').textContent++
        }, 300);
    }
    document.querySelector('.turn').innerHTML = `move: ${currentPlayer}`;

    console.log(cellIdX)
    console.log(cellIdO)
    
    if (checkWinner(cellIdX)) {
        setTimeout(function() {
            alert('win: X')
            document.querySelector('#statX').textContent++
            setTimeout(restartGame, 150);
        }, 300);
    }
    if (checkWinner(cellIdO)) {
        setTimeout(function() {
            alert('win: O')
            document.querySelector('#statO').textContent++
            restartGame();
        }, 300);
    }
}));

function checkWinner(data) {
    for (let i = 0; i < winCombinations.length; i++) {
        let combination = winCombinations[i];
        if (combination.every(num =>data.includes(num))) { return true; } 
    } 
    return false; 
};

function restartGame() {
    cells.forEach((e) => e.classList.remove('X', 'O'));
    moves = 0;
    currentPlayer = 'X';
    document.querySelector('.turn').innerHTML = `move: X`;
    cellIdX = [];
    cellIdO = [];
};