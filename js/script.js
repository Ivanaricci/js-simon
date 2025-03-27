// Recupero elementi dal DOM


const countdown = document.getElementById('countdown')
const numRandomList = document.getElementById('numbers-list')
const numUser = document.querySelectorAll('#input-group input')
const button = document.querySelector('button')
const message = document.getElementById('message')
const instructions = document.getElementById('instructions')
const answersForm = document.getElementById('answers-form')



// definisco il timer
let timer;
let count = 1;

countdown.innerText = count;


timer = setInterval(() => {
    count++;
    countdown.innerText = count;
},1000)

setTimeout(() => {
    clearInterval(timer);
    numRandomList.innerHTML = '';
    instructions.innerHTML = 'Inserisci i numeri memorizzati, anche in ordine casuale';
    answersForm.classList.remove("d-none")
},10000)


// gestione numeri random
// Definisco l'array che conterrà i numeri random


function generateRandomNum(){
    let ArrayNumRandom = [];
    for (let i=0; i< 5; i++){
        ArrayNumRandom.push(Math.floor(Math.random() * 50) +1)
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


button.addEventListener('click', function(event){
    event.preventDefault();

    // prendo i valori inseriri dall'utente e li inserisco nell'array
    let userNumbers = [];
    for (let i=0; i<numUser.length; i++){
        userNumbers.push(parseInt(numUser[i].value));
    }

   

    
})