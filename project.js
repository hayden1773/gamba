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
        if (isNan(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again");
        }
    }
};

deposit();