let player = { //create player object containing name & chips
    name: "Per",
    chips: 200
}

let cardNums = [] //create empty array called cards
let sum = 0 //set initial sum to 0
let hasBlackJack = false //initial value to false
let isAlive = false
let message = "" //blank message
let messageEl = document.getElementById("message-el") //link HTML elements to JS
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let cardImg = document.getElementById("cardImg") // link div for image
let cardImg2 = document.getElementById("cardImg2") 


playerEl.textContent = player.name + ": $" + player.chips //display name & chips

/*function drawImgRand()   //again just figuring out how I might get this working
{
    //generate floored random value between 1 & 4
    //use random in for loop
    for(let i = 0; i < 5; i++)
    {
        //loop through 4 suits positions
        //positionY = change y value of background-position
        //return position
    }
}

*/

function getRandomCard() 
{ //function to return random value
    let randomNumber = Math.floor( Math.random()*13 ) + 1 //floor random value

    if (randomNumber > 10) 
    { //limit value of randomNum to 10
        return 10  
    } 
    else if (randomNumber === 1) 
    { //set Ace to = 11 - want to come back to this bit to give option to switch between 1 or 11
        return 11
    } 
    else { //otherwise just return floored Random
        return randomNumber
    }
}

function getRandomSuit()
{
    let randomSuit = Math.floor(Math.random()*4) + 1
    return randomSuit
}

