var counterElement = document.getElementById("counter")
var interval = 1000  //1sec
var timer

//カウンター初期化(Initialize)
var count = 0
counterElement.innerText = count

function start() {
    console.log("Start!!!")
    clearInterval(timer)
    timer = setInterval(() => {
        count++
        counterElement.innerHTML = count
    }, interval);
}

function stop() {
    clearInterval(timer)
}

function reset() {
    console.log("reset")
    count = 0
    counterElement.innerHTML = count
}