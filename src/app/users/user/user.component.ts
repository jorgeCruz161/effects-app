import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loadUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  user: User;
  loading: boolean = false;
  error: any;

    constructor( 
      private router: ActivatedRoute,
      private store: Store<AppState>
     ){}

     ngOnInit(): void {

      this.store.select('user').subscribe( ({ user, loadding, error }) => {
        this.user = user;
        this.loading = loadding;
        this.error = error;
      })

       this.router.params.subscribe( ({id}) =>{

          this.store.dispatch( loadUser({id: id}) )
        
       })
     }

}
