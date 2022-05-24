let board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]
console.table(board)


let redturn = true

// Take the row and column number between 0 and 2
// (inclusive) and update the game state.
function takeTurn(row, column) {
    console.log(`takeTurn was called with row: ${row}, column: ${column}`);
    console.log(redturn);
    for (let i=5; i>=0;  i--){ //i = number of column, wiill loop whilst i >= 0 will loop but it runs thro all iteration until its successful. the i ensures it starts at the bottom.

    if (board[i][column] === null && redturn === true){
        board[i][column] = "red"
        redturn = false
        break
    } else if (board[i][column]=== null) {
        board[i][column] = "yellow"
        redturn = true
        break
    }
    else {
    }
    
}
console.table(board)
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
            if(redturn === false) {
                return "red"
            } else {
                return "yellow"
            }
        }
    }
}


const checkMatchingRow = () => {
    const firstColumn = board[row][0]
    const secondColumn = board[row][1]
    const thirdColumn = board[row][2]
    const fourthColumn = board[row][3]
    const fifthColumn = board[row][4]
    const sixthColumn = board[row][5]
    const seventhColumn = board[row][6]

 return firstColumn === secondColumn && firstColumn === thirdColumn && firstColumn === fourthColumn && firstColumn !==null ||
        secondColumn === thirdColumn && secondColumn === fourthColumn && secondColumn === fifthColumn && secondColumn !== null ||
        thirdColumn === fourthColumn && thirdColumn === fifthColumn && thirdColumn === sixthColumn && thirdColumn !==null ||
        fourthColumn === fifthColumn && fourthColumn === sixthColumn && fourthColumn === seventhColumn && fourthColumn !== null
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
     






  
// 
// Set the game state back to its original state to play another game.
function resetGame(clearboard) {
  
    console.log("resetGame was called");
    board = 
    [[null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]]
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

