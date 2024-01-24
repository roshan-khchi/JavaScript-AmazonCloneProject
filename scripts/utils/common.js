import { cart } from "../../data/cart.js";

export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId, quantity) {

      let matchingItem;

      cart.forEach((item) => {
        if (productId === item.productId) {
          matchingItem = item;
        }
      });

      if (matchingItem) {
        matchingItem.quantity += Number(quantity);
      } else {
        cart.push({
          productId: productId,
          quantity: Number(quantity),
          deliveryOptionsID: '1'
        });   
  }
  saveToStorage()
}

export function updateCartQuantity() {
    let cartQuantity = 0;
      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });
  
  if (cartQuantity > 0) {
     return cartQuantity
  }
  else{ return ''}
}