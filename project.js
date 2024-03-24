// 1. Deposit money
// 2. Determine number of lines to bet on
// 3. Collect bet amount
// 4. Spin machine
// 5. Check if user won
// 6. Give user winnings
// 7. Play again

// function deposit(){

// }
const prompt = require("prompt-sync")();





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
}
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);




