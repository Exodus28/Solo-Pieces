let tallyEl = document.getElementById("tally-el")
let countEl = document.getElementById("init-count-el")
let groupEl = document.getElementById("group-el")

let count = 0
let tally = 0
let man = 0
let woman = 0
let boy = 0
let girl = 0
let group = 0

function incrementM() {
    count += 1
    countEl.textContent = count
    man += 1
}
function incrementW() {
    count += 1
    countEl.textContent = count
    woman += 1
}
function incrementB() {
    count += 1
    countEl.textContent = count
    boy += 1
}
function incrementG() {
    count += 1
    countEl.textContent = count
    girl += 1
}

function groups(){
    let groupStr = "Group Total: " + count + ", "
    if(man >= 1){
        groupStr += "Men: " + man + ", "
        groupEl.textContent = groupStr
        man = 0
    }
    if(woman >= 1){
        groupStr += "Women: " + woman + ", "
        groupEl.textContent = groupStr
        woman = 0
    }
    if(boy >= 1){
        groupStr += "Boys " + boy + ", "
        groupEl.textContent = groupStr
        boy = 0
    }
    if(girl >= 1){
        groupStr += "Girls: " + girl + ", "
        groupEl.textContent = groupStr
        girl = 0
    }
    let ul = document.getElementsByTagName('ul')[0]
    let li = document.createElement('li')
    let node = document.createTextNode(groupStr)
    li.appendChild(node)
    ul.appendChild(li)
}

function remove() {
    count = 0
    countEl.textContent = 0
    document.getElementById("ul").innerHTML = "";
    document.getElementById("group-el").innerHTML = "Groups: ";
}

function reset() {
    count = 0
    tally = 0
    countEl.textContent = 0
    tallyEl.textContent = "Previous entries: "    
    document.getElementById("ul").innerHTML = "";
    document.getElementById("group-el").innerHTML = "Groups: ";
}

function submit() {
    let countStr = count + tally + " Total" 
    tally += count
    tallyEl.textContent = "Previous entries: " + countStr
    countEl.textContent = 0
    count = 0
}
