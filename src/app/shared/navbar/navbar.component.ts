import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private router: Router,
  ){}

  goToUser( id: string ) {

    if(!id ){
      return;
    }

    this.router.navigate(['/user', id])

  }

}
