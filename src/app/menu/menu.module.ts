import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from './menu.service';
import { MenuComponent } from './menu.component';
import { CartComponent } from '../cart/cart.component';



@NgModule({
  declarations: [MenuComponent,CartComponent],
  imports: [
    CommonModule
  ],
  providers:[MenuService],
  exports:[MenuComponent]
})
export class MenuModule { }
