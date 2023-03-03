var allProducts = document.querySelectorAll(".list li ")
var content = document.querySelector("#div1")
var btn = document.querySelector("#btn")
var total = document.querySelector(".div")
var totalPrice = 0

allProducts.forEach(function (item){
    item.onclick = function(){
      totalPrice += +(item.getAttribute("price"))

      div1.innerHTML += item.textContent + "/"  

      if(div1.innerHTML !=" ") {
        btn.style.display = "block"
        btn.style.background = "gray"
        btn.style.color = " rgb(169, 199, 210"
        btn.style.borderRadius = "40px"
        btn.style.width = "140px"
        btn.style.fontSize ="20px"
      }
    }

})

btn.onclick = function (){
 document.querySelector(".div").innerHTML = (totalPrice)
}