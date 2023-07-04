function inputUserName() {
    console.log("change!!")
    // user_name 取得（しゅとく）
    var user_name = userNameElement.value
    console.log(user_name)
    var message = "Welcome, " + user_name
    messageElement.innerText = message
}

var userNameElement = document.getElementById('user_name')
var messageElement = document.getElementById('message')