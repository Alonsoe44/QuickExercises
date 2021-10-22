//Bingo Script to play some bingo
//This is the class
class BingoBoard{
	constructor(){
		this.arr = this.createArr();
		console.log(this.arr);
		console.log('ayudaaa');
		
	}
	
	createArr(){
		let tempArr = [];
		for(let i = 0; i<4; i++){
			boardArr[i]= [];
			for(let j=0;j<4; j++){
				let tempItem = rdItem();
				boardArr[i][j]= mainBinArr[tempItem];
				mainBinArr.splice(tempItem, 1);
			}//end for1
		}//end for2
		return tempArr;
	}//end function
}//end constructor


//Some variables

let mainBinArr = [];
let boardArr = [];

//Creation of the arrays
for(let i=0; i<90; i++){
	mainBinArr[i]=i+1;
}


let theBoard = new BingoBoard();
console.log(theBoard.arr);

//Some functions
function rdItem(){
	return Math.random()*mainBinArr.length;
}


