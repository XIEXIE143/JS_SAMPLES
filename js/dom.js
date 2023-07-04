// getElementById()
var priceElement = document.getElementById("price")
var price = priceElement.innerText
console.log(price)

// update element by id
var messageElement = document.getElementById("message")
// messageElement.innerText = "<p>Welcome!!</p>"
messageElement.innerHTML = "<p>Welcome!!</p>"

// id = title の Elementを取得（しゅとく）
var titleElement = document.getElementById("title")
titleElement.innerHTML = "サイコロ"

function randomNumber(min, max) {
    //random(): 0 - 1 の Number
    var number = Math.floor(Math.random() * (max + 1 - min)) + min
    return number
}

var number = randomNumber(1, 6)
console.log(number)
document.getElementById("result").innerHTML = number