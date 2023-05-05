import { Injectable } from '@angular/core';
import { food } from '../types/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  

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
}