

let board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]
//console.table(board)
// seting player name and displaying it on the screeen 
function setRedPlayerName() { //function thgat is called by html
    let playerNameDiv = document.getElementById('redplayerName'); //calling red player name

    playerNameDiv.innerHTML = document.getElementById('RedplayerNameInput').value; //takes the value of tbe input box and displays on the html

    document.getElementById('redplayerName').style.display = "block"

}


function setYellowPlayerName() {
    let playerNameDiv = document.getElementById('yellowplayerName');

    playerNameDiv.innerHTML = document.getElementById('YellowplayerNameInput').value;
    document.getElementById('yellowplayerName').style.display = "block"


}



let redturn = true
let winnerStatus = false

document.getElementById("show-whose-turn").style.display = "none";

// Take the row and column number between 0 and 2
// (inclusive) and update the game state.
function takeTurn(row, column) {
    document.getElementById("show-whose-turn").style.display = "block"
    document.getElementById("player-name-turn").style.display = "block"
    if (winnerStatus === true) {
        return
    } 
    console.log(`takeTurn was called with row: ${row}, column: ${column}`);
    console.log(redturn);
    for (let i = 5; i >= 0; i--) { //i = number of column, wiill loop whilst i >= 0 will loop but it runs thro all iteration until its successful. the i ensures it starts at the bottom.

        if (board[i][column] === null && redturn === true) {
            console.log(takeTurn)
            board[i][column] = "red"
            redturn = false
           if (document.getElementById('RedplayerNameInput').value !== ""){
                 document.getElementById("player-name-turn").innerText = document.getElementById('YellowplayerNameInput').value }
                 else 
                 document.getElementById("player-name-turn").innerText = "yellow"

            break
        } 
        
        else if (board[i][column] === null) {
            console.log(takeTurn)
            board[i][column] = "yellow"
            redturn = true
            if (document.getElementById('YellowplayerNameInput').value !== ""){
                document.getElementById("player-name-turn").innerText = document.getElementById('RedplayerNameInput').value }
                else 
                document.getElementById("player-name-turn").innerText = "red"
            break
        }
        else {


        }

    }
    console.table(board)
}

//const submitbtn = documentget elements by idnexfunction bu

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.



function checkWinner() {

    const horizontalWinner = checkHorizontalWinner()
    const verticalWinner = checkVerticalWinner()
    const diagonalWinner = checkDiagonalWinner()
    const diagonalleftwinner = checkDiagonalleftwinner()
    const nowinner = checkdrawwinner()

    if (horizontalWinner) {
        return horizontalWinner
    } else if (verticalWinner) {
        return verticalWinner
    } else if (diagonalWinner) {
        return diagonalWinner

    } else if (diagonalleftwinner) {
        return (diagonalleftwinner)
    } else if (nowinner) {
        return (nowinner)
    }

    else {

        return null
    }
}

checkdrawwinner = () => {
    let board_deepcopy = //ensures we are not copying the reference values from original
        JSON.parse(JSON.stringify(board)) //copies and strifies the object then converts it back into an object 
    const flatboard = [].concat(...board_deepcopy) //turns the array of objects into a string 
    // console.log(flatboard) //logs the values of this string 

    for (i = 0; i < flatboard.length; i++) {
        const currentcell = flatboard[i]
        if (currentcell === null) {
            return false
        }
    } return "nobody"
}


// a for loop, starting at 0, checks thro all the values, adding one each time, when it finds a value it changes the value of i to =
// the idnex number. assign this index number to another vairable. run the loop again. if the difference between i and k = 1 then carry onto the next lop
//  make the index value of, repeat this until we have ran the loop 4 times. 

