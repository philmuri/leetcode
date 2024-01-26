let gridSize = 15;
let numMines = 20;
let grid;
let timerInterval;
let timerValue = 0;
let isPaused = false;
let isFirstClick = false;
let upperMineLimit = document.getElementById('integerInput').max
upperMineLimit = gridSize ** 2

// Introduce button functionality
document.getElementById("start-button").addEventListener('click', startGame) // on click of start button, call startGame()
document.getElementById("pause-button").addEventListener('click', togglePause)
document.getElementById("restart-button").addEventListener('click', restartGame)
document.getElementById("mines-button").addEventListener('click', submitMineCount)


function submitMineCount(){
    if(timerValue > 0){ // this does not work as intended if you click submit within the first second
        alert("Changes will take effect when current game has ended.");
        return;
    }

    const inputElement = document.getElementById('integerInput');
    const enteredValue = parseInt(inputElement.value);

    if(isNaN(enteredValue) || enteredValue < 0 || enteredValue > upperMineLimit) {
        alert(`Mine count must be a number between 0 and ${upperMineLimit}`);
    } else {
        numMines = enteredValue;
    }
}

// Start game; generate and render grid
function startGame(){
    if(!grid){ // check if grid assigned yet
        grid = generateGrid(gridSize, numMines);
        renderGrid(grid);
    }

    if(!isFirstClick){
        startTimer();
        isFirstClick = false;
    }
}

// Start the timer
function startTimer(){
    timerInterval = setInterval(() => { // repeatedly call arrow function which has no arguments and updates the timer if game not paused
        if (!isPaused){ // only increment if not paused
            timerValue++
            updateTimerDisplay();
        }
    }, 1000); // update timer every second
}

// Update formatted timer in the html
function updateTimerDisplay(){
    const minutes = Math.floor(timerValue / 60);
    const seconds = timerValue % 60;
    document.getElementById("timer").textContent = `${formatTime(minutes)}:${formatTime(seconds)}` // formatted time string
}

function formatTime(value){
    return value < 10 ? `0${value}` : value; // format as digital clock
}

// tied to EventListener for click on pause button
function togglePause(){
    isPaused = !isPaused
    const pauseButton = document.getElementById("pause-button");

    if(isPaused){
        clearInterval(timerInterval);
        pauseButton.textContent = "Continue";
    }
    else{
        startTimer();
        pauseButton.textContent = "Pause";
    }
}

// Reset game state, incl. timer, pause state, firstclick state
function restartGame(){
    clearInterval(timerInterval);
    timerValue = 0;
    updateTimerDisplay() // set to 00:00
    isPaused = false;
    isFirstClick = true;
    document.getElementById("pause-button").textContent = `Pause`;
    document.getElementById("minesweeper-board").innerHTML = "";

    grid = generateGrid(gridSize, numMines);
    renderGrid(grid);
}

// Generate grid with mines. Returns grid matrix
function generateGrid(size, mines){
    const grid = Array.from({length: size}, () => // apparently this is how you create matrices in JavaScript... in this case with the iterable object as a length and applying an arrow function to iterable to generate the column with another from(), which then contains another arrow function to set the mine status, reveal status and neighboring mine status of the cell
    Array.from({length: size}, () => ({
        isMine: false, // initialize grid cell attributes
        isRevealed: false,
        neighborMines: 0,
    }))
    );

    // Generate mines
    for(let i = 0; i < mines; i++){
        let x, y;
        do{
            x = Math.floor(Math.random() * size);
            y = Math.floor(Math.random() * size);
        } while(grid[x][y].isMine); // Fill grid with mines until isMine = true
        
        grid[x][y].isMine = true; // update cell mine state 
    }

    // 
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            if(!grid[i][j].isMine){
                grid[i][j].neighborMines = countNeighborMines(grid, i, j);
            }
        }
    }

    return grid;
}

function countNeighborMines(grid, x, y){
    const directions = [ // define directions for cells surrounding current cell
        {dx: -1, dy: -1}, {dx: -1, dy: 0}, {dx: -1, dy: 1},
        {dx: 0, dy: -1}, {dx: 0, dy: 1},
        {dx: 1, dy: -1}, {dx: 1, dy: 0}, {dx: 1, dy: 1},
    ];

    let count = 0;
    for(const dir of directions){
        const newX = x + dir.dx;
        const newY = y + dir.dy;
        // below: while inside grid bounds add 1 to mine neighbor counter if their state isMine == true
        if(newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length){
            count += grid[newX][newY].isMine ? 1 : 0;
        }
    }

    return count;
}

function renderGrid(grid){
    const minesweeperGrid = document.getElementById("minesweeper-board");
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            const cell = document.createElement('div'); // create new div for individual cells
            cell.classList.add('cell'); // <div class="cell"></div>
            cell.dataset.row = i; // <div class="cell" data-row=""></div>
            cell.dataset.col = j;
            cell.addEventListener('click', () => handleCellClick(i,j));
            minesweeperGrid.appendChild(cell); // this adds the "cell" div as defined above, under the minesweeper-board div
        }
    }
}

function handleCellClick(x, y){
    if(isPaused){ // do nothing on click if paused
        return;
    }
    // Handle first click
    if(isFirstClick){
        startTimer();
        isFirstClick = false;
    }

    const cell = grid[x][y]; // since grid is initialized already by startGame(), the object is already defined at this stage and this assignment will work
    if(cell.isMine){ // Handle clicking on mine; mine reveal, game over message and restart possibility
        revealMines();
        setTimeout(() => {
            const restart = confirm("GAME OVER"); // opens a window with this text, an OK button and Cancel button
            if(restart){ // If OK pressed confirm() evaluates to True
                restartGame();
            }
        }, 100)
    }
    else{ // Handle clicking on safe cell
        revealCell(x, y);
    }
}

// Reveals cell with (colored) text on cell showing neighboring mines counter
function revealCell(x, y){
    const cell = grid[x][y];
    if(!cell.isRevealed){
        cell.isRevealed = true;
        // below: get the x, y cell element in the html
        const cellElement = document.querySelector(`.cell[data-row='${x}'][data-col='${y}']`);
        cellElement.classList.add('revealed');
        cellElement.textContent = cell.neighborMines || ""; // set text in revealed cell to neighbor count
        // Handle color of neighbor mine counter
        if(cell.neighborMines === 1){
            cellElement.classList.add('number1');
        }
        else if(cell.neighborMines === 2){
            cellElement.classList.add('number2');
        }
        else if(cell.neighborMines === 3){
            cellElement.classList.add('number3');
        }
        // Handle case of no neighboring mines, in which case minesweeper auto-reveals NEAREST neighboring cells
        if(cell.neighborMines === 0){
            const directions = [
                {dx: -1, dy: 0},
                {dx: 0, dy: -1}, {dx: 0, dy: 1},
                {dx: 1, dy: 0},
            ];

            for(const dir of directions){
                const newX = x + dir.dx;
                const newY = y + dir.dy;
                // Reveal neighbor cells inside the grid
                if(newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length){
                    revealCell(newX, newY);
                }
            }
        }
    }
}

function revealMines(){
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            const cell = grid[i][j];
            if(cell.isMine){
                const cellElement = document.querySelector(`.cell[data-row='${i}'][data-col='${j}']`);
                cellElement.classList.add('mine');
            }
        }
    }
}