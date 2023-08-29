//id=message のElementをとる
var messageElement = document.getElementById("message")

function add() {
    messageElement.classList.add("active")
}

function remove() {
    messageElement.classList.remove("active")
}

function toggle() {
    messageElement.classList.toggle("active")
}

function replace() {
    messageElement.classList.replace("message", "frame")
}