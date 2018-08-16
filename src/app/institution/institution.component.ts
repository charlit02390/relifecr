import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataService } from '../core/';
import { Institution } from '../models/institution';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css']
})
export class InstitutionComponent implements OnInit {
    institutionForm = this.fb.group({
        idInstitution: 0,
        name: ['', Validators.required],
        phone: ['', Validators.required],
        address: [''],
        country: [''],
        state: [''],
        departament: [''],
        district: ['']
      });
    public btnSubmitLabel;
    public btnFunctionLabel;
    public isCollapsed = true;

    public dataSource;
    public displayedColumns;
    public selection = new SelectionModel<Institution>(true,[]);
  
    constructor(private fb: FormBuilder, private dataService: DataService) { }

    getInstitutions(){
        this.dataService.get('api/institutions')
            .then(response => {
                this.dataSource = new MatTableDataSource<Institution>(response.institutions);
            });
    }

    ngOnInit() {
        this.getInstitutions()
        this.btnFunctionLabel = 'Agregar Institucion';
        this.btnSubmitLabel = 'Agregar';
        this.displayedColumns = ['select','name', 'phone', 'state', 'address'];
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
     
        return numSelected === numRows;
    }

    selectionChange(row){
        this.selection.toggle(row);
        console.log(this.selection.selected[0]);
        var selectionCount = this.selection.selected.length;
        if(selectionCount > 0){
            this.institutionForm.setValue({
                idInstitution: this.selection.selected[0].idinstitution,
                name: this.selection.selected[0].name,
                phone: this.selection.selected[0].phone,
                address: this.selection.selected[0].address,
                country: this.selection.selected[0].country,
                state: this.selection.selected[0].state,
                departament: this.selection.selected[0].departament,
                district:this.selection.selected[0].district
            });
            this.btnFunctionLabel = 'Modificar Institucion';
            this.btnSubmitLabel = 'Modificar';

        }
        else {
            this.resetPage();
        }
        
    }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    resetPage(){
        this.btnFunctionLabel = 'Agregar Institucion';
        this.btnSubmitLabel = 'Agregar';
        this.selection.clear();
        this.getInstitutions();
        this.institutionForm.reset();
        this.isCollapsed = true;
    }

    addInstitution(){
        this.dataService.post('api/institutions', { institution: this.institutionForm.value })
            .then(response => {
                this.resetPage()
        });
    }

    updateInstitution(){
        this.dataService.put('api/institutions', { institution: this.institutionForm.value })
            .then(response => {
                this.resetPage();
        });
    }

    deleteInstitutions(){
            this.dataService.delete('api/institutions',{ institutions: this.selection.selected })
            .then(response => {
                this.resetPage();
            });
    }

     btnAction(){
        if(this.selection.selected.length === 0){
            this.addInstitution();
        }
        else {
            this.updateInstitution();
        }
    }

}
