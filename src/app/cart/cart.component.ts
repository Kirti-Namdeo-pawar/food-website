import { Component, Input } from '@angular/core';
import { food } from '../types/food';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {
@Input() dishes:food={} as food;
addtomenu(){
  console.log(this.dishes);
}
}
