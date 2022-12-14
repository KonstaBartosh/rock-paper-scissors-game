//let's create user choise function that return input
// const getUserChoice = userInput => {
//     //making all input in lower case:
//     userInput = userInput.toLowerCase();

//     if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
//         return userInput;
//     }   else {
//         alert('Please check your type')
//     }
// };
//let's create computer random choise:
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

//Let's determine a winner between user & computer depending on choices of each
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
};

//strat the game!
const playGame = () => {
    let userChoice = prompt('Input your choice');//<--put your choice
    userChoice = userChoice.toLowerCase();
    // const userChoice = getUserChoice('paper');

    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
        alert (userChoice);
    } else {
        alert('Please check your type')
    }


    const computerChoice = getComputerChoice();


    alert('The machine threw: ' + computerChoice);
    alert(determineWinner(userChoice, computerChoice));
};

playGame();