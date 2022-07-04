// Steps

// Hardcodiamo tutto in pagina e poi facciamo scrivere a js

const display = document.getElementById('display');
const countdownDisplay = document.getElementById('countdown');
let messageDisplay = document.getElementById('message');
const numbers = [];
const userNumbers = [];
let count = 5;

// getRandomNumber

const getRandomNumber = (minNum, maxNum) => {
    return Math.floor(Math.random() * (maxNum + 1 - minNum)) + minNum;
}

// countDown

const countDown = setInterval(() => {
    countdownDisplay.innerText = count;
    if(count === 0){
        display.style.display = "none";
        countdownDisplay.style.display = "none";        
    }else if(count < 0){
        clearInterval(countDown);
        askUserNumbers();
    }
    count--;
},1000)

// askUserNumbers

const askUserNumbers = () => {
    let score = 0;
    let message = 'Numeri corretti: ';
    for(let i = 1; i <= numbers.length; i++){
        let userNumber = parseInt(prompt(`Scrivi il ${i} numero!`));
        while((isNaN(userNumber) || userNumber < 1 || userNumber > 100)){
            userNumber = parseInt(prompt(`Usa un numero corretto. Scrivi il ${i} numero!`));
        }
        userNumbers.push(userNumber);
        console.log(userNumber)
        console.log(numbers)
        if(numbers.includes(userNumber)){
            score = score + 1;
            message += `${userNumber} `
        }
    }
    message += `Punteggio finale: ${score}`
    messageDisplay.innerHTML = message;
}

// Montiamo il contenuto da visualizzare

display.innerHTML += `<div class="my-3">Memorizza i seguenti numeri:</div><div>`

for(let i = 1; i <= 5; i++){
    let randomNum = getRandomNumber(1,100);
    while(numbers.includes(randomNum)){
        randomNum = getRandomNumber(1,100);
    }
    numbers.push(randomNum);
    display.innerHTML += `<span class="px-5">${randomNum}</span>`
}

display.innerHTML += `</div><div class="my-3">I numeri scompariranno fra:</div>`