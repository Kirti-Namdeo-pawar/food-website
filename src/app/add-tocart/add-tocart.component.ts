import { Component, Input } from '@angular/core';
import { CartService } from '../cart/cart.service';
//import { CartComponent } from './cart/cart.component';
import { food } from '../types/food';
@Component({
  selector: 'app-add-tocart',
  templateUrl: './add-tocart.component.html',
  styleUrls: ['./add-tocart.component.css']
})
export class AddTocartComponent {
  @Input() dishes:food={} as food;
  quantity: number = 1;//set quantity as 1
constructor(private cartservice:CartService){

}
isIncart:boolean=false;
getCart(){
  return this.cartservice.get();
  
  
}
removefromcart(){
  return this.cartservice.remove(this.dishes);
}
removeItem(index: number) {
  this.cartservice.removeItem(index);
}


  increment() {
    if (this.dishes.quantity< 10) {
      this.dishes.quantity++;
    }
  }

  decrement() {
    if (this.dishes.quantity > 1) {
      this.dishes.quantity--;
    }
  }
}
