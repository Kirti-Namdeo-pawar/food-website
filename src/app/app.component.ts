import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodwebsite';
  enteredSearchValue:string="";//entered value is contained
  @Output() searchChanged= new EventEmitter<string>();//result of entered value
  OnSearchChanged(){//custom event to get search result
    this.searchChanged.emit(this.enteredSearchValue)
  }
}
