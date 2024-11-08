let userScore = 0;
let computerScore = 0;
let userScore_Span = document.getElementById('userScore');
let computerScore_Span = document.getElementById('compScore');
const scoreBoard_div = document.querySelector ('scoreBoard');
const result_p = document.querySelector ('.result > p');
const fire_div = document.getElementById ('f');
const water_div = document.getElementById ('w');
const grass_div = document.getElementById ('g');

function getComputerChoice() {
    const choices = ['f', 'w', 'g'];
    let randomNumber = (Math.floor(Math.random() * 3));
    return choices [randomNumber]
}

function conversion(letter){
    if (letter == 'f') return 'Fire'
    if (letter == 'w') return 'Water'
    return 'Grass'
}

function gameEnd(){
    if (userScore == 10){
        result_p.innerHTML = (`User has Beaten Computer. Well Done!`)
        userScore = 0
        computerScore = 0
    }
    else if (computerScore == 10){
        result_p.innerHTML = (`Computer has Beaten User. Better luck next time!`)
        userScore = 0
        computerScore = 0
    }  
}

function win(userChoice, computerChoice){
    console.log("User Wins!")
    userScore++
    userScore_Span.innerHTML = userScore
    computerScore_Span.innerHTML = computerScore
    result_p.innerHTML = (`${conversion(userChoice)} (U) beats ${conversion(computerChoice)} (C). You win!`)
}

function lose(userChoice, computerChoice){
    console.log("Computer Wins!")
    computerScore++
    userScore_Span.innerHTML = userScore
    computerScore_Span.innerHTML = computerScore
    result_p.innerHTML = (`${conversion(computerChoice)} (C) beats ${conversion(userChoice)} (U). You Lose!`)
}

function draw(userChoice, computerChoice){
    console.log('Draw!')
    result_p.innerHTML = (`${conversion(computerChoice)} (C) is the same as ${conversion(userChoice)} (U). You Draw!`)
}

function game(userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case 'fg':
        case 'wf':
        case 'gw':
            win(userChoice, computerChoice)
            gameEnd()
            break;
        case 'fw':
        case 'wg':
        case 'gf':
            lose(userChoice, computerChoice)
            gameEnd()
            break;
        case 'ff':
        case 'ww':
        case 'gg':
            draw(userChoice, computerChoice)
            break;
    }
}

game()

function main() {
    fire_div.addEventListener('click', function(){
        game('f');
    })

    water_div.addEventListener('click', function(){
        game('w');
    })

    grass_div.addEventListener('click', function(){
        game('g');
    })
}

main()

// gameEnd function is my own