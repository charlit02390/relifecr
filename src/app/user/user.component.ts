import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataService } from '../core/';
import { User } from '../models/user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    public roles;
    public institutions;
    public isCollapsed = true;

    userForm = this.fb.group({
        idUsers: 0,
        userName: ['', Validators.required],
        password: ['',Validators.required],
        name: [''],
        lastName: [''],
        email: ['', Validators.required],
        idroles: [0],
        idinstitution:[0]
    });
    public btnSubmitLabel;
    public btnFunctionLabel;

    public dataSource;
    public displayedColumns;
    public selection = new SelectionModel<User>(true,[]);

    constructor(private fb: FormBuilder, private dataService: DataService) { }

    getRoles(){
        this.dataService.get('api/static/roles')
            .then(response => {
                  this.roles = response.roles;
            });
    }

    getInstitutions(){
        this.dataService.get('api/institutions')
            .then(response => {
                  this.institutions = response.institutions;
                  console.log(this.institutions)
            });
    }

    getUsers(){
        this.dataService.get('api/users')
            .then(response => {
                this.dataSource = new MatTableDataSource<User>(response.users);
            });
    }

    ngOnInit() {
        this.getRoles();
        this.getInstitutions();
        this.getUsers();
        this.btnFunctionLabel = 'Agregar Usuario';
        this.btnSubmitLabel = 'Agregar';
        this.displayedColumns = ['select','userName', 'email', 'institution', 'role'];
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
            this.userForm.setValue({
                idUsers: this.selection.selected[0].idusers,
                userName: this.selection.selected[0].username,
                password: this.selection.selected[0].password,
                name: this.selection.selected[0].name,
                lastName: this.selection.selected[0].lastname,
                email: this.selection.selected[0].email,
                idroles: this.selection.selected[0].role,
                idinstitution:this.selection.selected[0].institution
            });
            this.btnFunctionLabel = 'Modificar Usuario';
            this.btnSubmitLabel = 'Modificar';

        }
        else {
            this.resetPage();
        }
        
    }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.resetPage() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    addUser(){
        this.dataService.post('api/users', { user: this.userForm.value })
            .then(response => {
                this.resetPage()
        });
    }

    updateUser(){
        this.dataService.put('api/users', { user: this.userForm.value })
            .then(response => {
                this.resetPage();
        });
    }

    deleteUsers(){
            this.dataService.delete('api/users',{ users: this.selection.selected })
            .then(response => {
                this.resetPage();
            });
    }

    resetPage(){
        this.btnFunctionLabel = 'Agregar Usuario';
        this.btnSubmitLabel = 'Agregar';
        this.selection.clear();
        this.getUsers();
        this.userForm.reset();
        this.isCollapsed = true;
    }

    btnAction(){
        if(this.selection.selected.length === 0){
            this.addUser();
        }
        else {
            this.updateUser();
        }
    }



}
