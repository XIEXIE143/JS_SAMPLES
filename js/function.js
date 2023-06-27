function calculateTotalPrice(price, amount) {
    var result = price * amount;
    return result;
}

var totalPrice = calculateTotalPrice(200, 5);
console.log(totalPrice);

// anonymous function(無名関数：むめいかんすう）
const hello = function(name) {
    var message = name + "さん、ようこそ！";
    return message;
}

var message = hello("YSE");
console.log(message)

// arrow function（アロー関数）
const hello2 = (name) => {
    var message = name + "さん、ようこそ！";
    return message;
}

message = hello2("YSE");
console.log(message)

// HTMLの読み込みが完了（かんりょう）したら、実行（じっこう）
window.onload = function() {
    console.log("東京")
    var message = hello2("Test1");
    console.log(message)
}
console.log("横浜")

message = hello2("Test2");
console.log(message)