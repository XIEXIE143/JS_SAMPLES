var calculateBtn = document.getElementById('calculate-btn')

//clickイベント登録（とうろく）
calculateBtn.addEventListener('click', function(event) {
    //クリックされた時の処理（しょり）
    var price = document.getElementById('price').value
    var quantity = document.getElementById('quantity').value
    console.log(price, quantity)

    var totalPrice = price * quantity

    document.getElementById('result').innerHTML = totalPrice
    //処理を止める
    event.preventDefault()
})