function startGame() 
{ //start game
    isAlive = true //set alive to true
    let firstCard = getRandomCard() //run first rand card
    let secondCard = getRandomCard() // second rand
    cardNums = [firstCard, secondCard] //populate array with cards
    sum = firstCard + secondCard //total value of cards
    let randomSuit = getRandomSuit()
    let randomSuit2 = getRandomSuit()
   
    for(let i = 0; i <= cardNums[i]; i++){   
        //loop through 4 suits positions
        //positionY = change y value of background-position
        //return position
        
        if(cardNums[i] === 11)     //there has got to be a way I can implement this without all this repetition
        {                           //though I can't think straight right now. Might need to try pseudo-code on paper etc
            
            if(cardNums[0]){
                cardImg.style.backgroundPositionY = "-5px"
            }
            else if (cardNums[1]){
                cardImg2.style.backgroundPositionY = "-5px"
            }
            if(randomSuit === 1){
                if(cardNums[0]){
                    cardImg.style.backgroundPositionX = "-5px" // images appear to be 190 x 285 so should be able to use an array on this now i know this?
                }
                else if(cardNums[1]){
                    cardImg2.style.backgroundPositionX = "-5px"
                }
            }
            else if(randomSuit === 2)
            {
                if(cardNums[0]){
                    cardImg.style.backgroundPosition = "-5px -290px"
                }
                else if(cardNums[1]){
                    cardImg2.style.backgroundPosition = "-5px -290px"
                }
            }
            else if(randomSuit === 3)
            {
                cardImg.style.backgroundPosition = "-5px -575px"
            }
            else
            {
                cardImg.style.backgroundPosition = "-5px -860px"
            }
    }
    else if(firstCard === 10)
    {
        if(randomSuit === 1){
            cardImg.style.backgroundPosition = "205px -5px"
        }
        else if(randomSuit === 2)
        {
            cardImg.style.backgroundPosition = "205px -290px"
        }
        else if(randomSuit === 3)
        {
            cardImg.style.backgroundPosition = "205px -575px"
        }
        else{
            cardImg.style.backgroundPosition = "205px -860px"
        }
    }
    else if(firstCard === 9)
    {
        if(randomSuit === 1){
            cardImg.style.backgroundPosition = "985px -5px"
        }
        else if(randomSuit === 2)
        {
            cardImg.style.backgroundPosition = "985px -290px"
        }
        else if(randomSuit === 3)
        {
            cardImg.style.backgroundPosition = "985px -575px"
        }
        else{
            cardImg.style.backgroundPosition = "985px -860px"
        }
    }
    else if(firstCard === 8)
    {
        if(randomSuit === 1){
            cardImg.style.backgroundPosition = "1180px -5px"
        }
        else if(randomSuit === 2)
        {
            cardImg.style.backgroundPosition = "1180px -290px"
        }
        else if(randomSuit === 3)
        {
            cardImg.style.backgroundPosition = "1180px -575px"
        }
        else{
            cardImg.style.backgroundPosition = "1180px -860px"
        }
    }
    else if(firstCard === 7)
    {
        if(randomSuit === 1){
            cardImg.style.backgroundPosition = "1375px -5px"
        }
        else if(randomSuit === 2)
        {
            cardImg.style.backgroundPosition = "1375px -290px"
        }
        else if(randomSuit === 3)
        {
            cardImg.style.backgroundPosition = "1375px -575px"
        }
        else{
            cardImg.style.backgroundPosition = "1375px -860px"
        }
    }
    else if(firstCard === 6)
    {
        if(randomSuit === 1){
            cardImg.style.backgroundPosition = "1570px -5px"
        }
        else if(randomSuit === 2)
        {
            cardImg.style.backgroundPosition = "1570px -290px"
        }
        else if(randomSuit === 3)
        {
            cardImg.style.backgroundPosition = "1570px -575px"
        }
        else{
            cardImg.style.backgroundPosition = "1570px -860px"
        }
    }
    else if(firstCard === 5)
    {
        if(randomSuit === 1){
            cardImg.style.backgroundPosition = "1765px -5px"
        }
        else if(randomSuit === 2)
        {
            cardImg.style.backgroundPosition = "1765px -290px"
        }
        else if(randomSuit === 3)
        {
            cardImg.style.backgroundPosition = "1765px -575px"
        }
        else{
            cardImg.style.backgroundPosition = "1765px -860px"
        }
    }
    else if(firstCard === 4)
    {
        if(randomSuit === 1){
            cardImg.style.backgroundPosition = "-590px -5px"
        }
        else if(randomSuit === 2)
        {
            cardImg.style.backgroundPosition = "-590px -290px"
        }
        else if(randomSuit === 3)
        {
            cardImg.style.backgroundPosition = "-590px -575px"
        }
        else{
            cardImg.style.backgroundPosition = "-590px -860px"
        }
    }
    else if(firstCard === 3)
    {
        if(randomSuit === 1){
            cardImg.style.backgroundPosition = "-395px -5px"
        }
        else if(randomSuit === 2)
        {
            cardImg.style.backgroundPosition = "-395px -290px"
        }
        else if(randomSuit === 3)
        {
            cardImg.style.backgroundPosition = "-395px -575px"
        }
        else{
            cardImg.style.backgroundPosition = "-395px -860px"
        }
    }
    else if(firstCard === 2)
    {
        if(randomSuit === 1){
            cardImg.style.backgroundPosition = "-200px -5px"
        }
        else if(randomSuit === 2)
        {
            cardImg.style.backgroundPosition = "-200px -290px"
        }
        else if(randomSuit === 3)
        {
            cardImg.style.backgroundPosition = "-200px -575px"
        }
        else{
            cardImg.style.backgroundPosition = "-200px -860px"
        }
    }
    }
    
    /* if(secondCard === 11)    
    {                           
        if(randomSuit2 === 1){
            cardImg2.style.backgroundPosition = "-5px -5px" 
        }
        else if(randomSuit2 === 2)
        {
            cardImg2.style.backgroundPosition = "-5px -290px"
        }
        else if(randomSuit2 === 3)
        {
            cardImg2.style.backgroundPosition = "-5px -575px"
        }
        else{
            cardImg2.style.backgroundPosition = "-5px -860px"
        }
    }
    else if(secondCard === 10)
    {
        if(randomSuit2 === 1){
            cardImg2.style.backgroundPosition = "205px -5px"
        }
        else if(randomSuit2 === 2)
        {
            cardImg2.style.backgroundPosition = "205px -290px"
        }
        else if(randomSuit2 === 3)
        {
            cardImg2.style.backgroundPosition = "205px -575px"
        }
        else{
            cardImg2.style.backgroundPosition = "205px -860px"
        }
    }
    else if(secondCard === 9)
    {
        if(randomSuit2 === 1){
            cardImg2.style.backgroundPosition = "985px -5px"
        }
        else if(randomSuit2 === 2)
        {
            cardImg2.style.backgroundPosition = "985px -290px"
        }
        else if(randomSuit2 === 3)
        {
            cardImg2.style.backgroundPosition = "985px -575px"
        }
        else{
            cardImg2.style.backgroundPosition = "985px -860px"
        }
    }
    else if(secondCard === 8)
    {
        if(randomSuit2 === 1){
            cardImg2.style.backgroundPosition = "1180px -5px"
        }
        else if(randomSuit2 === 2)
        {
            cardImg2.style.backgroundPosition = "1180px -290px"
        }
        else if(randomSuit2 === 3)
        {
            cardImg2.style.backgroundPosition = "1180px -575px"
        }
        else{
            cardImg2.style.backgroundPosition = "1180px -860px"
        }
    }
    else if(secondCard === 7)
    {
        if(randomSuit2 === 1){
            cardImg2.style.backgroundPosition = "1375px -5px"
        }
        else if(randomSuit2 === 2)
        {
            cardImg2.style.backgroundPosition = "1375px -290px"
        }
        else if(randomSuit2 === 3)
        {
            cardImg2.style.backgroundPosition = "1375px -575px"
        }
        else{
            cardImg2.style.backgroundPosition = "1375px -860px"
        }
    }
    else if(secondCard === 6)
    {
        if(randomSuit2 === 1){
            cardImg2.style.backgroundPosition = "1570px -5px"
        }
        else if(randomSuit2 === 2)
        {
            cardImg2.style.backgroundPosition = "1570px -290px"
        }
        else if(randomSuit2 === 3)
        {
            cardImg2.style.backgroundPosition = "1570px -575px"
        }
        else{
            cardImg2.style.backgroundPosition = "1570px -860px"
        }
    }
    else if(secondCard === 5)
    {
        if(randomSuit2 === 1){
            cardImg2.style.backgroundPosition = "1765px -5px"
        }
        else if(randomSuit2 === 2)
        {
            cardImg2.style.backgroundPosition = "1765px -290px"
        }
        else if(randomSuit2 === 3)
        {
            cardImg2.style.backgroundPosition = "1765px -575px"
        }
        else{
            cardImg2.style.backgroundPosition = "1765px -860px"
        }
    }
    else if(secondCard === 4)
    {
        if(randomSuit2 === 1){
            cardImg2.style.backgroundPosition = "-590px -5px"
        }
        else if(randomSuit2 === 2)
        {
            cardImg2.style.backgroundPosition = "-590px -290px"
        }
        else if(randomSuit2 === 3)
        {
            cardImg2.style.backgroundPosition = "-590px -575px"
        }
        else{
            cardImg2.style.backgroundPosition = "-590px -860px"
        }
    }
    else if(secondCard === 3)
    {
        if(randomSuit2 === 1){
            cardImg2.style.backgroundPosition = "-395px -5px"
        }
        else if(randomSuit2 === 2)
        {
            cardImg2.style.backgroundPosition = "-395px -290px"
        }
        else if(randomSuit2 === 3)
        {
            cardImg2.style.backgroundPosition = "-395px -575px"
        }
        else{
            cardImg2.style.backgroundPosition = "-395px -860px"
        }
    }
    else if(secondCard === 2)
    {
        if(randomSuit2 === 1){
            cardImg2.style.backgroundPosition = "-200px -5px"
        }
        else if(randomSuit2 === 2)
        {
            cardImg2.style.backgroundPosition = "-200px -290px"
        }
        else if(randomSuit2 === 3)
        {
            cardImg2.style.backgroundPosition = "-200px -575px"
        }
        else{
            cardImg2.style.backgroundPosition = "-200px -860px"
        }
    } */

    renderGame() //run render function
}

function renderGame() 
{
    cardsEl.textContent = "Cards: " //populate text content of cardsEl 
    for (let i = 0; i < cardNums.length; i++) 
    { //run through number of cards in array & add to string
        cardsEl.textContent += cardNums[i] + " "

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
        let card = getRandomCard() // get rand
        sum += card // sum incorporates new card into total
        cardNums.push(card) //push new card to array
        renderGame()        //call render game func
    }
}