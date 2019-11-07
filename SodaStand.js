forever(function () {
    for (let i = 0; i < currency; i++) {
        light.setPixelColor(i, Colors.Green)
    }
}
)

let drink = ["Coca Cola", "Sprite", "Fanta",]
let size = ["Small", "Medium", "Large"] //Small = €2,-, Medium = €3,-, Large = €4,-
let currency = 0

function order() {
    let randomDrink = Math.randomRange(0, drink.length - 1) //kiest een random Drink
    let randomSize = Math.randomRange(0, size.length - 1) //kiest een random Size

    console.log(`Ik wil graag een ${size[randomSize]} ${drink[randomDrink]}`)

    if (randomSize == 0 && currency >= 2) { //Small Size
        currency -= randomSize + 2
        console.log(`Je hebt nog maar €${currency},-`)
    }
    else if (randomSize == 1 && currency >= 3) { //Medium Size
        currency -= randomSize + 2
        console.log(`Je hebt nog maar €${currency},-`)
    }
    else if (randomSize == 2 && currency >= 4) { //Large Size
        currency -= randomSize + 2
        console.log(`Je hebt nog maar €${currency},-`)
    }
    else {
        console.log("Je hebt niet genoeg!")
    }
    
    light.clear()
    loops.pause(100)
}

function addMoney() { //Je ontvangt €1,-
    currency += 1
    console.log(`Je hebt nu €${currency},-`)
}

input.buttonA.onEvent(ButtonEvent.Click, function () {
    order()
})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    addMoney()
})
