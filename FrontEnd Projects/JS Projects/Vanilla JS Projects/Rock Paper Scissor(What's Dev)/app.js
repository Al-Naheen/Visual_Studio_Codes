let userScore = 0;
let compScore = 0;
let userScore_span = document.getElementById("user-score")
let compScore_span = document.getElementById("comp-score")
let scoreBoard_div = document.querySelector(".score-board")
let result_p = document.querySelector(".result > p")
let rock_div = document.getElementById("r")
let paper_div = document.getElementById("p")
let scissor_div = document.getElementById("s")

//Computer Choice 
function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//ShortForm theke Full form e CONVERT
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissor";
}

function win(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}. Brooh` //eita ES-6 format e...
    //+"" die jeita likhe oita ES-5 format....

    // document.getElementById(userChoice).classList.add('green-glow');   //but HTML e userChoice Bolte kono ID nai...
    userChoice_div.classList.add('green-glow')
    setTimeout(() => 
        userChoice_div.classList.remove('green-glow')
    , 300);
}
function lose(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} is destroyed by ${convertToWord(compChoice)}${smallCompWord}. Lose...` 
    userChoice_div.classList.add('red-glow')
    setTimeout(() => 
        userChoice_div.classList.remove('red-glow')
    , 300);
}
function draw(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} Equals ${convertToWord(compChoice)}${smallCompWord}. Draww`
    userChoice_div.classList.add('gray-glow')
    setTimeout(() => 
        userChoice_div.classList.remove('gray-glow')
    , 300);
}

//User Choice
function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice)
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, compChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice)
            break;
    }
}

//Define Choices(Rock, Paper, Scissor)
function main() {
    rock_div.addEventListener('click', ()=>
        game("r"));
    paper_div.addEventListener('click', ()=>
        game("p"));
    scissor_div.addEventListener('click', ()=>
        game("s"));

}
main();