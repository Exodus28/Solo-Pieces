// javascript
let cardImgArray = [["1a",2,3,4,5,6,7,8,9,10,11,12,13], //create multi-dimensional array
                    ["1b",2,3,4,5,6,7,8,9,10,11,12,13], //array of 4 arrays of 13 card values
                    ["1c",2,3,4,5,6,7,8,9,10,11,12,13], //string at beginning to test which
                    ["1d",2,3,4,5,6,7,8,9,10,11,12,13]] //array is being used in the random values                                      //later on

let cardPosX = -5
let cardPosY = -5

function randomSuit(){                      //set random suit 
    let rand = Math.floor(Math.random() * 4)//this seems to favour 0 value a lot though??
    return rand
}

for(let k = 0; k < cardImgArray.length; k++){ //iterate though 4 suits
    let suitRand = cardImgArray.find(randomSuit) //assign rand variable to gain array item
    console.log("index # " + cardImgArray.find(randomSuit)) // test this works
    
    //let suitRand = cardImgArray[Math.floor(Math.random() * cardImgArray.length)]; //tested this                                                                                   //same result
    console.log(suitRand)
    
    if(suitRand = 0){
        cardPosY = -5
        for(let i = 0; i < cardImgArray[k].length; i++){
            cardPosX += 195
            console.log(/* '"' + cardPosX + 'px ' +  */cardPosY +'px"') 
        }                                                               //edited out cardPosX as it                                                                 //seems to work fine &                                                                      //cardPosY is the issue                                                                     //right now
        
        cardPosX = -5
    }
    else if(suitRand = 1){
        cardPosY = 290
        for(let i = 0; i < cardImgArray[k].length; i++){
            cardPosX += 195
            console.log(/* '"' + cardPosX + 'px ' +  */cardPosY +'px"')
        }
        cardPosX = -5
    }
   else if(suitRand = 2){
        cardPosY = 580
        for(let i = 0; i < cardImgArray[k].length; i++){
            cardPosX += 195
            console.log(/* '"' + cardPosX + 'px ' +  */cardPosY +'px"')
        }
        cardPosX = -5
    }
    else if(suitRand = 3){
        cardPosY = 870
        for(let i = 0; i < cardImgArray[k].length; i++){
            cardPosX += 195
            console.log(/* '"' + cardPosX + 'px ' +  */cardPosY +'px"')
        }
        cardPosX = -5
    }
}

