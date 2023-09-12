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