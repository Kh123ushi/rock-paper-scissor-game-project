let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");
const genCompChoice = function () {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const drawGame = function () {
    console.log("game was draw.")
}

const showWinner = function (userWin, userchoice, compchoice) {
    if (userWin) {
        userScore++;
        userScorePara.innerHTML =userScore;
     
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerHTML =compScore;

        msg.innerText = "You lost!";
        msg.style.backgroundColor = "red";
    }

}

const playGame = function (userchoice) {
    
    // Generate computer choice
    const compchoice = genCompChoice();
    

    if (userchoice == compchoice) {
        //draw game
        drawGame();
        msg.innerText = "Draw , Play again!";
        msg.style.backgroundColor = "blue";
    }
    else {
        let userWin = true;
        if (userchoice === "rock") {
            //scissors,paper
            userWin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            //scissors , rock
            userWin = compchoice === "scissors" ? false : true;
        }
        else {
            //rock , paper
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compchoice);
    }


}

choices.forEach(function (choice) {


    choice.addEventListener("click", function () {
        const userchoice = choice.getAttribute("id");
     
        playGame(userchoice);
    });
});
