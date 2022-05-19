
// Make your changes to store and update game state in this file

let board = [
    [null, null, null], 
    [null, null, null], 
    [null, null, null]
]

  
let noughtsTurn = true

// Take the row and column number between 0 and 2
// (inclusive) and update the game state.
function takeTurn(row, column) {
    console.log(`takeTurn was called with row: ${row}, column: ${column}`);
    console.log(noughtsTurn);
    console.log('row is ', row)
    console.log('column is ', column)

    if (board[row][column] === null && noughtsTurn === true){
        board[row][column] = "nought"
        noughtsTurn = false
    } else if (board[row][column]=== null) {
        board[row][column] = "cross"
        noughtsTurn = true
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
    
    

    if(horizontalWinner) {
        return horizontalWinner
    } 
    else if (verticalWinner) {
        return verticalWinner
    }
        
        
    }
    

        
        //else if diagonalWinner


     
    

const checkHorizontalWinner = () => {
    for(row =0; row <3;  row++){
console.log('check row equals ', checkMatchingRow(row))
        if (checkMatchingRow(row)) {
            console.log('check row equals ', checkMatchingRow(row))
            if(noughtsTurn === false) {
                return "noughts"
            } else {
                return "crosses"
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
    for(column =0; column <3; column ++){
        console.log('check column equals ', checkMatchingColumn(column))

        if (checkMatchingColumn(column)) {
            console.log('check column equals ', checkMatchingColumn(column))
           
            if(noughtsTurn === false) {
                return "noughts"
            } else {
                return "crosses"
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





// Set the game state back to its original state to play another game.
function resetGame(clearboard) {
  
    console.log("resetGame was called");
    board = 
    [[null, null, null], 
    [null, null, null], 
    [null, null, null]]
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return board   
 }

//     var square1
//     var square2
//     var square3
//     var square4
//     var square5
//     var square6
//     var square7
//     var square8
//     var square9


//     //from clearboard
    
//     for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
//         for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
//           let val   = document.getElementById(`row-${rowIndex}-column-${columnIndex}`).innerHTML
//           console.log(val);
//           if (rowIndex==0 && columnIndex == 0)
//           {
//               if (val ==  "⭕")
//               {
//                     square1 = "nought";
//               }
//               else if (val ==  "❌")
//               {
//                     square1 = "cross";
//               }
//               else
//               {
//                    square1 = null 
//               }
//           }
//           else if (rowIndex==0 && columnIndex == 1)
//           {
//             if (val ==  "⭕")
//             {
//                   square2 = "nought";
//             }
//             else if (val ==  "❌")
//             {
//                   square2 = "cross";
//             }
//             else
//             {
//                  square2 = null 
//             }

//           }
//           else if (rowIndex==0 && columnIndex == 2)
//           {
//             if (val ==  "⭕")
//             {
//                   square3= "nought";
//             }
//             else if (val ==  "❌")
//             {
//                   square3 = "cross";
//             }
//             else
//             {
//                  square3 = null 
//             }

//           }
        
//         else if (rowIndex==1 && columnIndex == 0)
//         {
//           if (val ==  "⭕")
//           {
//                 square4= "nought";
//           }
//           else if (val ==  "❌")
//           {
//                 square4 = "cross";
//           }
//           else
//           {
//                square4 = null 
//           }

//         }
    
//     else if (rowIndex==1 && columnIndex == 1)
//     {
//       if (val ==  "⭕")
//       {
//             square5= "nought";
//       }
//       else if (val ==  "❌")
//       {
//             square5 = "cross";
//       }
//       else
//       {
//            square5 = null 
//       }

//     }
   
//     else if (rowIndex==1 && columnIndex == 2)
//     {
//       if (val ==  "⭕")
//       {
//             square6= "nought";
//       }
//       else if (val ==  "❌")
//       {
//             square6 = "cross";
//       }
//       else
//       {
//            square6 = null 
//       }

//     }
        
//     else if (rowIndex==2 && columnIndex == 0)
//     {
//       if (val ==  "⭕")
//       {
//             square7= "nought";
//       }
//       else if (val ==  "❌")
//       {
//             square7 = "cross";
//       }
//       else
//       {
//            square7 = null 
//       }

//     }
       
//     else if (rowIndex==2 && columnIndex == 1)
//     {
//       if (val ==  "⭕")
//       {
//             square5= "nought";
//       }
//       else if (val ==  "❌")
//       {
//             square8 = "cross";
//       }
//       else
//       {
//            square8 = 'nobody' 
//       }

//     }

       
//     else if (rowIndex==2 && columnIndex == 2)
//     {
//       if (val ==  "⭕")
//       {
//             square5= "nought";
//       }
//       else if (val ==  "❌")
//       {
//             square9 = "cross";
//       }
//       else
//       {
//            square9 = 'nobody' 
//       }

//     }
// }
//     }
//     ;
//     return square1, square2, square3, square4, square5, square6, square7, square8, square9;


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
