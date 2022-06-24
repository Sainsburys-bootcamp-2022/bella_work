


let board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]
document.getElementById("redStart").style.display = "none"
document.getElementById('grid').style.display = "none"
document.getElementById("redStart").style.display = "block"



let redScore = 0


function setRedTurn() {

    if (document.getElementById('RedplayerNameInput').value !== "") {
        document.getElementById("red") = document.getElementById('RedplayerNameInput').value
    }
    else {
        console.log(document.getElementById("red").innerText)
        document.getElementById("red").innerText = "Red"
    }

    document.getElementById("redStart").style.display = "block"
}


document.getElementById('Score_Board').style.display = "none"


//console.table(board)
// seting player name and displaying it on the screeen 
function setRedPlayerName() { //function thgat is called by html
    let playerNameDiv = document.getElementById('redplayerName'); //calling red player name

    playerNameDiv.innerHTML = document.getElementById('RedplayerNameInput').value; //takes the value of tbe input box and displays on the html

    document.getElementById('redplayerName').style.display = "block"
    document.getElementById('divSetRedPlayerName').style.display = "none"



}


function setYellowPlayerName() {
    let playerNameDiv = document.getElementById('yellowplayerName');

    playerNameDiv.innerHTML = document.getElementById('YellowplayerNameInput').value;

    document.getElementById('yellowplayerName').style.display = "block"
    document.getElementById('divSetYellowPlayerName').style.display = "none"


}



let redturn = true
let winnerStatus = false
redScore = 0
yellowScore = 0

document.getElementById("show-whose-turn").style.display = "none";

document.getElementById("winner-display").style.display = "none";

document.getElementById("game_over").style.display = "none";
document.getElementById("input_boxes").style.display = "block"



// Take the row and column number between 0 and 2
// (inclusive) and update the game state.
function takeTurn(row, column) {

    document.getElementById("naming-player-turn").style.display = "block"
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
            document.getElementById("redStart").style.display = "none"
            if (document.getElementById('YellowplayerNameInput').value !== "") {
                document.getElementById("player-name-turn").innerText = document.getElementById('YellowplayerNameInput').value
            }
            else
                document.getElementById("player-name-turn").innerText = "Yellow"

            break
        }

        else if (board[i][column] === null) {
            console.log(takeTurn)
            board[i][column] = "yellow"
            redturn = true
            if (document.getElementById('RedplayerNameInput').value !== "") {
                document.getElementById("player-name-turn").innerText = document.getElementById('RedplayerNameInput').value
            }
            else
                document.getElementById("player-name-turn").innerText = "Red"
            break
        }
        else {


        }

    }
    console.table(board)
}




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
                redScore = redScore + 1
                console.log('red score', redScore)
                let redScoreCount = document.getElementById("redScoreCount")
                redScoreCount.innerText = redScore
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
                yellowScore = yellowScore + 1
                console.log("yellow score", yellowScore)
                let yellowScoreCount = document.getElementById("yellowScoreCount")
                yellowScoreCount.innerText = yellowScore
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
                redScore = redScore + 1
                console.log('red score', redScore)
                let redScoreCount = document.getElementById("redScoreCount")
                redScoreCount.innerText = redScore
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
                yellowScore = yellowScore + 1
                console.log("yellow score", yellowScore)
                let yellowScoreCount = document.getElementById("yellowScoreCount")
                yellowScoreCount.innerText = yellowScore
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
                redScore = redScore + 1
                console.log('red score', redScore)
                let redScoreCount = document.getElementById("redScoreCount")
                redScoreCount.innerText = redScore
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
                yellowScore = yellowScore + 1
                console.log("yellow score", yellowScore)
                let yellowScoreCount = document.getElementById("yellowScoreCount")
                yellowScoreCount.innerText = yellowScore
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
                    redScore = redScore + 1
                    console.log('red score', redScore)
                    let redScoreCount = document.getElementById("redScoreCount")
                    redScoreCount.innerText = redScore
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
                yellowScore = yellowScore + 1
                console.log("yellow score", yellowScore)
                let yellowScoreCount = document.getElementById("yellowScoreCount")
                yellowScoreCount.innerText = yellowScore
                return "yellow"
            }

        }
}







