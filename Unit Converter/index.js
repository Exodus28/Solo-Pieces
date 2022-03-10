let inputNo = document.getElementById("number") //set var to text field input
let lengthEl = document.getElementById("length") //set vars to paragraph ids
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

function convert(){
    let lengthImp = inputNo.value * 3.28084 //set imperial unit var values
    let volumeImp = inputNo.value * 0.219969
    let massImp = inputNo.value *  2.20462
    
    let lengthMet = inputNo.value * 0.3048 //set metric unit var values
    let volumeMet = inputNo.value * 4.54609
    let massMet = inputNo.value * 0.453592

    let lengthImpStr = lengthImp.toFixed(3) //use toFixed to set to 3 decimal places 
    let volumeImpStr = volumeImp.toFixed(3) //instead of setting manual character limit variable
    let massImpStr = massImp.toFixed(3)     //to fix string length like in previous attempt
    let lengthMetStr = lengthMet.toFixed(3)
    let volumeMetStr = volumeMet.toFixed(3)
    let massMetStr = massMet.toFixed(3)
    
    if (inputNo.value == ""){       //if text field is blank, set p elements to blank
        lengthEl.textContent = ""
        volumeEl.textContent = ""
        massEl.textContent = ""    
    }
    else if (inputNo.value == 1){  //update to display value & added text (singular)
        lengthEl.textContent = (inputNo.value + " " + "metre is equal to " + lengthImpStr + " feet"
        + " | " + inputNo.value + " " + "foot is equal to " + lengthMetStr + " metres")
        
        volumeEl.textContent = (inputNo.value + " " + "litre is equal to " + volumeImpStr + " gallons"+ " | " + inputNo.value + " " + "gallon is equal to " + volumeMetStr + " litres")
        
        massEl.textContent = (inputNo.value + " " + "kilogram is equal to " + massImpStr + " pounds"
        + " | " + inputNo.value + " " + "pound is equal to " + massMetStr + " kilograms")
    }
    else{        
        //update html <p> elements to display value + added text (plural)
        lengthEl.textContent = (inputNo.value + " " + "metres is equal to " + lengthImpStr + " feet"
        + " | " + inputNo.value + " " + "feet is equal to " + lengthMetStr + " metres")
        
        volumeEl.textContent = (inputNo.value + " " + "litres is equal to " + volumeImpStr + 
        " gallons" + " | " + inputNo.value + " " + "gallons is equal to " + volumeMetStr + 
        " litres")
        
        massEl.textContent = (inputNo.value + " " + "kilograms is equal to " + massImpStr + " pounds" + " | " + inputNo.value + " " + "pounds is equal to " + massMetStr + " kilograms")
    }
}

        //clear input & displayed conversions
function revert() {
        inputNo.value = ""
        lengthEl.textContent = ""
        volumeEl.textContent = ""
        massEl.textContent = ""  
}