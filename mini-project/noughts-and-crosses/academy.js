
// Make your changes to store and update game state in this file

let board = [[null, null, null], [null, null, null], [null, null, null]]

function getNewBoard() {
    return [[null, null, null], [null, null, null], [null, null, null]];
}
let naughtsTurn = true

// Take the row and column number between 0 and 2
// (inclusive) and update the game state.
function takeTurn(row, column) {
    console.log("takeTurn was called with row: " + row + ", column:" + column);
    console.log(`takeTurn was called with row: ${row}, column: ${column}`);
    console.log(naughtsTurn);
    let cellText = "";
    if (!document.getElementById(`row-${row}-column-${column}`).innerText)
    {

    if  (naughtsTurn)
    {
        cellText = "⭕" ;
        naughtsTurn = false;
    }
    else
    {
        cellText = "❌";
        naughtsTurn = true;
    }
    
    document.getElementById(`row-${row}-column-${column}`).innerText = cellText;
    }
    else
    {
        //do nothing as square already populated
    }
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");
    return null;
    let
}




// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called");
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    
    //from clearboard
    /*
    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
          let val   = document.getElementById(`row-${rowIndex}-column-${columnIndex}`).innerHTML
          console.log(val);
        }
    }
    */
    //question - how do I populate the 9 values from the loop
    return [board];
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}


/*

// Make your changes to store and update game state in this file


let board = [[null, null, null], [null, null, null], [null, null, null]]

function getNewBoard() {
    return [[null, null, null], [null, null, null], [null, null, null]];
}
let naughtsTurn = true

// Take the row and column number between 0 and 2
// (inclusive) and update the game state.
function takeTurn(row, column) {
    console.log(board[row][column])
    let currentSquare = board[row][column]
    // const resulted in a faillure so have changed to let.
    if(currentSquare === null && naughtsTurn === true) {
        // if the current square is null, and its naughts turn then display a naught
    (currentSquare) = "naught"
    naughtsTurn = false
     } else if (currentSquare===null && naughtsTurn === false){
        currentSquare = "cross"
        naughtsTurn = true
     }
   
    for (const row of board) {
        for (const columnCell of row) {
            // we don't want to print all of the sqaure, we just want tp print the column we are in - 
            // change this to be print current sqaure where clicked so i chnaged it from console.log(columnCell) to the example below. 
            console.log("takeTurn was called with row: " + row + ", column:" + column);
        }
    }
    
    // if current square = null then can move 

    
    console.log(`takeTurn was called with row: ${row}, column: ${column}`);
}

function getBoard() {
    console.log("getBoard was called");
    return [[null, null, null], [null, null, null], [null, null, null]];
}
// now we need to create a function which puts a pointer
// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {

    console.log("checkWinner was called");
    return null;

}
// could still use the onlickj function? we need to figure out how to bring this back from the 
// 


// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called");
    board = getNewBoard()
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet. 
// use object on click?

// need to find a way to call this data - could use on click, events management 
function drawBoard(board) {
    console.log("drawBoard")
    clearBoard();
    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
            if (!board[rowIndex][columnIndex]) {
                continue;
            }
            const cellText = board[rowIndex][columnIndex] === "nought" ? "⭕" : "❌";
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).innerText = cellText;
        }
    }
    return board ;
}
    

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
*/
