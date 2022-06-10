
// checking those functions are there going to use:' "takeTurn", "getBoard", "checkWinner", "resetGame"


// Clear down the elements drawn on the board.
function clearBoard() { //clear down elements 
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) { // for loop going thro each off the row index and column index and setting it to nothing
        for (let columnIndex = 0; columnIndex < 7; columnIndex++) { // inputs the column index, goes thro it all the column index and changes them to "" - not null
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).innerHTML = "" // row index and column index innder HTMl changed to ""
        }
    }
}
// this function
// Populate the grid with images based on the board state.
function drawBoard(board) {
    clearBoard(); // changes everything to be ""
    //now recreate the board using the board valriable
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) { // goes thro row index and repopulated
        for (let columnIndex = 0; columnIndex < 7; columnIndex++) { //goes thro coljmn index and repopulates
            if (!board[rowIndex][columnIndex]) {  // if board doesnt have a thing in then u can place it 
                continue;
            }
            const cellText = board[rowIndex][columnIndex] === "red" ? "❤️" : "💛"; // variable cell text = point on board selected, they = red if it is red and if not it will show yello, ? is testing what si written, allows us to use true and false to put colours in. 
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).innerText = cellText; // chnaging inner text to equal variable cell text based on column and row index, placing the counter on the boards
        }
    }
}





// A grid position was clicked call the game's turn function, redraw and then check for a winner.
function positionClick(rowIndex, columnIndex, event) { // check row column index based on event of clicking
    takeTurn(rowIndex, columnIndex); //function using row index and column index
    const board = getBoard(); //board always = get board
    //if (!isValidRowOrColumn(board) || !board.every(isValidColumn)) { // chekcing board is a 2d array, links to 37-40 functions, if not showing yellow, red or null someting is an issue. 
    //throw "Expecting 'getBoard' to return a 2d array where all values match are null or one of the strings 'yellow' or 'red'. Actually received: " + JSON.stringify(board);
    //console.log(takeTurn)

    drawBoard(board);
    const winner = checkWinner();

    if (winner) {
        // if not a string or the string  or not a string of red yellow or nobody then = false and throw error 
        if (typeof winner !== "string" || !["red", "yellow", "nobody"].includes(winner)) {
            throw "Expecting 'checkWinner' to return null or one of the strings 'yellow', 'red' or 'nobody'. Actually received: " + winner;
            // bings back an error message
        }
        // if (winner === red)
        //       winner = document.getElementById('RedplayerNameInput').value
        // else if (winner === yellow)
        //       winner = document.getElementById('YellowplayerNameInput').value

        const winnerName = document.getElementById("winner-name"); //changes the (document =HTML ) points to HTMl and gets the elemnt
        winnerName.innerText = winner;// winner name - gets check winner function inner text (red/yellow = winner value)

        if (winnerName.innerText === "red" && document.getElementById('RedplayerNameInput').value !== "")
            winnerName.innerText = document.getElementById('RedplayerNameInput').value
        else if (winnerName.innerText === "yellow" && document.getElementById('YellowplayerNameInput').value !== "")
            winnerName.innerText = document.getElementById('YellowplayerNameInput').value

        const winnerDisplay = document.getElementById("winner-display"); // this is how it will showon html
        winnerDisplay.style.display = "block"; //block of text is hidden till event lostener
    }
}
// const submitButton = document.getElementById("submit-button");
// submitButton.addEventListener("click", playername);
// function plaredplayeryer1name(player1) {    
//     document.getElementById(player1).setAttribute('name', 'w1-1');
// }



// The reset button was clicked, call the game's reset function then reset the DOM (document)
function resetClick(event) { //when reset button is clicked
    resetGame();
    const winnerName = document.getElementById("winner-name"); // we are clearing winner name
    winnerName.innerText = ""; // removing that from a screen
    const winnerDisplay = document.getElementById("winner-display"); // clearing every winner function
    winnerDisplay.style.display = "None"; //takes out the block 

    clearBoard();
}

// function resetNames(event) {
//     resetNames();
//     const RedplayerNameInput = document.getElementById("RedplayerNameInput");
//     RedplayerNameInput.innerText = "";

//     const 

// }


// Bind the click events for the grid.
for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
        const gridPosition = document.getElementById(`row-${rowIndex}-column-${columnIndex}`);
        gridPosition.addEventListener("click", positionClick.bind(null, rowIndex, columnIndex));
    }
}


// Bind the click event for the reset button.
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetClick);

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        clearBoard,
        drawBoard,
        isValidRowOrColumn,
        isValidColumn,
        positionClick,
        resetClick,
    }
} else {
    console.log("Running in Browser")
}


