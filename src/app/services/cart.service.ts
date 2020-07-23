import { Product } from './../core/models/product';
import { CartItem } from './../core/models/cart-item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cartItems: CartItem[] = [];

  constructor() { }

  addToCart(product: Product) {

    let addedProduct = this.cartItems.find(item => item.product.id == product.id);

    if (addedProduct) addedProduct.quantity++;
    else {
      let carItem: CartItem = {
        quantity: 1,
        product: product
      }
      this.cartItems.push(carItem);
    }
  }

  removeFromCart(productId: number) {

    let cartItem = this.cartItems.find(item => item.product.id == productId);
    if (cartItem) {
      this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
    }
  }

  list(): CartItem[] {
    return this.cartItems;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((a, b) => a + (b.product.price * b.quantity), 0);
  }
  getTotalQuantity(): number {
    return this.cartItems.reduce((a, b) => a + b.quantity, 0);
  }
}
