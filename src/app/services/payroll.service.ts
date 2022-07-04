import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  info1: string[] = ['JOhn Mathew', '4828', 'john@abc.com'];
  info2: string[] = ['Ashok Leyland', '83813', 'ashokley@hotmail.com'];
  info3: string[] = ['John Harris', 'A262TR', 'harris@yahoo.co.in'];
  constructor() { }

  getInfo1(): string[] {
    return this.info1;
  }
  getInfo2(): string[] {
    return this.info2;
  }
  getInfo3(): string[] {
    return this.info3;
  }
}
