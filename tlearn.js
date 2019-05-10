var cart = []
var item = ["Banana", "Apple", "Orange", "Pearl", "Strawberry"]

function Shopping(name, price) {
  this.itemName = name
  this. itemPrice = price
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


function addToCart(item) {
  for (i = 0; i < item.length; i++) {
    cart.push(new Shopping(item[i], getRandomIntInclusive(1, 100)))
    console.log(`${item[i]} has beed added to your cart.`)
  } return cart
}
 
 addToCart(item)
 
 console.log(cart)
 
 function viewCart() {
   var txt = ""
   if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
          txt += cart[i]
   }
   } else {
     console.log("Your shopping cart is empty")
   }
 }
 
 viewCart()