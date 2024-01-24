import { products } from "../data/products.js";
import { updateCartQuantity } from "./utils/common.js";
//Update quantity of items 

let quantity = document.getElementById('js-order-items')
if (updateCartQuantity() === '') {
    quantity.innerHTML = 0
} else {
    quantity.innerHTML = updateCartQuantity()
}
//get product detail with the help of id 
function getProductDetail(productId) {
    
    products.forEach((product) => {
        let matchingItems;
        if (productId === product.id) {
            matchingItems = product
            console.log(matchingItems)
        }
    });
}