let player = { //create player object containing name & chips
    name: "Per",
    chips: 200
}

let cardHand = [] //create empty array called cards
let sum = 0 //set initial sum to 0
let hasBlackJack = false //initial value to false
let isAlive = false
let message = "" //blank message
let messageEl = document.getElementById("message-el") //link HTML elements to JS
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let cardImg = document.getElementById("cardImg") // link for image
let cardImg2 = document.getElementById("cardImg2") 

let cardPosX = -5
let cardPosY = -5

playerEl.textContent = player.name + ": $" + player.chips //display name & chips



let cardImage = new Image()
cardImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/English_pattern_playing_cards_deck.svg/2560px-English_pattern_playing_cards_deck.svg.png'
cardImage.onload = function() {
  init()
}

let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

function init() {
  // future animation code goes here
  ctx.drawImage(cardImage, 0, 0, 2560, 1155, 0, 0, 195, 290)

}




function getRandomNumber() { //function to return random value
    let randomNumber = Math.floor( Math.random()*13) + 1 //floor random value

        return randomNumber
}

function getRandomSuit(){                      //set random suit 
    let randomSuit = Math.floor(Math.random() * 4)//this seems to favour 0 value a lot though??
    return randomSuit                             
}                                           //oh hold on... this must work fine, I think its 
                                            //the findIndex that is the issue with 0 values

function drawCard(){
    for(let i = 0; i < 4; i++){ //iterate though 4 suits

        let cardSuit = getRandomSuit() //assign random variable to gain array item
        console.log(cardSuit) // test this works

        let cardNumber = getRandomNumber()
        console.log(cardNumber)

        switch(cardSuit){
            case 0:
            cardPosY = -5
            for(let i = 0; i <= 13; i++){
                cardPosX += 196.153
                if(cardNumber === i){
                    cardImg.style.backgroundPosition = cardPosX + 'px ' + cardPosY + 'px'
                    //printNum = cardNumber[i]
                }
            }                                                     
            cardPosX = -5
            break
            
            case 1:
            cardPosY = 288.75
            for(let i = 0; i <= 13; i++){
                cardPosX += 196.153
                if(cardNumber === i){
                    cardImg.style.backgroundPosition = cardPosX + 'px ' + cardPosY + 'px'
                    //printNum = cardNumber[i]
                }
            } 
            cardPosX = -5
            break
            
            case 2:
            cardPosY = 577.5
            for(let i = 0; i <= 13; i++){
                cardPosX += 196.153
                if(cardNumber === i){
                    cardImg.style.backgroundPosition = cardPosX + 'px ' + cardPosY + 'px'
                    //printNum = cardNumber[i]
                }
            } 
            cardPosX = -5
            break
            
            case 3:
            cardPosY = 866.25
            for(let i = 0; i <= 13; i++){
                cardPosX += 196.153
                if(cardNumber === i){
                    cardImg.style.backgroundPosition = cardPosX + 'px ' + cardPosY + 'px'
                    //printNum = cardNumber[i]
                }
            } 
            cardPosX = -5
            break
        }
/*         if (printNum > 10){
            return 10
        }
        else if(printNum === 1){
            return 11
        } */
    }
}


function startGame() 
{ //start game
    isAlive = true //set alive to true
    let firstCard = drawCard() //run first rand card
    let secondCard = drawCard() // second rand
    cardHand = [firstCard, secondCard] //populate array with cards
    sum = firstCard + secondCard //total value of cards
    
    //cardImg.style.backgroundPosition = "-5px -860px"

    renderGame() //run render function
}

function renderGame() 
{
    cardsEl.textContent = "Cards: " //populate text content of cardsEl 
    for (let i = 0; i < cardHand.length; i++) 
    { //run through number of cards in array & add to string
        cardsEl.textContent += cardHand[i] + " "

    }
    
    sumEl.textContent = "Sum: " + sum  //return messages re game state
    if (sum <= 20) 
    {
        message = "Do you want to draw a new card?"
    } 
    else if (sum === 21) 
    {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } 
    else 
    {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() 
{ //generate new card
    if (isAlive === true && hasBlackJack === false) 
    { //but only if user is alive & doesn't have blackjack
        let card = drawCard() // get rand
        sum += card // sum incorporates new card into total
        cardHand.push(card) //push new card to array
        renderGame()        //call render game func
    }
}