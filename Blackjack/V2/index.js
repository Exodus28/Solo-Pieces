let player = { 			//player object
	name: "Guest",		//name
	chips: 200			//money
};

let dealer = {			//player 2 object
	name: "Computer",   
	chips: 2000
}

let count = 0; //count out cards dealt
let cards = []; //card array
let firstCard, secondCard; //first two cards
let cardValue;			   //score value of the card
let sum = 0;			   //total score of the cards so far
let hasBlackJack = false;  //gameplay condition
let isAlive = false;       //gameplay condition
let hasWon = false;
let hasLost = false;
let message = "";		   //default message displayed
let messageEl = document.getElementById("message-el"); //fetch corresponding HTML elements
let sumEl = document.getElementById("sum-el");			
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let cardImg = new Image();							//new image variable & source
cardImg.src =
	"https://www.spriters-resource.com/resources/sheets/104/107016.png?updated=1552619811";
cardImg.onload = function () {
	faceDown(); //call following function on image load
};

let canvas = document.querySelector("canvas"); //fetch canvas element
let ctx = canvas.getContext("2d");			
let imgWidth = 71; //set image width
let imgHeight = 96; //set height
let scaledWidth = imgWidth * 2; //scale image
let scaledHeight = imgHeight * 2;

playerEl.textContent = player.name + ": $" + player.chips; //score tracker

function faceDown() { //set default frames drawn from spritesheet
	drawFrame(12, 4, 0, 0);
	drawFrame(12, 4, scaledWidth, 0);
	drawFrame(12, 4, scaledWidth * 2, 0);
	drawFrame(12, 4, scaledWidth * 3, 0);
	drawFrame(12, 4, scaledWidth * 4, 0);
}

function startGame() {
	count = 0; //reset dealt cards count back to zero
	cards = [];//clear cards array from any previous game state
	faceDown();
	isAlive = true; //game condition set
	hasBlackJack = false;
	firstCard = drawCard(); //call drawCard function
	secondCard = drawCard();
	cards = [firstCard, secondCard]; //populate cards array with first two card values returned from drawCard() function
	sum = firstCard + secondCard; // tally total score of cards dealt so far
	renderGame(); //call function to draw text to screen re game-state
}

function renderGame() {
	cardsEl.textContent = "Cards: "; //each card's value text content
	for (let i = 0; i < cards.length; i++) { //for each of the cards in the cards[] array
		cardsEl.textContent += cards[i] + " "; //add card value plus a space
	}

	sumEl.textContent = "Sum: " + sum; //as above
	if (sum <= 20) {
		message = "Do you want to draw a new card?"; //if sum is less than 20 ask if they want a new card
	} else if (sum === 21) { //if user has blackjack, stop game, user has winning hand
		message = "You've got Blackjack!";
		hasBlackJack = true;
		player.chips += 100 //increment score/chips
		playerEl.textContent = player.name + ": $" + player.chips;
	} else if (sum > 21) {
		message = "You're out of the game!"; //if above 21, user is bust, dock user chips 
		isAlive = false;
		player.chips -= 20
		playerEl.textContent = player.name + ": $" + player.chips;
	} else {
		message = "";
	}
	messageEl.textContent = message; //display message from if/else statements
}

function newCard() {
	if (isAlive === true && hasBlackJack === false) { //only allow user to receive new card if both alive and doesn't have blackjack
		let card = drawCard(); //new card = drawCard function
		sum += card; //add card value to sum
		cards.push(card); //push card value to array/hand of cards
		renderGame(); //update display
	}
}

function drawFrame(frameX, frameY, canvasX, canvasY) {	//assisted by https://dev.to/martyhimmel/animating-sprite-sheets-with-javascript-ag3
	ctx.drawImage(
		cardImg, //source image
		frameX * imgWidth, //frame X value Width
		frameY * imgHeight, // frame Y value Width
		imgWidth, 
		imgHeight,
		canvasX, //X coord destination canvas
		canvasY, //Y coord destination canvas
		scaledWidth, //scale image
		scaledHeight
	);
}

function drawCard() {
	switch (count) { //switch statement based on count variable value
		case 0:
			drawFrame(getRandomCard() - 1, getRandomSuit(), 0, 0); //draw first card
			count++;											   //increment count
			return cardValue;									   //return card value
			break;
		case 1:
			drawFrame(getRandomCard() - 1, getRandomSuit(), scaledWidth, 0); //scale width > move frame on X axis by width of sprite
			count++;
			return cardValue;
			break;
		case 2:
			drawFrame(getRandomCard() - 1, getRandomSuit(), scaledWidth * 2, 0); //move frame by two cards widths two draw third card
			count++;
			return cardValue;
			break;
		case 3:
			drawFrame(getRandomCard() - 1, getRandomSuit(), scaledWidth * 3, 0); //rinse and repeat the above
			count++;
			return cardValue;
			break;
		case 4:
			drawFrame(getRandomCard() - 1, getRandomSuit(), scaledWidth * 4, 0); //and again
			count++;
			return cardValue;
			break;
		case 5: //if count reaches 6, reset game
			faceDown();
			count = 0;
			break;
	}
}

function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 12) + 1; //floor random number between 1 & 13
	if (randomNumber > 10) {							   //if the random is above 10, make sure the 10th, 11th, 12th & 13th cards values are all stil 10
		cardValue = 10;					
	} else if (randomNumber === 1) {					   //if its an ace, return cardValue of 11
		cardValue = 11;
	} else cardValue = randomNumber;					   //otherwise return the randomNumber value 
	return randomNumber;
}

function getRandomSuit() {									//as above for the 4 suits
	let randomSuit = Math.floor(Math.random() * 4);
	return randomSuit;
}
