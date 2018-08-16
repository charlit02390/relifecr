import { Component, OnInit} from '@angular/core';
import { QuillComponent, QuillDirective, QuillConfigInterface, QuillModulesInterface } from 'ngx-quill-wrapper';
import { DataService } from '../core/';
import { History } from '../models/history';

@Component({
  selector: 'app-makeblog',
  templateUrl: './makeblog.component.html',
  styleUrls: ['./makeblog.component.css']
})
export class MakeblogComponent implements OnInit {
   
    public config: QuillConfigInterface = {
        theme: 'snow',
        readOnly: false
    };
    public blog = new History(0,1,'','',1,0);
   
    constructor(private dataService: DataService) { }

    ngOnInit() {
        
    }

    onValueChange(value: string) {
        this.blog.body = value;
    }

    addBlog(){
        this.dataService.post('api/blogs', { blog: this.blog })
            .then(response => {
                console.log(response);
        });
    }

}
