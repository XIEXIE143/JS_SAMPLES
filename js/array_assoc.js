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
    {
        id: 4,
        name: "user4",
        email: "user4@test.com",
    },
    {
        id: 5,
        name: "user5",
        email: "user5@test.com",
    },
]
console.log(users)
console.log(users[1].name)

// repeat
for (const user of users) {
    console.log(user)
    var tr = document.createElement("tr")

    var idElement = document.createElement("td")
    var nameElement = document.createElement("td")
    var emailElement = document.createElement("td")

    idElement.innerHTML = user.id
    nameElement.innerHTML = user.name
    emailElement.innerHTML = user.email

    tr.appendChild(idElement)
    tr.appendChild(nameElement)
    tr.appendChild(emailElement)

    document.getElementById("users").appendChild(tr)
}

// while
var money = 1000000
var target = 2000000
var interestRate = 0.01
var year = 0

while (money < target) {
    money *= (1 + interestRate)
    year++
}
console.log(year)
console.log(money)

var rarities = [
    { type: 'N', name: 'ノーマル', probability: 70, },
    { type: 'R', name: 'レア', probability: 20, },
    { type: 'SR', name: 'スーパーレア', probability: 6, },
    { type: 'SSR', name: 'スーパースペシャルレア', probability: 3, },
    { type: 'LR', name: 'レジェンドレア', probability: 1, },
    ]