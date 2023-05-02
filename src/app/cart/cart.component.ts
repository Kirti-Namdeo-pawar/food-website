import { Component, EventEmitter, Input, Output } from '@angular/core';
import { food } from '../types/food';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {
@Input() dishes:food={} as food;//The @Input() decorator in a child component or directive signifies that the property can receive its value from its parent component.
@Output() newItem=new EventEmitter<food> ();
//@Output() newItemEvent = new EventEmitter<string>();
//@Output() marks a property in a child component as a doorway through which data can travel from the child to the parent.

//The child component uses the @Output() property to raise an event to notify the parent of the change. 


addtomenu(){
  //console.log(this.dishes);
  this.newItem.emit(this.dishes);//from input dish info is usedto pass on clicking to parent compo.from child ie from cart to menu
}
}
