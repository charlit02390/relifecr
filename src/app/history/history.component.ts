import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../core/';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

    @Input() history: any;
    @Input() withComments: any;
    public isCollapsed = true;
    constructor(private dataService: DataService) { }

    ngOnInit() {

    }

}
