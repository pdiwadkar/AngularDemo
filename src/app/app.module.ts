import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { ChildComponent } from './components/child/child.component';
import { EmployeeComponent } from './components/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ChildComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
