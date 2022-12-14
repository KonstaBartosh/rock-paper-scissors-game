//1. let's create user choise function that return input
const getUserChoice = userInput => {
    //making all input in lower case:
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    }   else {
        console.log('Please check your type')
    }
};
//2. let's create computer random choise:
const getComputerChoice = () => {
    //create randomiser variable:
    const randomNumber = Math.floor(Math.random() * 3);
    //assign random numbers to game choices:
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
};

//3. Let's determine a winner between user & computer depending on choices of each
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Draw!';
    };
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Machine won!';
        } else {
            return 'You win!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'You win!';
        } else {
            return 'Machine won!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'You win!';
        } else {
        return 'Machine won!';
        }
    }
    if (userChoice === 'bomb') {
        return 'You always win with a bobm!'
    }
};

//4. strat the game!
const playGame = () => {
    const userChoice = getUserChoice('paper');//<--put your choice
    const computerChoice = getComputerChoice();

    console.log('You threw: ' + userChoice);
    console.log('The machine threw: ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
};

playGame();