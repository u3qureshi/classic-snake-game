const board = document.querySelector('#my-canvas');
const context = board.getContext('2d');
const scoreText = document.querySelector('.score-text');
const restartButton = document.querySelector('.restart-button');
const boardWidth = board.width;
const boardHeight = board.height;
const boardBackgroundColor = 'rgba(157, 243, 157, 0.6)';
const snakeColor = 'darkgreen';
const snakeBorderColor = 'white';
const foodColor = 'rgb(163, 127, 127)';
const foodBorderColor = 'darkred';
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodXCoordinate;
let foodYCoordinate;
let score = 0;
//Snake is an array of objects. Each snake segment is an object containing x and y coordinates.
let snake = [
    { x: 0, y: 0 },
    { x: unitSize * 1, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 5, y: 0 }
];

window.addEventListener('keydown', changeDirection);
restartButton.addEventListener('click', restartGame);

initializeGame();

function initializeGame() {

    running = true;
    scoreText.innerText = `SCORE: ${score}`;
    createFood();
    drawFood();
    nextTick();
}

function nextTick() {

    if (running) {
        setTimeout(() => {
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 100);
    } else
        displayGameOver();
}

function clearBoard() {

    context.fillStyle = boardBackgroundColor;
    context.fillRect(0, 0, boardWidth, boardHeight);
}

function createFood() {

    function randomFood(min, max) {
        const randomNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randomNum;
    }
    foodXCoordinate = randomFood(0, boardWidth - unitSize);
    foodYCoordinate = randomFood(0, boardWidth - unitSize);

}

function drawFood() {

    drawBorder(foodXCoordinate, foodYCoordinate, unitSize, unitSize);
    context.fillStyle = foodColor;
    context.fillRect(foodXCoordinate, foodYCoordinate, unitSize, unitSize);

}

function drawBorder(x, y, width, height) {
    thickness = 3;
    context.fillStyle = foodBorderColor;
    context.fillRect(x - (thickness), y - (thickness), width + (thickness * 2), height + (thickness * 2));

}


function moveSnake() {

    //create a new head in the direction we are moving and then eliminate the tail

}

function drawSnake() {

    context.fillStyle = snakeColor;
    context.strokeStyle = snakeBorderColor;
    snake.forEach(snakeSegment => {
        context.fillRect(snakeSegment.x, snakeSegment.y, unitSize, unitSize);
        context.strokeRect(snakeSegment.x, snakeSegment.y, unitSize, unitSize);

    });
}

function changeDirection() {

}

function checkGameOver() {

}

function displayGameOver() {

}

function restartGame() {

}