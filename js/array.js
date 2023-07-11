var drinks = ["コーヒー", "紅茶", "ほうじ茶"]
console.log(drinks)

var selectDrink = drinks[1]
console.log(selectDrink)

var count = drinks.length
console.log(count)

console.log("--- push() ---")
drinks.push("オレンジジュース")
console.log(drinks)

console.log("--- pop() ---")
drinks.pop()
console.log(drinks)

console.log("--- shift() ---")
drinks.shift()
console.log(drinks)

console.log("--- unshift() ---")
drinks.unshift("アイスコーヒー")
console.log(drinks)

console.log("--- splice() ---")
drinks.splice(1, 0, "オレンジジュース")
console.log(drinks)

drinks.splice(2, 1)
console.log(drinks)

console.log("--- データの更新 ---")
drinks[2] = "ウーロン茶"
console.log(drinks)