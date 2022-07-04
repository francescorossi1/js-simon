// Steps

// Hardcodiamo tutto in pagina e poi facciamo scrivere a js

const display = document.getElementById('display');
const countdown = document.getElementById('countdown');
const numbers = [];
let count = 30;

// getRandomNumber

const getRandomNumber = (minNum, maxNum) => {
    return Math.floor(Math.random() * (maxNum + 1 - minNum)) + minNum;
}

// Montiamo il contenuto da visualizzare

display.innerHTML += `<div class="my-3">Memorizza i seguenti numeri:</div><div>`

for(let i = 0; i < 5; i++){
    let randomNum = getRandomNumber(1,100);
    while(numbers.includes(randomNum)){
        randomNum = getRandomNumber(1,100);
    }
    numbers.push(randomNum);
    display.innerHTML += `<span class="px-5">${randomNum}</span>`
}

display.innerHTML += `</div><div class="my-3">I numeri scompariranno fra:</div>`
countdown.innerText = count;
