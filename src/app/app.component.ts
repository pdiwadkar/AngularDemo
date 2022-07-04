import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  posts: any;
  orderDetails = 'First Test Order';
  currentBeverage="Lime Soda";
  beverages =['milk','tea','coffee'];

  addBeverage(newBeverage:string){
    this.beverages.push(newBeverage);
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

}