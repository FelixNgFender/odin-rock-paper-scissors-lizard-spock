// Result UI
const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
const result =  document.querySelector('.result');
const humanContainer = document.querySelector('.human');
const computerContainer = document.querySelector('.computer');

// Game end UI
const gameEndContainer = document.createElement('div');
const gameWinner = document.createElement('div');
const resetButton = document.createElement('button');

// Styling for game end UI
gameEndContainer.appendChild(gameWinner);
gameEndContainer.appendChild(resetButton);
gameEndContainer.style.display = 'flex';
gameEndContainer.style.flexDirection = 'column';
gameEndContainer.style.alignItems = 'center';
gameEndContainer.style.justifyContent = 'center';
gameEndContainer.style.textAlign = 'center';
gameEndContainer.style.gap = '16px';
gameWinner.style.fontSize = '56px';
gameWinner.style.fontWeight = '100';
resetButton.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif';
resetButton.textContent = 'Play Again?';
resetButton.addEventListener('click', () => location.reload());
resetButton.style.width = 'auto';

// Results
let humanResult = 0;
let computerResult = 0;

function getComputerChoice () {
    randInt = Math.floor(Math.random() * 4);
    switch (randInt) {
        case 0:
            return `Rock`;
        case 1:
            return `Paper`;
        case 2:
            return `Scissors`;
        case 3:
            return `Lizard`;
        case 4:
            return `Spock`;
        default:
            return `Something's sus...`;
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Tie!`
    }
    else if (playerSelection === `Rock`) {
        return RockHelper(computerSelection);
    }
    else if (playerSelection === `Paper`) {
        return PaperHelper(computerSelection);
    }
    else if (playerSelection === `Scissors`) {
        return ScissorsHelper(computerSelection);
    }
    else if (playerSelection === `Lizard`) {
        return LizardHelper(computerSelection);
    }
    else {
        return SpockHelper(computerSelection);
    }
}

function RockHelper (computerSelection) {
    if (computerSelection === `Scissors`) {
        return `You win! Rock crushes Scissors`
    }
    else if (computerSelection === `Spock`) {
        return `You lose! Spock vaporizes Rock`
    }
    else if (computerSelection === `Lizard`) {
        return `You win! Rock crushes Lizard`
    }
    else if (computerSelection === `Paper`) {
        return `You lose! Paper covers Rock`
    }
    else {
        return `Something's sus...`
    }
}

function PaperHelper (computerSelection) {
    if (computerSelection === `Scissors`) {
        return `You lose! Scissors cut Paper`
    }
    else if (computerSelection === `Spock`) {
        return `You win! Paper disproves Spock`
    }
    else if (computerSelection === `Lizard`) {
        return `You lose! Lizard eats Paper`
    }
    else if (computerSelection === `Rock`) {
        return `You win! Paper covers Rock`
    }
    else {
        return `Something's sus...`
    }
}

function LizardHelper (computerSelection) {
    if (computerSelection === `Scissors`) {
        return `You lose! Scissors decapitate Lizard`
    }
    else if (computerSelection === `Spock`) {
        return `You win! Lizard poisons Spock`
    }
    else if (computerSelection === `Paper`) {
        return `You win! Lizard eats Paper`
    }
    else if (computerSelection === `Rock`) {
        return `You lose! Rock crushes Lizard`
    }
    else {
        return `Something's sus...`
    }
}

function SpockHelper (computerSelection) {
    if (computerSelection === `Scissors`) {
        return `You win! Spock smashes Scissors`
    }
    else if (computerSelection === `Lizard`) {
        return `You lose! Lizard poisons Spock`
    }
    else if (computerSelection === `Paper`) {
        return `You lose! Paper disproves Spock`
    }
    else if (computerSelection === `Rock`) {
        return `You win! Spock vaporizes Rock`
    }
    else {
        return `Something's sus...`
    }
}

function ScissorsHelper (computerSelection) {
    if (computerSelection === `Spock`) {
        return `You lose! Spock smashes Scissors`
    }
    else if (computerSelection === `Lizard`) {
        return `You win! Scissors decapitate Lizard`
    }
    else if (computerSelection === `Paper`) {
        return `You win! Scissors cut Paper`
    }
    else if (computerSelection === `Rock`) {
        return `You lose! Rock crushes Scissors`
    }
    else {
        return `Something's sus...`
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        roundResult = playRound(button.textContent, getComputerChoice());
        if (roundResult.includes(`win`)) {
            humanResult += 1;
            humanContainer.textContent = humanResult;
        }
        else if (roundResult.includes(`lose`)) {
            computerResult += 1;
            computerContainer.textContent = computerResult;
        }
        result.textContent = roundResult;
        if ((humanResult === 5) || (computerResult === 5)) {
            gameWinner.textContent = announceWinner(humanResult, computerResult);
            removeAllElements();
            body.appendChild(gameEndContainer);
            body.style.flexDirection = 'row';
            body.style.justifyContent = 'center';
        }
    })
})

function removeAllElements () {
    document.body.innerHTML = "";
}

function announceWinner (human, computer) {
    if (human === computer) {
        return `Balance in everything!`;
    }
    else if (human > computer) {
        return `It's the victory of humanity once more!`;
    }
    else {
        return `Rise of the Robots?`;
    }
}
