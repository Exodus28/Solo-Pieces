let player = {
	//player object
	name: "Guest", //name
	chips: 200 //money
};

let dealer = {
	//player 2 object - to be set up in more detail at later date
	name: "Computer",
	chips: 2500
};

let count = 0; //count out cards dealt
let cards = []; //card array
let p2Cards = [];
let firstCard, secondCard; //first two cards
let cardValue; //score value of the card
let sum = 0; //total score of the cards so far
let hasBlackJack = false; //gameplay condition
let isAlive = false; //gameplay condition
let hasHeld = false;
let message = ""; //default message displayed
let dMessage = "";
let start = document.getElementById("start-el"); //fetch corresponding HTML elements
let holdBtn = document.getElementById("hold-el");
let newCardBtn = document.getElementById("newCard-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let dealerSumEl = document.getElementById("dealerSum-el");
let cardsEl = document.getElementById("cards-el");
let dealerCardsEl = document.getElementById("dealerCards-el");
let playerEl = document.getElementById("player-el");
let dealerEl = document.getElementById("dealer-el");
let cardImg = new Image(); //new image variable & source
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
dealerEl.textContent = "Prize pool: $" + dealer.chips;

function faceDown() {
	//set default frames drawn from spritesheet
	drawFrame(12, 4, 0, 0);
	drawFrame(12, 4, scaledWidth, 0);
	drawFrame(12, 4, scaledWidth * 2, 0);
	drawFrame(12, 4, scaledWidth * 3, 0);
	drawFrame(12, 4, scaledWidth * 4, 0);
}

function startGame() {
	count = 0; //reset dealt cards count back to zero
	cards = []; //clear cards array from any previous game state
	p2cards = []; //clear opponent cards array
	faceDown();
	isAlive = true; //game condition set
	hasBlackJack = false;
	hasHeld = false;
	dealerSumEl.textContent = "";

	firstCard = drawCard(); //call drawCard function
	secondCard = drawCard();
	cards = [firstCard, secondCard]; //populate cards array with first two card values returned from drawCard() function
	sum = firstCard + secondCard; // tally total score of cards dealt so far

	getRandomCard(); //get random number
	p2card1 = cardValue; //set random number to dealer's card value
	getRandomCard(); //repeat the above for dealer's second card
	p2card2 = cardValue;
	p2cards = [p2card1, p2card2]; //add both cards to array

	p2sum = p2card1 + p2card2; //tally total card value of dealer's cards
	console.log(p2card1 + ", " + p2card2);
	dMessage = "Dealer's first two cards are " + p2cards[0] + " & " + p2cards[1]; //print out dealer's initial hand
	start.style.display = "none"; //remove start button to prevent infinite loop bug on end of hand - i.e. infinite wins/losses
	start.textContent = "NEXT ROUND";
	newCardBtn.style.display = "inline"; //ensure both new card button & hold/fold button are displayed after last round
	holdBtn.style.display = "inline";
	renderGame(); //call function to draw text to screen re game-state
}

function renderGame() {
	cardsEl.textContent = "Cards: "; //each card's value text content
	for (let i = 0; i < cards.length; i++) {
		//for each of the cards in the cards[] array
		cardsEl.textContent += cards[i] + " "; //add card value plus a space
	}

	sumEl.textContent = "Sum: " + sum; //as above

	if (cards.length === 5) {
		newCardBtn.style.display = "none"; //don't display new card button if user reaches 5 cards in a hand
	}

	if (hasHeld === true) {
		//if user has selected hold/fold
		newCardBtn.style.display = "none"; //remove both new card & hold buttons
		holdBtn.style.display = "none"; //in order to prevent infinite loop/wins/losses issue
		start.style.display = "inline"; //and display start button to begin next hand/round
		//game logic on scoring system below
		if (sum === p2sum) {
			message = "Dealer has " + p2sum + ", It's a draw!";
		} else if (sum > p2sum && sum < 22) {
			message = "Dealer has " + p2sum + ", You won!";
			player.chips += 50; //increment/decrement player/dealer chips based on conditions
			dealer.chips -= 50;
		} else if (sum < p2sum && p2sum < 22) {
			message = "Dealer has " + p2sum + ", You lost!";
			player.chips -= 50;
			dealer.chips += 50;
		} else if (sum > 21 && p2sum > 21) {
			message = "Dealer has " + p2sum + ", Both Dealer & You are out of the game!";
		} else if (sum > 21) {
			player.chips -= 50;
			dealer.chips += 50;
		} else if (p2sum > 21) {
			message = "Dealer has " + p2sum + ", Dealer is out of the game!";
			player.chips += 50;
			dealer.chips -= 50;
		}
	} else {
		//if prior to selecting hold/fold, loop through following options based on player's card values
		if (sum <= 20) {
			message = "Do you want to draw a new card?"; //if sum is less than 20 ask if they want a new card
		} else if (sum === 21) {
			//if user has blackjack, stop game, user has winning hand
			message = "You've got Blackjack!";
			hasBlackJack = true;
			newCardBtn.style.display = "none";
		} else if (sum > 21) {
			//message = "You're out of the game!"; //if above 21, user is bust, dock user chips
			isAlive = false;
			newCardBtn.style.display = "none";
		} else {
			message = "You cannot draw another card!";
		}
	}
	messageEl.textContent = message; //display messages from if/else statements
	dealerCardsEl.textContent = dMessage;
	playerEl.textContent = "Guest: $" + player.chips;
	dealerEl.textContent = "Prize pool: $" + dealer.chips;
}

function hold() {
	//set hasHeld to true, & for each card in dealer's cards array, get random value & log it to check
	hasHeld = true;
	for (let i = 0; i < p2cards.length; i++) {
		//loop through adding cards to dealer's hand if total is less than 17
		if (p2sum < 17) {
			getRandomCard(); //get random value
			let p2card = cardValue; //assign new card value
			console.log(p2card); //log it to double check any errors
			p2sum += p2card; //add the card value to the total
			p2cards.push(p2card); //add the card to the array
			console.log(p2sum);
		} else if (p2sum >= 17 && p2sum < 22) {
			console.log(p2sum); //again double check
		}
	}
	renderGame(); //then update game UI
}

function newCard() {
	if (
		isAlive === true && //if user is still in the game & hasn't got blackjack, hasn't got more than 5 cards, and hasn't folded/held
		hasBlackJack === false &&
		cards.length < 5 &&
		hasHeld === false
	) {
		//only allow user to receive new card if both alive and doesn't have blackjack
		let card = drawCard(); //new card = drawCard function
		sum += card; //add card value to sum
		cards.push(card); //push card value to array/hand of cards
	}
	renderGame(); //update display
}

function drawFrame(frameX, frameY, canvasX, canvasY) {
	//assisted by https://dev.to/martyhimmel/animating-sprite-sheets-with-javascript-ag3
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
	switch (
		count //switch statement based on count variable value
	) {
		case 0:
			drawFrame(getRandomCard() - 1, getRandomSuit(), 0, 0); //draw first card
			count++; //increment count
			return cardValue; //return card value
		case 1:
			drawFrame(getRandomCard() - 1, getRandomSuit(), scaledWidth, 0); //scale width > move frame on X axis by width of sprite
			count++;
			return cardValue;
		case 2:
			drawFrame(getRandomCard() - 1, getRandomSuit(), scaledWidth * 2, 0); //move frame by two cards widths two draw third card
			count++;
			return cardValue;
		case 3:
			drawFrame(getRandomCard() - 1, getRandomSuit(), scaledWidth * 3, 0); //rinse and repeat the above
			count++;
			return cardValue;
		case 4:
			drawFrame(getRandomCard() - 1, getRandomSuit(), scaledWidth * 4, 0); //and again
			count++;
			return cardValue;
	}
}

function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 12) + 1; //floor random number between 1 & 13
	if (randomNumber > 10) {
		//if the random is above 10, make sure the 10th, 11th, 12th & 13th cards values are all stil 10
		cardValue = 10;
	} else if (randomNumber === 1) {
		//if its an ace, return cardValue of 11
		cardValue = 11;
	} else cardValue = randomNumber; //otherwise return the randomNumber value
	return randomNumber;
}

function getRandomSuit() {
	//as above for the 4 suits
	let randomSuit = Math.floor(Math.random() * 4);
	return randomSuit;
}
