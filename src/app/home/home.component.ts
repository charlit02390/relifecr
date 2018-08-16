import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public histories;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.getHistories();
    }

    getHistories(){
        this.dataService.get('api/blogs/1')
            .then(response => {
                console.log(response);
                this.histories = response.blogs;
            });
    }

}
