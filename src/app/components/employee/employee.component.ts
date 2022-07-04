import { Component, OnInit } from '@angular/core';
import { PayrollService } from 'src/app/services/payroll.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [PayrollService]
})
export class EmployeeComponent implements OnInit {

  constructor(private eService: PayrollService) { }

  e1: string[] = [];
  e2: string[] = [];
  e3: string[] = [];

  getInfoE1() {
    this.e1 = this.eService.getInfo1();
    
  }
  getInfoE2() {
    this.e2 = this.eService.getInfo2();
  }
  getInfoE3() {
    this.e3 = this.eService.getInfo3();
  }

  ngOnInit(): void {
  }

}
