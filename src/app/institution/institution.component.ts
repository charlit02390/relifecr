import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css']
})
export class InstitutionComponent implements OnInit {
    institutionForm = this.fb.group({
        name: ['', Validators.required],
        address: [''],
        country: [''],
        state: [''],
        departament: [''],
        district: ['']
      });
    public btnSubmitLabel;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
      this.btnSubmitLabel = 'Agregar';
  }

}
