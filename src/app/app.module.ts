import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { MenuService } from './menu/menu.service';
//import { SearchFilterPipe } from './search-filter.pipe';
//import {RatingModule} from 'primeng/rating';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    CartComponent,
   // SearchFilterPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  //providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
