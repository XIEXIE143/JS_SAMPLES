
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
    if (Object.hasOwnProperty.call(person, key)) {
        const value = person[key];
        const result = key + " = " + value
        console.log(result)
    }
}