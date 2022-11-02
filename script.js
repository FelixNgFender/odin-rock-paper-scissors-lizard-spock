const VALID_OPTIONS = [`Rock`, `Paper`, `Scissors`, `Lizard`, `Spock`];

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

function game () {
    let human = 0,
        computer = 0
        playerSelection = null;

    for (let i = 0; i < 5; i++) {

        // User input
        while (!VALID_OPTIONS.includes(playerSelection)) {
            playerSelection = prompt(`Your turn: `).toLowerCase();
            playerSelection = capitalizeFirstLetter(playerSelection);
        }

        // Displays and saves result
        roundResult = playRound(playerSelection, getComputerChoice());
        console.log(roundResult);
        if (roundResult.includes(`win`)) {
            human += 1;
        }
        else if (roundResult.includes(`lose`)) {
            computer += 1;
        }

        // Resets playerSelection
        playerSelection = null;
    }
    console.log(announceWinner(human, computer));
    console.log(`Human: ${human} --- Computer: ${computer}`);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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