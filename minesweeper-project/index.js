let gridSize = 10;
let numMines = 20;
let grid;
let timerInterval;
let timerValue = 0;
let isPaused = false;
let isFirstClick = false;

document.getElementById("start-button").addEventListener('click', startGame) // on click of start button, call startGame()
document.getElementById("pause-button").addEventListener('click', togglePause)
document.getElementById("restart-button").addEventListener('click', restartGame)

function startGame(){
    if(!grid){ // check if grid assigned yet
        grid = generateGrid(gridSize, numMines);
        renderGrid(grid);
    }

    if(isFirstClick){
        startTimer();
        isFirstClick = false;
    }
}

function startTimer(){
    timerInterval = setInterval(() => { // repeatedly call arrow function which has no arguments and updates the timer if game not paused
        if (isPaused == false){
            timerValue++
            updateTimerDisplay();
        }
    }, 1000); // update timer every second
    
}


// generateGrid();

// For now, 10x10 for grid size (later maybe add option to change this)
function generateGrid(){
    grid.innerHTML = "";
    for(var i = 0; i < 10; i++){
        row = grid.insertRow(i);
        for(var j = 0; j < 10, j++){
            cell = row.insertCell(j);
            cell.onclick = function(){init(this);}; // ?
            var mine = document.createAttribute("mine")
            mine.value = false;
            cell.setAttributeNode(mine);
        }
    }
    generateMines();
}

// For now, 20 mines will spawn
function generateMines(){
    for(var i = 0; i < 20; i++){
        var mineRow = Math.floor(Math.random() * 10);
        var mineCol = Math.floor(Math.random() * 10);
        var cell = grid.rows[mineRow].cells[mineCol]; // place mine in this cell
        cell.setAttribute("mine", "true");
    }
}

function revealMines(){
    for(var i = 0; i < 10; i++){
        for(var j = 0; j < 10; j++){
            var cell = grid.rows[i].cells[j]
            // ...
        }
    }
}