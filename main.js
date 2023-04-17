let board = document.querySelector("#board");
let colNumber = document.querySelector("#colNumberOutput");
let startGameBtn = document.querySelector("#StartGame");

let game = new Game(board, colNumber);
game.startGame();

board.addEventListener("click", function (e) {
    let clickedCard = e.target.connectedCard;
    if (clickedCard) {
        game.selectCard(clickedCard);
    }
});

startGameBtn.addEventListener("click", function () {
    game.startGame();
});