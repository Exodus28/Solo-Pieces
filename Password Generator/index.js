let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',                     'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',                     'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '_', '"', '£',                     '`', '|', ',', '.', '/', '~', "'", '[', ']', '{', '}', '>', '<']
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let chars = []  // set empty array to have above arrays added to in later function
let randValue   
let lowCase = document.getElementById("lowCaseBox") // link to checkbox elements
let upCase = document.getElementById("upCaseBox")
let nums = document.getElementById("numBox")
let syms = document.getElementById("symBox")
let result1 = document.getElementById("resultOne")  // link to the results boxes/buttons
let result2 = document.getElementById("resultTwo")
let result3 = document.getElementById("resultThree")
let result4 = document.getElementById("resultFour")
let results = [result1, result2, result3, result4]  // create array of results to loop through
let pwLength
let slider = document.getElementById("slide") // link to slider element
let output = document.getElementById("slideVal") // link to span element to display value

let resultsContainer = document.getElementById("results") // link to container of results buttons

resultsContainer.style.display = "none" // on window load, disable display of results container

output.innerHTML = slider.value // Display default slider value set in html

            // On any input to slider element i.e. as dragged, update the current slider value 
slider.oninput = function() {
  output.innerHTML = this.value
}

function random(){                      // floor the random number, max length of chars array
    randValue = Math.floor(Math.random() * chars.length)     
    return randValue                                        
}

function printResults(){                                     // display results container 
    resultsContainer.style.display = "inline-table"         // ensure chars array is empty at start
	chars = []                                              // of function
    for(let i = 0; i < results.length; i++){
		results[i].textContent = ''                         // loop through results button array 
	}                                                       // set empty strings at function start
    getState()                                             // run getState function
    for(let k = 0; k < pwLength; k++){                      // loop through for password length
        for(let i = 0; i < results.length; i++){            // loop through results array again
			random()                                        // run random function
            if(lowCase.checked == false && upCase.checked == false // if all unchecked, prompt user
            && nums.checked == false && syms.checked == false){     // with button text content
                results[0].textContent = "Select"
                results[1].textContent = "A"
                results[2].textContent = "Password"
                results[3].textContent = "Option"
            }
            else {
                results[i].textContent += chars[randValue]  // otherwise, populate button content
            }                                               // with random value of chars[]
    	}        
    }
}

function getState(){
	pwLength = slider.value                 // set password length to that of current slider value
	if(lowCase.checked === true){           // if checkbox selected, add relevant array to chars[]
		chars = chars.concat(lowerCase)
	}	
	if(upCase.checked === true){
		chars = chars.concat(upperCase)
	}
	if(nums.checked === true){
		chars = chars.concat(numbers)
	}
	if(syms.checked === true){
		chars = chars.concat(symbols)
	}
}

function copy(result){
    let input = document.createElement('input');   // create element
    for(let i = 0; i < results.length; i++){       // loop through results buttons
        if(result === 1){                          // if result element is 1 on button input
            input.value = results[0].textContent   // set value to equal button text content
        }
        else if(result === 2){
            input.value = results[1].textContent
        }
        else if(result === 3){
            input.value = results[2].textContent
        }
        else if(result === 4){
            input.value = results[3].textContent
        }                       
	}
    document.body.appendChild(input);       // add element to document body
    input.select();                         // so we can select()
    document.execCommand('copy');           // in order to copy to clipboard
    document.body.removeChild(input);       // now remove newly created temporary element          
}