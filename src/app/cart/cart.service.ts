import { Injectable } from '@angular/core';
import { food } from '../types/food';

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
  increment() {
    if (this.quantity< 10) {
      this.quantity++;
    }
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}