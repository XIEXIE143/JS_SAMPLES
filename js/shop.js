var calculateBtn = document.getElementById('calculate-btn')

//clickイベント登録（とうろく）
calculateBtn.addEventListener('click', function(event) {
    //クリックされた時の処理（しょり）
    var price = document.getElementById('price').value
    var quantity = document.getElementById('quantity').value
    console.log(price, quantity)

    var message = "入力が間違っています"
    if (!isNaN(price) && !isNaN(quantity)) {
        var totalPrice = price * quantity
        message = totalPrice + "円"
    }
    document.getElementById('result').innerHTML = message
    //処理を止める
    event.preventDefault()
})

// clickイベント追加
const countBtn = document.getElementById('count-btn')
const removeBtn = document.getElementById('remove-btn')

var count = 0
//ハンドラー（イベントが発生した時の処理）
const countHandler = function() {
    count++
    document.getElementById('count').innerHTML = count
}
// Count ボタンがクリックされたら
countBtn.addEventListener('click', countHandler)

// Remove ボタンがクリックされたら
removeBtn.addEventListener('click', function() {
    countBtn.removeEventListener('click', countHandler)
    document.getElementById('count').innerHTML = "Remove"
})

// マウスイベント
const mouseArea = document.getElementById('mouse-area')
mouseArea.addEventListener('mouseover', function() {
    this.innerHTML = "マウスオーバー"
})
mouseArea.addEventListener('mouseout', function() {
    this.innerHTML = "マウスアウト"
})

const mouseMoveArea = document.getElementById('mouse-move-area')
mouseMoveArea.addEventListener('mousemove', function(event) {
    console.log(event.pageX, event.pageY)
})

//キーイベント
const keyHandler = function(event) {
    console.log(event.keyCode)
    document.getElementById('key-code-area').innerHTML = event.keyCode
}
document.addEventListener('keydown', keyHandler)