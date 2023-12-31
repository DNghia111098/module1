const btn = document.querySelectorAll("button")
btn.forEach(function(button,index){
button.addEventListener("click",function(event){{
    let btnItem = event.target
    let product = btnItem.parentElement
    let productImg = product.querySelector("img").src
    let productName = product.querySelector("H1").innerText
    let productPrice = product.querySelector("span").innerText
    addcart(productPrice,productImg,productName)
}})
})

function addcart(productPrice,productImg,productName) {
    let addtr = document.createElement("tr")
    let cartItem = document.querySelectorAll("tbody tr")
    for (let i = 0; i < cartItem.length; i++) {
        let productT = document.querySelectorAll(".title")
        if (productT[i].innerHTML==productName) {
            alert("Sản phẩm này đã có trong giỏ hàng")
            return
        }
    }
    let trcontent = '<tr><td style="display: flex;align-items: center;"><img style="width: 70px;" src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span></p></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    let cartTable = document.querySelector("tbody")
    cartTable.append(addtr)

    carttotal()

}   

function carttotal (){
    let cartItem = document.querySelectorAll("tbody tr")
    // console.log(cartItem)
    let totalC = 0
    for (let i = 0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector("input").value
        let productPrice = cartItem[i].querySelector(".prices").innerHTML
        totalA = inputValue*productPrice*1000
        totalC = totalC + totalA
        totalD = totalC.toLocaleString('de-DE')
    }
    letcartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML = totalD
}

function deleteCart() {
    let cartItem = document.querySelectorAll("tbody tr")
    for (let i = 0; i < cartItem.length; i++) {
        let productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click", function(event){
            let cartDelete = event.target;
            let cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove()
        })
    }
}