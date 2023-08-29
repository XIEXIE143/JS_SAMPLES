
function processArray(arr, callbalk){
    // forof
    for (const number of arr) {
        callbalk(number)
    }
}
//// No.1------------------------------------

// const number = [1, 2, 3, 4, 5]
// processArray(number, function(number){
//     const answer = number * 2
//     console.log(answer)
// })

// processArray(number, function (number){
//     const answer = (number + 5) * 0.5
//     console.log(answer)
// })

// processArray(number, function (number){
//     const answer = (number - 5) * 0.5
//     console.log(answer)
// })

//// No.2------------------------------------

const numbers = [1, 2, 3, 4, 5]
console.log("--- proccessArray() 1 ---")
processArray(numbers, function (number) {
    //引数を2倍する
    const answer = number * 2
    console.log(answer)
})

console.log("--- proccessArray() 2 ---")
processArray(numbers, function (number) {
    //計算
    const answer = (number + 5) * 0.5
    console.log(answer)
})

console.log("--- proccessArray() 3 ---")
processArray(numbers,  (number) => {
    //計算
    const answer = (number - 5) * 0.1
    console.log(answer)
})

console.log("--- proccessArray() 4 ---")
function calculate(number) {
    const answer = (number - 0.3) * 1.1
    console.log(answer)
}

processArray(numbers, calculate)