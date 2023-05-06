import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { AddTocartComponent } from './add-tocart/add-tocart.component';


const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: "menu", component: MenuComponent },
  { path: 'home', component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "addtocard", component: AddTocartComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
