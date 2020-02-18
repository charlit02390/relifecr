import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged = false;
  labelLogin = 'Registrarse';
  returnUrl: string;

  constructor(public authService: AuthService) { }

    ngOnInit() {
    }

    logout(){
        localStorage.removeItem('currentUser');  
    }

}
