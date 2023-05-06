import { Component, OnInit } from '@angular/core';
import { food } from '../types/food';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from './menu.service';
@Component({
  selector: 'app-menu',
  templateUrl:'./menu.component.html', 
  styleUrls: ['./menu.component.css']
})

export class MenuComponent  implements OnInit{
  constructor(private menuservice:MenuService)//this will create variable inside MenuService class called dependency injection ie injecting service into compo
{}
recipes:food[]=[];
ngOnInit(): void {
  this.recipes=this.menuservice.getMenu();
}
isShowing:boolean=true;



searchText:string="";//assigned value entered in text box
OnsearchEntered(searchValue:string){//this method is called when the (outPut)custom event is called and get data in form of parameters
this.searchText=searchValue;
console.log(this.searchText)

}

addItem:food[]=[];// it act as empty array stack to hold details of new items to be added in cart
//addtomenu(dishes:food){it is an event to be called 
 // console.log(dishes);this dishes info is passed from cart to menu i.e from child to parent component
//}

}

