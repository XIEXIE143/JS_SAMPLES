var cities = document.getElementsByClassName("city")
console.log(cities)

console.log("--- for of ---")
for (const city of cities){
    console.log(city.innerHTML)
}

console.log("--- for in ---")
for (const index in cities){
    console.log(cities[index].innerHTML)
}

console.log("--- forEach ---")
Array.from(cities).forEach(city =>{
    console.log(city.innerHTML)
})

var menus = document.getElementsByClassName("menus")
console.log(menus)

for (const menu of menus) {
    console.log(menu)
    console.log(menu.children)
    for (const item of menu.children){
        console.log(item.innerHTML)
    }
}

console.log("--- querySelector ---")
var h2 = document.querySelector("h2")
console.log(h2)

var h2 = document.querySelectorAll("h2")
console.log(h2)

console.log("--- .city ---")
var cities = document.querySelectorAll(".city")
console.log(cities)

for (const city of cities){
    console.log(city.innerHTML)
}

console.log("--- ul.menus > li ---")
var items = document.querySelectorAll("ul.meus > li")
console.log(items)