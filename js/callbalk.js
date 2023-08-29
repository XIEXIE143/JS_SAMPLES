
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

const drinks = ["コーヒー", "紅茶", "ほうじ茶"]
// forEach
// arrow function
console.log("--- arrow function ---")
drinks.forEach(drink => {
    console.log(drink)
});

// anonymous function
console.log("--- anonymous function ---")
drinks.forEach(function(drink) {
    console.log(drink)
});

// function
console.log("--- function ---")
function showDrink(drink) {
    console.log(drink)
}
drinks.forEach(showDrink)

const items = [
    { id: 1, name: "コーヒー", price: 300},
    { id: 2, name: "紅茶", price: 350},
    { id: 3, name: "ほうじ茶", price: 300},
] 

//forEach
items.forEach(item => {
    //リテラル式
    //バッククォート（back quote）： Shift + @ 
    const message = `${item.name}の価格は${item.price}円です`
    console.log(message)
});

//map
var newItems = items.map(function(item) {
    //結果を返す
    return {
        id: item.id,
        name: item.name,
        price: item.price,
        withoutTaxPrice: Math.floor(item.price / 1.1),
    }
})
console.log(newItems)

//filter
console.log("--- filter() ---")
var newItems = items.filter(item => item.price > 300)
console.log(newItems)


//reduce
console.log("--- reduce() ---")
var rarities = [
    { type: "N", name: "Normal", probability: 70 },
    { type: "R", name: "Rare", probability: 20 },
    { type: "SR", name: "Super Rare", probability: 6 },
    { type: "SSR", name: "Super Special Rare", probability: 3 },
    { type: "LR", name: "Legend", probability: 1 },
];

var totalProbability = rarities.reduce(function(sum, rarity) {
    return sum + rarity.probability;
}, 0);
console.log(totalProbability)