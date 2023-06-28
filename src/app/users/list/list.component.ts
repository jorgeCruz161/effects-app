import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  users: User[] = [];

  constructor(
    public userServices: UserService
  ){

  }

  ngOnInit(): void {

    this.userServices.getUsers()
      .subscribe( users => {
        this.users = users;
    })
    
  }

}
