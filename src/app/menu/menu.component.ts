import { Component, OnInit } from '@angular/core';
import { food } from '../types/food';

@Component({
  selector: 'app-menu',
  templateUrl:'./menu.component.html', 
  styleUrls: ['./menu.component.css']
})

export class MenuComponent  implements OnInit{
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
isShowing:boolean=true;


recipes:food[]=[{
name:"chicken kathi roll",
image:"assets/foodimages/chickenkathi.jpg",
price:200
},{
  name:"Chicken biryani",
  image:"assets/foodimages/biryani.jpg",
  price:400
},
{
name:"masala dosa",
image:"assets/foodimages/masala dosa.jpg",
price:80
},
{
  name:"paneer tikka masala",
  image:"assets/foodimages/paneer tikka.jpg",
  price:500
},
{
  name:"misal pav",
  image:'assets/foodimages/misal pav.jpg',
price:150
},{
  name:"chef's special sloopy tacos",
  image:"assets/foodimages/tacos.jpg",
  price:400
},{
  name:"gulab jamun",
  image:"assets/foodimages/gulab jamun.jpg",
  price:200
},
{
  name:"dhokla",
  image:"assets/foodimages/dhokla.jpg",
  price:140
},
{
name:"samosa",
image:"assets/foodimages/samosa.jpg",
price:50
},
{
  name:"chocochip icecream",
  image:"assets/foodimages/choco chip icecream.jpg",
  price:150,
},
{name:"vada pav",
image:"assets/foodimages/vada pav.jpg",
price:25,
},
{
  name:"cold coffee",
  image:"assets/foodimages/cold coffee.jpg",
  price:60,
},
]


}

