const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],           //winnning probability possibilities
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


const cellElements = document.querySelectorAll("[data-cell]")
const board = document.querySelector("#board");
const winningMessage = document.getElementById("winning-message");
const winningMessageTextElement = document.querySelector("[data-winning-message-text]");
const restart = document.getElementById("restartbutton");


let circleTurn;

startGame();
restartbutton.addEventListener("click" ,startGame);

function startGame(){
    circleTurn = false;
    cellElements.forEach((cell)=>{
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.removeEventListener("click",handleClick);
        cell.addEventListener("click",handleClick, {once : true });

    });

setBoardHoverClass();
winningMessage.classList.remove("show");
}

function handleClick(e){
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell,currentClass);
    if(checkWin(currentClass)){
        endGame(false);
    }
    else if(isDraw()){
        endGame(True);
    }
    else{
        swapTurns();
        setBoardHoverClass();
    }   
}

function swapTurns(){
    circleTurn =! circleTurn;
}

function setBoardHoverClass(){
    board.classList.remove(CIRCLE_CLASS);
    board.classList.remove(X_CLASS);
    if(circleTurn){
        board.classList.add(CIRCLE_CLASS);
    }
    else{
        board.classList.add(X_CLASS);
    }

}

function endGame(draw){
    if(draw){
        winningMessageTextElement.innerHTML = "DRAW!";
    }
    else{
        winningMessageTextElement.innerHTML = `${circleTurn ? "O's" : "X's"} wins`
    }
    winningMessage.classList.add("show");

}



 
function placeMark(cell,currentClass){
    cell.classList.add(currentClass);
}

function isDraw() {
    return [...cellElements].every((cell)=>{
        return (
        cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
        );
   });
} 


//checking the possibilites of the winning combinations with the some and every function 
function checkWin(currentClass){
    return WINNING_COMBINATIONS.some((combination)=>{
       return combination.every((index)=>{
            return cellElements[index].classList.contains(currentClass);
        });
    });
}