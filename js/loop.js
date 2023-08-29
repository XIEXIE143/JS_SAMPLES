
// for
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

const person = {
    name: "Alice",
    age: 30,
    occupation: "Enginner",
}
// for-in
// キーまたはインデックスでリピート
for (const key in person) {
    //もしキーがあれば
    if (person.hasOwnProperty(key)) {
        const value = person[key];
        const result = key + " = " + value
        console.log(result)
    }
}

const drinks = ["コーヒー", "紅茶", "ほうじ茶"]
//for-i
console.log("--- for-i ---")
for (var index = 0; index < drinks.length; index++) {
    const drink = drinks[index];
    console.log(drink) 
}

//for-in
console.log("--- for-in ---")
for (const key in drinks) {
    const drink = drinks[key];
    console.log(key, drink) 
}

//for-of
console.log("--- for-of ---")
for (const drink of drinks) {
    console.log(drink) 
}