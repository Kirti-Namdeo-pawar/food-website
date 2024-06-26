// A service is typically a class with a narrow, well-defined purpose. A component is one type of class that can use DI.
import { Injectable } from '@angular/core';

@Injectable({//we can use this service from service container ie here it is components 
  providedIn: 'root'//this menu service is available throughout the project
})
export class MenuService {

  constructor() { }
  getMenu(){
    return[
      {
        name:"chicken kathi roll",
        image:"assets/foodimages/chickenkathi.jpg",
        price:200,
        fav:false,
        quantity:0,
        },{
          name:"Chicken biryani",
          image:"assets/foodimages/biryani.jpg",
          price:400,
          fav:false,
          quantity:0,
        },
        
        {
        name:"masala dosa",
        image:"assets/foodimages/masala dosa.jpg",
        price:80,
        fav:false,
        quantity:0,
        },
        {
          name:"paneer tikka masala",
          image:"assets/foodimages/paneer tikka.jpg",
          price:500,
          fav:false,
          quantity:0,
        },
        {
          name:"misal pav",
          image:'assets/foodimages/misal pav.jpg',
        price:150,
        fav:false, quantity:0,
        },{
          name:"chef's special sloopy tacos",
          image:"assets/foodimages/tacos.jpg",
          price:400,fav:false,
          quantity:0,
        },{
          name:"gulab jamun",
          image:"assets/foodimages/gulab jamun.jpg",
          price:200,
          fav:false,
          quantity:0,
        },
        {
          name:"dhokla",
          image:"assets/foodimages/dhokla.jpg",
          price:140,
          fav:false,
          quantity:0,
        },
        {
        name:"samosa",
        image:"assets/foodimages/samosa.jpg",
        price:50,
        fav:false,
        quantity:0,
        },
        {
          name:"chocochip icecream",
          image:"assets/foodimages/choco chip icecream.jpg",
          price:150,
          fav:false,
          quantity:0,
        },
        {name:"vada pav",
        image:"assets/foodimages/vada pav.jpg",
        price:25,
        fav:false,
        quantity:0,
        },
        {
          name:"cold coffee",
          image:"assets/foodimages/cold coffee.jpg",
          price:60,
          fav:false,
          quantity:0,
        },
    ]
  }
}
