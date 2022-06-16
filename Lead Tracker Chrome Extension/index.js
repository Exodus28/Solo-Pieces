let myLeads = []            //empty leads array
let leadsRemaining          //remaining leads variable to be passed leads array after filter
let itemsToRemove = []      //empty array to be filled with leads to remove based on filter

const inputEl = document.getElementById("input-el") //text input field
const inputBtn = document.getElementById("input-btn") //input button

const ulEl = document.getElementById("ul-el")   //unordered list element
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )//get local storage

const deleteBtn = document.getElementById("delete-btn") //delete, save tab, select buttons
const tabBtn = document.getElementById("tab-btn")
const selectBtn = document.getElementById("select-btn")
const selectAllBox = document.getElementById("check0")

if (leadsFromLocalStorage) {            //if there is localStorage used, populate myLeads array
    myLeads = leadsFromLocalStorage
    render(myLeads)                     //call render function, passing in myLeads array
}

tabBtn.addEventListener("click", function(){    //on click of tab button call function
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){ //check active tab/window
        myLeads.push(tabs[0].url)                   //push tab url to myLeads array
        localStorage.setItem("myLeads", JSON.stringify(myLeads) ) //set array to local storage
        render(myLeads)                         //call render function
    })
})

function render(leads) {        //draw items to page
    let listItems = ""          //set empty string
    for (let i = 0; i < leads.length; i++) {        //use ` ` to input code within string -
                                                    //create list item, checkbox & set IDs,
                                                    //label, and hyperlink to myLeads item
        listItems += `          
            <li>
                <input type="checkbox" class="checkBox, check" id="cb-${[i]}">
                    <label>${[i + 1]}
                    <a target='_blank' href='${leads[i]}'>
                        ${leads[i]}
                    </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  //update unordered list with list items
}

deleteBtn.addEventListener("click", function() {    //onclick of delete button
    for (let i = 0; i < myLeads.length; i++){       //for each item in myLeads
        tickBox = document.getElementById(`cb-${[i]}`)  //if tickBox ID (set via listItems)
        if(tickBox.checked == true){                    //is checked
            itemsToRemove.push(`${myLeads[i]}`)         //push myLeads index item to empty array
            
            //console.log(itemsToRemove)
        }
            leadsRemaining = myLeads.filter(x => !itemsToRemove.includes(x)); 
            /* populate leadsRemaining variable with result(s) of filtering any items in myLeads
            which do NOT include those now stored in itemsToRemove array 
            
            N.B. as of time of writing I do not fully understand arrow functions YET, however 
            this was the only method I could successfully implement on researching removal of
            specific array items. Had previously attemped (many, many times) splice with some
            success but ran into issues with deleting multiple entries and this having a knock-on
            effect on the 'for' loop & the indexing of items within the array(s) */
            
            //console.log(leadsRemaining)         
    }
    myLeads = leadsRemaining //update myLeads array to adopt value of leadsRemaining
    itemsToRemove = []  //clear itemsToRemove array to avoid accidental deletions in future
    localStorage.clear() //clear localStorage so will be no duplication
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) //set localStorage to myLeads 
    render(myLeads) //render again to update results drawn to page
})

inputBtn.addEventListener("click", function() { //input button click
    myLeads.push(inputEl.value)                 //push input element value to myLeads array
    inputEl.value = ""                          //set input element value back to blank string
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )   //add to localStorage
    render(myLeads)                             //render
})

inputEl.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard and the input field is NOT blank
  if (event.key === "Enter" && inputEl.value != "") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    inputBtn.click();
  }
});

selectBtn.addEventListener("click", function(){ //select All button click
    if(selectAllBox.checked == true){       //if checked
        selectAllBox.checked = false        //set to false
        for(let i = 0; i < myLeads.length; i++){ //for all items in myLeads
            tickBox = document.getElementById(`cb-${[i]}`).checked = false  //set checked to false
        }
    }
    else if(selectAllBox.checked == false){ //if not checked
        selectAllBox.checked = true         //set to true
        for(let i = 0; i < myLeads.length; i++){ //for all in array
            tickBox = document.getElementById(`cb-${[i]}`).checked = true //set checked to true
        }
    }
    else
    console.log("none to check") //should never fire but just in case, y'know
})