import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  dtOptions: any = {};
  dtOptions2: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private service: UsersService) {

  }
  allUsers: any = [];
  ngOnInit(): void {
    this.users();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      dom: 'frtpiB',
      buttons: {
        buttons: [
          {
            extend: 'excel',
            titleAttr: 'Excel',
            title: 'FlightData',
            className: 'excelButton'

          },


        ]
      },

      responsive: true

    };
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  users(): void {
    this.service
      .users()
      .subscribe((response: any) => {
        this.allUsers = response;
        this.dtTrigger.next(this.dtOptions);
      });
  }

}
