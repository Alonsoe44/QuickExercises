//Bingo Script to play some bingo
//This is the class

//Creation of the Bingo card and the Pool of numbers to play bingo
let foundLine = false;
let win = false;
let cardSize = 4;
let bingoBall;
let poolNumbers = [];
let resetPoolNumber = ()=>{
    let tempPool = [];
    for(let i=0; i<90; i++){
        tempPool[i]=i+1;
    }
    poolNumbers = tempPool;
}
resetPoolNumber();

let bingoCard = {
	numBoard: createBoard(),
}
function createBoard(){
    let tempBoard = [];                                 
    for(let j = 0; j<cardSize; j++){
        tempBoard[j]= [];
        for(let i=0;i<cardSize; i++){
            let indexHolder = randomIndexPoolNumbers();
            tempBoard[j][i]= poolNumbers[indexHolder];
            poolNumbers.splice(indexHolder, 1);
        }//end for1
    }//end for2
    return tempBoard;
}//end function

function randomIndexPoolNumbers(){                                    //This number its the index of the poolNumber
	return parseInt(Math.random()*poolNumbers.length);
}

resetPoolNumber();

//Now its time to declare the functions that fill that bingo Card :)

let generateBall = () =>{
    let indexHolder = randomIndexPoolNumbers();
    bingoBall = poolNumbers[indexHolder];
    poolNumbers.splice(indexHolder, 1);
    console.log(`Number ${bingoBall} someone has the number ${bingoBall}?`)
}

 let checkBallinBingoCard = () =>{      //checks the ball in the board and places and x if founded
     for(let i = 0; i< cardSize; i++){
         for(let j = 0; j< cardSize; j++){
             if(bingoCard.numBoard[i][j] ===bingoBall){
                bingoCard.numBoard[i][j] = 'x';
             }
         }
     }
 }//end function

 let checkLineinBingoCard = () =>{
    let isBingo = true;
    for(let i = 0; i< cardSize; i++){ 
        let isRowFull = true;                   //checks for a vertical line
        let isColumnFull = true;                //checks for an horizontal line 
        for(let j = 0; j< cardSize; j++){
            isRowFull = isRowFull && (bingoCard.numBoard[i][j] ==='x');
            isColumnFull = isColumnFull && (bingoCard.numBoard[j][i] ==='x');
            isBingo = isBingo && (bingoCard.numBoard[i][j] ==='x');
        }
        if(isRowFull&&!foundLine){
            foundLine = true;
            console.log("Horizontal Line");
            
        }
        if(isColumnFull&&!foundLine){
            foundLine = true;
            console.log("Vertical Line");
        }
    }
    if(isBingo){
        win = true;
        console.log('Bingooooooooo');
    }
 }//end function


 window.prompt('hi');
 //Main rutine for the user
 console.log('hi');

while(confirm('Another number?')){
    generateBall();
    checkBallinBingoCard();
    console.table(bingoCard.numBoard);
    checkLineinBingoCard();
         
}
 
 
 