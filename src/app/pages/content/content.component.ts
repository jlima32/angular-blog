import { Component, Input, OnInit } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";

@Component({
  selector: 'app-content',
  imports: [SidebarComponent],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.responsive.component.css']
})
export class ContentComponent implements OnInit {

    @Input()
    postTitle:string = "";
    @Input()
    postText:string = "";
    @Input()
    postUser:string = "";
    @Input()
    postDate:string = "";
    @Input()
    postDay:string = "";
    @Input()
    postComments:string = "";
    @Input()
    postCategory:string = "";

  ngOnInit(): void {
  }

}
