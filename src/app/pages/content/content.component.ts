import { Component, Input, OnInit } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data/data';

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
    postComments:number = 0;
    @Input()
    postCategory:string = "";

    private id:string | null ="0"


  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValues(this.id);
  }

  setValues(id:string | null){
    const res = data.filter(post => post.id == id)[0]

    this.postTitle = res.title
    this.postDate = res.date
    this.postUser = res.user
    this.postComments = res.comments
    this.postCategory = res.category
    this.postText = res.text

  }

}
