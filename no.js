console.log(`Tiis lang. Let's be programmer`)

const welcomeMsg = document.querySelector('.btn-trigger h1')
const getPrompt = prompt('What is your name?')

welcomeMsg.innerHTML = "Welcome "+ getPrompt;


const btnAll = document.querySelectorAll('.btn-pictures section');
const sect1 = document.querySelector('.sect1 h2');
const sect2 = document.querySelector('.sect2 h2');
const thirdDiv = document.querySelector('.final-message h1')
const yourScore = document.querySelector('.yourScore');
const computerScore = document.querySelector('.computerScore');

const btnStart = document.querySelector('.btn-start');
const btnTrigger = document.querySelector('.btn-trigger');

btnStart.addEventListener('click', function(){
    btnTrigger.style.opacity = 0;
    btnTrigger.style.transition = '1s ease';
    btnTrigger.addEventListener('transitionend', function(){
        btnTrigger.style.display = 'none'
    })

    btnAll.forEach(function(az){
        az.classList.add("radius-trigger")
    })

})


btnAll.forEach( function(aa)
{
    aa.addEventListener('click', function(e){
        sect1.innerHTML = aa.classList[0];
        sect2.innerHTML = cpuPick(randomNum());
        game();
        scores();

        btnAll.forEach(function(xz){
            xz.style.background = 'none'
        })
        aa.style.background = 'red';
    })
})

function game()
{
    
    const x = sect1.innerHTML;
    const y = sect2.innerHTML;

        switch (x+y){
            case "rockRock":
            case "paperPaper":
            case "scissorScissors":
                thirdDiv.innerHTML = "Draw"
                thirdDiv.style.color = 'black';
                break;
            case "rockScissors":
            case "paperRock":
            case "scissorPaper":
                thirdDiv.innerHTML = "YOU WIN!"
                thirdDiv.style.color = 'green';
                break;
            case "rockPaper":
            case "paperScissors":
            case "scissorRock":
                thirdDiv.innerHTML = "YOU LOSE :("
                thirdDiv.style.color = 'red';
       }
}

function randomNum()
{
    const ran = Math.floor(Math.random() * 3 +1);
    return ran;
}

function cpuPick(num)
{
    if(num == 1){return num = "Rock";}
    else if(num == 2){return num = "Paper"}
    else{return "Scissors"}
}

// scores. Wahahahaha
let score1 = 0;
let score2 = 0;

function scores()
{
    const finalScore = thirdDiv.innerHTML;

    if(finalScore.includes("YOU WIN")){
        score1++;
    }
    else if(finalScore.includes("YOU LOSE")){score2++;
    }
    else{return}

    yourScore.innerHTML = score1;
    computerScore.innerHTML = score2;
}




