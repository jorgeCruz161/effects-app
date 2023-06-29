import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loadUsers } from 'src/app/store/actions';

import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  users: User[] = [];
  loading: boolean = false;
  error: any;

  constructor(
    private store: Store<AppState>
  ){}

  ngOnInit(): void {

    this.store.select('users').subscribe( ({ users, loadding, error}) => {
        this.users = users;
        this.loading = loadding;
        this.error = error;
    })

    this.store.dispatch( loadUsers() )

/*     this.userServices.getUsers()
      .subscribe( users => {
        this.users = users;
    })
     */
  }

}
