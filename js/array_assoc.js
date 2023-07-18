var character = {
    id: 1,
    name: "YSE",
    job: "wizard",
    level: 1,
    hp: 15,
    mp: 10,
    exp: 0,
}

console.log(character)
console.log(character.name)
console.log(character.level)

character.exp = 5
console.log(character.exp)

character.weapon = "Bronz Knife"
console.log(character)

// Array Multi
var rows = [
    [90, 78, 82,],
    [62, 70, 68,],
    [68, 88, 72,],
]
console.log(rows)

console.log(rows[1][1])
console.log(rows[2][2])

console.log(rows[0])
console.log(rows[1])
console.log(rows[2])

//User List
var users = [
    {
        id: 1,
        name: "user1",
        email: "user1@test.com",
    },
    {
        id: 2,
        name: "user2",
        email: "user2@test.com",
    },
    {
        id: 3,
        name: "user3",
        email: "user3@test.com",
    },
]
console.log(users)
console.log(users[1].name)

// repeat
for (const user of users) {
   console.log(user) 
   var tr = document.createElement("tr")

   var id = document.createElement("td")
   var name = document.createElement("td")
   var email = document.createElement("td")

}