import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { DataService } from '../core/';
import { History } from '../models/history';

@Component({
  selector: 'app-manage-blogs',
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.css']
})
export class ManageBlogsComponent implements OnInit {

    public dataSource;
    public displayedColumns;
    public selection = new SelectionModel<History>(true,[]);
    public blogForm: any;

    constructor(private dataService: DataService) { }

    getBlogsUnapproved(){
        this.dataService.get('api/blogs')
            .then(response => {
                this.dataSource = new MatTableDataSource<History>(response.blogs);
            });
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
     
        return numSelected === numRows;
    }

     /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    selectionChange(row){
        this.selection.toggle(row);
            this.blogForm = {
                idhistories: this.selection.selected[0].idhistories,
                title: this.selection.selected[0].title,
                body: this.selection.selected[0].body,
                user: this.selection.selected[0].user,
                approved: this.selection.selected[0].approved
            };
        
    }

    ngOnInit() {
        this.getBlogsUnapproved();
        this.displayedColumns = ['select','title','approved'];
    }

    approved(){
        var data = {
            idhistories:this.blogForm.idhistories,
            approved:1};
        this.dataService.put('api/blogs', { blog: data })
            .then(response => {
                this.getBlogsUnapproved();
                this.selection.clear()
            });

    }

}
