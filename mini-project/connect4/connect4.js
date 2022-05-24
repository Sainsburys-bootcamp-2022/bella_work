let board = [
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
    
    const checkMatchingColumn = () => {
        const firstRow = board[0][column]
        const secondRow = board[1][column]
        const thirdRow = board[2][column]
        const fourthRow = board[3][column]
        const fifthRow = board[4][column]
        const sixthRow = board[5][column]
       
        
       return firstRow === secondRow && firstRow === thirdRow && firstRow === fourthRow && firstRow !==null ||
        secondRow === thirdRow && secondRow === fourthRow && secondRow === fifthRow && secondRow !== null ||
        thirdRow === fourthRow && thirdRow === fifthRow && thirdRow === sixthRow && thirdRow !==null 
        
    }
    
    
    // function checkDiagonalWinner(board, row, column) {
    //     var result = false
    //      if(board[row][column] != [0][0]) {
    //         // there are four possible directions of a win
    //         // if the top right contains a possible win
    //         if(row - 3 > -1 && column + 3 < columnIndex) {
    //             result = board[row][column] == board[row - 1][column + 1] &&
    //                      board[row][column] == board[row - 2][column + 2] &&
    //                      board[row][column] == board[row - 3][column + 3]; 
    //         }
    //         // if the bottom right contains possible win
    //         if(row + 3 < numRows  && column + 3 < columnIndex) {
    //             result = board[row][column] == board[row + 1][column + 1] &&
    //                      board[row][column] == board[row + 2][column + 2] &&
    //                      board[row][column] == board[row + 3][column + 3]; 
    //         }
    //         // if the bottom left contains possible win
    //         if(row + 3 < rowIndex && column - 3 > -1) {
    //             result = board[row][column] == board[row + 1][column - 1] &&
    //                      board[row][column] == board[row + 2][column - 2] &&
    //                      board[row][column] == board[row + 3][column - 3]; 
    //         }
    //         // if the top left contains a possible win
    //         if(row - 3 > -1 && column - 3 > -1) {
    //             result = board[row][column] == board[row - 1][column - 1] &&
    //                      board[row][column] == board[row - 2][column - 2] &&
    //                      board[row][column] == board[row - 3][column - 3]; 
    //         }
    //     }
    
    //     return result
    // }
    
const checkDiagonalWinner = () => {
 
    let board_deepcopy = //ensures we are not copying the reference values from original
    JSON.parse(JSON.stringify(board)) //copies and strifies the object then converts it back into an object 
    let flatboard = [].concat(...board_deepcopy) //turns the array of objects into a string 
console.log(flatboard) //logs the values of this string 
for (let i =0; i <flatboard.options.length;  i++){



    
        if(redturn === false && (a[i] === 4))
         {
            return "red"
        } else if  {
            return "yellow"
        }
    }
        break;

}




// //let board =
// ['0','1','2','3','4','5','6',
// '7','8','9','10','11','12','13',
// '14','15','16','17','18','19','20',
// '21','22','23','24','25','26','27',
// '28','29','30','31','32','33','34',
// '35','36','37','38','39','40','41'
// ]




}


  
// 
// Set the game state back to its original state to play another game.
function resetGame(clearboard) {

    board = 
   [ [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]
    console.table(board)
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