function playAgain(clearboard) {
    playAgainClick
    board =
        [[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
        ]
    winnerStatus = false
    redturn = true

    const redScoreName = document.getElementById("redScoreName")
    console.log('red player name input:', document.getElementById('RedplayerNameInput').value)
    console.log('conditional 1 result for red', redScoreName.innerText === "Red")
    console.log('conditional 1 result for red', redScoreName.innerText)
    console.log('conditional 2 result for red', document.getElementById('RedplayerNameInput').value !== "")
    document.getElementById("redStart").style.display = "block"

    //  if (redScoreName.innerText == "Red" && document.getElementById('RedplayerNameInput').value !== ""){
    //      console.log("i have reached the red score name inner text")
    //          redScoreName.innerText = document.getElementById('RedplayerNameInput').value 
    //     }
    if (document.getElementById('RedplayerNameInput').value !== "") {
        console.log("i have reached the red score name inner text")
        redScoreName.innerText = document.getElementById('RedplayerNameInput').value
    }


    // const yellowScoreName = document.getElementById("yellowScoreName")
    //     if (yellowScoreName.innerText === "Yellow" && document.getElementById('YellowplayerNameInput').value !== "")
    //     yellowScoreName.innerText = document.getElementById('YellowplayerNameInput').value

    const yellowScoreName = document.getElementById("yellowScoreName")
    if (document.getElementById('YellowplayerNameInput').value !== "")
        yellowScoreName.innerText = document.getElementById('YellowplayerNameInput').value

    console.log("red score name", redScoreName.innerText)
    console.log("yellow score name", yellowScoreName.innerText)




    document.getElementById("show-whose-turn").style.display = "none"
    document.getElementById("winner-name").value = ""
    document.getElementById("winner-display").value = ""
    document.getElementById("redStart").style.display = "block"
    document.getElementById("game_over").style.display = "none"
    document.getElementById("redStart").style.display = "block"


    document.getElementById("player_info").style.display = "block"
    document.getElementById("redplayerName").style.display = "none"
    document.getElementById("player-name-turn").style.display = "none"

    //document.getElementById("redplayerName").value = ""
    document.getElementById("yellowplayerName").style.display = "none"
    document.getElementById("show-whose-turn").style.display = "none"
    document.getElementById("naming-player-turn").style.display = "none"
    document.getElementById("input_boxes").style.display = "none"
    document.getElementById('Score_Board').style.display = "block"
    document.getElementById("grid").style.display = "block"





    function yellowScore() {
        let yellowScoreCount = document.getElementById("yellowScoreCount")

        yellowScoreCount.innerHTML = yellowScore

    }

}


// 
// Set the game state back to its original state to play another game.
function resetGame(clearboard) {
    resetClick
    window.location.reload()
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
    winnerStatus = false
    redturn = true
    redScore = 0
    let redScoreCount = document.getElementById("redScoreCount")
    redScoreCount.innerText = redScore
    yellowScore = 0
    let yellowScoreCount = document.getElementById("yellowScoreCount")
    yellowScoreCount.innerText = yellowScore
    document.getElementById("redStart").style.display = "block"

};



// helper functions, let you know when something has broken. check that the array that has been put in is a length of 6
function isValidRowOrColumn(array) {
    return Array.isArray(array) && array.length === 6;
}

// checks that the column array is an array made of red yellow and null
function isValidColumn(columnArray) {
    return columnArray.every(function (item) { return ["red", "yellow", null].includes(item); });
}


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

module.exports = { isValidRowOrColumn, isValidColumn }
