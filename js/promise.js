
function getPerson(resolve) {
    setTimeout(() => {
        var person = {
            name: "John",
            age: 30,
            city: "NY",
        }
        console.log('Promise run')
        
        resolve(person)
    }, 2000)
}


function showPerson(person) {
    document.getElementById('name').innerHTML = person.name
    document.getElementById('age').innerHTML = person.age
    document.getElementById('city').innerHTML = person.city
}


const promise = new Promise((resolve, reject) => {
    getPerson(resolve)
})


promise.then((person) => {
    showPerson(person)
}).catch((error) => {
    console.log(error)
})