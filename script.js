const randomNumber = () => {
const number = Math.floor(Math.random() * (13 - 1) + 1);
return number +".jpg";
}

let drawRandomCard = document.querySelector('#drawCardButton').addEventListener('click', () => {    
    let gameCard = document.querySelector('#gameCard');
    gameCard.setAttribute('src', randomNumber());
})


// console.log(randomNumber());

