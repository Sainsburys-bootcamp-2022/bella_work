let board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]

let redturn = true

// Take the row and column number between 0 and 2
// (inclusive) and update the game state.
function takeTurn(row, column) {
    console.log(`takeTurn was called with row: ${row}, column: ${column}`);
    console.log(redturn);
    console.log('row is ', row)
    console.log('column is ', column)

    if (board[row][column] === null && redturn === true){
        board[row][column] = "red"
        redturn = false
    } else if (board[row][column]=== null) {
        board[row][column] = "yellow"
        redturn = true
    }
    else {
        alert ('this space is taken')
    }

   
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.


function checkWinner() {
    const horizontalWinner = checkHorizontalWinner()
    const verticalWinner = checkVerticalWinner ()
    const diagonalWinner = checkDiagonalWinner ()
    
    if(horizontalWinner) {
        return horizontalWinner
    } else if (verticalWinner) {
        return verticalWinner
    } else if (diagonalWinner) {
        return diagonalWinner
    } else {
        return null
    }
}
 
    

const checkHorizontalWinner = () => {
    for(row =0; row <6;  row++){
console.log('check row equals ', checkMatchingRow(row))
        if (checkMatchingRow(row)) {
            console.log('check row equals ', checkMatchingRow(row))
            if(noughtsTurn === false) {
                return "red"
            } else {
                return "yellow"
            }
        }
    }
}


const checkMatchingRow = (row) => {
    const firstColumn = board[row][0]
    const secondColumn = board[row][1]
    const thirdColumn = board[row][2]
    
    return firstColumn === secondColumn && firstColumn === thirdColumn && firstColumn !==null
}

const checkVerticalWinner = () => {
    for(column =0; column <7; column ++){
        console.log('check column equals ', checkMatchingColumn(column))

        if (checkMatchingColumn(column)) {
            console.log('check column equals ', checkMatchingColumn(column))
           
            if(redturn === false) {
                return "red"
            } else {
                return "yellow"
            }
        }
    }
}

const checkMatchingColumn = (column) => {
    const firstRow = board [0][column]
    const secondRow = board[1][column]
    const thirdRow = board[2][column]
    
    return firstRow === secondRow && firstRow === thirdRow && firstRow !==null
}



const checkDiagonalWinner = () => {
    
    if (checkMatchingDiagonal()) {
        if(redturn === false)  { 
            return "red"
        } else {
            return "yellow" 
        }
    }
}

const checkMatchingDiagonal = () => {

    const firstRow = board[0][0] // || board[2][0]
    const secondRow = board[1][1]
    const thirdRow = board[2][2] // || board [0][2]
    const fourthRow = board[0][2]
    const fifthRow = board[1][1]
    const sixthRow = board[2][0]

    return firstRow === secondRow && firstRow === thirdRow && firstRow !==null || fourthRow === secondRow && fifthRow === sixthRow && fourthRow !==null 
   
 }
 

// Set the game state back to its original state to play another game.
function resetGame(clearboard) {
  
    console.log("resetGame was called");
    board = 
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return board   
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
