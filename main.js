const board = document.querySelector('#my-canvas');
const context = board.getContext('2d');
const scoreText = document.querySelector('.score-text');
const restartButton = document.querySelector('.restart-button');
const boardWidth = board.width;
const boardHeight = board.height;
const boardBackgroundColor = 'rgb(195, 249, 195)';
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
            moveSnakeForward();
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


function moveSnakeForward() {

    //create a new head in the direction we are moving and then eliminate the tail
    const head = { x: snake[0].x + xVelocity, y: snake[0].y + yVelocity };
    //The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
    //const array1 = [1, 2, 3];
    //console.log(array1.unshift(4, 5));
    snake.unshift(head); //This adds this new object to the HEAD of the snake-array-of-objects


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