let myLeads = []
let checkBoxes = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")
const selectBtn = document.getElementById("select-btn")
const selectAllBox = document.getElementById("check0")

let leadsRemaining
let itemsToRemove = []

const testBtn = document.getElementById("test-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
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
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("click", function() {
    for (let i = 0; i < myLeads.length; i++){
        tickBox = document.getElementById(`cb-${[i]}`)
        if(tickBox.checked == true){
            itemsToRemove.push(`${myLeads[i]}`)
            console.log(itemsToRemove)
        }
            leadsRemaining = myLeads.filter(x => !itemsToRemove.includes(x));
            console.log(leadsRemaining)         
    }
    myLeads = leadsRemaining
    localStorage.clear()
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})

selectBtn.addEventListener("click", function(){
    if(selectAllBox.checked == true){
        selectAllBox.checked = false
        for(let i = 0; i < myLeads.length; i++){
            tickBox = document.getElementById(`cb-${[i]}`).checked = false
        }
    }
    else if(selectAllBox.checked == false){
        selectAllBox.checked = true
        for(let i = 0; i < myLeads.length; i++){
            tickBox = document.getElementById(`cb-${[i]}`).checked = true
        }
    }
    else
    console.log("none to check")
})