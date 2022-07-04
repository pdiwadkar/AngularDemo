import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() beverage = "Tea";
  @Output() newBeverageEvent = new EventEmitter<string>();
  inputData = '';
  countryData = { "first": "Prasanna", "last": "Diwadkar", "city": "Bangalore" };
  constructor() { }

  ngOnInit(): void {
  }
  addNewBeverage(value: string) {
    this.newBeverageEvent.emit(value);
  }


}
