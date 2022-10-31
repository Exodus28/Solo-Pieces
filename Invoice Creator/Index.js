const task1Btn = document.getElementById("btn1")
const task2Btn = document.getElementById("btn2")
const task3Btn = document.getElementById("btn3")

let servicePriceTotal = 0
const total = document.getElementById("result")

const ulEl = document.getElementById("tasks")

let myTasks = [{task:"Hose Yard", price: 15, bool: true}, 
               {task: "Walk Dog", price: 5, bool: true}, 
               {task: "Babysit", price: 35, bool: true}]

render(myTasks)

function render(tasks) {
    let listItems = ""
    for (let i = 0; i < tasks.length; i++) {
        listItems += `
            <li>
                <span class="tasks">'${myTasks[i].task}'</span>
                <span><button class="remove-btn" onclick="removeItem('${myTasks[i].task}')">Remove</button></span>
                <span class="itemCost">\$${myTasks[i].price}</span>
            </li>
        `
    }
    ulEl.innerHTML = listItems
    invoiceTotal()
}

task1Btn.addEventListener("click", function(){
    myTasks.push({task: "Wash Car", price: 10, bool: true})
    render(myTasks)
})

task2Btn.addEventListener("click", function(){
    myTasks.push({task: "Mow Lawn", price: 20, bool: true})
    render(myTasks)
})

task3Btn.addEventListener("click", function(){
    myTasks.push({task: "Pull Weeds", price: 30, bool: true})
    render(myTasks)
})

function removeItem(id){
    for(let i = 0; i < myTasks.length; i++){
        if(id === myTasks[i].task){
            myTasks.splice(i,1)
        }
    }
  render(myTasks)
}

function invoiceTotal(){
    for(let i = 0; i < myTasks.length; i++){
        servicePriceTotal += myTasks[i].price
        console.log(servicePriceTotal)
    }
    total.textContent = "£" + servicePriceTotal 
    servicePriceTotal = 0
}
