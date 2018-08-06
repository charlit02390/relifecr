import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   roles: string[] = ['USA', 'UK', 'Canada'];
   institutions: string[] = ['USA', 'UK', 'Canada'];

   userForm = this.fb.group({
        username: ['', Validators.required],
        password: ['',Validators.required],
        name: [''],
        lastName: [''],
        email: ['', Validators.required],
        role: [''],
        institution:['']
      });
    public btnSubmitLabel;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
        this.btnSubmitLabel = 'Agregar';
  }

}
