// オブジェクト
var person = {
    name : "John",
    age : 30,
    city : "NY",
}

console.log(person)

const jsonString = JSON.stringify(person)
console.log(jsonString)

person = JSON.parse(jsonString)
console.log(person)