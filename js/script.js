// Recupero elementi dal DOM


const countdown = document.getElementById('countdown')
const numRandomList = document.getElementById('numbers-list')
const numUser = document.querySelector('input')
const button = document.querySelector('button')
const message = document.getElementById('message')


// definisco il timer
let timer;

// gestione del timer
let count = 1;
numRandomList.innerText = count;

timer = setInterval(() => {
    count++;
    numRandomList.innerText = count;
},1000)

setTimeout(() => {
    clearInterval(timer)}
    ,10000)



// Definisco l'array che conterrà i numeri random


function generateRandomNum(){
    let ArrayNumRandom = [];
    for (let i=0; i< 5; i++){
        ArrayNumRandom.push(Math.floor(Math.random() * 100) +1)
    }

    return ArrayNumRandom
    
}

let numRandom = generateRandomNum()



// dichiaro l'elemento della lista vuoto

let items = '';

// ciclo l'array
for (let i=0; i<numRandom.length; i++){
    // creo il list items concatenandolo alla variabile item
    items += `<li>${numRandom[i]}</li>`
}

// assegno a numRandomList
numRandomList.innerHTML = items