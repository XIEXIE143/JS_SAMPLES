var calculateBtn = document.getElementById('calculate-btn')


calculateBtn.addEventListener('click', function(event) {
    
    var price = document.getElementById('price').value
    var quantity = document.getElementById('quantity').value
    console.log(price, quantity)

    var totalPrice = price * quantity

    document.getElementById('result').innerHTML = totalPrice
    
    event.preventDefault()
})