const checkHorizontalWinner = () => {
    let rightboard = [board[0], [14], [21], [28], [35]]
    let leftboard = [board[6], [13], [20], [27], [34], [41]]

    let board_deepcopy = //ensures we are not copying the reference values from original
        JSON.parse(JSON.stringify(board)) //copies and strifies the object then converts it back into an object 
    const flatboard = [].concat(...board_deepcopy) //turns the array of objects into a string 
    // console.log(flatboard) //logs the values of this string 

    rowcount = 0


    for (let i = 0; i < flatboard.length; i++) {


        //  console.log(flatboard[i])
        if (flatboard[i] == "red") {
            rowcount = 1
            let hozdif = 1
            let vertdif = 7
            for (let m = i; m < i + 3; m++) {
                if (flatboard[m + hozdif] == "red") {
                    rowcount = rowcount + 1
                }
                else {
                    rowcount = 0
                    break
                }

            }
            if (rowcount == 4 && board !== rightboard && leftboard) {
                console.log("red wins")
                winnerStatus = true
                return "red"
            }
        }
        else if (flatboard[i] === "yellow") {
            rowcount = 1
            let hozdif = 1
            let vertdif = 7
            for (let m = i; m < i + 3; m++) {
                if (flatboard[m + hozdif] === "yellow") {
                    rowcount = rowcount + 1
                }
                else {
                    rowcount = 0
                    break
                }

            }
            if (rowcount === 4 && board !== rightboard && leftboard) {
                console.log("yellow wins")
                winnerStatus = true
                return "yellow"
            }
        }
        else if (flatboard[i] === !null)
            return 'nobody'
    }
}
const checkVerticalWinner = () => {
    let rightboard = [board[0], [14], [21], [28], [35]]
    let leftboard = [board[6], [13], [20], [27], [34], [41]]

    let board_deepcopy = //ensures we are not copying the reference values from original
        JSON.parse(JSON.stringify(board)) //copies and strifies the object then converts it back into an object 
    const flatboard = [].concat(...board_deepcopy) //turns the array of objects into a string 
    // console.log(flatboard) //logs the values of this string 

    rowcount = 0
    //console.log("in vertdiff")

    for (let i = 0; i < flatboard.length; i++) {


        if (flatboard[i] === "red") {
            let rowcount = 1
            let hozdif = 1
            let vertdif = i + 7
            for (let m = 0; m < 3; m++) {
                if (flatboard[vertdif] === "red") {
                    rowcount = rowcount + 1
                    vertdif = vertdif + 7
                    console.log('in red', vertdif)
                    //console.log('red rowcount after addtion', rowcount)

                }
                else {
                    rowcount = 0
                    break
                }

            }
            if (rowcount === 4 && board !== rightboard && leftboard) {
                console.log("red wins")
                winnerStatus = true
                return "red"

            }

        }

        else if (flatboard[i] === "yellow") {
            rowcount = 1
            let vertdif = i + 7
            for (let m = 0; m < 3; m++) {
                //console.log('yellow rowcount before addtion', rowcount) //it is going thro this loop 
                //twice when the seocnd yellow is put down. but only when second yellow is placed 
                //console.log(rowcount)
                if (flatboard[vertdif] === "yellow") {
                    rowcount = rowcount + 1
                    vertdif = vertdif + 7
                    //console.log(vertdif)
                    //console.log('yellow rowcount after addtion', rowcount)

                }
                else {
                    rowcount = 0
                    break
                }

            }
            //console.log (rowcount)
            if (rowcount == 4 && board !== rightboard && leftboard) {
                console.log("yellow wins")
                winnerStatus = true
                return "yellow"
                break
            }

        }

    }
}

