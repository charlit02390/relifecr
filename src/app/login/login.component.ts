import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../core/';
import { User } from '../models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    loginForm = this.fb.group({
        userName: ['', Validators.required],
        password: ['',Validators.required]
    });

    
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    constructor(private fb: FormBuilder, 
                private dataService: DataService,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit() {
    }

     onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
         this.loading = true;

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';


        var result;
        this.dataService.post('api/users/login', { user: this.loginForm.value })
            .then(response => {
                if(response.user.userLogged){
                    localStorage.setItem('currentUser', JSON.stringify(this.loginForm.value.userName));
                     this.router.navigate([this.returnUrl]);
                     
                     result = response.user.userLogged  
                }
            });
        this.loading = false;
     }

}
