import { Injectable } from '@angular/core';
import { food } from '../types/food';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  quantity: number = 1;//set quantity as 1
   cart:food[]=[];
   constructor() { }
   add(dish:food){
    console.log(dish);
 this.cart.push(dish);
   }
   get(){
    return this.cart;
   }
  remove(dish:food){
    this.cart=this.cart.filter(d=>d!=dish)
  } 
  removeItem(index: number){
    this.cart.splice(index, 1);

  }
 
 
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();


  increment(dish:food) {
    const cartItems = this.cartItemsSubject.getValue();
    const index = cartItems.findIndex(i => i.name === dish.name);
    if (index !== -1) {
      cartItems[index].quantity++;
      this.cartItemsSubject.next(cartItems);
    }
  }

  decrement(dish:food) {
    const cartItems = this.cartItemsSubject.getValue();
    const index = cartItems.findIndex(i => i.name=== dish.name);
    if (index !== -1 && cartItems[index].quantity > 1) {
      cartItems[index].quantity--;
      this.cartItemsSubject.next(cartItems);
    }
  }
}

