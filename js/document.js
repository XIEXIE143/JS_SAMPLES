/**
 * Pタグをアウトプットするメソッド
 * anonymous function
 */
const outputP = function(message) {
    var tag = "<p>" + message + "</p>"
    document.write(tag)
}

document.write("<h1>Profile</h1>")

document.write("<h2>Name</h2>")
document.write("<p>YSE</p>")
document.write("<h2>Favorite</h2>")

outputP("旅行")
outputP("ゲーム")
outputP("スポーツ")

// Windowのタイトル
document.title = "My Profile"

// bodyプロパティ
document.body.style.background = "#fffaf0"
document.body.style.color = "#808080"

// image
const imagePath = "images/me.png"
//<img src="xxxx">
var tag = '<img src="' + imagePath + '">'
//リテラル式：バッククォート「 ` 」back quote  反引号
//変数（へんすう）は、${} でかこむ
tag = `<img src="${imagePath}">`
document.write(tag)

// single quote: '
// dobule quote: "
// back quote: ` (日文模式)