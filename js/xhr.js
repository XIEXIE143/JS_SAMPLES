function getApiURL() {
    const currentURL = location.href
    const fileName = currentURL.substring(currentURL.lastIndexOf('/') + 1)
    const baseURL = currentURL.replace(fileName, '')
    console.log(currentURL)
    console.log(fileName)

    return baseURL
}

const API_URL = getApiURL() + 'data/persons.json'
console.log(API_URL)

const xhr = new XMLHttpRequest()

xhr.open("GET", API_URL, true)

xhr.onload = function () {
    const json = xhr.responseText
    console.log(json)

    const persons = JSON.parse(json)
    console.log(persons)

    for (const person of persons) {
        console.log(person.name)
    }
}

xhr.send()

//======================================-
// if (xhr.status === 200) {
//     const json = xhr.responseText
//     console.log(json)

//     // JSON -> Array & Object
//     const persons = JSON.parse(json)
//     console.log(persons)

//     for (const person of persons) {
//         console.log(person.name)
//     }
// } else {
//     console.log('Error')
// }
// }

// xhr.send()