// 1. Deposit money
// 2. Determine number of lines to bet on
// 3. Collect bet amount
// 4. Spin machine
// 5. Check if user won
// 6. Give user winnings
// 7. Play again

// function deposit(){

// }
//Imports
const prompt = require("prompt-sync")();
// Global var..
const ROWS = 3;
const COLS = 3;
// Object
const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}




//Asking for deposit
const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again");
        } else {
            return numberDepositAmount;
        }
    }
};
//Asking for number of lines
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3: ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines");
        } else {
            return numberOfLines;
        }
    }
};
// Asking for the bet amount
const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet, try again");
        } else {
            return numberBet;
        }
    }
};
// controls spins at random
const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        // console.log(symbol,count);
        for (let i = 0; i < count;i++){
            symbols.push(symbol);
        }

    }
    // console.log(symbols);
    const reels = [[], [], []];
    for (let i = 0; i < COLS; i++){
        for(let j = 0; j < ROWS; j++){
            
        }

    }

}


let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);




