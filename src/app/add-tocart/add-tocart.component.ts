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
}
