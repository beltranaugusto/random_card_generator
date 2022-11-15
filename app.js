let cards = ["♠", "♥", "♣", "♦"]
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"]


let type_rows = document.querySelectorAll(".type-row")
let random_card = `${cards[Math.floor(Math.random() * cards.length)]}`

for(let row of type_rows){
    if (random_card === "♥"){
        row.classList.add("red")
    }
    row.innerHTML = random_card
}

document.querySelector(".row").innerHTML = `${values[Math.floor(Math.random() * values.length)]}`