const checkDiagonalWinner = () => {
    let rightboard = [board[0], [14], [21], [28], [35]]
    let leftboard = [board[6], [13], [20], [27], [34], [41]]

    let board_deepcopy = //ensures we are not copying the reference values from original
        JSON.parse(JSON.stringify(board)) //copies and strifies the object then converts it back into an object 
    const flatboard = [].concat(...board_deepcopy) //turns the array of objects into a string 
    // console.log(flatboard) //logs the values of this string 

    rowcount = 0
    for (let i = 0; i < flatboard.length; i++) {

        //console.log("in diagdiff")
        if (flatboard[i] === "red") {
            let rowcount = 1
            let diagdiff = i + 6
            // console.log('in red diagdiff')
            for (let m = 0; m < 3; m++) {
                if (flatboard[diagdiff] === "red") {
                    rowcount = rowcount + 1
                    diagdiff = diagdiff + 6
                    // console.log('red rowcount after addtion', rowcount)

                }

                else {
                    rowcount = 0
                    break
                }
            }
            if (rowcount === 4 && board !== rightboard && leftboard) {
                console.log("red wins")
                winnerStatus = true
                return "red"
            }

        }

        else if (flatboard[i] === "yellow") {
            let rowcount = 1
            let hozdif = 1
            let vertdif = i + 7
            let diagdiff = i + 6
            //console.log('yellow rowcount vert', rowcount)
            for (let m = 0; m < 3; m++) {
                if (flatboard[diagdiff] === "yellow") {
                    //console.log('yellow rowcount vert', rowcount)
                    rowcount = rowcount + 1
                    diagdiff = diagdiff + 6
                    //console.log('yellow rowcount after addtion', rowcount)

                    //  console.log(diagdiff)
                    //  console.log(rowcount)
                }
                else {
                    rowcount = 0
                    break
                }

            }
            if (rowcount === 4 && board !== rightboard && leftboard) {
                console.log("yellow wins")
                winnerStatus = true
                return "yellow"
            }

        }

    }
}

const checkDiagonalleftwinner = () => {

    let rightboard = [board[0], [14], [21], [28], [35]]
    let leftboard = [board[6], [13], [20], [27], [34], [41]]

    let board_deepcopy = JSON.parse(JSON.stringify(board))
    const flatboard = [].concat(...board_deepcopy)


    rowcount = 0

    for (let i = 0; i < flatboard.length; i++)
        if (flatboard[i] === "red") {
            rowcount = 1
            diagdiffleft = i + 8
            for (let m = 0; m < 3; m++) {
                if (flatboard[diagdiffleft] === "red") {
                    rowcount = rowcount + 1
                    diagdiffleft = diagdiffleft + 8
                }
                else {
                    rowcount = 0
                    break
                }
                if (rowcount === 4 && board !== rightboard && leftboard) {
                    console.log('red wins')
                    winnerStatus = true
                    return "red"
                }
            }


        } else if (flatboard[i] === "yellow") {
            rowcount = 1
            diagdiffleft = i + 8
            for (let m = 0; m < 3; m++) {
                if (flatboard[diagdiffleft] === "yellow") {
                    console.log('rowcount yellow diagram left', rowcount)
                    rowcount = rowcount + 1
                    diagdiffleft = diagdiffleft + 8
                }
                else {
                    rowcount = 0
                    break
                }
            }
            if (rowcount === 4 && board !== rightboard && leftboard) {
                winnerStatus = true
                return "yellow"
            }

        }
}





// //let board =
// ['0','1','2','3','4','5','6',
// '7','8','9','10','11','12','13',
// '14','15','16','17','18','19','20',
// '21','22','23','24','25','26','27',
// '28','29','30','31','32','33','34',
// '35','36','37','38','39','40','41'
// ]



// 
// Set the game state back to its original state to play another game.
function resetGame(clearboard) {
    document.getElementById("show-whose-turn").style.display = "none"
    board =
        [[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
        ]
    console.table(board)


    //block of text is hidden till event lostener
    document.getElementById("RedplayerNameInput").value = ""
    document.getElementById("YellowplayerNameInput").value = ""
    document.getElementById("player-name-turn").value = ""
    
    
    document.getElementById("redplayerName").style.display = "none"
    document.getElementById("player-name-turn").style.display = "none"

    //document.getElementById("redplayerName").value = ""
    document.getElementById("yellowplayerName").style.display = "none"
    document.getElementById("show-whose-turn").style.display = "none"
};




// helper functions, let you know when something has broken. check that the array that has been put in is a length of 6
function isValidRowOrColumn(array) {
    return Array.isArray(array) && array.length === 6;
}

// checks that the column array is an array made of red yellow and null
function isValidColumn(columnArray) {
    return columnArray.every(function (item) { return ["red", "yellow", null].includes(item); });
}

//isValidRowOrColumn(columnArray) && 


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

module.exports = {isValidRowOrColumn, isValidColumn}
