import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) { }

    ngOnInit() {
    }

    logout(){
        localStorage.removeItem('currentUser');  
    }

}
