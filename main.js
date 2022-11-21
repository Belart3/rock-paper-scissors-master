const userButton = document.querySelectorAll(".user");
const playerSelectPage = document.querySelector(".main-container");
const gamePlayMode = document.querySelector(".game-play-container");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const replay = document.getElementById("replay");
let playerScore = 0;
let computerScore = 0;
const score = document.querySelector("#score");
const aIScore = document.querySelector("#AI-score");
gameStatus = document.querySelector("#game-status");
const rules = document.querySelector(".rules");
const rulesButton = document.querySelector(".rules-button");
const closeButton = document.querySelector("#close");


for (let i = 0; i < userButton.length; i++) {
    userButton[i].addEventListener("click", function(){
        playerSelectPage.classList.remove("display-on");
        gamePlayMode.classList.add("display-on");
        setTimeout(function(){
            replay.classList.add("display-on");
            gameStatus.classList.remove("display-off");
        }, 1000)
    });
}
rock.addEventListener("click", function(){
    player.classList.add(this.getAttribute('class'));
    setTimeout(function(){
        computer.classList.add(getRandom(arr).getAttribute('class'));

        if (player.className == 'player rock' && computer.className == 'computer rock') {
            playerScore;
            computerScore;
            score.innerHTML = playerScore;
            aIScore.innerHTML = computerScore;
            gameStatus.textContent = "draw";
           
        } else{
            playerScore;
            computerScore;
        }
        
        if (player.className == 'player rock' && computer.className == 'computer paper') {
            playerScore;
            computerScore++;
            score.innerHTML = playerScore;
            aIScore.innerHTML = computerScore;
            gameStatus.textContent = "you lose";
           
        } else{
            playerScore;
            computerScore;
        }
        if (player.className == 'player rock' && computer.className == 'computer scissors') {
            playerScore++;
            computerScore;
            score.innerHTML = playerScore;
            aIScore.innerHTML = computerScore;
            gameStatus.textContent = "you win";
           
        } else{
            playerScore;
            computerScore;
        }
        
    }, 500);


})
paper.addEventListener("click", function(){
    player.classList.add(this.getAttribute('class'));
    setTimeout(function(){
        computer.classList.add(getRandom(arr).getAttribute('class'));

        if (player.className == 'player paper' && computer.className == 'computer rock') {
            playerScore++;
            computerScore;
            score.innerHTML = playerScore;
            aIScore.innerHTML = computerScore;
            gameStatus.textContent = "you win";
           
        } else{
            playerScore;
            computerScore;
        }
        
        if (player.className == 'player paper' && computer.className == 'computer paper') {
            playerScore;
            computerScore;
            score.innerHTML = playerScore;
            aIScore.innerHTML = computerScore;
            gameStatus.textContent = "draw";
        }
        
        if (player.className == 'player paper' && computer.className == 'computer scissors') {
            playerScore;
            computerScore++;
            score.innerHTML = playerScore;
            aIScore.innerHTML = computerScore;
            gameStatus.textContent = "you lose";
           
        } else{
            playerScore;
            computerScore
        }

    }, 500);


})
scissors.addEventListener("click", function(){
    player.classList.add(this.getAttribute('class'));
    setTimeout(function(){
        computer.classList.add(getRandom(arr).getAttribute('class'));

        if (player.className == 'player scissors' && computer.className == 'computer paper') {
        playerScore++;
        computerScore;
        score.innerHTML = playerScore;
        aIScore.innerHTML = computerScore;
        gameStatus.textContent = "you win";
       
    } else{
        playerScore;
        computerScore;
    }

    if (player.className == 'player scissors' && computer.className == 'computer scissors') {
        playerScore;
        computerScore;
        score.innerHTML = playerScore;
        aIScore.innerHTML = computerScore;
        gameStatus.textContent = "draw";
       
    } else{
        playerScore;
        computerScore;
    }

    if (player.className == 'player scissors' && computer.className == 'computer rock') {
        playerScore;
        computerScore++;
        score.innerHTML = playerScore;
        aIScore.innerHTML = computerScore;
        gameStatus.textContent = "you lose";
       
    } else{
        playerScore;
        computerScore;
    }

    }, 500);
    


});
replay.addEventListener("click", function(){
    playerSelectPage.classList.toggle("display-on");
    gamePlayMode.classList.toggle("display-on");
    player.classList.remove("paper");
    player.classList.remove("rock");
    player.classList.remove("scissors");
    computer.classList.remove("paper");
    computer.classList.remove("rock");
    computer.classList.remove("scissors");
    gameStatus.classList.add("display-off");
    replay.classList.add("display-off");
    replay.classList.remove("display-on");
})

let arr = [paper,rock,scissors];
const getRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };


rulesButton.addEventListener("click", function(){
    rules.classList.toggle("display-on");
})

closeButton.addEventListener("click", function(){
    rules.classList.toggle("display-on");
})
